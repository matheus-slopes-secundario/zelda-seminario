module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ status: "error", message: "Use POST" });
  }

  const adminToken = req.headers["x-admin-token"];
  if (!adminToken || adminToken !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ status: "error", message: "Não autorizado" });
  }

  const url = process.env.QDRANT_URL;
  const apiKey = process.env.QDRANT_API_KEY;
  const collection = process.env.QDRANT_COLLECTION;

  if (!url || !apiKey || !collection) {
    return res.status(500).json({
      status: "error",
      message: "Variáveis de ambiente ausentes (QDRANT_URL, QDRANT_API_KEY ou QDRANT_COLLECTION)"
    });
  }

  const baseUrl = url.replace(/\/$/, "");

  const config = {
    vectors: {
      dense: {
        size: 384,
        distance: "Cosine"
      }
    },
    sparse_vectors: {
      bm25: {
        modifier: "idf"
      }
    }
  };

  try {
    const check = await fetch(`${baseUrl}/collections/${collection}`, {
      method: "GET",
      headers: { "api-key": apiKey }
    });

    if (check.ok) {
      return res.status(409).json({
        status: "already_exists",
        message: `Coleção "${collection}" já existe. Nada foi alterado.`
      });
    }

    const response = await fetch(`${baseUrl}/collections/${collection}`, {
      method: "PUT",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(config)
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        status: "error",
        message: "Qdrant recusou a criação",
        details: data
      });
    }

    return res.status(200).json({
      status: "ok",
      message: `Coleção "${collection}" criada com sucesso`,
      collection,
      config
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Erro de rede",
      details: error.message
    });
  }
};
