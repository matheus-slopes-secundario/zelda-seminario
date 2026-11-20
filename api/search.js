// Função para remover acentos e deixar tudo minúsculo, facilitando a comparação
function normalize(str) {
  if (!str) return "";
  return str.normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .trim();
}

module.exports = async (req, res) => {
  if (req.method !== "POST" && req.method !== "GET") {
    return res.status(405).json({ status: "error", message: "Use POST ou GET" });
  }

  const { QDRANT_URL, QDRANT_API_KEY, QDRANT_COLLECTION } = process.env;
  if (!QDRANT_URL || !QDRANT_API_KEY || !QDRANT_COLLECTION) {
    return res.status(500).json({ status: "error", message: "Variáveis de ambiente ausentes" });
  }

  const src = req.method === "GET" ? req.query : (req.body || {});
  const query = (src.query || "").trim();
  const limit = Math.min(parseInt(src.limit, 10) || 10, 50);

  if (!query || query.length < 2) {
    return res.status(400).json({ status: "error", message: "Campo 'query' obrigatório (2+ caracteres)" });
  }

  const baseUrl = QDRANT_URL.replace(/\/$/, "");

  // Busca Híbrida Padrão: Puxa 30 resultados para ter margem de manobra no ranking
  const body = {
    prefetch: [
      { query: { text: query, model: "qdrant/bm25" }, using: "bm25", limit: 30 },
      { query: { text: query, model: "intfloat/multilingual-e5-small" }, using: "dense", limit: 30 }
    ],
    query: { fusion: "rrf" },
    limit: 30, // Puxa mais do que o limite final para podermos reordenar
    with_payload: true
  };

  try {
    const response = await fetch(`${baseUrl}/collections/${QDRANT_COLLECTION}/points/query`, {
      method: "POST",
      headers: { "api-key": QDRANT_API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const data = await response.json();
    
    if (!response.ok) {
      return res.status(response.status).json({ 
        status: "error", 
        message: "Qdrant recusou a busca", 
        details: data 
      });
    }

    let points = data.result?.points || [];
    const queryNormalized = normalize(query);

    // 🧠 A MÁGICA DO "BOOST" ACONTECE AQUI (No JavaScript, sem erro no Qdrant)
    points = points.map(p => {
      const tituloNormalizado = normalize(p.payload.titulo);
      let boost = 0;

      // Se o título for EXATAMENTE igual à pesquisa, ganha um super boost
      if (tituloNormalizado === queryNormalized) {
        boost = 100; 
      } 
      // Se o título CONTIVER a pesquisa, ganha um boost médio
      else if (tituloNormalizado.includes(queryNormalized)) {
        boost = 50;
      }

      return {
        id: p.id,
        score: p.score + boost, // Soma o boost na pontuação original
        payload: p.payload
      };
    });

    // Reordena a lista com base na nova pontuação (que inclui o nosso boost)
    points.sort((a, b) => b.score - a.score);

    // Corta a lista para retornar apenas o limite que o usuário pediu
    const finalPoints = points.slice(0, limit);

    return res.status(200).json({ 
      status: "ok", 
      query, 
      total: finalPoints.length, 
      results: finalPoints 
    });

  } catch (error) {
    return res.status(500).json({ status: "error", message: "Erro de rede", details: error.message });
  }
};
