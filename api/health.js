
module.exports = (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).json({
      status: "error",
      message: "Método não permitido"
    });
  }

  return res.status(200).json({
    status: "ok",
    message: "Hyrule Semantic Search - Backend funcionando!",
    timestamp: new Date().toISOString()
  });
};
