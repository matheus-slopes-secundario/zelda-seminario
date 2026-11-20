module.exports = async (req, res) => {
  // 1. Aceita apenas POST
  if (req.method !== "POST") {
    return res.status(405).json({ status: "error", message: "Use POST" });
  }

  // 2. Autenticação do admin
  const adminToken = req.headers["x-admin-token"];
  if (!adminToken || adminToken !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ status: "error", message: "Não autorizado" });
  }

  // 3. Variáveis de ambiente
  const { QDRANT_URL, QDRANT_API_KEY, QDRANT_COLLECTION } = process.env;
  if (!QDRANT_URL || !QDRANT_API_KEY || !QDRANT_COLLECTION) {
    return res.status(500).json({
      status: "error",
      message: "Variáveis de ambiente ausentes (QDRANT_URL, QDRANT_API_KEY ou QDRANT_COLLECTION)"
    });
  }

  // 4. Validação do corpo
  const { text, payload = {}, id } = req.body || {};
  if (!text || typeof text !== "string" || text.trim().length < 3) {
    return res.status(400).json({
      status: "error",
      message: "Campo 'text' obrigatório (string com 3+ caracteres)"
    });
  }

  const baseUrl = QDRANT_URL.replace(/\/$/, "");
  const pointId = id || crypto.randomUUID();

  // 5. Corpo da requisição de upsert com inferência no servidor
  const body = {
    points: [
      {
        id: pointId,
        // O Qdrant gera os dois vetores a partir do texto:
        // - "dense": embedding semântico (384 dims, multilíngue)
        // - "bm25": vetor esparso BM25 (termos + frequências)
        vector: {
          dense: {
            text: text,
            model: "intfloat/multilingual-e5-small"
          },
          bm25: {
            text: text,
            model: "qdrant/bm25"
          }
        },
        payload: { text, ...payload }
      }
    ]
  };

  try {
    const response = await fetch(
      `${baseUrl}/collections/${QDRANT_COLLECTION}/points?wait=true`,
      {
        method: "PUT",
        headers: {
          "api-key": QDRANT_API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        status: "error",
        message: "Qdrant recusou o upsert",
        details: data
      });
    }

    return res.status(200).json({
      status: "ok",
      message: "Ponto inserido no Qdrant com inferência no servidor",
      id: pointId,
      collection: QDRANT_COLLECTION
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Erro de rede ao chamar o Qdrant",
      details: error.message
    });
  }
};
