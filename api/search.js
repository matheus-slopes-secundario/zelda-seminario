// api/search.js
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

  // Fórmula: (score_fundido) + (bônus se o payload 'titulo' corresponder exatamente à query)
  // O bônus é 2.0, um valor forte o suficiente para subir o título exato ao topo.
  const formulaQuery = {
    "sum": [
      "$score",
      {
        "mult": [
          2.0, // Força do bônus
          {
            "key": "titulo", // Campo de payload (NÃO é um vetor)
            "match": { "value": query } // Condição de igualdade exata
          }
        ]
      }
    ]
  };

  const body = {
    prefetch: [
      {
        query: { text: query, model: "qdrant/bm25" },
        using: "bm25", // Usa o vetor esparso BM25 padrão
        limit: limit * 3
      },
      {
        query: { text: query, model: "intfloat/multilingual-e5-small" },
        using: "dense", // Usa o vetor denso
        limit: limit * 3
      }
    ],
    query: { formula: formulaQuery },
    limit: limit,
    with_payload: true
  };

  try {
    const response = await fetch(
      `${baseUrl}/collections/${QDRANT_COLLECTION}/points/query`,
      {
        method: "POST",
        headers: { "api-key": QDRANT_API_KEY, "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }
    );

    const data = await response.json();
    if (!response.ok) {
      return res.status(response.status).json({ status: "error", message: "Qdrant recusou a busca", details: data });
    }

    const points = (data.result?.points || []).map(p => ({
      id: p.id,
      score: p.score,
      payload: p.payload
    }));

    return res.status(200).json({ status: "ok", query, total: points.length, results: points });
  } catch (error) {
    return res.status(500).json({ status: "error", message: "Erro de rede", details: error.message });
  }
};
