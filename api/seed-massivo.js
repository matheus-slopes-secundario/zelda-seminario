// api/seed-massivo.js
// Expansão massiva: ~230 novos registros sobre Ocarina of Time.
// Execute UMA VEZ. Para reexecutar, primeiro limpe a coleção.

const MASSIVE_DATA = [
  // ── PERSONAGENS E NPCs (50) ─────────────────────
  { titulo: "Mido", tipo: "personagem", text: "Mido é o líder autoproclamado dos Kokiri. Arrogante e hostil com Link no início, ele amadurece ao longo da jornada. É o garoto mais velho da vila e usa um chapéu de cogumelo." },
  { titulo: "Talon", tipo: "personagem", text: "Talon é o preguiçoso proprietário do Rancho Lon Lon. Pai de Malon, ele perde o rancho para Ingo quando Ganondorf sobe ao poder. Gosta de dormir e de leite." },
  { titulo: "Ingo", tipo: "personagem", text: "Ingo é o mal-humorado trabalhador do Rancho Lon Lon. Toma o controle do rancho de Talon e treina Epona para corridas. É derrotado por Link em uma corrida de cavalos." },
  { titulo: "Dampé", tipo: "personagem", text: "Dampé é o coveiro da Vila Kakariko. Aparece como fantasma quando adulto e guia Link por uma tumba labirinto onde ele pode encontrar o Gancho (Hookshot)." },
  { titulo: "Biggoron", tipo: "personagem", text: "Biggoron é um Goron gigante que vive no topo da Montanha da Morte. É um lendário ferreiro que, após uma longa sequência de trocas, forja a Espada Biggoron para Link." },
  { titulo: "Koume e Kotake", tipo: "personagem", text: "Koume e Kotake são as bruxas gêmeas Gerudo, mestras de Ganondorf. Elas se fundem para formar a chefe Twinrova no Templo do Espírito. Koume usa fogo e Kotake usa gelo." },
  { titulo: "Rei Zora", tipo: "personagem", text: "O Rei Zora, também conhecido como Rei Zora De Bon XVI, é o monarca dos Zora e pai da Princesa Ruto. Ele governa o Domínio Zora e é congelado no Templo da Água quando adulto." },
  { titulo: "Kaepora Gaebora", tipo: "personagem", text: "Kaepora Gaebora é uma coruja sábia que aparece em pontos-chave da jornada de Link, oferecendo conselhos e, por vezes, transporte. Acredita-se que ele seja a reencarnação de Rauru, o Sábio da Luz." },
  { titulo: "Skull Kid", tipo: "personagem", text: "Skull Kid é uma criança da floresta que vende a Máscara da Máscara da Skull Kid para Link. Ele aparece no Bosque Perdido e está sempre aprontando travessuras." },
  { titulo: "Happy Mask Salesman", tipo: "personagem", text: "O Vendedor de Máscaras Felizes é um viajante misterioso que aparece na Cidade do Castelo de Hyrule. Ele vende máscaras e está sempre sorrindo, mas esconde segredos sobre a Máscara de Majora." },
  { titulo: "Cucco Lady", tipo: "personagem", text: "A Moça dos Cucos é uma jovem que cuida dos cucos na Vila Kakariko. Ela sofre de alergia a penas e pede a ajuda de Link para encontrar seu cuco perdido em troca de uma recompensa." },
  { titulo: "Cursed Rich Family", tipo: "personagem", text: "A Família Rica Amaldiçoada é uma família da Vila Kakariko transformada em Skulltulas. Eles moram na Casa das Skulltulas e pedem a Link que traga Aranhas Douradas para quebrar a maldição." },
  { titulo: "Fado", tipo: "personagem", text: "Fado é uma Kokiri que vive na Floresta Kokiri. Ela é uma das amigas de infância de Link e tem um papel importante na trama dos Kokiri." },
  { titulo: "Great Deku Tree", tipo: "personagem", text: "A Grande Árvore Deku é o espírito guardião da Floresta Kokiri. Ela é envenenada por Ganondorf e morre no início do jogo, mas seu broto (Deku Tree Sprout) cresce depois que Link derrota o mal." },
  { titulo: "Deku Tree Sprout", tipo: "personagem", text: "O Broto da Árvore Deku é o filho da Grande Árvore Deku. Ele cresce após a morte do pai e se torna o novo guardião da floresta, revelando a Link que ele é Hylian e não Kokiri." },
  { titulo: "Great Fairy", tipo: "personagem", text: "As Grandes Fadas são entidades mágicas que habitam fontes especiais. Elas concedem a Link melhorias, como as magias Fogo de Din, Vento de Farore e Amor de Nayru, além de aprimorar seus itens." },
  { titulo: "Pierre", tipo: "personagem", text: "Pierre é um espantalho falante que aparece no Rancho Lon Lon e em outros lugares. Ele ensina a Canção do Espantalho para Link quando criança." },
  { titulo: "Bonooru", tipo: "personagem", text: "Bonooru é o espantalho que aparece no Lago Hylia. Ele é parceiro de Pierre e ajuda Link a testar a Canção do Espantalho." },
  { titulo: "Lake Scientist", tipo: "personagem", text: "O Cientista do Lago é um pesquisador que estuda o Lago Hylia. Ele dá a Link a Garrafa Vazia em troca de ajudar com seus experimentos." },
  { titulo: "Bean Seller", tipo: "personagem", text: "O Vendedor de Feijões é um comerciante que vende Sementes Mágicas perto do Rio Zora. O preço aumenta a cada compra, e as sementes crescem em plantas que dão recompensas no futuro." },
  { titulo: "Bombchu Bowling Alley Operator", tipo: "personagem", text: "O Operador do Boliche de Bombchus é o dono do minigame na Cidade do Castelo de Hyrule. Ele oferece prêmios como Pedaços de Coração e Bombchus para quem conseguir uma pontuação alta." },
  { titulo: "Treasure Chest Shop Manager", tipo: "personagem", text: "O Gerente da Loja de Baús é o dono de um minigame na Cidade do Castelo de Hyrule. Ele cobra 10 rúpias para abrir um baú, que pode conter desde um Pedaço de Coração até uma simples rúpia." },
  { titulo: "Shooting Gallery Owner", tipo: "personagem", text: "O Dono da Galeria de Tiro é o operador do minigame de arco e flecha na Cidade do Castelo de Hyrule. Ele recompensa Link com um Pedaço de Coração se ele acertar todos os alvos." },
  { titulo: "Running Man", tipo: "personagem", text: "O Homem Corredor é um NPC que desafia Link para uma corrida na Cidade do Castelo de Hyrule. Ele é extremamente rápido e, se derrotado, presenteia Link com uma Garrafa Vazia." },
  { titulo: "Man Carrying Sack", tipo: "personagem", text: "O Homem com Saco é um NPC que aparece na Cidade do Castelo de Hyrule. Ele está sempre carregando um saco e pode ser visto em diferentes momentos do jogo." },
  { titulo: "Man on a Roof", tipo: "personagem", text: "O Homem no Telhado é um NPC que aparece no telhado de uma casa na Cidade do Castelo de Hyrule. Ele observa a cidade e comenta sobre os acontecimentos." },
  { titulo: "Wounded Soldier", tipo: "personagem", text: "O Soldado Ferido é um guarda do Castelo de Hyrule que é encontrado morrendo nos fundos do castelo quando Link é criança. Ele ajuda Link a escapar de Ganondorf." },
  { titulo: "Dancing Couple", tipo: "personagem", text: "O Casal Dançarino são dois NPCs que dançam na praça da Cidade do Castelo de Hyrule. Eles aparecem em diferentes momentos do jogo e comentam sobre a situação do reino." },
  { titulo: "Fishing Hole Man", tipo: "personagem", text: "O Homem do Pesqueiro é o dono do Lago Hylia. Ele cobra uma taxa para Link pescar e recompensa com um troféu se ele conseguir o peixe mais pesado." },
  { titulo: "Gerudo Guard", tipo: "personagem", text: "As Guardas Gerudo são as guerreiras que protegem a Fortaleza Gerudo. Elas são habilidosas com espadas e capturam os carpinteiros. Link precisa se infiltrar na fortaleza para resgatá-los." },
  { titulo: "Goddess of the Sand", tipo: "personagem", text: "A Deusa da Areia é uma entidade mencionada no Deserto Gerudo. Ela é uma das divindades menores ligadas ao deserto e ao Templo do Espírito." },
  { titulo: "Great Fairy of Power", tipo: "personagem", text: "A Grande Fada do Poder é uma das Grandes Fadas que concede a Link a magia Fogo de Din. Ela reside na Montanha da Morte, perto da Cratera." },
  { titulo: "Great Fairy of Wisdom", tipo: "personagem", text: "A Grande Fada da Sabedoria concede a Link a magia Vento de Farore. Ela reside em uma fonte escondida perto do Lago Hylia." },
  { titulo: "Great Fairy of Courage", tipo: "personagem", text: "A Grande Fada da Coragem concede a Link a magia Amor de Nayru. Ela reside em uma fonte escondida no Deserto Gerudo." },
  { titulo: "Great Fairy of Magic", tipo: "personagem", text: "A Grande Fada da Magia é a primeira Grande Fada que Link encontra, na Montanha da Morte. Ela melhora o poder mágico de Link e ensina as magias básicas." },
  { titulo: "Jiro", tipo: "personagem", text: "Jiro é um dos irmãos que administram a Loja de Poções na Cidade do Castelo de Hyrule. Ele vende Poções Vermelhas, Verdes e Azuis." },
  { titulo: "Joelle", tipo: "personagem", text: "Joelle é uma das Irmãs Poe, fantasmas que aparecem no Templo da Floresta. Ela é a irmã de cor azul e deve ser derrotada para acender as tochas." },
  { titulo: "Amy", tipo: "personagem", text: "Amy é uma das Irmãs Poe, fantasmas que aparecem no Templo da Floresta. Ela é a irmã de cor roxa e uma das mini-chefes do templo." },
  { titulo: "Beth", tipo: "personagem", text: "Beth é uma das Irmãs Poe, fantasmas que aparecem no Templo da Floresta. Ela é a irmã de cor verde e deve ser derrotada para acender as tochas verdes." },
  { titulo: "Meg", tipo: "personagem", text: "Meg é a líder das Irmãs Poe no Templo da Floresta. Ela é a irmã de cor rosa e a mais forte das quatro, sendo a mini-chefe final do templo." },
  { titulo: "Flat", tipo: "personagem", text: "Flat é um dos irmãos Poes que aparece no Cemitério de Kakariko. Ele é o irmão de Sharp e está ligado à história da Família Real." },
  { titulo: "Sharp", tipo: "personagem", text: "Sharp é um dos irmãos Poes que aparece no Cemitério de Kakariko. Ele é o irmão de Flat e guarda segredos sobre a Canção do Sol." },
  { titulo: "Poe Collector", tipo: "personagem", text: "O Coletor de Poes é um NPC que aparece na Cidade do Castelo de Hyrule quando adulto. Ele compra Big Poes de Link em troca de recompensas, como uma Garrafa Vazia." },
  { titulo: "Phonogram Man", tipo: "personagem", text: "O Homem do Fonograma é um NPC que aparece na Cidade do Castelo de Hyrule. Ele vende fonogramas (gravações) de músicas do jogo." },
  { titulo: "Man Who Could See the Truth", tipo: "personagem", text: "O Homem que Podia Ver a Verdade é um NPC que aparece na Vila Kakariko. Ele é o único que vê a verdade sobre a situação de Hyrule e dá dicas a Link." },
  { titulo: "Pooch Lady", tipo: "personagem", text: "A Senhora dos Cachorros é uma NPC que aparece na Cidade do Castelo de Hyrule. Ela perdeu seu cachorro e pede a ajuda de Link para encontrá-lo." },
  { titulo: "Richard", tipo: "personagem", text: "Richard é o cachorro perdido da Senhora dos Cachorros. Ele é encontrado na Vila Kakariko e deve ser devolvido para sua dona." },
  { titulo: "Shikashi", tipo: "personagem", text: "Shikashi é um dos Irmãos Sabedores, NPCs que dão dicas sobre o jogo. Ele aparece na Cidade do Castelo de Hyrule." },
  { titulo: "Master Craftsman", tipo: "personagem", text: "O Mestre Artesão é o pai de um dos Goron que trabalham na forja da Montanha da Morte. Ele está envolvido na cadeia de trocas da Espada Biggoron." },
  { titulo: "Master Craftsman's Son", tipo: "personagem", text: "O Filho do Mestre Artesão é um Goron que trabalha na forja. Ele ajuda Link na cadeia de trocas para obter a Espada Biggoron." },
  { titulo: "Medigoron", tipo: "personagem", text: "Medigoron é um Goron ferreiro que vive na Cidade Goron. Ele vende a Faca do Gigante para Link por um preço alto, mas a arma quebra facilmente." },

  // ── INIMIGOS COMUNS (40) ────────────────────────
  { titulo: "Deku Baba", tipo: "inimigo", text: "Deku Baba é uma planta carnívora comum na Floresta Kokiri. Ela ataca mordendo e pode ser derrotada com a espada ou com o estilingue. Solta Sementes Deku e Nuts." },
  { titulo: "Skulltula", tipo: "inimigo", text: "Skulltula é uma aranha gigante que aparece em masmorras e áreas escuras. Ela ataca girando e pode ser derrotada com a espada. Algumas são Aranhas Douradas." },
  { titulo: "Gold Skulltula", tipo: "inimigo", text: "A Aranha Dourada é uma variante rara da Skulltula. Existem 100 no jogo e, ao derrotá-las, Link obtém um token que pode ser trocado por recompensas na Casa das Skulltulas." },
  { titulo: "Keese", tipo: "inimigo", text: "Keese é um morcego que aparece em cavernas e masmorras. Ele voa em círculos e ataca Link. Pode ser derrotado com a espada ou com o estilingue." },
  { titulo: "Fire Keese", tipo: "inimigo", text: "Fire Keese é uma variante de Keese que está em chamas. Ela pode queimar Link se ele encostar. É encontrada em áreas vulcânicas como o Templo do Fogo." },
  { titulo: "Ice Keese", tipo: "inimigo", text: "Ice Keese é uma variante de Keese que congela Link se ele encostar. É encontrada em áreas geladas como a Caverna de Gelo." },
  { titulo: "Stalfos", tipo: "inimigo", text: "Stalfos é um esqueleto guerreiro que aparece em masmorras. Ele ataca com espada e escudo, e é um dos inimigos mais clássicos da série Zelda." },
  { titulo: "Stalchild", tipo: "inimigo", text: "Stalchild é um esqueleto pequeno que aparece à noite no Campo de Hyrule. Ele persegue Link e pode ser derrotado com a espada." },
  { titulo: "ReDead", tipo: "inimigo", text: "ReDead é um zumbi que aparece em masmorras e no Castelo de Ganon. Ele paralisa Link com um grito e o agarra. A Canção do Sol pode atordoá-lo." },
  { titulo: "Gibdo", tipo: "inimigo", text: "Gibdo é uma múmia que aparece no Poço do Poço e no Templo das Sombras. Ele é lento, mas tem muita vida. A Lente da Verdade pode revelar sua fraqueza." },
  { titulo: "Wolfos", tipo: "inimigo", text: "Wolfos é um lobo gigante que aparece no Bosque Perdido e em áreas abertas. Ele ataca com mordidas e pode ser derrotado com a espada. A versão branca é mais forte." },
  { titulo: "White Wolfos", tipo: "inimigo", text: "White Wolfos é uma variante mais forte do Wolfos, encontrada na Caverna de Gelo. Ele é um mini-chefe e tem mais vida e dano." },
  { titulo: "Octorok", tipo: "inimigo", text: "Octorok é um polvo que cospe pedras. Ele aparece em áreas aquáticas e é um dos inimigos mais comuns da série. Pode ser derrotado com o escudo ou com a espada." },
  { titulo: "Peahat", tipo: "inimigo", text: "Peahat é uma planta voadora que ataca Link com suas hélices. Ela aparece no Campo de Hyrule e em masmorras. Só pode ser atingida quando está no chão." },
  { titulo: "Leever", tipo: "inimigo", text: "Leever é uma criatura que emerge do solo e gira em direção a Link. Ela aparece no Deserto Gerudo e em áreas arenosas." },
  { titulo: "Tektite", tipo: "inimigo", text: "Tektite é uma aranha que salta em direção a Link. Ela aparece em montanhas e masmorras. A versão azul é mais rápida que a vermelha." },
  { titulo: "Blue Tektite", tipo: "inimigo", text: "Blue Tektite é uma variante mais rápida do Tektite. Ela salta mais alto e é mais difícil de acertar." },
  { titulo: "Guay", tipo: "inimigo", text: "Guay é um pássaro que sobrevoa áreas abertas e ataca Link em picadas. Ele aparece no Campo de Hyrule e pode ser derrotado com o estilingue." },
  { titulo: "Like Like", tipo: "inimigo", text: "Like Like é uma criatura que engole Link e rouba seus escudos. Ele aparece em masmorras e é temido por jogadores que perdem seus escudos para ele." },
  { titulo: "Wallmaster", tipo: "inimigo", text: "Wallmaster é uma mão gigante que cai do teto e agarra Link, levando-o de volta ao início da masmorra. Ele aparece em vários templos." },
  { titulo: "Floormaster", tipo: "inimigo", text: "Floormaster é uma mão que se arrasta pelo chão e agarra Link. Ele aparece no Templo das Sombras e em outras masmorras." },
  { titulo: "Beamos", tipo: "inimigo", text: "Beamos é uma torre com um olho que dispara um laser. Ele é fixo e não pode ser derrotado com a espada, apenas com bombas ou flechas." },
  { titulo: "Armos", tipo: "inimigo", text: "Armos é uma estátua que ganha vida e ataca Link. Ele aparece em masmorras e no Campo de Hyrule. Pode ser derrotado com a espada." },
  { titulo: "Business Scrub", tipo: "inimigo", text: "Business Scrub é um Deku Scrub que vende itens para Link. Ele aparece em masmorras e em áreas abertas. Alguns são hostis e atacam com nozes." },
  { titulo: "Mad Scrub", tipo: "inimigo", text: "Mad Scrub é um Deku Scrub hostil que ataca Link com nozes. Ele aparece na Floresta Kokiri e em outras áreas." },
  { titulo: "Deku Scrub", tipo: "inimigo", text: "Deku Scrub é uma criatura vegetal que cospe nozes. Ele pode ser encontrado em vários locais e às vezes vende itens." },
  { titulo: "Big Deku Baba", tipo: "inimigo", text: "Big Deku Baba é uma versão maior e mais forte da Deku Baba. Ela aparece em masmorras e tem mais vida e dano." },
  { titulo: "Withered Deku Baba", tipo: "inimigo", text: "Withered Deku Baba é uma Deku Baba seca e enfraquecida. Ela aparece em áreas áridas e é mais fácil de derrotar." },
  { titulo: "Biri", tipo: "inimigo", text: "Biri é uma água-viva elétrica que flutua na água. Ela aparece no Ventre de Jabu-Jabu e em outras áreas aquáticas. Pode ser derrotada com o Bumerangue." },
  { titulo: "Bari", tipo: "inimigo", text: "Bari é uma água-viva elétrica maior que a Biri. Ela se divide em Biris menores quando derrotada." },
  { titulo: "Shabom", tipo: "inimigo", text: "Shabom é uma bolha flutuante que estoura e causa dano. Ela aparece no Ventre de Jabu-Jabu." },
  { titulo: "Stinger", tipo: "inimigo", text: "Stinger é uma criatura aquática que salta da água para atacar Link. Ela aparece no Lago Hylia e no Rio Zora." },
  { titulo: "Shell Blade", tipo: "inimigo", text: "Shell Blade é uma amêijoa gigante que se fecha para se proteger. Ela aparece no Templo da Água e pode ser derrotada com o Gancho." },
  { titulo: "Parasitic Tentacle", tipo: "inimigo", text: "Parasitic Tentacle é um tentáculo que bloqueia o caminho no Ventre de Jabu-Jabu. Ele deve ser derrotado com o Bumerangue." },
  { titulo: "Tailpasaran", tipo: "inimigo", text: "Tailpasaran é uma criatura elétrica que se enterra no chão. Ela aparece no Templo do Espírito e ataca quando Link se aproxima." },
  { titulo: "Torch Slug", tipo: "inimigo", text: "Torch Slug é uma lesma de fogo que deixa um rastro de chamas. Ela aparece no Templo do Fogo e pode ser derrotada com o Martelo Megaton." },
  { titulo: "Freezard", tipo: "inimigo", text: "Freezard é uma criatura de gelo que sopra ar congelante. Ela aparece na Caverna de Gelo e no Templo da Água." },
  { titulo: "White Bubble", tipo: "inimigo", text: "White Bubble é uma caveira flutuante que solta uma chama azul. Ela aparece no Templo das Sombras e pode ser derrotada com a espada." },
  { titulo: "Blue Bubble", tipo: "inimigo", text: "Blue Bubble é uma caveira flutuante que solta uma chama azul e amaldiçoa Link, impedindo-o de usar itens. Aparece em masmorras." },
  { titulo: "Red Bubble", tipo: "inimigo", text: "Red Bubble é uma caveira flutuante que solta uma chama vermelha. Ela aparece em masmorras e causa dano ao encostar." },
  { titulo: "Green Bubble", tipo: "inimigo", text: "Green Bubble é uma caveira flutuante que solta uma chama verde. Ela aparece em masmorras e pode ser derrotada com a espada." },
  { titulo: "Club Moblin", tipo: "inimigo", text: "Club Moblin é um Moblin que carrega um porrete gigante. Ele aparece no Campo de Hyrule e em áreas abertas. É lento, mas causa muito dano." },
  { titulo: "Moblin", tipo: "inimigo", text: "Moblin é um goblin que patrulha áreas abertas. Ele ataca com lança e é um dos inimigos mais comuns do Campo de Hyrule." },
  { titulo: "Dinolfos", tipo: "inimigo", text: "Dinolfos é um réptil guerreiro mais forte que o Lizalfos. Ele aparece no Templo do Espírito e no Campo de Treinamento Gerudo." },

  // ── ITENS E EQUIPAMENTOS (40) ───────────────────
  { titulo: "Espada Kokiri", tipo: "item", text: "A Espada Kokiri é a primeira espada de Link, encontrada na Floresta Kokiri. É uma espada curta e fraca, mas essencial para o início da jornada." },
  { titulo: "Espada Mestra (Master Sword)", tipo: "item", text: "A Espada Mestra é a espada lendária que só o Herói do Tempo pode empunhar. Está cravada no pedestal do Templo do Tempo. Ao puxá-la, Link dorme por 7 anos e desperta como adulto." },
  { titulo: "Espada Biggoron", tipo: "item", text: "A Espada Biggoron é a arma mais forte que Link pode obter, forjada por Biggoron através de uma longa sequência de trocas de itens. Não quebra e causa dano massivo." },
  { titulo: "Faca do Gigante (Giant's Knife)", tipo: "item", text: "A Faca do Gigante é uma arma vendida por Medigoron na Cidade Goron. É poderosa, mas quebra após um número limitado de usos." },
  { titulo: "Escudo Deku", tipo: "item", text: "O Escudo Deku é um escudo de madeira barato, comprado na loja da Floresta Kokiri. É o primeiro escudo de Link e quebra facilmente." },
  { titulo: "Escudo Hylian", tipo: "item", text: "O Escudo Hylian é um escudo de metal resistente, com o brasão de Hyrule. Pode ser comprado na Cidade do Castelo de Hyrule ou encontrado no Cemitério de Kakariko." },
  { titulo: "Escudo de Espelho", tipo: "item", text: "O Escudo de Espelho é o escudo mais forte do jogo, encontrado no Templo do Espírito. Ele reflete ataques mágicos de volta para o inimigo." },
  { titulo: "Estilingue das Fadas", tipo: "item", text: "O Estilingue das Fadas é a primeira arma à distância de Link criança, encontrada na Grande Árvore Deku. Dispara Sementes Deku." },
  { titulo: "Bumerangue", tipo: "item", text: "O Bumerangue é encontrado no Ventre de Jabu-Jabu. Ele paralisa inimigos e traz itens de volta para Link. Essencial para derrotar Barinade." },
  { titulo: "Gancho (Hookshot)", tipo: "item", text: "O Gancho é encontrado na tumba de Dampé. Permite a Link se pendurar em superfícies de madeira e se puxar para lugares distantes." },
  { titulo: "Gancho Longo (Longshot)", tipo: "item", text: "O Gancho Longo é uma versão aprimorada do Gancho, encontrada no Templo da Água. Tem o dobro do alcance e é necessário para completar a masmorra." },
  { titulo: "Arco das Fadas (Fairy Bow)", tipo: "item", text: "O Arco das Fadas é a arma à distância de Link adulto, encontrado no Templo da Floresta. Dispara flechas e pode ser combinado com fogo, gelo ou luz." },
  { titulo: "Flecha de Fogo", tipo: "item", text: "A Flecha de Fogo é uma flecha mágica que incendeia alvos. É obtida no Lago Hylia após completar o Templo da Água, atirando uma flecha no sol." },
  { titulo: "Flecha de Gelo", tipo: "item", text: "A Flecha de Gelo é uma flecha mágica que congela inimigos. É obtida no Campo de Treinamento Gerudo." },
  { titulo: "Flecha de Luz", tipo: "item", text: "A Flecha de Luz é a flecha mais poderosa do jogo, obtida com a Princesa Zelda após despertar os sete Sábios. É essencial para derrotar Ganon." },
  { titulo: "Martelo Megaton", tipo: "item", text: "O Martelo Megaton é encontrado no Templo do Fogo. É uma arma poderosa e pesada, usada para quebrar rochas e derrotar Volvagia." },
  { titulo: "Lente da Verdade", tipo: "item", text: "A Lente da Verdade é um item mágico encontrado no Poço do Poço. Revela objetos e inimigos invisíveis, como fantasmas e o caminho no Templo das Sombras." },
  { titulo: "Botas de Ferro", tipo: "item", text: "As Botas de Ferro são encontradas na Caverna de Gelo. Fazem Link afundar na água e no chão, permitindo caminhar no fundo de lagos e resistir a ventos fortes." },
  { titulo: "Botas Flutuantes (Hover Boots)", tipo: "item", text: "As Botas Flutuantes são encontradas no Templo das Sombras. Permitem a Link caminhar no ar por um curto período de tempo." },
  { titulo: "Túnica Goron", tipo: "item", text: "A Túnica Goron é uma veste resistente ao fogo, dada a Link por Darunia. Permite que ele entre em áreas vulcânicas sem sofrer dano." },
  { titulo: "Túnica Zora", tipo: "item", text: "A Túnica Zora permite que Link respire debaixo d'água e nade mais rápido. É dada pelo Rei Zora após ele ser descongelado." },
  { titulo: "Túnica Kokiri", tipo: "item", text: "A Túnica Kokiri é a roupa inicial de Link. É uma túnica verde simples, usada por todos os Kokiri." },
  { titulo: "Ocarina das Fadas", tipo: "item", text: "A Ocarina das Fadas é o primeiro instrumento de Link, dado por Saria. É usada para tocar as canções iniciais do jogo até ser substituída pela Ocarina do Tempo." },
  { titulo: "Ocarina do Tempo", tipo: "item", text: "A Ocarina do Tempo é um instrumento sagrado azul dado pela Princesa Zelda a Link. Permite tocar canções que viajam no tempo, abrem templos e invocam Epona." },
  { titulo: "Bomba", tipo: "item", text: "As Bombas são itens explosivos usados para destruir paredes rachadas, inimigos e obstáculos. Link pode carregá-las e arremessá-las." },
  { titulo: "Bombchu", tipo: "item", text: "Bombchu é uma bomba-aranha que anda em linha reta e sobe paredes. É útil para atingir alvos em locais de difícil acesso." },
  { titulo: "Semente Deku", tipo: "item", text: "As Sementes Deku são munição para o Estilingue das Fadas. Podem ser encontradas em arbustos e compradas em lojas." },
  { titulo: "Nuez Deku", tipo: "item", text: "As Nuez Deku são nozes que, ao serem arremessadas, atordoam inimigos. São dropadas por Deku Babas e podem ser compradas em lojas." },
  { titulo: "Graveto Deku", tipo: "item", text: "Os Gravetos Deku são galhos usados como armas ou para acender tochas. Eles quebram após alguns usos." },
  { titulo: "Sementes Mágicas", tipo: "item", text: "As Sementes Mágicas são vendidas pelo Vendedor de Feijões. Quando plantadas em solo macio, crescem em plantas que dão recompensas no futuro." },
  { titulo: "Garrafa Vazia", tipo: "item", text: "As Garrafas Vazias são recipientes que podem armazenar poções, fadas, leite e outros itens. Existem 4 garrafas no jogo." },
  { titulo: "Poção Vermelha", tipo: "item", text: "A Poção Vermelha restaura a saúde de Link. Pode ser comprada em lojas ou preparada com ingredientes." },
  { titulo: "Poção Verde", tipo: "item", text: "A Poção Verde restaura a magia de Link. Pode ser comprada em lojas." },
  { titulo: "Poção Azul", tipo: "item", text: "A Poção Azul restaura tanto a saúde quanto a magia de Link. É a poção mais completa do jogo." },
  { titulo: "Fada", tipo: "item", text: "As Fadas são criaturas mágicas que restauram a saúde de Link quando ele morre, se estiverem em uma garrafa. Podem ser encontradas em fontes." },
  { titulo: "Pedaço de Coração", tipo: "item", text: "Os Pedaços de Coração são fragmentos espalhados por Hyrule. Coletar quatro deles aumenta a vida máxima de Link em um coração. Existem 36 no jogo." },
  { titulo: "Coração de Cristal (Heart Container)", tipo: "item", text: "Os Corações de Cristal são recompensas por derrotar chefes. Cada um aumenta a vida máxima de Link em um coração." },
  { titulo: "Rúpia", tipo: "item", text: "As Rúpias são a moeda de Hyrule. Existem em várias cores (verde, azul, vermelha, roxa, laranja) e valores." },
  { titulo: "Big Poe", tipo: "item", text: "Big Poe é um fantasma que pode ser capturado em uma garrafa. O Coletor de Poes compra Big Poes em troca de recompensas." },
  { titulo: "Máscara da Skull Kid", tipo: "item", text: "A Máscara da Skull Kid é um item vendido pelo Skull Kid no Bosque Perdido. Permite que Link se disfarce de Skull Kid." },

  // ── CANÇÕES (12) ────────────────────────────────
  { titulo: "Canção de Ninar da Zelda (Zelda's Lullaby)", tipo: "cancao", text: "A Canção de Ninar da Zelda é ensinada por Impa. É a primeira canção que Link aprende e é usada para abrir o Domínio Zora, acessar a Cidade Goron e resolver puzzles." },
  { titulo: "Canção de Epona (Epona's Song)", tipo: "cancao", text: "A Canção de Epona foi composta por Malon e ensinada a Link. Ao tocá-la, Epona vem correndo até Link de qualquer lugar de Hyrule." },
  { titulo: "Canção de Saria (Saria's Song)", tipo: "cancao", text: "A Canção de Saria é a canção da amizade entre Saria e Link. Toca notas que abrem a entrada do Templo da Floresta e permitem que Link se comunique com Saria." },
  { titulo: "Canção do Sol (Sun's Song)", tipo: "cancao", text: "A Canção do Sol é tocada para invocar a luz do sol ou a noite. Necessária para abrir a entrada do Templo das Sombras e resolver puzzles no Poço do Poço." },
  { titulo: "Canção do Tempo (Song of Time)", tipo: "cancao", text: "A Canção do Tempo é a canção ensinada por Zelda a Link. Abre a Porta do Tempo no Templo do Tempo e move blocos de tempo. É a canção mais icônica do jogo." },
  { titulo: "Canção das Tempestades (Song of Storms)", tipo: "cancao", text: "A Canção das Tempestades é aprendida no Moinho de Kakariko. Ela invoca chuva, o que é útil para resolver puzzles e fazer a planta carnívora crescer no Deserto Gerudo." },
  { titulo: "Canção do Espantalho (Scarecrow's Song)", tipo: "cancao", text: "A Canção do Espantalho é ensinada por Pierre. Ela faz o espantalho aparecer como um alvo para o Gancho em certos lugares." },
  { titulo: "Minueto da Floresta (Minuet of Forest)", tipo: "cancao", text: "O Minueto da Floresta é ensinado por Sheik. Teletransporta Link para o Prado da Floresta Sagrada, em frente ao Templo da Floresta." },
  { titulo: "Bolero do Fogo (Bolero of Fire)", tipo: "cancao", text: "O Bolero do Fogo é ensinado por Sheik. Teletransporta Link para a Montanha da Morte, em frente ao Templo do Fogo." },
  { titulo: "Serenata da Água (Serenade of Water)", tipo: "cancao", text: "A Serenata da Água é ensinada por Sheik. Teletransporta Link para o Lago Hylia, em frente ao Templo da Água." },
  { titulo: "Noturno das Sombras (Nocturne of Shadow)", tipo: "cancao", text: "O Noturno das Sombras é ensinado por Sheik. Teletransporta Link para o Cemitério de Kakariko, em frente à entrada do Templo das Sombras." },
  { titulo: "Réquiem do Espírito (Requiem of Spirit)", tipo: "cancao", text: "O Réquiem do Espírito é ensinado por Sheik. Teletransporta Link para o Deserto Gerudo, em frente ao Templo do Espírito." },
  { titulo: "Prelúdio da Luz (Prelude of Light)", tipo: "cancao", text: "O Prelúdio da Luz é ensinado por Sheik. Teletransporta Link para o Templo do Tempo, no Castelo de Hyrule." },

  // ── LOCAIS E REGIÕES (40) ───────────────────────
  { titulo: "Floresta Kokiri", tipo: "local", text: "A Floresta Kokiri é o lar dos Kokiri e da Grande Árvore Deku. É onde Link cresce como criança. Crianças nunca envelhecem aqui." },
  { titulo: "Vila Kokiri", tipo: "local", text: "A Vila Kokiri é a pequena vila dentro da Floresta Kokiri. Possui casas nas árvores, uma loja e o Campo de Treinamento." },
  { titulo: "Grande Árvore Deku (Dentro)", tipo: "local", text: "Dentro da Grande Árvore Deku é a primeira masmorra do jogo. É um labirinto de madeira e teias, habitado por Gohma." },
  { titulo: "Campo de Hyrule", tipo: "local", text: "O Campo de Hyrule é a grande área central que conecta todas as regiões. Nele ficam o Castelo de Hyrule, o Rancho Lon Lon e os caminhos para as outras áreas." },
  { titulo: "Castelo de Hyrule", tipo: "local", text: "O Castelo de Hyrule é a sede do governo de Hyrule e lar da Família Real. Possui o Pátio do Castelo, a Vila de Hyrule ao redor e o Templo do Tempo nos fundos." },
  { titulo: "Cidade do Castelo de Hyrule", tipo: "local", text: "A Cidade do Castelo de Hyrule é a capital de Hyrule. Possui lojas, o Bazar, a Loja de Poções, o Boliche de Bombchus e a Galeria de Tiro." },
  { titulo: "Templo do Tempo", tipo: "local", text: "O Templo do Tempo está dentro do Castelo de Hyrule e guarda o pedestal da Espada Mestra e a Câmara dos Sábios. É o ponto de viagem no tempo." },
  { titulo: "Rancho Lon Lon", tipo: "local", text: "O Rancho Lon Lon é uma fazenda de cavalos e vacas a oeste do Castelo de Hyrule. É onde Link conhece Malon e Epona." },
  { titulo: "Vila Kakariko", tipo: "local", text: "A Vila Kakariko é uma vila ao pé da Montanha da Morte, lar dos Sheikah. Possui o Poço do Poço, o Cemitério e a Casa de Impa." },
  { titulo: "Cemitério de Kakariko", tipo: "local", text: "O Cemitério de Kakariko fica atrás da vila. Abriga o Poço do Poço, a entrada para o Templo das Sombras e a lápide onde a Canção do Sol é aprendida." },
  { titulo: "Poço do Poço", tipo: "local", text: "O Poço do Poço é uma masmorra opcional sob o Cemitério de Kakariko. É acessível apenas quando criança e contém a Lente da Verdade." },
  { titulo: "Montanha da Morte", tipo: "local", text: "A Montanha da Morte é um vulcão ativo a nordeste de Hyrule. Lar dos Goron e do dragão Volvagia. A nuvem de fumaça cobre a Trilha da Montanha da Morte." },
  { titulo: "Trilha da Montanha da Morte", tipo: "local", text: "A Trilha da Montanha da Morte é um caminho perigoso cheio de rochas rolantes. Leva à Cidade Goron e ao topo da montanha." },
  { titulo: "Cratera da Montanha da Morte", tipo: "local", text: "A Cratera da Montanha da Morte é o topo do vulcão. É onde fica a entrada para o Templo do Fogo e a Grande Fada do Poder." },
  { titulo: "Cidade Goron", tipo: "local", text: "A Cidade Goron fica dentro da Montanha da Morte. É o lar dos Goron, liderados por Darunia. Abriga a entrada do Templo do Fogo." },
  { titulo: "Caverna Dodongo", tipo: "local", text: "A Caverna Dodongo é uma masmorra na Montanha da Morte, segunda do jogo. Os Goron extraem pedras dela para se alimentar." },
  { titulo: "Domínio Zora", tipo: "local", text: "O Domínio Zora é o lar dos Zora, no Rio Zora. Possui a Fonte Zora e a entrada para o Ventre de Jabu-Jabu." },
  { titulo: "Rio Zora", tipo: "local", text: "O Rio Zora é um curso d'água que conecta o Lago Hylia ao Domínio Zora. É habitado por Zoras e leva à Fonte Zora." },
  { titulo: "Fonte Zora", tipo: "local", text: "A Fonte Zora é uma caverna sagrada no Domínio Zora, onde vive o Lorde Jabu-Jabu. É a entrada para a masmorra do Ventre." },
  { titulo: "Ventre do Lorde Jabu-Jabu", tipo: "local", text: "O Ventre do Lorde Jabu-Jabu é a terceira masmorra do jogo. Link entra na divindade peixe para resgatar a Princesa Ruto e recuperar a Safira dos Zoras." },
  { titulo: "Lago Hylia", tipo: "local", text: "O Lago Hylia é um grande lago ao sudeste de Hyrule. Possui um laboratório de cientistas, o Templo da Água submerso e uma área de pesca." },
  { titulo: "Templo da Água", tipo: "local", text: "O Templo da Água é a terceira masmorra adulta, submerso no Lago Hylia. É um templo complexo que exige mudar o nível da água. Abriga Morpha e Dark Link." },
  { titulo: "Caverna de Gelo", tipo: "local", text: "A Caverna de Gelo é uma masmorra opcional no Domínio Zora. Contém as Botas de Ferro e é habitada por Freezards e White Wolfos." },
  { titulo: "Vale Gerudo", tipo: "local", text: "O Vale Gerudo fica no Deserto Gerudo, a oeste de Hyrule. Sede das ladras Gerudo e de Ganondorf. Possui a Fortaleza Gerudo e o Templo do Espírito." },
  { titulo: "Fortaleza Gerudo", tipo: "local", text: "A Fortaleza Gerudo é uma prisão no Vale Gerudo. Link deve resgatar os quatro carpinteiros capturados pelas Gerudo para obter acesso ao Templo do Espírito." },
  { titulo: "Deserto Gerudo", tipo: "local", text: "O Deserto Gerudo é uma vasta área árida a oeste de Hyrule. Abriga o Templo do Espírito e é atravessado com a Canção do Vento." },
  { titulo: "Templo do Espírito", tipo: "local", text: "O Templo do Espírito é a quinta masmorra adulta, localizada no Deserto Gerudo. É o covil de Twinrova. Link precisa da Canção do Vento para viajar até lá." },
  { titulo: "Bosque Perdido", tipo: "local", text: "O Bosque Perdido é uma floresta labiríntica a oeste da Floresta Kokiri. É fácil se perder nele, a menos que se siga a música de Saria." },
  { titulo: "Prado da Floresta Sagrada", tipo: "local", text: "O Prado da Floresta Sagrada é uma área tranquila dentro do Bosque Perdido, onde Saria costuma esperar por Link. É o local de entrada para o Templo da Floresta." },
  { titulo: "Templo da Floresta", tipo: "local", text: "O Templo da Floresta é a primeira masmorra adulta, no Prado da Floresta Sagrada. Abriga o chefe Phantom Ganon e concede o Arco das Fadas." },
  { titulo: "Templo do Fogo", tipo: "local", text: "O Templo do Fogo é a segunda masmorra adulta, dentro da Montanha da Morte. É o covil do dragão Volvagia. Link obtém o Martelo Megaton aqui." },
  { titulo: "Templo das Sombras", tipo: "local", text: "O Templo das Sombras é a quarta masmorra adulta, acessível pelo Poço do Poço. É um local escuro e assustador, cheio de fantasmas e da criatura Dead Hand." },
  { titulo: "Castelo de Ganon", tipo: "local", text: "O Castelo de Ganon é a fortaleza final de Ganondorf, construída sobre as ruínas do Castelo de Hyrule. Link deve escalar a torre para enfrentar Ganondorf e Ganon." },
  { titulo: "Reino Sagrado", tipo: "local", text: "O Reino Sagrado é o local onde a Triforce repousa, acessível através da Porta do Tempo no Templo do Tempo." },
  { titulo: "Casa das Skulltulas", tipo: "local", text: "A Casa das Skulltulas é uma casa amaldiçoada na Vila Kakariko. Uma família foi transformada em Skulltulas. Ao trazer Aranhas Douradas, Link quebra a maldição." },
  { titulo: "Fonte das Fadas", tipo: "local", text: "As Fontes das Fadas são locais sagrados onde as Grandes Fadas residem. Elas concedem magias e melhorias a Link." },
  { titulo: "Coliseu do Deserto", tipo: "local", text: "O Coliseu do Deserto é uma arena no Deserto Gerudo. É o local do Campo de Treinamento Gerudo, onde Link obtém a Flecha de Gelo." },
  { titulo: "Moinho de Kakariko", tipo: "local", text: "O Moinho de Kakariko é uma construção na Vila Kakariko. É onde Link aprende a Canção das Tempestades quando criança." },
  { titulo: "Loja de Poções", tipo: "local", text: "A Loja de Poções é uma loja na Cidade do Castelo de Hyrule que vende Poções Vermelhas, Verdes e Azuis." },
  { titulo: "Bazar de Hyrule", tipo: "local", text: "O Bazar de Hyrule é uma loja na Cidade do Castelo de Hyrule que vende itens como escudos, bombas e flechas." },

  // ── MINI-CHEFES (10) ────────────────────────────
  { titulo: "Lizalfos", tipo: "mini-chefe", text: "Lizalfos são répteis guerreiros que aparecem na Caverna Dodongo. Eles atacam com espadas e são ágeis. São os primeiros mini-chefes do jogo." },
  { titulo: "Grande Octo", tipo: "mini-chefe", text: "O Grande Octo é um mini-chefe no Ventre de Jabu-Jabu. Ele bloqueia o caminho e deve ser derrotado com o Bumerangue para atordoá-lo." },
  { titulo: "Dançarina de Chamas (Flare Dancer)", tipo: "mini-chefe", text: "A Dançarina de Chamas é um mini-chefe do Templo do Fogo. Ela é uma criatura de fogo que gira e ataca Link. Deve ser derrotada com o Martelo Megaton." },
  { titulo: "Mão Morta (Dead Hand)", tipo: "mini-chefe", text: "A Mão Morta é uma criatura assustadora que aparece no Poço do Poço e no Templo das Sombras. Ela agarra Link e o puxa para o subsolo." },
  { titulo: "Dark Link", tipo: "mini-chefe", text: "Dark Link é uma cópia sombria de Link, encontrada no Templo da Água. Ele imita os movimentos de Link e é um dos inimigos mais desafiadores do jogo." },
  { titulo: "Punho de Ferro (Iron Knuckle)", tipo: "mini-chefe", text: "Os Punhos de Ferro são inimigos gigantes e blindados que aparecem no Templo do Espírito e no Castelo de Ganon. Ataques normais não funcionam; é preciso usar bombas ou o Martelo Megaton." },
  { titulo: "Irmãs Poe (Poe Sisters)", tipo: "mini-chefe", text: "As Irmãs Poe são quatro fantasmas que aparecem no Templo da Floresta. Elas devem ser derrotadas para acender as tochas do templo. Seus nomes são Amy, Beth, Joelle e Meg." },
  { titulo: "Stalfos (Mini-Chefe)", tipo: "mini-chefe", text: "Um Stalfos maior e mais forte aparece como mini-chefe no Templo da Floresta. Ele é um esqueleto guerreiro com mais vida e dano." },
  { titulo: "White Wolfos (Mini-Chefe)", tipo: "mini-chefe", text: "O White Wolfos é um mini-chefe da Caverna de Gelo. É um lobo branco gigante com mais vida e dano que o Wolfos comum." },
  { titulo: "Gerudo Thief", tipo: "mini-chefe", text: "As Ladras Gerudo são mini-chefes na Fortaleza Gerudo. Elas são guerreiras habilidosas que protegem a fortaleza e capturam os carpinteiros." },

  // ── CHEFES PRINCIPAIS (9) ───────────────────────
  { titulo: "Gohma", tipo: "chefe", text: "Gohma é a chefe de Dentro da Grande Árvore Deku. É uma aranha gigante com um olho vulnerável. Link deve atordoá-la com o Estilingue antes de atacá-la com a espada." },
  { titulo: "Rei Dodongo", tipo: "chefe", text: "O Rei Dodongo é o chefe da Caverna Dodongo. É um Dodongo gigante que cospe fogo. Link deve jogar bombas em sua boca quando ele abrir." },
  { titulo: "Barinade", tipo: "chefe", text: "Barinade é o chefe do Ventre do Lorde Jabu-Jabu. É uma anêmona elétrica com tentáculos. Link usa o Bumerangue para cortar as conexões e depois ataca o núcleo." },
  { titulo: "Phantom Ganon", tipo: "chefe", text: "Phantom Ganon é o chefe do Templo da Floresta. É um clone espectral de Ganondorf que atira bolas de energia. Link deve rebater as bolas com a espada." },
  { titulo: "Volvagia", tipo: "chefe", text: "Volvagia é o chefe do Templo do Fogo. É um dragão de lava que emerge de buracos no chão. Link usa o Martelo Megaton para acertá-lo na cabeça." },
  { titulo: "Morpha", tipo: "chefe", text: "Morpha é o chefe do Templo da Água. É uma ameba gigante que controla tentáculos de água. Link usa o Gancho Longo para arrancar o núcleo de dentro da água." },
  { titulo: "Bongo Bongo", tipo: "chefe", text: "Bongo Bongo é o chefe do Templo das Sombras. É uma criatura com duas mãos e um olho gigante, invisível sem a Lente da Verdade. Link usa as Botas Flutuantes." },
  { titulo: "Twinrova", tipo: "chefe", text: "Twinrova é a chefe do Templo do Espírito. É a fusão de Koume e Kotake, as bruxas Gerudo. Ataca com fogo e gelo. Link usa Flechas de Fogo e Gelo." },
  { titulo: "Ganondorf / Ganon", tipo: "chefe", text: "Ganondorf é o antagonista principal. Após ser derrotado no Castelo de Hyrule, ele se transforma em Ganon, um porco monstruoso com duas espadas. Link usa a Espada Mestra e a Flecha de Luz para finalizá-lo." },

  // ── RAÇAS E FACÇÕES (10) ────────────────────────
  { titulo: "Kokiri", tipo: "raca", text: "Os Kokiri são uma raça de crianças que habitam a Floresta Kokiri. Eles nunca envelhecem e têm uma fada guardiã. Acreditam que qualquer um que saia da floresta morrerá." },
  { titulo: "Goron", tipo: "raca", text: "Os Goron são uma raça de criaturas rochosas que vivem na Montanha da Morte. Eles se alimentam de pedras e são conhecidos por sua força e resistência ao calor." },
  { titulo: "Zora", tipo: "raca", text: "Os Zora são uma raça aquática de humanoides-peixe que vivem no Domínio Zora. Eles são liderados pelo Rei Zora e são conhecidos por sua elegância e habilidades aquáticas." },
  { titulo: "Gerudo", tipo: "raca", text: "As Gerudo são uma raça de mulheres guerreiras que vivem no Vale Gerudo. Um homem nasce entre elas a cada cem anos. Ganondorf é o rei Gerudo deste ciclo." },
  { titulo: "Sheikah", tipo: "raca", text: "Os Sheikah são uma raça misteriosa que serviu a Família Real de Hyrule. São conhecidos por sua lealdade, agilidade e conhecimento de segredos. Impa é uma Sheikah." },
  { titulo: "Hylian", tipo: "raca", text: "Os Hylian são a raça dominante em Hyrule, caracterizada por orelhas pontudas e traços humanos. A Família Real e a maioria dos habitantes das cidades são Hylian." },
  { titulo: "Deku", tipo: "raca", text: "Os Deku são criaturas vegetais que incluem as Deku Babas, os Deku Scrubs e a Grande Árvore Deku. Eles são parte da flora consciente de Hyrule." },
  { titulo: "Skulltula (Raça)", tipo: "raca", text: "As Skulltulas são aranhas gigantes que habitam masmorras e áreas escuras. As Aranhas Douradas são uma variante rara e valiosa." },
  { titulo: "Poe", tipo: "raca", text: "Os Poes são fantasmas que aparecem em Hyrule. Eles carregam lanternas e podem ser capturados em garrafas. As Irmãs Poe são mini-chefes do Templo da Floresta." },
  { titulo: "Stalfos (Raça)", tipo: "raca", text: "Os Stalfos são esqueletos guerreiros que aparecem em masmorras. Eles são uma raça de mortos-vivos que servem a Ganondorf." },

  // ── DIVINDADES E ENTIDADES (10) ─────────────────
  { titulo: "Deusas Douradas (Din, Nayru e Farore)", tipo: "divindade", text: "As Deusas Douradas são as criadoras de Hyrule. Din criou a terra, Nayru deu a lei e a ordem, e Farore criou a vida. Elas deixaram a Triforce como símbolo de seu poder." },
  { titulo: "Triforce", tipo: "divindade", text: "A Triforce é uma relíquia sagrada deixada pelas Deusas Douradas. Dividida em três triângulos: Poder, Sabedoria e Coragem. Quando unida, realiza desejos." },
  { titulo: "Triforce da Coragem", tipo: "divindade", text: "A Triforce da Coragem é um dos três triângulos da Triforce. Ela representa a coragem e é destinada a Link." },
  { titulo: "Triforce da Sabedoria", tipo: "divindade", text: "A Triforce da Sabedoria é um dos três triângulos da Triforce. Representa a sabedoria e é destinada à Princesa Zelda." },
  { titulo: "Triforce do Poder", tipo: "divindade", text: "A Triforce do Poder é um dos três triângulos da Triforce. Representa o poder e é tomada por Ganondorf." },
  { titulo: "Grande Árvore Deku (Entidade)", tipo: "divindade", text: "A Grande Árvore Deku é o espírito guardião da Floresta Kokiri. Ela é uma entidade antiga e sábia que protege os Kokiri." },
  { titulo: "Lorde Jabu-Jabu", tipo: "divindade", text: "O Lorde Jabu-Jabu é uma divindade peixe adorada pelos Zora. Ele vive na Fonte Zora e é o local da terceira masmorra do jogo." },
  { titulo: "Kaepora Gaebora (Entidade)", tipo: "divindade", text: "Kaepora Gaebora é uma coruja sábia que se acredita ser a reencarnação de Rauru, o Sábio da Luz. Ele guia Link em sua jornada." },
  { titulo: "Sábios", tipo: "divindade", text: "Os Sábios são seis entidades (Rauru, Saria, Darunia, Ruto, Impa, Nabooru) que selam o Reino Sagrado e ajudam Link a derrotar Ganondorf. Zelda é a sétima Sábia." },
  { titulo: "Reino Sagrado (Entidade)", tipo: "divindade", text: "O Reino Sagrado é uma dimensão onde a Triforce repousa. É acessado através da Porta do Tempo no Templo do Tempo." },

  // ── MECÂNICAS E CURIOSIDADES (10) ───────────────
  { titulo: "Sistema de Tempo (Dia e Noite)", tipo: "mecanica", text: "O tempo em Hyrule passa dinamicamente. Alguns eventos só acontecem de dia, outros só à noite. A Canção do Sol permite alternar entre dia e noite." },
  { titulo: "Viagem no Tempo", tipo: "mecanica", text: "Link viaja entre o passado (criança) e o futuro (adulto) usando a Espada Mestra e a Ocarina do Tempo. Algumas ações no passado afetam o futuro." },
  { titulo: "Aranhas Douradas (Gold Skulltulas)", tipo: "mecanica", text: "Existem 100 Aranhas Douradas escondidas por Hyrule. Ao derrotá-las, Link obtém tokens que podem ser trocados por recompensas na Casa das Skulltulas em Kakariko." },
  { titulo: "Pedaços de Coração (Heart Pieces)", tipo: "mecanica", text: "Existem 36 Pedaços de Coração no jogo. Coletar quatro aumenta a vida máxima de Link em um coração. Eles estão escondidos em minigames, baús e recompensas." },
  { titulo: "Troca de Itens (Trading Game)", tipo: "mecanica", text: "Link pode trocar itens com NPCs para obter recompensas. A cadeia de trocas mais famosa é a que leva à Espada Biggoron." },
  { titulo: "Minigames", tipo: "mecanica", text: "Ocarina of Time tem vários minigames, como o Boliche de Bombchus, a Galeria de Tiro, a Corrida de Cavalos e a Pesca. Alguns dão Pedaços de Coração como prêmio." },
  { titulo: "Máscaras", tipo: "mecanica", text: "As máscaras são itens que Link pode equipar para obter efeitos especiais ou se disfarçar. A Máscara da Skull Kid é uma das mais conhecidas." },
  { titulo: "Magias (Din, Farore, Nayru)", tipo: "mecanica", text: "Link aprende três magias com as Grandes Fadas: Fogo de Din (ataque), Vento de Farore (teletransporte) e Amor de Nayru (escudo). Cada uma consome magia." },
  { titulo: "Ocarina (Instrumento)", tipo: "mecanica", text: "A Ocarina é o instrumento musical de Link. Tocar canções tem efeitos mágicos, como teletransporte, mudança de tempo e abertura de portas." },
  { titulo: "Cavalos (Epona)", tipo: "mecanica", text: "Epona é a égua de Link. Ela pode ser invocada com a Canção de Epona e permite viajar mais rápido por Hyrule, além de saltar cercas." },

  // ── OUTROS (10) ─────────────────────────────────
  { titulo: "Grandes Fadas (Tipos)", tipo: "personagem", text: "Existem várias Grandes Fadas no jogo: a do Poder, a da Sabedoria, a da Coragem e a da Magia. Cada uma concede uma magia ou melhoria diferente." },
  { titulo: "Carpinteiros", tipo: "personagem", text: "Os Carpinteiros são quatro homens que trabalham na construção de Kakariko. Eles são capturados pelas Gerudo e devem ser resgatados por Link na Fortaleza Gerudo." },
  { titulo: "Fabulous Five Froggish Tenors", tipo: "personagem", text: "Os Fabulosos Cinco Tenores Sapos são um grupo de sapos musicais que aparece no Rio Zora. Eles podem ser usados para tocar a Canção dos Sapos." },
  { titulo: "Deku Scrub Brothers", tipo: "personagem", text: "Os Irmãos Deku Scrub são um grupo de Deku Scrubs que aparecem em vários locais. Eles vendem itens e dão dicas a Link." },
  { titulo: "Know-It-All Brothers", tipo: "personagem", text: "Os Irmãos Sabedores são NPCs que dão dicas sobre o jogo. Eles aparecem na Cidade do Castelo de Hyrule e em outros locais." },
  { titulo: "Twin Jugglers", tipo: "personagem", text: "Os Malabaristas Gêmeos são NPCs que fazem malabarismo na Cidade do Castelo de Hyrule. Eles são uma atração local." },
  { titulo: "Hot Rodder Goron", tipo: "personagem", text: "O Goron Corredor é um Goron que participa de corridas na Montanha da Morte. Ele é um dos irmãos Goron." },
  { titulo: "Link the Goron", tipo: "personagem", text: "Link, o Goron, é o filho de Darunia. Ele é um Goron jovem que admira Link e ajuda na luta contra Ganondorf." },
  { titulo: "Nabooru's Subordinate", tipo: "personagem", text: "O Subordinado de Nabooru é um Gerudo que ajuda Link na Fortaleza Gerudo. Ele fornece informações sobre a líder e os planos de Ganondorf." },
  { titulo: "Man Who Could See the Truth (NPC)", tipo: "personagem", text: "O Homem que Podia Ver a Verdade é um NPC da Vila Kakariko que enxerga a verdadeira natureza da situação de Hyrule. Ele dá dicas valiosas a Link." }
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

  const points = MASSIVE_DATA.map((item, i) => ({
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
      ordem: 2000 + i
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
        message: "Qdrant recusou o upsert massivo",
        details: data
      });
    }

    return res.status(200).json({
      status: "ok",
      message: `${points.length} pontos massivos inseridos em ${QDRANT_COLLECTION}`,
      inserted: points.length,
      collection: QDRANT_COLLECTION
    });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};
