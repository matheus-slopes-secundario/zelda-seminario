function normalize(str) {
  if (!str) return "";
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

module.exports = async (req, res) => {
  if (req.method !== "POST" && req.method !== "GET") return res.status(405).json({ message: "Use POST ou GET" });
  const { QDRANT_URL, QDRANT_API_KEY, QDRANT_COLLECTION } = process.env;
  
  const src = req.method === "GET" ? req.query : (req.body || {});
  const query = (src.query || "").trim();
  const limit = Math.min(parseInt(src.limit, 10) || 10, 50);

  if (!query || query.length < 2) return res.status(400).json({ message: "Query inválida" });

  const baseUrl = QDRANT_URL.replace(/\/$/, "");
  
  // Pede 200 itens ao Qdrant (o nosso banco todo) para garantir que o Link entre
  const body = {
    prefetch: [
      { query: { text: query, model: "qdrant/bm25" }, using: "bm25", limit: 200 },
      { query: { text: query, model: "intfloat/multilingual-e5-small" }, using: "dense", limit: 200 }
    ],
    query: { fusion: "rrf" },
    limit: 200, 
    with_payload: true
  };

  try {
    const response = await fetch(`${baseUrl}/collections/${QDRANT_COLLECTION}/points/query`, {
      method: "POST",
      headers: { "api-key": QDRANT_API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const data = await response.json();
    if (!response.ok) return res.status(response.status).json({ status: "error", details: data });

    let points = data.result?.points || [];
    const queryNormalized = normalize(query);

    // O BOOST CIRÚRGICO
    points = points.map(p => {
      const tituloNormalizado = normalize(p.payload.titulo);
      let boost = 0;

      if (tituloNormalizado === queryNormalized) {
        boost = 1000; // Match exato (ex: "Link" ou "Canção do Tempo")
      } else if (tituloNormalizado.startsWith(queryNormalized)) {
        boost = 500;  // Começa com (ex: "Link" dentro de "Link Kokiri")
      } else if (tituloNormalizado.includes(queryNormalized)) {
        boost = 50;   // Contém (ex: "Dark Link")
      }

      return { id: p.id, score: p.score + boost, payload: p.payload };
    });

    // Reordena com base no novo score e corta para o limite desejado
    points.sort((a, b) => b.score - a.score);
    const finalPoints = points.slice(0, limit);

    return res.status(200).json({ status: "ok", query, total: finalPoints.length, results: finalPoints });
  } catch (error) {
    return res.status(500).json({ status: "error", details: error.message });
  }
};
