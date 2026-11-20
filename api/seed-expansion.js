const EXPANSION_DATA = [
  // ── Personagens Secundários e Figuras Importantes ──
  { titulo: "Mido", tipo: "personagem", text: "Mido é o líder autoproclamado dos Kokiri na Floresta Kokiri. Ele é inicialmente arrogante e hostil com Link, mas amadurece ao longo da jornada. É visto como o garoto mais velho da vila." },
  { titulo: "Kaepora Gaebora", tipo: "personagem", text: "Kaepora Gaebora é uma coruja sábia que aparece em pontos-chave da jornada de Link, oferecendo conselhos e, por vezes, transporte. Acredita-se que ele seja a reencarnação de Rauru, o Sábio da Luz." },
  { titulo: "Rei Zora", tipo: "personagem", text: "O Rei Zora, também conhecido como Rei Zora De Bon XVI, é o monarca dos Zora e pai da Princesa Ruto. Ele governa o Domínio Zora e é congelado no Templo da Água quando adulto." },
  { titulo: "Talon", tipo: "personagem", text: "Talon é o preguiçoso proprietário do Rancho Lon Lon. Ele é o pai de Malon e, após ser derrotado por Ingo em uma queda de braço, perde o rancho. Gosta de dormir e de leite." },
  { titulo: "Ingo", tipo: "personagem", text: "Ingo é o mal-humorado trabalhador do Rancho Lon Lon. Ele toma o controle do rancho de Talon quando Ganondorf sobe ao poder. É derrotado por Link em uma corrida de cavalos para recuperar Epona." },
  { titulo: "Malon", tipo: "personagem", text: "Malon é a gentil filha de Talon. Ela cuida de Epona e do rancho. Ensina a Canção de Epona para Link e o presenteia com uma Garrafa de Leite. É a versão de Ocarina of Time da personagem Malon da série." },
  { titulo: "Dampé", tipo: "personagem", text: "Dampé é o coveiro da Vila Kakariko. Ele aparece como um fantasma quando adulto, e guia Link por uma tumba labirinto onde ele pode encontrar o Gancho (Hookshot)." },
  { titulo: "Biggoron", tipo: "personagem", text: "Biggoron é um Goron gigante que vive no topo da Montanha da Morte. Ele é um lendário ferreiro que, após uma longa sequência de trocas, forja a Espada Biggoron para Link." },
  { titulo: "Koume e Kotake", tipo: "personagem", text: "Koume e Kotake são as bruxas gêmeas Gerudo, mestras de Ganondorf. Elas se fundem para formar a chefe Twinrova no Templo do Espírito. Koume usa fogo e Kotake usa gelo." },
  { titulo: "Rauru", tipo: "personagem", text: "Rauru é o Sábio da Luz e o guardião do Templo do Tempo. Ele é o responsável por manter Link em sono por sete anos e por guiar os outros Sábios. Pode se transformar em Kaepora Gaebora." },

  // ── Raças e Facções ──
  { titulo: "Kokiri", tipo: "raca", text: "Os Kokiri são uma raça de crianças que habitam a Floresta Kokiri. Eles nunca envelhecem e têm uma fada guardiã. Acreditam que qualquer um que saia da floresta morrerá." },
  { titulo: "Goron", tipo: "raca", text: "Os Goron são uma raça de criaturas rochosas que vivem na Montanha da Morte. Eles se alimentam de pedras e são conhecidos por sua força e resistência ao calor. Seu líder é Darunia." },
  { titulo: "Zora", tipo: "raca", text: "Os Zora são uma raça aquática de humanoides-peixe que vivem no Domínio Zora. Eles são liderados pelo Rei Zora e são conhecidos por sua elegância e habilidades aquáticas." },
  { titulo: "Gerudo", tipo: "raca", text: "As Gerudo são uma raça de mulheres guerreiras que vivem no Vale Gerudo. Um homem nasce entre elas a cada cem anos. Ganondorf é o rei Gerudo deste ciclo." },
  { titulo: "Sheikah", tipo: "raca", text: "Os Sheikah são uma raça misteriosa que serviu a Família Real de Hyrule. São conhecidos por sua lealdade, agilidade e conhecimento de segredos. Impa é uma Sheikah." },
  { titulo: "Hylian", tipo: "raca", text: "Os Hylian são a raça dominante em Hyrule, caracterizada por orelhas pontudas e traços humanos. A Família Real e a maioria dos habitantes das cidades são Hylian." },

  // ── Locais Adicionais ──
  { titulo: "Bosque Perdido", tipo: "local", text: "O Bosque Perdido é uma floresta labiríntica a oeste da Floresta Kokiri. É fácil se perder nele, a menos que se siga a música de Saria. Abriga a entrada para a Prado da Floresta Sagrada." },
  { titulo: "Prado da Floresta Sagrada", tipo: "local", text: "O Prado da Floresta Sagrada é uma área tranquila dentro do Bosque Perdido, onde Saria costuma esperar por Link. É o local de entrada para o Templo da Floresta." },
  { titulo: "Caverna Dodongo", tipo: "local", text: "A Caverna Dodongo é uma masmorra na Montanha da Morte, segunda do jogo. Os Goron extraem pedras dela para se alimentar. Foi invadida por monstros por ordem de Ganondorf." },
  { titulo: "Barriga do Lorde Jabu-Jabu", tipo: "local", text: "A Barriga do Lorde Jabu-Jabu é a terceira masmorra do jogo. Link entra na divindade peixe para resgatar a Princesa Ruto e recuperar a Safira dos Zoras." },
  { titulo: "Trilha da Montanha da Morte", tipo: "local", text: "A Trilha da Montanha da Morte é um caminho perigoso que leva à Cidade Goron e ao topo da montanha. É cheia de rochas rolantes e inimigos. O acesso é liberado com a Carta de Zelda." },
  { titulo: "Rio Zora", tipo: "local", text: "O Rio Zora é um curso d'água que conecta o Lago Hylia ao Domínio Zora. É habitado por Zoras e leva à Fonte Zora e à entrada para a Barriga de Jabu-Jabu." },
  { titulo: "Fonte Zora", tipo: "local", text: "A Fonte Zora é uma caverna sagrada no Domínio Zora, onde vive o Lorde Jabu-Jabu. É um local de worship e a entrada para a masmorra da barriga do peixe." },
  { titulo: "Cemitério de Kakariko", tipo: "local", text: "O Cemitério de Kakariko fica atrás da Vila Kakariko. Abriga o Poço do Poço, a entrada para o Templo das Sombras, e a lápide onde a Canção do Sol é aprendida." },
  { titulo: "Poço do Poço", tipo: "local", text: "O Poço do Poço é uma masmorra opcional sob o Cemitério de Kakariko. É acessível apenas quando criança e contém a Lente da Verdade e vários segredos." },
  { titulo: "Fortaleza Gerudo", tipo: "local", text: "A Fortaleza Gerudo é uma prisão no Vale Gerudo. Link deve resgatar os quatro carpinteiros capturados pelas Gerudo para obter acesso ao Templo do Espírito. É cheia de guardas." },
  { titulo: "Templo do Espírito", tipo: "local", text: "O Templo do Espírito é a quinta masmorra adulta, localizada no Deserto Gerudo. É o covil de Twinrova. Link precisa da Canção do Vento para viajar até lá." },
  { titulo: "Templo da Floresta", tipo: "local", text: "O Templo da Floresta é a primeira masmorra adulta, no Prado da Floresta Sagrada. Abriga o chefe Phantom Ganon e concede o Arco das Fadas." },
  { titulo: "Templo do Fogo", tipo: "local", text: "O Templo do Fogo é a segunda masmorra adulta, dentro da Montanha da Morte. É o covil do dragão Volvagia. Link obtém o Martelo Megaton aqui." },
  { titulo: "Templo da Água", tipo: "local", text: "O Templo da Água é a terceira masmorra adulta, submerso no Lago Hylia. É um templo complexo que exige mudar o nível da água. Abriga Morpha e o mini-chefe Dark Link." },
  { titulo: "Templo das Sombras", tipo: "local", text: "O Templo das Sombras é a quarta masmorra adulta, acessível pelo Poço do Poço no Cemitério de Kakariko. É um local escuro e assustador, cheio de fantasmas e da criatura Dead Hand." },
  { titulo: "Castelo de Ganon", tipo: "local", text: "O Castelo de Ganon é a fortaleza final de Ganondorf, construída sobre as ruínas do Castelo de Hyrule. Link deve escalar a torre para enfrentar Ganondorf e, depois, Ganon." },
  { titulo: "Reino Sagrado", tipo: "local", text: "O Reino Sagrado é o local onde a Triforce repousa, acessível através da Porta do Tempo no Templo do Tempo. Quando Ganondorf o toca, ele se transforma no Reino do Mal." },

  // ── Itens e Equipamentos ──
  { titulo: "Estilingue das Fadas", tipo: "item", text: "O Estilingue das Fadas é a primeira arma à distância de Link criança, encontrada na Grande Árvore Deku. Dispara Sementes Deku e é essencial para atordoar Gohma." },
  { titulo: "Bumerangue", tipo: "item", text: "O Bumerangue é encontrado na Barriga do Lorde Jabu-Jabu. Ele paralisa inimigos e traz itens de volta para Link. É essencial para derrotar Barinade." },
  { titulo: "Gancho (Hookshot)", tipo: "item", text: "O Gancho (Hookshot) é encontrado na tumba de Dampé. Permite a Link se pendurar em superfícies de madeira e se puxar para lugares distantes. É uma ferramenta de travessia essencial." },
  { titulo: "Gancho Longo (Longshot)", tipo: "item", text: "O Gancho Longo (Longshot) é uma versão aprimorada do Gancho, encontrada no Templo da Água. Tem o dobro do alcance e é necessário para completar a masmorra e enfrentar Morpha." },
  { titulo: "Martelo Megaton", tipo: "item", text: "O Martelo Megaton é encontrado no Templo do Fogo. É uma arma poderosa e pesada, usada para quebrar rochas e derrotar Volvagia. É um dos itens mais icônicos do jogo." },
  { titulo: "Lente da Verdade", tipo: "item", text: "A Lente da Verdade é um item mágico encontrado no Poço do Poço. Quando equipada, consome magic power para revelar objetos e inimigos invisíveis, como fantasmas e o caminho no Templo das Sombras." },
  { titulo: "Botas de Ferro", tipo: "item", text: "As Botas de Ferro são encontradas na Caverna de Gelo. Elas fazem Link afundar na água e no chão, permitindo caminhar no fundo de lagos e resistir a ventos fortes. Essenciais no Templo da Água." },
  { titulo: "Botas Flutuantes", tipo: "item", text: "As Botas Flutuantes (Hover Boots) são encontradas no Templo das Sombras. Permitem a Link caminhar no ar por um curto período de tempo. São escorregadias em solo firme." },
  { titulo: "Túnica Goron", tipo: "item", text: "A Túnica Goron é uma veste resistente ao fogo, dada a Link por Darunia. Permite que ele entre em áreas vulcânicas, como o Templo do Fogo, sem sofrer dano." },
  { titulo: "Túnica Zora", tipo: "item", text: "A Túnica Zora permite que Link respire debaixo d'água e nade mais rápido. É dada pelo Rei Zora após ele ser descongelado. Essencial para explorar o Templo da Água." },
  { titulo: "Escudo Deku", tipo: "item", text: "O Escudo Deku é um escudo de madeira barato, comprado na loja da Floresta Kokiri. É o primeiro escudo de Link e quebra facilmente, mas é melhor que nada no início." },
  { titulo: "Escudo Hylian", tipo: "item", text: "O Escudo Hylian é um escudo de metal resistente, com o brasão de Hyrule. Pode ser comprado na Cidade do Castelo de Hyrule ou encontrado no Cemitério de Kakariko. É o escudo padrão de Link adulto." },
  { titulo: "Escudo de Espelho", tipo: "item", text: "O Escudo de Espelho é o escudo mais forte do jogo, encontrado no Templo do Espírito. Ele reflete ataques mágicos de volta para o inimigo." },
  { titulo: "Espada Kokiri", tipo: "item", text: "A Espada Kokiri é a primeira espada de Link, encontrada na Floresta Kokiri. É uma espada curta e fraca, mas essencial para o início da jornada." },
  { titulo: "Espada Biggoron", tipo: "item", text: "A Espada Biggoron é a espada mais forte que Link pode obter, forjada por Biggoron através de uma longa sequência de trocas de itens. Não quebra e causa dano massivo." },
  { titulo: "Arco das Fadas (Fairy Bow)", tipo: "item", text: "O Arco das Fadas é a arma à distância de Link adulto, encontrado no Templo da Floresta. Dispara flechas e pode ser combinado com fogo, gelo ou luz para efeitos especiais." },
  { titulo: "Ocarina das Fadas", tipo: "item", text: "A Ocarina das Fadas é o primeiro instrumento de Link, dado por Saria. É usada para tocar as canções iniciais do jogo até ser substituída pela Ocarina do Tempo." },
  { titulo: "Pedaço de Coração", tipo: "item", text: "Os Pedaços de Coração são fragmentos espalhados por Hyrule. Coletar quatro deles aumenta a vida máxima de Link em um coração. Existem 36 no jogo, totalizando 9 corações extras." },
  { titulo: "Aranha Dourada (Gold Skulltula)", tipo: "item", text: "As Aranhas Douradas são criaturas escondidas por todo o jogo. Ao derrotar 10, 20, 30, 40, 50 e 100 delas na Casa das Skulltulas em Kakariko, Link recebe recompensas como a Bolsa de Adulto e Pedaços de Coração." },

  // ── Mini-Chefes ──
  { titulo: "Lizalfos", tipo: "mini-chefe", text: "Lizalfos são répteis guerreiros que aparecem na Caverna Dodongo. Eles atacam com espadas e são ágeis. São os primeiros mini-chefes do jogo." },
  { titulo: "Grande Octo", tipo: "mini-chefe", text: "O Grande Octo é um mini-chefe na Barriga do Lorde Jabu-Jabu. Ele bloqueia o caminho e deve ser derrotado com o Bumerangue para atordoá-lo e atacá-lo com a espada." },
  { titulo: "Dançarina de Chamas (Flare Dancer)", tipo: "mini-chefe", text: "A Dançarina de Chamas é um mini-chefe do Templo do Fogo. Ela é uma criatura de fogo que gira e ataca Link. Deve ser derrotada com o Martelo Megaton ou com o Gancho." },
  { titulo: "Mão Morta (Dead Hand)", tipo: "mini-chefe", text: "A Mão Morta é uma criatura assustadora que aparece no Poço do Poço e no Templo das Sombras. Ela agarra Link e o puxa para o subsolo. A Lente da Verdade é útil para encontrá-la." },
  { titulo: "Dark Link", tipo: "mini-chefe", text: "Dark Link é uma cópia sombria de Link, encontrada no Templo da Água. Ele imita os movimentos de Link e é um dos inimigos mais desafiadores do jogo. A espada Biggoron é eficaz contra ele." },
  { titulo: "Punho de Ferro (Iron Knuckle)", tipo: "mini-chefe", text: "Os Punhos de Ferro são inimigos gigantes e blindados que aparecem no Templo do Espírito e no Castelo de Ganon. Ataques normais não funcionam; é preciso usar bombas ou o Martelo Megaton para quebrar sua armadura." },

  // ── Canções Adicionais ──
  { titulo: "Canção de Ninar da Zelda (Zelda's Lullaby)", tipo: "cancao", text: "A Canção de Ninar da Zelda é ensinada por Impa. É a primeira canção que Link aprende e é usada para abrir o Domínio Zora, acessar a Cidade Goron e resolver puzzles em templos." },
  { titulo: "Minueto da Floresta", tipo: "cancao", text: "O Minueto da Floresta é ensinado por Sheik. Teletransporta Link para o Prado da Floresta Sagrada, em frente ao Templo da Floresta." },
  { titulo: "Bolero do Fogo", tipo: "cancao", text: "O Bolero do Fogo é ensinado por Sheik. Teletransporta Link para a Montanha da Morte, em frente ao Templo do Fogo." },
  { titulo: "Serenata da Água", tipo: "cancao", text: "A Serenata da Água é ensinada por Sheik. Teletransporta Link para o Lago Hylia, em frente ao Templo da Água." },
  { titulo: "Noturno das Sombras", tipo: "cancao", text: "O Noturno das Sombras é ensinado por Sheik. Teletransporta Link para o Cemitério de Kakariko, em frente à entrada do Templo das Sombras." },
  { titulo: "Réquiem do Espírito", tipo: "cancao", text: "O Réquiem do Espírito é ensinado por Sheik. Teletransporta Link para o Deserto Gerudo, em frente ao Templo do Espírito." },
  { titulo: "Prelúdio da Luz", tipo: "cancao", text: "O Prelúdio da Luz é ensinado por Sheik. Teletransporta Link para o Templo do Tempo, no Castelo de Hyrule." },
  { titulo: "Canção das Tempestades", tipo: "cancao", text: "A Canção das Tempestades é aprendida no Moinho de Kakariko quando criança. Ela invoca chuva, o que é útil para resolver puzzles e para fazer a planta carnívora crescer no Deserto Gerudo." },
  { titulo: "Canção do Espantalho", tipo: "cancao", text: "A Canção do Espantalho é ensinada por um espantalho no Rancho Lon Lon. Ela é usada para fazer o espantalho aparecer como um alvo para o Gancho em certos lugares." },

  // ── Divindades e Entidades ──
  { titulo: "Deusas Douradas (Din, Nayru e Farore)", tipo: "divindade", text: "As Deusas Douradas são as criadoras de Hyrule. Din criou a terra, Nayru deu a lei e a ordem, e Farore criou a vida. Elas deixaram a Triforce como símbolo de seu poder." },
  { titulo: "Triforce da Coragem", tipo: "divindade", text: "A Triforce da Coragem é um dos três triângulos da Triforce. Ela representa a coragem e é destinada a Link. Fica na parte inferior da Triforce completa." },
  { titulo: "Triforce da Sabedoria", tipo: "divindade", text: "A Triforce da Sabedoria é um dos três triângulos da Triforce. Representa a sabedoria e é destinada à Princesa Zelda. Fica no canto esquerdo da Triforce." },
  { titulo: "Triforce do Poder", tipo: "divindade", text: "A Triforce do Poder é um dos três triângulos da Triforce. Representa o poder e é tomada por Ganondorf. Fica no canto direito da Triforce." },

  // ── Outros ──
  { titulo: "Grandes Fadas", tipo: "personagem", text: "As Grandes Fadas são entidades mágicas que habitam fontes especiais em Hyrule. Elas concedem a Link melhorias, como a magia Fogo de Din, Vento de Farore e Amor de Nayru, além de aprimorar seus itens." },
  { titulo: "Casa das Skulltulas", tipo: "local", text: "A Casa das Skulltulas é uma casa amaldiçoada na Vila Kakariko. Uma família foi transformada em Skulltulas. Ao trazer Aranhas Douradas, Link quebra a maldição e recebe recompensas." },
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

  const points = EXPANSION_DATA.map((item, i) => ({
    id: crypto.randomUUID(),
    vector: {
      dense: { text: item.text, model: "intfloat/multilingual-e5-small" },
      bm25: { text: item.text, model: "qdrant/bm25" }
    },
    payload: {
      text: item.text,
      titulo: item.titulo,
      tipo: item.tipo,
      jogo: "Ocarina of Time",
      ordem: 1000 + i // offset para distinguir dos originais
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
      message: `${points.length} pontos de expansão inseridos em ${QDRANT_COLLECTION}`,
      inserted: points.length,
      collection: QDRANT_COLLECTION
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};
