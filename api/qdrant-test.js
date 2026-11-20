
module.exports = async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).json({
      status: "error",
      message: "Método não permitido"
    });
  }

  const url = process.env.QDRANT_URL;
  const apiKey = process.env.QDRANT_API_KEY;

  if (!url || !apiKey) {
    return res.status(500).json({
      status: "error",
      message: "Variáveis de ambiente não configuradas"
    });
  }

  try {
    const response = await fetch(
      `${url.replace(/\/$/, "")}/collections`,
      {
        method: "GET",
        headers: {
          "api-key": apiKey
        }
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        status: "error",
        message: "Qdrant recusou a conexão",
        details: data.status?.error || "Erro desconhecido"
      });
    }

    return res.status(200).json({
      status: "ok",
      message: "Conexão com Qdrant estabelecida!",
      collections: data.result.collections.map(
        collection => collection.name
      )
    });

  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Não foi possível conectar ao Qdrant"
    });
  }
};
