const ITEMS = require("../data/ocarina-of-time.json");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ status: "error", message: "Use POST" });
  }

  const adminToken = req.headers["x-admin-token"];
  if (!adminToken || adminToken !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ status: "error", message: "Não autorizado" });
  }

  const { QDRANT_URL, QDRANT_API_KEY, QDRANT_COLLECTION } = process.env;
  if (!QDRANT_URL || !QDRANT_API_KEY || !QDRANT_COLLECTION) {
    return res.status(500).json({ status: "error", message: "Env vars ausentes" });
  }

  const baseUrl = QDRANT_URL.replace(/\/$/, "");
  const headers = { "api-key": QDRANT_API_KEY, "Content-Type": "application/json" };

  const points = ITEMS.map((item, i) => ({
    id: crypto.randomUUID(),
    vector: {
      dense: { text: item.text, model: "intfloat/multilingual-e5-small" },
      bm25:  { text: item.text, model: "qdrant/bm25" }
    },
    payload: {
      text: item.text,
      titulo: item.titulo,
      tipo: item.tipo,
      jogo: "Ocarina of Time",
      ordem: i
    }
  }));

  try {
    const r = await fetch(
      `${baseUrl}/collections/${QDRANT_COLLECTION}/points?wait=true`,
      {
        method: "PUT",
        headers,
        body: JSON.stringify({ points })
      }
    );
    const data = await r.json();
    if (!r.ok) {
      return res.status(r.status).json({ status: "error", message: "Qdrant recusou", details: data });
    }
    return res.status(200).json({
      status: "ok",
      message: `${points.length} pontos inseridos em ${QDRANT_COLLECTION}`,
      inserted: points.length,
      total_json: ITEMS.length
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};
