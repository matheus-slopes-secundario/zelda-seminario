const CORRECTIONS = [
  // 1. Master Sword — título errado
  {
    oldTitle: "Pedra Mestra",
    newTitle: "Espada Mestra (Master Sword)",
    tipo: "item",
    text: "A Espada Mestra (Master Sword) é uma espada lendária que só o Herói do Tempo pode empunhar. Está cravada no pedestal do Templo do Tempo. Ao puxá-la, Link dorme por 7 anos e desperta como adulto, pronto para enfrentar Ganondorf. É a arma mais forte do jogo, também conhecida como Blade of Evil's Bane (Lâmina Aniquiladora do Mal)."
  },
  // 2. Templo do Tempo — texto citava "Pedra Mestra"
  {
    oldTitle: "Templo do Tempo",
    newTitle: "Templo do Tempo",
    tipo: "local",
    text: "O Templo do Tempo está dentro do Castelo de Hyrule e guarda o pedestal da Espada Mestra (Master Sword) e a Câmara dos Sábios. Ao remover a Espada Mestra, Link abre a porta para o Salão dos Sábios e viaja 7 anos no futuro usando a Ocarina do Tempo."
  },
  // 3. Domínio Gerudo — título errado
  {
    oldTitle: "Domínio Gerudo",
    newTitle: "Vale Gerudo",
    tipo: "local",
    text: "O Vale Gerudo fica no Deserto Gerudo, a oeste de Hyrule. Sede das ladras Gerudo e de Ganondorf. Possui a Fortaleza Gerudo, a Vila Gerudo e o Templo do Espírito. Só é acessível após aprender a Canção do Vento."
  },
  // 4. Gohma — texto citava "Labirinto Deku"
  {
    oldTitle: "Gohma",
    newTitle: "Gohma",
    tipo: "chefe",
    text: "Gohma é a chefe de Dentro da Grande Árvore Deku, a primeira masmorra de Ocarina of Time. É uma aranha gigante com um olho vulnerável. Link deve atordoá-la com o Estilingue antes de atacá-la com a espada. Derruba o primeiro Coração de Cristal."
  },
  // 5. Lago Hylia — citava "Masmorra do Interior do Peixe" (local errado)
  {
    oldTitle: "Lago Hylia",
    newTitle: "Lago Hylia",
    tipo: "local",
    text: "O Lago Hylia é um grande lago ao sudeste de Hyrule. Possui um laboratório de cientistas, o Templo da Água submerso e uma área de pesca com troféu. É um local importante para a jornada de Link adulto."
  },
  // 6. Ruto — citava "Zora's Sapphire" em inglês
  {
    oldTitle: "Ruto",
    newTitle: "Ruto",
    tipo: "personagem",
    text: "Princesa Ruto é a filha do Rei Zora, líder dos Zora no Domínio Zora. Ela é a Sábia da Água e fica noiva de Link simbolicamente ao receber a Safira dos Zoras. Ajuda a abrir o Templo da Água."
  },
  // 7. Bongo Bongo — citava "Botas de Hover"
  {
    oldTitle: "Bongo Bongo",
    newTitle: "Bongo Bongo",
    tipo: "chefe",
    text: "Bongo Bongo é o chefe do Templo das Sombras. É uma criatura com duas mãos e um olho gigante, invisível sem a Lente da Verdade. Link usa as Botas Flutuantes para atravessar o tambor e atacar as mãos. Guarda o Medalhão das Sombras."
  },
  // 8. Barinade — citava "Interior do Grande Peixe"
  {
    oldTitle: "Barinade",
    newTitle: "Barinade",
    tipo: "chefe",
    text: "Barinade é o chefe da Barriga do Lorde Jabu-Jabu, terceira masmorra. É uma anêmona elétrica com tentáculos e órgãos. Link usa o Bumerangue para cortar as conexões e depois ataca o núcleo. Guarda o Terceiro Coração de Cristal."
  },
  // 9. Floresta Kokiri — citava "Labirinto Deku"
  {
    oldTitle: "Floresta Kokiri",
    newTitle: "Floresta Kokiri",
    tipo: "local",
    text: "A Floresta Kokiri é o lar dos Kokiri e da Grande Árvore Deku. É onde Link cresce como criança. Lá ficam a Vila Kokiri e a Grande Árvore Deku, que abriga a primeira masmorra do jogo. Crianças nunca envelhecem aqui."
  }
];

function makePoint({ text, titulo, tipo }) {
  return {
    id: crypto.randomUUID(),
    vector: {
      dense: { text, model: "intfloat/multilingual-e5-small" },
      bm25:  { text, model: "qdrant/bm25" }
    },
    payload: { text, titulo, tipo, jogo: "Ocarina of Time" }
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
  if (!QDRANT_URL || !QDRANT_API_KEY || !QDRANT_COLLECTION) {
    return res.status(500).json({ status: "error", message: "Env vars ausentes" });
  }

  const baseUrl = QDRANT_URL.replace(/\/$/, "");
  const headers = { "api-key": QDRANT_API_KEY, "Content-Type": "application/json" };

  try {
    // PASSO 1: garantir índice em "titulo" (necessário para filtros de delete)
    const idx = await fetch(`${baseUrl}/collections/${QDRANT_COLLECTION}/index?wait=true`, {
      method: "PUT",
      headers,
      body: JSON.stringify({ field_name: "titulo", field_schema: "keyword" })
    });
    // 400 = índice já existe; OK
    if (!idx.ok && idx.status !== 400) {
      const d = await idx.json();
      return res.status(idx.status).json({
        status: "error",
        message: "Falha ao criar índice em 'titulo'",
        details: d
      });
    }

    const report = [];

    // PASSO 2: para cada correção, apaga (título antigo E novo, p/ idempotência) + reinsere
    for (const c of CORRECTIONS) {
      // 2a. Apaga registros com o título antigo OU o novo (evita duplicar se já foi corrigido)
      const delFilter = {
        should: [
          { key: "titulo", match: { value: c.oldTitle } },
          { key: "titulo", match: { value: c.newTitle } }
        ]
      };
      const del = await fetch(
        `${baseUrl}/collections/${QDRANT_COLLECTION}/points/delete?wait=true`,
        { method: "POST", headers, body: JSON.stringify({ filter: delFilter }) }
      );
      if (!del.ok) {
        const d = await del.json();
        report.push({ titulo: c.newTitle, status: "erro_delete", details: d });
        continue;
      }

      // 2b. Reinsere o registro corrigido
      const ins = await fetch(
        `${baseUrl}/collections/${QDRANT_COLLECTION}/points?wait=true`,
        {
          method: "PUT",
          headers,
          body: JSON.stringify({
            points: [makePoint({ text: c.text, titulo: c.newTitle, tipo: c.tipo })]
          })
        }
      );
      const insData = await ins.json();
      report.push({
        titulo: c.newTitle,
        status: ins.ok ? "ok" : "erro_insert",
        details: ins.ok ? undefined : insData
      });
    }

    const okCount = report.filter(r => r.status === "ok").length;
    return res.status(200).json({
      status: "ok",
      message: `${okCount}/${CORRECTIONS.length} correções aplicadas`,
      report
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};
