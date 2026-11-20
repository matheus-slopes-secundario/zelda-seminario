module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ message: "Use POST" });
  if (req.headers["x-admin-token"] !== process.env.ADMIN_TOKEN) return res.status(401).json({ message: "Não autorizado" });

  const { QDRANT_URL, QDRANT_API_KEY, QDRANT_COLLECTION } = process.env;
  const baseUrl = QDRANT_URL.replace(/\/$/, "");
  const headers = { "api-key": QDRANT_API_KEY, "Content-Type": "application/json" };

  try {
    const check = await fetch(`${baseUrl}/collections/${QDRANT_COLLECTION}`, { headers });
    if (check.ok) return res.status(200).json({ status: "ok", message: "Coleção já existe." });

    const response = await fetch(`${baseUrl}/collections/${QDRANT_COLLECTION}`, {
      method: "PUT",
      headers,
      body: JSON.stringify({
        vectors: { dense: { size: 384, distance: "Cosine" } },
        sparse_vectors: { bm25: { modifier: "idf" } }
      })
    });
    
    if (!response.ok) return res.status(500).json(await response.json());
    return res.status(200).json({ status: "ok", message: "Coleção criada com sucesso." });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
