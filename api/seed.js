const SEED_DATA = [
  // ── Personagens ─────────────────────────────────
  {
    titulo: "Link",
    tipo: "personagem",
    text: "Link é o herói da série The Legend of Zelda. Em Ocarina of Time, ele é uma criança Kokiri que descobre ser o Herói do Tempo. Ele viaja entre o passado e o futuro usando a Ocarina do Tempo para impedir que Ganondorf domine Hyrule."
  },
  {
    titulo: "Zelda / Sheik",
    tipo: "personagem",
    text: "A Princesa Zelda de Hyrule se disfarça como Sheik, um misterioso sobrevivente Sheikah, após Ganondorf tomar o castelo. Ela ajuda Link no futuro com ensinamentos e revela sua identidade verdadeira no Templo do Tempo."
  },
  {
    titulo: "Ganondorf",
    tipo: "personagem",
    text: "Ganondorf é o líder dos Gerudo e principal antagonista de Ocarina of Time. Ele busca a Triforce para dominar Hyrule e, ao conseguir a Triforce do Poder, transforma-se na forma monstruosa Ganon. Ele sequestra Zelda e governa Hyrule por sete anos."
  },
  {
    titulo: "Navi",
    tipo: "personagem",
    text: "Navi é a fada companheira de Link em Ocarina of Time. A Grande Árvore Deku a envia para guiar Link em sua jornada. Ela dá dicas, alerta sobre inimigos e aponta alvos com o botão Z-targeting."
  },
  {
    titulo: "Saria",
    tipo: "personagem",
    text: "Saria é a melhor amiga de Link na Floresta Kokiri. Ela é a Sábia da Floresta, e presenteia Link com a Ocarina da Floresta (que se torna Ocarina do Tempo). Aparece no Templo da Floresta como Sage."
  },
  {
    titulo: "Darunia",
    tipo: "personagem",
    text: "Darunia é o líder dos Goron na Cidade Goron, na Montanha da Morte. Irmão juramentado de Link, ele é o Sábio do Fogo e ajuda a abrir o Templo do Fogo. Seu filho é Link Goron."
  },
  {
    titulo: "Ruto",
    tipo: "personagem",
    text: "Princesa Ruto é a filha do Rei Zora, líder dos Zora na Caverna Zora. Ela é a Sábia da Água e fica noiva de Link simbolicamente ao receber o Zora's Sapphire. Ajuda a abrir o Templo da Água."
  },
  {
    titulo: "Impa",
    tipo: "personagem",
    text: "Impa é a ama Sheikah da Princesa Zelda. Ela foge do Castelo de Hyrule com Zelda quando Ganondorf ataca. É a Sábia das Sombras e guarda o Templo das Sombras em Kakariko."
  },
  {
    titulo: "Nabooru",
    tipo: "personagem",
    text: "Nabooru é a líder dos Gerudo e a Sábia do Espírito. Ela se rebela contra Ganondorf e é capturada por ele, sendo resgatada por Link no Templo do Espírito no Deserto Gerudo."
  },
  {
    titulo: "Rauru",
    tipo: "personagem",
    text: "Rauru é o Sábio da Luz e guardião do Templo do Tempo. Ele é responsável por manter Link em sono por sete anos na Câmara dos Sábios, até que ele esteja pronto para enfrentar Ganondorf adulto."
  },
  {
    titulo: "Epona",
    tipo: "personagem",
    text: "Epona é a égua de Link em Ocarina of Time. Filhote em Lon Lon Ranch, ela é criada por Malon. Link a resgata de Ingo no rancho e a usa para viajar por Hyrule mais rápido, além de saltar cercas em minigames."
  },
  {
    titulo: "Malon",
    tipo: "personagem",
    text: "Malon é a filha do fazendeiro Talon em Lon Lon Ranch. Ela cuida de Epona e dá a Link a Garrafa de Leite de graça. Canta a Canção de Epona, que permite chamar a égua em qualquer lugar de Hyrule."
  },
  {
    titulo: "Ingo",
    tipo: "personagem",
    text: "Ingo é o trabalhador de Lon Lon Ranch que toma o rancho de Talon quando Ganondorf sobe ao poder. Ele treina Epona para corridas e é derrotado por Link em uma corrida de cavalos para recuperar a égua."
  },

  // ── Locais ─────────────────────────────────────
  {
    titulo: "Floresta Kokiri",
    tipo: "local",
    text: "A Floresta Kokiri é o lar dos Kokiri e da Grande Árvore Deku. É onde Link cresce como criança. Lá ficam a Vila Kokiri, a Árvore Deku e a entrada do Labirinto Deku. Crianças nunca envelhecem aqui."
  },
  {
    titulo: "Castelo de Hyrule",
    tipo: "local",
    text: "O Castelo de Hyrule é a sede do governo de Hyrule e lar da Família Real. Possui o Pátio do Castelo, a Vila de Hyrule ao redor, e o Templo do Tempo nos fundos, onde estão a Pedra Mestra e a Câmara dos Sábios."
  },
  {
    titulo: "Templo do Tempo",
    tipo: "local",
    text: "O Templo do Tempo está dentro do Castelo de Hyrule e guarda a Pedra Mestra e a Câmara dos Sábios. Ao remover a Pedra Mestra, Link abre a porta para o Salão dos Sábios e viaja 7 anos no futuro usando a Ocarina do Tempo."
  },
  {
    titulo: "Cidade Goron",
    tipo: "local",
    text: "A Cidade Goron fica dentro da Montanha da Morte. É o lar dos Goron, criaturas rochosas lideradas por Darunia. Abriga a entrada do Templo do Fogo e a Masmorra Dodongo's Cavern, de onde os Goron extraem comida."
  },
  {
    titulo: "Montanha da Morte",
    tipo: "local",
    text: "A Montanha da Morte é um vulcão ativo a nordeste de Hyrule. Lar dos Goron e do Dragão Volvagia no Templo do Fogo. A nuvem de fumaça cobre Death Mountain Trail, uma trilha perigosa cheia de rochas rolantes."
  },
  {
    titulo: "Caverna Zora",
    tipo: "local",
    text: "A Caverna Zora é o domínio dos Zora, no Rio Zora. Possui a Fonte da Fada Zora que cura. Leva ao Templo da Água, dentro do qual está a entrada para o Mundo Zora e a Masmorra Lord Jabu-Jabu."
  },
  {
    titulo: "Domínio Gerudo",
    tipo: "local",
    text: "O Domínio Gerudo fica no Deserto Gerudo, a oeste de Hyrule. Sede das ladras Gerudo e de Ganondorf. Possui a Fortaleza Gerudo, a Vila Gerudo e o Templo do Espírito. Só é acessível após aprender a Canção do Vento."
  },
  {
    titulo: "Vila Kakariko",
    tipo: "local",
    text: "A Vila Kakariko é uma vila ao pé da Montanha da Morte, lar dos Sheikah. Possui o Poço do Poço (entrada para o Templo das Sombras), o Cemitério e a Casa de Impa. É também onde Link aprende a Canção do Sol."
  },
  {
    titulo: "Lago Hylia",
    tipo: "local",
    text: "O Lago Hylia é um grande lago ao sudeste de Hyrule. Possui um laboratório de cientistas, o Templo da Água submerso e a entrada para a Masmorra do Interior do Peixe. É onde Link pode pescar por um troféu."
  },
  {
    titulo: "Planície de Hyrule",
    tipo: "local",
    text: "A Planície de Hyrule é a grande área central que conecta todas as regiões. Nela ficam o Castelo de Hyrule, o Lon Lon Ranch, e o ponto de partida para a Floresta Kokiri, Montanha da Morte, Lago Hylia e Deserto Gerudo."
  },

  // ── Itens ──────────────────────────────────────
  {
    titulo: "Ocarina do Tempo",
    tipo: "item",
    text: "A Ocarina do Tempo é um instrumento sagrado azul dado pela Princesa Zelda a Link. Originalmente era a Ocarina da Floresta de Saria. Permite tocar canções que viajam no tempo, abrem templos, invocam Epona e mudam dia e noite."
  },
  {
    titulo: "Pedra Mestra",
    tipo: "item",
    text: "A Pedra Mestra é uma espada lendária que só o Herói do Tempo pode empunhar. Está cravada no Templo do Tempo. Ao puxá-la, Link dorme por 7 anos e desperta como adulto, pronto para enfrentar Ganondorf. É a espada mais forte do jogo."
  },
  {
    titulo: "Triforce",
    tipo: "item",
    text: "A Triforce é uma relíquia sagrada deixada pelas Deusas Douradas. Dividida em três triângulos: Poder, Sabedoria e Coragem. Ganondorf obtém o Poder, Zelda a Sabedoria, e Link a Coragem. Quando unida, realiza desejos."
  },
  {
    titulo: "Escudo Hylian",
    tipo: "item",
    text: "O Escudo Hylian é um escudo de madeira com o brasão de Hyrule. Protege Link de projéteis e ataques frontais. Pode ser comprado na Loja do Bazar de Hyrule e é essencial contra os guardas do Castelo e nos templos."
  },
  {
    titulo: "Bomba",
    tipo: "item",
    text: "As Bombas são itens explosivos usados para destruir paredes rachadas, inimigos e obstáculos. Link pode carregá-las e arremessá-las. Existem também Bombchus, bombas-aranha que andam em linha reta e sobem paredes."
  },
  {
    titulo: "Arco e Flecha",
    tipo: "item",
    text: "O Arco e Flecha é uma arma à distância encontrada no Templo da Floresta. Link atira flechas que podem ser combinadas com fogo (Flecha de Fogo) para queimar obstáculos e inimigos. Necessário contra chefes como Phantom Ganon."
  },

  // ── Chefes ─────────────────────────────────────
  {
    titulo: "Gohma",
    tipo: "chefe",
    text: "Gohma é a chefe do Labirinto Deku, a primeira masmorra de Ocarina of Time. É uma aranha gigante com um olho vulnerável. Link deve atordoá-la com o Estilingue antes de atacá-la com a espada. Derruba o primeiro Coração de Cristal."
  },
  {
    titulo: "Rei Dodongo",
    tipo: "chefe",
    text: "O Rei Dodongo é o chefe da Caverna Dodongo, segunda masmorra. É um Dodongo gigante que cospe fogo. Link deve jogar bombas em sua boca quando ele abrir, ou bombas em suas costas. Guarda o Segundo Coração de Cristal."
  },
  {
    titulo: "Barinade",
    tipo: "chefe",
    text: "Barinade é o chefe do Interior do Grande Peixe (Jabu-Jabu), terceira masmorra. É uma anêmona elétrica com tentáculos e órgãos. Link usa o Bumerangue para cortar as conexões e depois ataca o núcleo. Guarda o Terceiro Coração de Cristal."
  },
  {
    titulo: "Phantom Ganon",
    tipo: "chefe",
    text: "Phantom Ganon é o chefe do Templo da Floresta, primeira masmorra adulta. É um clone espectral de Ganondorf que atira bolas de energia. Link deve rebater as bolas com a espada e atacá-lo quando ele cai. Guarda o Medalhão da Floresta."
  },
  {
    titulo: "Volvagia",
    tipo: "chefe",
    text: "Volvagia é o chefe do Templo do Fogo. É um dragão de lava que emerge de buracos no chão. Link usa o Martelo Megaton para acertá-lo na cabeça quando ela aparece, e depois ataca com a espada. Guarda o Medalhão do Fogo."
  },
  {
    titulo: "Morpha",
    tipo: "chefe",
    text: "Morpha é o chefe do Templo da Água. É uma ameba gigante que controla tentáculos de água. Link usa o Gancho Longo para arrancar o núcleo de dentro da água e atacá-lo. Guarda o Medalhão da Água."
  },
  {
    titulo: "Bongo Bongo",
    tipo: "chefe",
    text: "Bongo Bongo é o chefe do Templo das Sombras. É uma criatura com duas mãos e um olho gigante, invisível sem a Lente da Verdade. Link usa as Botas de Hover para atravessar o tambor e atacar as mãos. Guarda o Medalhão das Sombras."
  },
  {
    titulo: "Twinrova",
    tipo: "chefe",
    text: "Twinrova é a chefe do Templo do Espírito. É a fusão de Koume e Kotake, as bruxas Gerudo. Ataca com fogo e gelo. Link usa Flechas de Fogo e Gelo para atingir a irmã oposta e depois ataca o núcleo. Guarda o Medalhão do Espírito."
  },
  {
    titulo: "Ganon",
    tipo: "chefe",
    text: "Ganon é a forma final de Ganondorf após ser derrotado no Castelo de Hyrule. É um porco monstruoso com duas espadas. Link usa a Pedra Mestra para atordoá-lo e a Flecha de Luz para finalizá-lo. É o chefe final de Ocarina of Time."
  },

  // ── Canções ────────────────────────────────────
  {
    titulo: "Canção do Tempo",
    tipo: "cancao",
    text: "A Canção do Tempo é a canção ensinada por Zelda a Link. Toca notas que abrem a Porta do Tempo, ativam blocos de tempo e permitem viajar entre passado e futuro. É a canção mais icônica de Ocarina of Time."
  },
  {
    titulo: "Canção de Epona",
    tipo: "cancao",
    text: "A Canção de Epona foi composta por Malon e ensinada a Link. Ao tocá-la, Epona vem correndo até Link de qualquer lugar de Hyrule, desde que ele já tenha resgatado a égua em Lon Lon Ranch."
  },
  {
    titulo: "Canção do Sol",
    tipo: "cancao",
    text: "A Canção do Sol é tocada em frente à lápide especial no Cemitério de Kakariko para invocar a luz do sol. Necessária para abrir a entrada do Templo das Sombras e resolver puzzles no Poço do Poço."
  },
  {
    titulo: "Canção do Vento",
    tipo: "cancao",
    text: "A Canção do Vento é ensinada por Sheik em Ocarina of Time. Ao tocá-la, um teletransporte leva Link para o Deserto Gerudo ou para a Vila Kakariko, dependendo do local onde é tocada. Essencial para atravessar o deserto."
  },
  {
    titulo: "Canção de Saria",
    tipo: "cancao",
    text: "A Canção de Saria é a canção da amizade entre Saria e Link. Toca notas que abrem a entrada do Templo da Floresta e permitem que Link se comunique com Saria de qualquer lugar de Hyrule."
  }
];

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

  // Monta todos os pontos num único array para upsert em lote
  const points = SEED_DATA.map((item, i) => ({
    id: crypto.randomUUID(),
    vector: {
      dense: {
        text: item.text,
        model: "intfloat/multilingual-e5-small"
      },
      bm25: {
        text: item.text,
        model: "qdrant/bm25"
      }
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
    const response = await fetch(
      `${baseUrl}/collections/${QDRANT_COLLECTION}/points?wait=true`,
      {
        method: "PUT",
        headers: {
          "api-key": QDRANT_API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ points })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        status: "error",
        message: "Qdrant recusou o upsert em lote",
        details: data
      });
    }

    return res.status(200).json({
      status: "ok",
      message: `${points.length} pontos inseridos em ${QDRANT_COLLECTION}`,
      inserted: points.length,
      collection: QDRANT_COLLECTION
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Erro de rede",
      details: error.message
    });
  }
};
