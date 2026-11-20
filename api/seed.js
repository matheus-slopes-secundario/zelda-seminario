const ITEMS = [
  {"titulo":"Link","tipo":"personagem","text":"Herói de Ocarina of Time. Criança Kokiri que descobre ser Hylian e viaja entre passado e futuro usando a Ocarina do Tempo para derrotar Ganondorf."},
  {"titulo":"Zelda / Sheik","tipo":"personagem","text":"Princesa de Hyrule que se disfarça como Sheik após Ganondorf tomar o castelo. Guia Link no futuro e revela ser a Sétima Sábia."},
  {"titulo":"Ganondorf","tipo":"personagem","text":"Líder dos Gerudo e antagonista principal. Busca a Triforce do Poder para dominar Hyrule. Sequestra Zelda e governa Hyrule por sete anos."},
  {"titulo":"Ganon","tipo":"chefe","text":"Forma monstruosa de Ganondorf após ser derrotado no Castelo. Um porco gigante com duas espadas. Link usa a Espada Mestra e a Flecha de Luz para finalizá-lo."},
  {"titulo":"Navi","tipo":"personagem","text":"Fada companheira de Link. Enviada pela Grande Árvore Deku para guiá-lo. Dá dicas, alerta sobre inimigos e aponta alvos com o Z-targeting."},
  {"titulo":"Saria","tipo":"personagem","text":"Melhor amiga de Link na Floresta Kokiri. Sábia da Floresta. Presenteia Link com a Ocarina da Floresta, que se torna a Ocarina do Tempo."},
  {"titulo":"Darunia","tipo":"personagem","text":"Líder dos Goron na Cidade Goron. Irmão juramentado de Link e Sábio do Fogo. Ajuda a abrir o Templo do Fogo."},
  {"titulo":"Ruto","tipo":"personagem","text":"Princesa Zora, filha do Rei Zora. Sábia da Água. Fica noiva simbolicamente de Link ao receber a Safira dos Zoras."},
  {"titulo":"Impa","tipo":"personagem","text":"Ama Sheikah da Princesa Zelda. Foge do Castelo com Zelda quando Ganondorf ataca. Sábia das Sombras e guardiã do Templo das Sombras."},
  {"titulo":"Nabooru","tipo":"personagem","text":"Líder das Gerudo e Sábia do Espírito. Rebela-se contra Ganondorf e é capturada. Resgatada por Link no Templo do Espírito."},
  {"titulo":"Rauru","tipo":"personagem","text":"Sábio da Luz e guardião do Templo do Tempo. Mantém Link em sono por sete anos. Pode se transformar em Kaepora Gaebora."},
  {"titulo":"Epona","tipo":"personagem","text":"Égua de Link. Criada por Malon no Rancho Lon Lon. Invocada pela Canção de Epona para viajar por Hyrule mais rápido."},
  {"titulo":"Malon","tipo":"personagem","text":"Filha de Talon no Rancho Lon Lon. Cuida de Epona e ensina a Canção de Epona. Presenteia Link com uma Garrafa de Leite."},
  {"titulo":"Talon","tipo":"personagem","text":"Preguiçoso proprietário do Rancho Lon Lon. Pai de Malon. Perde o rancho para Ingo quando Ganondorf sobe ao poder."},
  {"titulo":"Ingo","tipo":"personagem","text":"Trabalhador do Rancho Lon Lon que toma o rancho de Talon. Treina Epona para corridas. Derrotado por Link em corrida de cavalos."},
  {"titulo":"Mido","tipo":"personagem","text":"Líder autoproclamado dos Kokiri. Arrogante no início, amadurece ao longo da jornada. É o garoto mais velho da vila."},
  {"titulo":"Dampé","tipo":"personagem","text":"Coveiro da Vila Kakariko. Aparece como fantasma quando adulto. Guia Link por uma tumba onde ele encontra o Gancho (Hookshot)."},
  {"titulo":"Biggoron","tipo":"personagem","text":"Goron gigante ferreiro no topo da Montanha da Morte. Forja a Espada Biggoron após longa sequência de trocas de itens."},
  {"titulo":"Koume e Kotake","tipo":"personagem","text":"Bruxas gêmeas Gerudo, mestras de Ganondorf. Fundem-se em Twinrova no Templo do Espírito. Koume usa fogo, Kotake usa gelo."},
  {"titulo":"Rei Zora","tipo":"personagem","text":"Monarca dos Zora e pai da Princesa Ruto. Congelado no Templo da Água quando adulto. Liberta Link para respirar debaixo d'água ao ser descongelado."},
  {"titulo":"Kaepora Gaebora","tipo":"personagem","text":"Coruja sábia que aparece em pontos-chave da jornada. Acredita-se ser a reencarnação de Rauru. Oferece conselhos e transporte."},
  {"titulo":"Grande Árvore Deku","tipo":"personagem","text":"Espírito guardião da Floresta Kokiri. Envenenada por Ganondorf no início do jogo. Seu broto (Deku Tree Sprout) cresce após Link derrotar o mal."},
  {"titulo":"Skull Kid","tipo":"personagem","text":"Criança da floresta que vende a Máscara da Skull Kid no Bosque Perdido. Aparece também em Majora's Mask."},
  {"titulo":"Happy Mask Salesman","tipo":"personagem","text":"Viajante misterioso que vende máscaras na Cidade do Castelo. Está sempre sorrindo. Personagem central em Majora's Mask."},
  {"titulo":"Medigoron","tipo":"personagem","text":"Goron ferreiro na Cidade Goron. Vende a Faca do Gigante por preço alto, mas a arma quebra após poucos usos."},
  {"titulo":"Carpinteiros","tipo":"personagem","text":"Quatro carpinteiros de Kakariko capturados pelas Gerudo na Fortaleza Gerudo. Resgatados por Link para liberar o Templo do Espírito."},
  {"titulo":"Coletor de Poes","tipo":"personagem","text":"NPC na Cidade do Castelo que compra Big Poes de Link. Recompensas incluem uma Garrafa Vazia após 10 Big Poes."},
  {"titulo":"Homem Corredor","tipo":"personagem","text":"NPC na Cidade do Castelo que desafia Link para uma corrida. Extremamente rápido. Recompensa com Garrafa Vazia se derrotado."},
  {"titulo":"Grandes Fadas","tipo":"personagem","text":"Entidades mágicas em Fontes das Fadas. Concedem magias (Fogo de Din, Vento de Farore, Amor de Nayru) e melhorias de itens."},
  {"titulo":"Sábios","tipo":"divindade","text":"Seis entidades (Rauru, Saria, Darunia, Ruto, Impa, Nabooru) que selam o Reino Sagrado. Zelda é a sétima. Ajudam Link a derrotar Ganondorf."},

  {"titulo":"Deku Baba","tipo":"inimigo","text":"Planta carnívora comum na Floresta Kokiri. Ataca mordendo. Solta Sementes Deku e Nuts."},
  {"titulo":"Big Deku Baba","tipo":"inimigo","text":"Versão maior e mais forte da Deku Baba. Aparece em masmorras com mais vida e dano."},
  {"titulo":"Skulltula","tipo":"inimigo","text":"Aranha gigante que aparece em masmorras. Ataca girando e pode ser derrotada com a espada."},
  {"titulo":"Aranha Dourada (Gold Skulltula)","tipo":"inimigo","text":"Variante rara da Skulltula. Existem 100 no jogo. Tokens trocados por recompensas na Casa das Skulltulas em Kakariko."},
  {"titulo":"Keese","tipo":"inimigo","text":"Morcego que aparece em cavernas e masmorras. Variantes de Fogo e Gelo queimam/congelam Link ao encostar."},
  {"titulo":"Stalfos","tipo":"inimigo","text":"Esqueleto guerreiro que aparece em masmorras. Ataca com espada e escudo. Um dos inimigos mais clássicos da série."},
  {"titulo":"Stalchild","tipo":"inimigo","text":"Esqueleto pequeno que aparece à noite no Campo de Hyrule. Persegue Link. Pode ser derrotado com a espada."},
  {"titulo":"ReDead","tipo":"inimigo","text":"Zumbi que aparece em masmorras e no Castelo de Ganon. Paralisa Link com grito e o agarra. Canção do Sol atordoa."},
  {"titulo":"Gibdo","tipo":"inimigo","text":"Múmia que aparece no Poço do Poço e no Templo das Sombras. Lento, mas tem muita vida."},
  {"titulo":"Wolfos","tipo":"inimigo","text":"Lobo gigante que aparece no Bosque Perdido. Variante branca (White Wolfos) é mini-chefe na Caverna de Gelo."},
  {"titulo":"Octorok","tipo":"inimigo","text":"Polvo que cospe pedras. Aparece em áreas aquáticas. Um dos inimigos mais comuns da série."},
  {"titulo":"Peahat","tipo":"inimigo","text":"Planta voadora que ataca com hélices. Aparece no Campo de Hyrule. Só pode ser atingida quando está no chão."},
  {"titulo":"Leever","tipo":"inimigo","text":"Criatura que emerge do solo e gira em direção a Link. Aparece no Deserto Gerudo."},
  {"titulo":"Tektite","tipo":"inimigo","text":"Aranha que salta em direção a Link. Variante azul é mais rápida. Aparece em montanhas."},
  {"titulo":"Guay","tipo":"inimigo","text":"Pássaro que sobrevoa áreas abertas e ataca em picadas. Aparece no Campo de Hyrule."},
  {"titulo":"Like Like","tipo":"inimigo","text":"Criatura que engole Link e rouba seus escudos. Aparece em masmorras. Temido por jogadores."},
  {"titulo":"Wallmaster","tipo":"inimigo","text":"Mão gigante que cai do teto e agarra Link, levando-o de volta ao início da masmorra. Aparece em vários templos."},
  {"titulo":"Floormaster","tipo":"inimigo","text":"Mão que se arrasta pelo chão e agarra Link. Aparece no Templo das Sombras."},
  {"titulo":"Beamos","tipo":"inimigo","text":"Torre com olho que dispara laser. Fixa, derrotada apenas com bombas ou flechas."},
  {"titulo":"Armos","tipo":"inimigo","text":"Estátua que ganha vida e ataca Link. Aparece em masmorras e no Campo de Hyrule."},
  {"titulo":"Deku Scrub","tipo":"inimigo","text":"Criatura vegetal que cospe nozes. Variantes: Business Scrub (vende itens), Mad Scrub (hostil)."},
  {"titulo":"Biri","tipo":"inimigo","text":"Água-viva elétrica que flutua na água. Aparece no Ventre do Lorde Jabu-Jabu. Derrotada com o Bumerangue."},
  {"titulo":"Bari","tipo":"inimigo","text":"Água-viva elétrica maior que a Biri. Divide-se em Biris menores quando derrotada."},
  {"titulo":"Shabom","tipo":"inimigo","text":"Bolha flutuante que estoura e causa dano. Aparece no Ventre do Lorde Jabu-Jabu."},
  {"titulo":"Stinger","tipo":"inimigo","text":"Criatura aquática que salta da água para atacar. Aparece no Lago Hylia e Rio Zora."},
  {"titulo":"Shell Blade","tipo":"inimigo","text":"Amêijoa gigante que se fecha para se proteger. Aparece no Templo da Água. Derrotada com o Gancho."},
  {"titulo":"Parasitic Tentacle","tipo":"inimigo","text":"Tentáculo que bloqueia o caminho no Ventre de Jabu-Jabu. Derrotado com o Bumerangue."},
  {"titulo":"Tailpasaran","tipo":"inimigo","text":"Criatura elétrica que se enterra no chão. Aparece no Templo do Espírito."},
  {"titulo":"Torch Slug","tipo":"inimigo","text":"Lesma de fogo que deixa rastro de chamas. Aparece no Templo do Fogo."},
  {"titulo":"Freezard","tipo":"inimigo","text":"Criatura de gelo que sopra ar congelante. Aparece na Caverna de Gelo e no Templo da Água."},
  {"titulo":"Bubble","tipo":"inimigo","text":"Caveira flutuante que solta chama colorida. Variantes: White (chama azul), Blue (amaldiçoa), Red (dano ao encostar), Green (fraca)."},
  {"titulo":"Moblin","tipo":"inimigo","text":"Goblin que patrulha áreas abertas. Ataca com lança. Variante Club Moblin carrega porrete gigante."},
  {"titulo":"Dinolfos","tipo":"inimigo","text":"Réptil guerreiro mais forte que o Lizalfos. Aparece no Templo do Espírito e no Campo de Treinamento Gerudo."},

  {"titulo":"Espada Kokiri","tipo":"item","text":"Primeira espada de Link, encontrada na Floresta Kokiri. Curta e fraca, mas essencial no início."},
  {"titulo":"Espada Mestra (Master Sword)","tipo":"item","text":"Espada lendária que só o Herói do Tempo pode empunhar. Cravada no pedestal do Templo do Tempo. Ao puxá-la, Link dorme 7 anos e desperta adulto. Também conhecida como Lâmina Aniquiladora do Mal."},
  {"titulo":"Espada Biggoron","tipo":"item","text":"Arma mais forte que Link pode obter. Forjada por Biggoron após longa sequência de trocas. Não quebra e causa dano massivo."},
  {"titulo":"Faca do Gigante (Giant's Knife)","tipo":"item","text":"Arma vendida por Medigoron na Cidade Goron. Poderosa, mas quebra após número limitado de usos."},
  {"titulo":"Escudo Deku","tipo":"item","text":"Escudo de madeira barato, comprado na Floresta Kokiri. Primeiro escudo de Link, quebra facilmente."},
  {"titulo":"Escudo Hylian","tipo":"item","text":"Escudo de metal resistente com brasão de Hyrule. Comprado na Cidade do Castelo ou encontrado em Kakariko. Padrão de Link adulto."},
  {"titulo":"Escudo de Espelho","tipo":"item","text":"Escudo mais forte do jogo, encontrado no Templo do Espírito. Reflete ataques mágicos de volta."},
  {"titulo":"Estilingue das Fadas","tipo":"item","text":"Primeira arma à distância de Link criança, na Grande Árvore Deku. Dispara Sementes Deku."},
  {"titulo":"Bumerangue","tipo":"item","text":"Encontrado no Ventre de Jabu-Jabu. Paralisa inimigos e traz itens de volta. Essencial contra Barinade."},
  {"titulo":"Gancho (Hookshot)","tipo":"item","text":"Encontrado na tumba de Dampé. Link se pendura em superfícies de madeira e se puxa para lugares distantes."},
  {"titulo":"Gancho Longo (Longshot)","tipo":"item","text":"Versão aprimorada do Gancho, no Templo da Água. Dobro do alcance. Necessário para completar o templo."},
  {"titulo":"Arco das Fadas (Fairy Bow)","tipo":"item","text":"Arma à distância de Link adulto, no Templo da Floresta. Combina com fogo, gelo ou luz."},
  {"titulo":"Flecha de Fogo","tipo":"item","text":"Flecha mágica que incendeia alvos. Obtida no Lago Hylia após o Templo da Água, atirando no sol."},
  {"titulo":"Flecha de Gelo","tipo":"item","text":"Flecha mágica que congela inimigos. Obtida no Campo de Treinamento Gerudo."},
  {"titulo":"Flecha de Luz","tipo":"item","text":"Flecha mais poderosa do jogo, obtida com Zelda após despertar os sete Sábios. Essencial contra Ganon."},
  {"titulo":"Martelo Megaton","tipo":"item","text":"Encontrado no Templo do Fogo. Arma pesada usada para quebrar rochas e derrotar Volvagia."},
  {"titulo":"Lente da Verdade","tipo":"item","text":"Item mágico do Poço do Poço. Revela objetos e inimigos invisíveis. Consome magia."},
  {"titulo":"Botas de Ferro","tipo":"item","text":"Encontradas na Caverna de Gelo. Fazem Link afundar na água e no chão. Essenciais no Templo da Água."},
  {"titulo":"Botas Flutuantes (Hover Boots)","tipo":"item","text":"Encontradas no Templo das Sombras. Permitem caminhar no ar por curto período. Escorregadias em solo firme."},
  {"titulo":"Túnica Goron","tipo":"item","text":"Veste resistente ao fogo, dada por Darunia. Permite entrar em áreas vulcânicas sem dano."},
  {"titulo":"Túnica Zora","tipo":"item","text":"Permite respirar debaixo d'água e nadar mais rápido. Dada pelo Rei Zora após ser descongelado."},
  {"titulo":"Túnica Kokiri","tipo":"item","text":"Roupa inicial de Link. Túnica verde simples usada por todos os Kokiri."},
  {"titulo":"Ocarina das Fadas","tipo":"item","text":"Primeiro instrumento de Link, dado por Saria. Substituída pela Ocarina do Tempo."},
  {"titulo":"Ocarina do Tempo","tipo":"item","text":"Instrumento sagrado azul dado por Zelda. Permite viajar no tempo, abrir templos, invocar Epona e mudar dia/noite."},
  {"titulo":"Bomba","tipo":"item","text":"Item explosivo usado para destruir paredes rachadas e inimigos. Pode ser carregada e arremessada."},
  {"titulo":"Bombchu","tipo":"item","text":"Bomba-aranha que anda em linha reta e sobe paredes. Útil para alvos em locais de difícil acesso."},
  {"titulo":"Semente Deku","tipo":"item","text":"Munição do Estilingue das Fadas. Encontrada em arbustos e comprada em lojas."},
  {"titulo":"Nuez Deku","tipo":"item","text":"Nozes que atordoam inimigos quando arremessadas. Dropadas por Deku Babas."},
  {"titulo":"Graveto Deku","tipo":"item","text":"Galhos usados como arma ou para acender tochas. Quebram após poucos usos."},
  {"titulo":"Sementes Mágicas","tipo":"item","text":"Vendidas pelo Vendedor de Feijões. Plantadas em solo macio, crescem em plantas que dão recompensas no futuro."},
  {"titulo":"Garrafa Vazia","tipo":"item","text":"Recipiente para poções, fadas, leite e outros itens. Existem 4 no jogo."},
  {"titulo":"Poção Vermelha","tipo":"item","text":"Restaura a saúde de Link. Comprada em lojas ou preparada com ingredientes."},
  {"titulo":"Poção Verde","tipo":"item","text":"Restaura a magia de Link. Comprada em lojas."},
  {"titulo":"Poção Azul","tipo":"item","text":"Restaura saúde e magia. Poção mais completa do jogo."},
  {"titulo":"Fada","tipo":"item","text":"Criatura mágica que restaura saúde de Link quando ele morre (se estiver em garrafa). Encontrada em fontes."},
  {"titulo":"Pedaço de Coração","tipo":"item","text":"Fragmentos espalhados por Hyrule. Quatro aumentam a vida máxima em um coração. Existem 36 no jogo."},
  {"titulo":"Coração de Cristal (Heart Container)","tipo":"item","text":"Recompensa por derrotar chefes. Aumenta a vida máxima em um coração."},
  {"titulo":"Rúpia","tipo":"item","text":"Moeda de Hyrule. Cores diferentes (verde, azul, vermelha, roxa, laranja) e valores diferentes."},
  {"titulo":"Big Poe","tipo":"item","text":"Fantasma capturável em garrafa. Coletor de Poes compra em troca de recompensas."},
  {"titulo":"Máscara da Skull Kid","tipo":"item","text":"Item vendido por Skull Kid no Bosque Perdido. Permite Link se disfarçar de Skull Kid."},
  {"titulo":"Safira dos Zoras (Zora's Sapphire)","tipo":"item","text":"Pedra preciosa dada pela Princesa Ruto. Uma das três Pedras Espirituais, necessária para abrir a Porta do Tempo."},

  {"titulo":"Canção de Ninar da Zelda (Zelda's Lullaby)","tipo":"cancao","text":"Primeira canção de Link, ensinada por Impa. Abre o Domínio Zora, acessa a Cidade Goron e resolve puzzles.","comandos":"N64: ←, ↑, →, ←, ↑, →"},
  {"titulo":"Canção de Epona (Epona's Song)","tipo":"cancao","text":"Composta por Malon e ensinada a Link. Invoca Epona de qualquer lugar de Hyrule.","comandos":"N64: ↑, ←, →, ↑, ←, →"},
  {"titulo":"Canção de Saria (Saria's Song)","tipo":"cancao","text":"Canção da amizade entre Saria e Link. Abre o Templo da Floresta e permite comunicação com Saria.","comandos":"N64: ↓, →, ←, ↓, →, ←"},
  {"titulo":"Canção do Sol (Sun's Song)","tipo":"cancao","text":"Invoca luz do sol ou noite. Necessária para abrir o Templo das Sombras e resolver puzzles no Poço do Poço.","comandos":"N64: →, ↓, ↑, →, ↓, ↑"},
  {"titulo":"Canção do Tempo (Song of Time)","tipo":"cancao","text":"Ensinada por Zelda. Abre a Porta do Tempo e move blocos de tempo. Canção mais icônica do jogo.","comandos":"N64: →, A, ↓, →, A, ↓"},
  {"titulo":"Canção das Tempestades (Song of Storms)","tipo":"cancao","text":"Aprendida no Moinho de Kakariko. Invoca chuva. Faz a planta carnívora crescer no Deserto Gerudo.","comandos":"N64: A, ↓, ↑, A, ↓, ↑"},
  {"titulo":"Canção do Espantalho (Scarecrow's Song)","tipo":"cancao","text":"Ensinada por Pierre. Faz o espantalho aparecer como alvo para o Gancho em certos lugares.","comandos":"Livre: você compõe 8 notas"},
  {"titulo":"Minueto da Floresta (Minuet of Forest)","tipo":"cancao","text":"Ensinado por Sheik. Teletransporta Link para o Prado da Floresta Sagrada, em frente ao Templo da Floresta.","comandos":"N64: A, ↑, ←, →, ←, →"},
  {"titulo":"Bolero do Fogo (Bolero of Fire)","tipo":"cancao","text":"Ensinado por Sheik. Teletransporta Link para a Montanha da Morte, em frente ao Templo do Fogo.","comandos":"N64: ↓, A, ↓, A, →, ↓, A, ↓"},
  {"titulo":"Serenata da Água (Serenade of Water)","tipo":"cancao","text":"Ensinada por Sheik. Teletransporta Link para o Lago Hylia, em frente ao Templo da Água.","comandos":"N64: A, ↓, →, →, ←"},
  {"titulo":"Noturno das Sombras (Nocturne of Shadow)","tipo":"cancao","text":"Ensinado por Sheik. Teletransporta Link para o Cemitério de Kakariko, em frente ao Templo das Sombras.","comandos":"N64: →, ←, →, A, ←, →, A"},
  {"titulo":"Réquiem do Espírito (Requiem of Spirit)","tipo":"cancao","text":"Ensinado por Sheik. Teletransporta Link para o Deserto Gerudo, em frente ao Templo do Espírito.","comandos":"N64: →, ←, →, A, ←, →, A"},
  {"titulo":"Prelúdio da Luz (Prelude of Light)","tipo":"cancao","text":"Ensinado por Sheik. Teletransporta Link para o Templo do Tempo, no Castelo de Hyrule.","comandos":"N64: ↑, →, ↑, →, ↓, ↑"},

  {"titulo":"Floresta Kokiri","tipo":"local","text":"Lar dos Kokiri e da Grande Árvore Deku. Link cresce aqui como criança. Crianças nunca envelhecem neste local."},
  {"titulo":"Vila Kokiri","tipo":"local","text":"Pequena vila dentro da Floresta Kokiri. Casas nas árvores, uma loja e o Campo de Treinamento."},
  {"titulo":"Dentro da Grande Árvore Deku","tipo":"local","text":"Primeira masmorra do jogo. Labirinto de madeira e teias habitado por Gohma."},
  {"titulo":"Campo de Hyrule","tipo":"local","text":"Grande área central que conecta todas as regiões. Contém o Castelo de Hyrule, o Rancho Lon Lon e caminhos para as outras áreas."},
  {"titulo":"Castelo de Hyrule","tipo":"local","text":"Sede do governo e lar da Família Real. Possui o Pátio do Castelo, a Cidade ao redor e o Templo do Tempo nos fundos."},
  {"titulo":"Cidade do Castelo de Hyrule","tipo":"local","text":"Capital de Hyrule. Possui lojas, Bazar, Loja de Poções, Boliche de Bombchus e Galeria de Tiro."},
  {"titulo":"Templo do Tempo","tipo":"local","text":"Dentro do Castelo de Hyrule. Guarda o pedestal da Espada Mestra e a Câmara dos Sábios. Ponto de viagem no tempo."},
  {"titulo":"Rancho Lon Lon","tipo":"local","text":"Fazenda de cavalos e vacas a oeste do Castelo. Onde Link conhece Malon e Epona."},
  {"titulo":"Vila Kakariko","tipo":"local","text":"Vila ao pé da Montanha da Morte, lar dos Sheikah. Possui o Poço do Poço, Cemitério e Casa de Impa."},
  {"titulo":"Cemitério de Kakariko","tipo":"local","text":"Atrás da vila. Abriga o Poço do Poço, entrada para o Templo das Sombras e a lápide onde a Canção do Sol é aprendida."},
  {"titulo":"Poço do Poço","tipo":"local","text":"Masmorra opcional sob o Cemitério. Acessível quando criança. Contém a Lente da Verdade."},
  {"titulo":"Montanha da Morte","tipo":"local","text":"Vulcão ativo a nordeste de Hyrule. Lar dos Goron e do dragão Volvagia."},
  {"titulo":"Trilha da Montanha da Morte","tipo":"local","text":"Caminho perigoso cheio de rochas rolantes. Leva à Cidade Goron e ao topo da montanha."},
  {"titulo":"Cratera da Montanha da Morte","tipo":"local","text":"Topo do vulcão. Entrada para o Templo do Fogo e Fonte da Grande Fada do Poder."},
  {"titulo":"Cidade Goron","tipo":"local","text":"Dentro da Montanha da Morte. Lar dos Goron liderados por Darunia. Entrada do Templo do Fogo."},
  {"titulo":"Caverna Dodongo","tipo":"local","text":"Masmorra na Montanha da Morte, segunda do jogo. Goron extraem pedras para se alimentar."},
  {"titulo":"Domínio Zora","tipo":"local","text":"Lar dos Zora, no Rio Zora. Possui a Fonte Zora e a entrada para o Ventre de Jabu-Jabu."},
  {"titulo":"Rio Zora","tipo":"local","text":"Curso d'água que conecta o Lago Hylia ao Domínio Zora. Habitado por Zoras."},
  {"titulo":"Fonte Zora","tipo":"local","text":"Caverna sagrada no Domínio Zora onde vive o Lorde Jabu-Jabu. Entrada para a masmorra do Ventre."},
  {"titulo":"Ventre do Lorde Jabu-Jabu","tipo":"local","text":"Terceira masmorra do jogo. Link entra na divindade peixe para resgatar a Princesa Ruto."},
  {"titulo":"Lago Hylia","tipo":"local","text":"Grande lago ao sudeste de Hyrule. Laboratório de cientistas, Templo da Água submerso e área de pesca."},
  {"titulo":"Templo da Água","tipo":"local","text":"Terceira masmorra adulta, submersa no Lago Hylia. Exige mudar o nível da água. Abriga Morpha e Dark Link."},
  {"titulo":"Caverna de Gelo","tipo":"local","text":"Masmorra opcional no Domínio Zora. Contém as Botas de Ferro. Habitada por Freezards e White Wolfos."},
  {"titulo":"Vale Gerudo","tipo":"local","text":"Fica no Deserto Gerudo, a oeste de Hyrule. Sede das Gerudo e de Ganondorf. Contém a Fortaleza Gerudo e o Templo do Espírito."},
  {"titulo":"Fortaleza Gerudo","tipo":"local","text":"Prisão no Vale Gerudo. Link resgata os quatro carpinteiros capturados pelas Gerudo."},
  {"titulo":"Deserto Gerudo","tipo":"local","text":"Vasta área árida a oeste de Hyrule. Abriga o Templo do Espírito. Atravessado com a Canção do Vento."},
  {"titulo":"Templo do Espírito","tipo":"local","text":"Quinta masmorra adulta, no Deserto Gerudo. Covil de Twinrova. Requer a Canção do Vento para acesso."},
  {"titulo":"Bosque Perdido","tipo":"local","text":"Floresta labiríntica a oeste da Floresta Kokiri. Fácil de se perder, a menos que se siga a música de Saria."},
  {"titulo":"Prado da Floresta Sagrada","tipo":"local","text":"Área tranquila dentro do Bosque Perdido onde Saria espera por Link. Entrada para o Templo da Floresta."},
  {"titulo":"Templo da Floresta","tipo":"local","text":"Primeira masmorra adulta, no Prado da Floresta Sagrada. Abriga Phantom Ganon e concede o Arco das Fadas."},
  {"titulo":"Templo do Fogo","tipo":"local","text":"Segunda masmorra adulta, dentro da Montanha da Morte. Covil de Volvagia. Link obtém o Martelo Megaton."},
  {"titulo":"Templo das Sombras","tipo":"local","text":"Quarta masmorra adulta, acessível pelo Poço do Poço. Local escuro, cheio de fantasmas e da criatura Dead Hand."},
  {"titulo":"Castelo de Ganon","tipo":"local","text":"Fortaleza final de Ganondorf, construída sobre as ruínas do Castelo de Hyrule. Link escala a torre para enfrentar Ganondorf e Ganon."},
  {"titulo":"Reino Sagrado","tipo":"local","text":"Local onde a Triforce repousa, acessível pela Porta do Tempo no Templo do Tempo."},
  {"titulo":"Casa das Skulltulas","tipo":"local","text":"Casa amaldiçoada na Vila Kakariko. Família transformada em Skulltulas. Aranhas Douradas quebram a maldição."},
  {"titulo":"Fonte das Fadas","tipo":"local","text":"Locais sagrados onde as Grandes Fadas residem. Concedem magias e melhorias a Link."},
  {"titulo":"Coliseu do Deserto","tipo":"local","text":"Arena no Deserto Gerudo. Local do Campo de Treinamento Gerudo, onde Link obtém a Flecha de Gelo."},
  {"titulo":"Moinho de Kakariko","tipo":"local","text":"Construção na Vila Kakariko. Onde Link aprende a Canção das Tempestades quando criança."},

  {"titulo":"Gohma","tipo":"chefe","text":"Chefe de Dentro da Grande Árvore Deku. Aranha gigante com olho vulnerável. Atordoada com Estilingue e atacada com espada."},
  {"titulo":"Rei Dodongo","tipo":"chefe","text":"Chefe da Caverna Dodongo. Dodongo gigante que cospe fogo. Link joga bombas em sua boca quando ele abre."},
  {"titulo":"Barinade","tipo":"chefe","text":"Chefe do Ventre do Lorde Jabu-Jabu. Anêmona elétrica com tentáculos. Bumerangue corta as conexões."},
  {"titulo":"Phantom Ganon","tipo":"chefe","text":"Chefe do Templo da Floresta. Clone espectral de Ganondorf que atira bolas de energia. Link rebate com espada."},
  {"titulo":"Volvagia","tipo":"chefe","text":"Chefe do Templo do Fogo. Dragão de lava que emerge de buracos. Atingido com o Martelo Megaton na cabeça."},
  {"titulo":"Morpha","tipo":"chefe","text":"Chefe do Templo da Água. Ameba gigante que controla tentáculos de água. Link usa o Gancho Longo para arrancar o núcleo."},
  {"titulo":"Bongo Bongo","tipo":"chefe","text":"Chefe do Templo das Sombras. Criatura com duas mãos e olho gigante, invisível sem a Lente da Verdade."},
  {"titulo":"Twinrova","tipo":"chefe","text":"Chefe do Templo do Espírito. Fusão de Koume e Kotake. Ataca com fogo e gelo. Link usa Flechas de Fogo e Gelo."},

  {"titulo":"Grande Octo","tipo":"mini-chefe","text":"Mini-chefe no Ventre de Jabu-Jabu. Bloqueia o caminho. Derrotado com o Bumerangue para atordoar."},
  {"titulo":"Dançarina de Chamas (Flare Dancer)","tipo":"mini-chefe","text":"Mini-chefe do Templo do Fogo. Criatura de fogo que gira e ataca. Derrotada com o Martelo Megaton."},
  {"titulo":"Mão Morta (Dead Hand)","tipo":"mini-chefe","text":"Criatura assustadora do Poço do Poço e Templo das Sombras. Agarra Link e o puxa para o subsolo."},
  {"titulo":"Dark Link","tipo":"mini-chefe","text":"Cópia sombria de Link no Templo da Água. Imita seus movimentos. Um dos inimigos mais desafiadores do jogo."},
  {"titulo":"Punho de Ferro (Iron Knuckle)","tipo":"mini-chefe","text":"Inimigo gigante e blindado do Templo do Espírito e Castelo de Ganon. Ataques normais não funcionam. Vulnerável a bombas ou Martelo Megaton."},
  {"titulo":"Irmãs Poe (Poe Sisters)","tipo":"mini-chefe","text":"Quatro fantasmas no Templo da Floresta. Amy, Beth, Joelle e Meg. Devem ser derrotadas para acender tochas."},
  {"titulo":"Gerudo Thief","tipo":"mini-chefe","text":"Guerreiras Gerudo na Fortaleza Gerudo. Protegem a fortaleza e capturam os carpinteiros."},
  {"titulo":"White Wolfos","tipo":"mini-chefe","text":"Mini-chefe da Caverna de Gelo. Lobo branco gigante com mais vida e dano que o Wolfos comum."},
  {"titulo":"Lizalfos","tipo":"mini-chefe","text":"Réptil guerreiro que aparece na Caverna Dodongo e no Templo do Fogo. Ágil, ataca com espadas."},

  {"titulo":"Kokiri","tipo":"raca","text":"Raça de crianças que habita a Floresta Kokiri. Nunca envelhecem. Cada um tem uma fada guardiã."},
  {"titulo":"Goron","tipo":"raca","text":"Criaturas rochosas que vivem na Montanha da Morte. Alimentam-se de pedras. Conhecidos por força e resistência ao calor."},
  {"titulo":"Zora","tipo":"raca","text":"Raça aquática de humanoides-peixe que vive no Domínio Zora. Liderados pelo Rei Zora. Elegantes e habilidosos na água."},
  {"titulo":"Gerudo","tipo":"raca","text":"Raça de mulheres guerreiras do Vale Gerudo. Um homem nasce a cada cem anos. Ganondorf é o rei Gerudo deste ciclo."},
  {"titulo":"Sheikah","tipo":"raca","text":"Raça misteriosa que serviu a Família Real. Leais, ágeis e conhecedores de segredos. Impa é uma Sheikah."},
  {"titulo":"Hylian","tipo":"raca","text":"Raça dominante em Hyrule. Orelhas pontudas e traços humanos. Família Real e maioria dos habitantes das cidades."},
  {"titulo":"Deku","tipo":"raca","text":"Criaturas vegetais que incluem Deku Babas, Deku Scrubs e a Grande Árvore Deku. Flora consciente de Hyrule."},
  {"titulo":"Skulltula (Raça)","tipo":"raca","text":"Aranhas gigantes que habitam masmorras. Aranhas Douradas são variante rara e valiosa."},

  {"titulo":"Deusas Douradas (Din, Nayru e Farore)","tipo":"divindade","text":"Criadoras de Hyrule. Din criou a terra, Nayru a lei e a ordem, Farore a vida. Deixaram a Triforce como símbolo de seu poder."},
  {"titulo":"Triforce","tipo":"divindade","text":"Relíquia sagrada deixada pelas Deusas. Três triângulos: Poder, Sabedoria e Coragem. Quando unida, realiza desejos."},
  {"titulo":"Triforce da Coragem","tipo":"divindade","text":"Triângulo que representa a coragem. Destinada a Link."},
  {"titulo":"Triforce da Sabedoria","tipo":"divindade","text":"Triângulo que representa a sabedoria. Destinada à Princesa Zelda."},
  {"titulo":"Triforce do Poder","tipo":"divindade","text":"Triângulo que representa o poder. Tomado por Ganondorf."},
  {"titulo":"Lorde Jabu-Jabu","tipo":"divindade","text":"Divindade peixe adorada pelos Zora. Vive na Fonte Zora. Local da terceira masmorra do jogo."},

  {"titulo":"Sistema de Tempo (Dia e Noite)","tipo":"mecanica","text":"Tempo em Hyrule passa dinamicamente. Alguns eventos só ocorrem de dia ou à noite. Canção do Sol alterna entre eles."},
  {"titulo":"Viagem no Tempo","tipo":"mecanica","text":"Link viaja entre passado (criança) e futuro (adulto) usando a Espada Mestra e a Ocarina do Tempo. Ações no passado afetam o futuro."},
  {"titulo":"Aranhas Douradas (Gold Skulltulas)","tipo":"mecanica","text":"100 Aranhas Douradas escondidas por Hyrule. Tokens trocados por recompensas na Casa das Skulltulas."},
  {"titulo":"Pedaços de Coração (Heart Pieces)","tipo":"mecanica","text":"36 Pedaços de Coração no jogo. Quatro aumentam a vida máxima em um coração. Escondidos em minigames, baús e recompensas."},
  {"titulo":"Troca de Itens (Trading Game)","tipo":"mecanica","text":"Link troca itens com NPCs para obter recompensas. A cadeia mais famosa leva à Espada Biggoron."},
  {"titulo":"Minigames","tipo":"mecanica","text":"Boliche de Bombchus, Galeria de Tiro, Corrida de Cavalos, Pesca. Alguns dão Pedaços de Coração como prêmio."},
  {"titulo":"Máscaras","tipo":"mecanica","text":"Itens que Link pode equipar para efeitos especiais ou disfarces. Máscara da Skull Kid é uma das mais conhecidas."},
  {"titulo":"Magias (Din, Farore, Nayru)","tipo":"mecanica","text":"Link aprende três magias com as Grandes Fadas: Fogo de Din (ataque), Vento de Farore (teletransporte), Amor de Nayru (escudo)."},
  {"titulo":"Ocarina (Instrumento)","tipo":"mecanica","text":"Instrumento musical de Link. Tocar canções tem efeitos mágicos: teletransporte, mudança de tempo, abertura de portas."},
  {"titulo":"Cavalos (Epona)","tipo":"mecanica","text":"Epona é a égua de Link. Invocada pela Canção de Epona. Permite viajar mais rápido e saltar cercas."}
];

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ message: "Use POST" });
  if (req.headers["x-admin-token"] !== process.env.ADMIN_TOKEN) return res.status(401).json({ message: "Não autorizado" });

  const baseUrl = process.env.QDRANT_URL.replace(/\/$/, "");
  const headers = { "api-key": process.env.QDRANT_API_KEY, "Content-Type": "application/json" };
  const col = process.env.QDRANT_COLLECTION;

  try {
    // 🧹 PASSO 1: Limpa o banco para não duplicar
    await fetch(`${baseUrl}/collections/${col}/points/delete?wait=true`, {
      method: "POST",
      headers,
      body: JSON.stringify({ filter: { must: [] } })
    });

    // 🌱 PASSO 2: Insere em lotes de 25 itens para não sobrecarregar
    const BATCH_SIZE = 25;
    let inseridos = 0;

    for (let i = 0; i < ITEMS.length; i += BATCH_SIZE) {
      const batch = ITEMS.slice(i, i + BATCH_SIZE);
      const points = batch.map((item) => ({
        id: crypto.randomUUID(),
        vector: {
          dense: { text: item.text, model: "intfloat/multilingual-e5-small" },
          bm25:  { text: item.text, model: "qdrant/bm25" }
        },
        payload: { 
          text: item.text, 
          titulo: item.titulo, 
          tipo: item.tipo, 
          jogo: "Ocarina of Time",
          comandos: item.comandos || null
        }
      }));

      const r = await fetch(`${baseUrl}/collections/${col}/points?wait=true`, {
        method: "PUT",
        headers,
        body: JSON.stringify({ points })
      });

      if (!r.ok) {
        const errorData = await r.json();
        return res.status(500).json({ 
          status: "error", 
          message: `Qdrant recusou o lote ${Math.floor(i/BATCH_SIZE) + 1}`, 
          details: errorData 
        });
      }
      inseridos += points.length;
    }

    return res.status(200).json({
      status: "ok",
      message: `Sucesso! Banco limpo e ${inseridos} registros únicos inseridos (incluindo comandos N64).`
    });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
