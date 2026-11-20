const CORRECTED_SWORD_TEXT =
  "A Espada Mestra (Master Sword) é uma espada lendária que só o Herói do Tempo pode empunhar. Está cravada no pedestal do Templo do Tempo. Ao puxá-la, Link dorme por 7 anos e desperta como adulto, pronto para enfrentar Ganondorf. É a arma mais forte do jogo, também conhecida como Blade of Evil's Bane (Lâmina Aniquiladora do Mal).";

const CORRECTED_TEMPLE_TEXT =
  "O Templo do Tempo está dentro do Castelo de Hyrule e guarda o pedestal da Espada Mestra (Master Sword) e a Câmara dos Sábios. Ao remover a Espada Mestra, Link abre a porta para o Salão dos Sábios e viaja 7 anos no futuro usando a Ocarina do Tempo.";

function makePoint({ text, titulo, tipo, extra = {} }) {
  return {
    id: crypto.randomUUID(),
    vector: {
      dense: { text, model: "intfloat/multilingual-e5-small" },
      bm25:  { text, model: "qdrant/bm25" }
    },
    payload: { text, titulo, tipo, jogo: "Ocarina of Time", ...extra }
  };
}

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
    // 1. Apaga os dois registros errados
    const del = await fetch(`${baseUrl}/collections/${QDRANT_COLLECTION}/points/delete?wait=true`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        filter: {
          should: [
            { key: "titulo", match: { value: "Pedra Mestra" } },
            { key: "titulo", match: { value: "Templo do Tempo" } }
          ]
        }
      })
    });
    if (!del.ok) {
      const d = await del.json();
      return res.status(del.status).json({ status: "error", message: "Falha ao deletar", details: d });
    }

    // 2. Reinsere os dois corrigidos
    const points = [
      makePoint({
        text: CORRECTED_SWORD_TEXT,
        titulo: "Espada Mestra (Master Sword)",
        tipo: "item",
        extra: { aliases: ["Master Sword", "Espada Mestra", "Blade of Evil's Bane"] }
      }),
      makePoint({
        text: CORRECTED_TEMPLE_TEXT,
        titulo: "Templo do Tempo",
        tipo: "local"
      })
    ];

    const ins = await fetch(`${baseUrl}/collections/${QDRANT_COLLECTION}/points?wait=true`, {
      method: "PUT",
      headers,
      body: JSON.stringify({ points })
    });
    const insData = await ins.json();
    if (!ins.ok) {
      return res.status(ins.status).json({ status: "error", message: "Falha ao inserir", details: insData });
    }

    return res.status(200).json({
      status: "ok",
      message: "Correção aplicada: 'Pedra Mestra' → 'Espada Mestra (Master Sword)'",
      deleted: 2,
      inserted: 2
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};
