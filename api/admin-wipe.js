module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ status: "error", message: "Use POST" });
  }

  const adminToken = req.headers["x-admin-token"];
  if (!adminToken || adminToken !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ status: "error", message: "Não autorizado" });
  }

  const { QDRANT_URL, QDRANT_API_KEY, QDRANT_COLLECTION } = process.env;
  const baseUrl = QDRANT_URL.replace(/\/$/, "");
  const headers = { "api-key": QDRANT_API_KEY, "Content-Type": "application/json" };

  try {
    const r = await fetch(
      `${baseUrl}/collections/${QDRANT_COLLECTION}/points/delete?wait=true`,
      {
        method: "POST",
        headers,
        body: JSON.stringify({ filter: { must: [] } })
      }
    );
    const data = await r.json();
    if (!r.ok) {
      return res.status(r.status).json({ status: "error", message: "Falha no wipe", details: data });
    }
    return res.status(200).json({
      status: "ok",
      message: `Coleção ${QDRANT_COLLECTION} esvaziada`,
      details: data.result
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};
