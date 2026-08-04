// ========== DADOS DOS MISTÉRIOS (COM TEXTOS BÍBLICOS COMPLETOS) ==========

const traditionalMysteriesData = {
  segunda: {
    title: 'Mistérios Gozosos - Segunda-feira',
    menuLabel: 'Segunda - Mistérios Gozosos',
    mysteries: [
      {
        number: 1,
        title: 'A Anunciação',
        scripture:
          "No sexto mês, o anjo Gabriel foi enviado por Deus a uma cidade da Galileia, chamada Nazaré, a uma virgem desposada com um varão chamado José, da casa de Davi; e o nome da virgem era Maria. Entrando onde ela estava, disse-lhe: 'Alegra-te, cheia de graça, o Senhor está contigo'. Ela ficou intrigada com essa palavra e pôs-se a pensar qual seria o significado da saudação. O anjo, porém, acrescentou: 'Não temas, Maria! Encontraste graça junto de Deus. Eis que conceberás no teu seio e darás à luz um filho, e tu o chamarás com o nome de Jesus'.",
        reference: 'Lucas 1, 26-31',
        meditation:
          'Contemplemos a humildade e obediência de Maria ao aceitar ser a Mãe de Deus. Peçamos a graça de sermos dóceis à vontade divina em nossa vida.',
      },
      {
        number: 2,
        title: 'A Visitação',
        scripture:
          'Naqueles dias, Maria se levantou e foi às pressas às montanhas, a uma cidade de Judá. Entrou em casa de Zacarias e saudou Isabel. Ora, quando Isabel ouviu a saudação de Maria, a criança estremeceu no seu seio e Isabel ficou repleta do Espírito Santo. E exclamou em alta voz: "Bendita és tu entre as mulheres e bendito é o fruto do teu ventre! Donde me vem esta graça de vir a mim a mãe do meu Senhor? Pois quando a voz da tua saudação chegou aos meus ouvidos, a criança estremeceu de alegria no meu seio".',
        reference: 'Lucas 1, 39-44',
        meditation:
          'Meditemos sobre a caridade de Maria em visitar e ajudar sua prima Isabel. Peçamos a graça de servir ao próximo com prontidão e amor generoso.',
      },
      {
        number: 3,
        title: 'O Nascimento de Jesus',
        scripture:
          'Aconteceu que, estando eles ali, completaram-se os dias dela. E deu à luz o seu filho primogênito, e enfaixou-o e reclinou-o numa manjedoura, porque não havia lugar para eles na sala. Havia nessa região pastores que viviam nos campos e guardavam o seu rebanho durante as vigílias da noite. Um anjo do Senhor apareceu-lhes e a glória do Senhor refulgiu ao redor deles; e ficaram possuídos de grande temor. O anjo disse-lhes: "Não temais, eis que vos anuncio uma boa-nova que será uma grande alegria para todo o povo: hoje vos nasceu um Salvador, que é o Cristo Senhor, na cidade de Davi".',
        reference: 'Lucas 2, 6-11',
        meditation:
          'Contemplemos a simplicidade e pobreza do nascimento do Salvador. Abramos nosso coração para acolher Jesus com humildade.',
      },
      {
        number: 4,
        title: 'A Apresentação no Templo',
        scripture:
          "Quando se completaram os dias para a purificação deles segundo a Lei de Moisés, levaram-no a Jerusalém para apresentá-lo ao Senhor, conforme está escrito na Lei do Senhor: 'Todo primogênito do sexo masculino será consagrado ao Senhor', e para oferecerem o sacrifício prescrito pela Lei do Senhor, um par de rolas ou dois pombinhos. Havia em Jerusalém um homem chamado Simeão. Este homem, justo e piedoso, esperava a consolação de Israel, e o Espírito Santo estava nele.",
        reference: 'Lucas 2, 22-25',
        meditation:
          'Meditemos sobre a obediência de Maria e José à lei de Deus. Consagremos nossa vida inteiramente ao Senhor.',
      },
      {
        number: 5,
        title: 'A Perda e o Encontro de Jesus no Templo',
        scripture:
          'Decorridos três dias, encontraram-no no Templo, sentado no meio dos doutores, ouvindo-os e interrogando-os. Todos os que o ouviam estavam extasiados com a sua inteligência e com as suas respostas. Ao vê-lo, ficaram surpresos, e sua mãe lhe disse: "Filho, por que agiste assim conosco? Eis que teu pai e eu, angustiados, te procurávamos". Respondeu-lhes ele: "Por que me procuráveis? Não sabíeis que devo ocupar-me das coisas de meu Pai?".',
        reference: 'Lucas 2, 46-49',
        meditation:
          'Contemplemos Jesus dedicado às coisas de seu Pai celestial. Busquemos fazer sempre a vontade de Deus em primeiro lugar.',
      },
    ],
  },
  terca: {
    title: 'Mistérios Dolorosos - Terça-feira',
    menuLabel: 'Terça - Mistérios Dolorosos',
    mysteries: [
      {
        number: 1,
        title: 'A Agonia de Jesus no Horto das Oliveiras',
        scripture:
          "Então Jesus chegou com eles a um lugar chamado Getsêmani e disse aos discípulos: 'Assentai-vos aqui, enquanto eu vou ali orar'. Tomando consigo Pedro e os dois filhos de Zebedeu, começou a entristecer-se e a angustiar-se. Disse-lhes então: 'Minha alma está triste até a morte. Ficai aqui e vigiai comigo'. Adiantando-se um pouco, prostrou-se com a face por terra, orando e dizendo: 'Meu Pai, se é possível, afasta de mim este cálice! Todavia, não seja como eu quero, mas sim como tu queres'.",
        reference: 'Mateus 26, 36-39',
        meditation:
          'Contemplemos a agonia de Jesus e sua total submissão à vontade do Pai. Ofereçamos nossas angústias e sofrimentos unidos aos de Cristo.',
      },
      {
        number: 2,
        title: 'A Flagelação de Jesus',
        scripture:
          'Pilatos então tomou Jesus e mandou flagelá-lo. Os soldados, tecendo uma coroa de espinhos, puseram-lha na cabeça e vestiram-no com um manto de púrpura. Aproximavam-se dele e diziam: "Salve, rei dos judeus!". E davam-lhe bofetadas.',
        reference: 'João 19, 1-3',
        meditation:
          'Meditemos sobre os sofrimentos físicos que Jesus suportou por nossos pecados. Peçamos perdão por nossas ofensas e a graça da conversão.',
      },
      {
        number: 3,
        title: 'A Coroação de Espinhos',
        scripture:
          'Os soldados, tecendo uma coroa de espinhos, puseram-lha na cabeça e vestiram-no com um manto de púrpura. Aproximavam-se dele e diziam: "Salve, rei dos judeus!". E davam-lhe bofetadas. Pilatos saiu novamente e disse-lhes: "Eis que eu vo-lo trago fora, para saberdes que não acho nele crime algum". Saiu, pois, Jesus, trazendo a coroa de espinhos e o manto de púrpura. Disse-lhes Pilatos: "Eis o homem!".',
        reference: 'João 19, 2-5',
        meditation:
          'Contemplemos a paciência de Jesus diante das humilhações e zombarias. Aceitemos as humilhações com mansidão e perdão.',
      },
      {
        number: 4,
        title: 'Jesus Carrega a Cruz',
        scripture:
          'Pilatos então o entregou para ser crucificado. Tomaram, pois, a Jesus. Carregando ele mesmo a cruz, saiu para o lugar chamado Calvário, que em hebraico se chama Gólgota. Seguia-o grande multidão do povo e de mulheres que batiam no peito e o lamentavam. Voltando-se para elas, Jesus disse: "Filhas de Jerusalém, não choreis por mim, mas chorai por vós mesmas e por vossos filhos".',
        reference: 'João 19, 16-17; Lucas 23, 27-28',
        meditation:
          'Meditemos sobre a força e o amor de Jesus ao carregar nossa cruz de pecados. Carreguemos nossa cruz diária com coragem e amor.',
      },
      {
        number: 5,
        title: 'A Crucificação e Morte de Jesus',
        scripture:
          'Quando chegaram ao lugar chamado Calvário, ali o crucificaram, bem como aos malfeitores, um à direita e outro à esquerda. Jesus, porém, dizia: "Pai, perdoa-lhes, porque não sabem o que fazem". Era quase à hora sexta e as trevas cobriram toda a terra até a hora nona. O sol se eclipsou. O véu do Templo rasgou-se pelo meio. Jesus deu um forte grito: "Pai, em tuas mãos entrego o meu espírito". E, dizendo isso, expirou.',
        reference: 'Lucas 23, 33-34.44-46',
        meditation:
          'Contemplemos o supremo sacrifício de Jesus por nossa salvação. Agradeçamos o dom inestimável da Redenção e vivamos em santidade.',
      },
    ],
  },
  quarta: {
    title: 'Mistérios Gloriosos - Quarta-feira',
    menuLabel: 'Quarta - Mistérios Gloriosos',
    mysteries: [
      {
        number: 1,
        title: 'A Ressurreição de Jesus',
        scripture:
          "Passado o sábado, Maria Madalena, Maria, mãe de Tiago, e Salomé compraram aromas para ungir Jesus. No primeiro dia da semana, muito cedo, ao nascer do sol, foram ao sepulcro. Diziam entre si: 'Quem nos removerá a pedra da entrada do sepulcro?'. Levantando os olhos, viram que a pedra já estava removida; e era muito grande. Entrando no sepulcro, viram um jovem sentado à direita, vestido de branco, e ficaram surpreendidas. Ele lhes disse: 'Não vos assusteis! Procurais Jesus de Nazaré, que foi crucificado. Ressuscitou, não está aqui. Eis o lugar onde o puseram'.",
        reference: 'Marcos 16, 1-6',
        meditation:
          'Contemplemos a vitória de Jesus sobre a morte e nossa esperança de vida eterna. Vivamos a alegria pascal da Ressurreição.',
      },
      {
        number: 2,
        title: 'A Ascensão de Jesus ao Céu',
        scripture:
          'Jesus levou os discípulos até perto de Betânia e, erguendo as mãos, abençoou-os. Ora, enquanto os abençoava, separou-se deles e foi elevado ao céu. Eles, depois de se terem prostrado diante dele, voltaram a Jerusalém com grande alegria. E estavam continuamente no Templo bendizendo a Deus.',
        reference: 'Lucas 24, 50-53',
        meditation:
          'Meditemos sobre Jesus preparando-nos um lugar no céu. Vivamos com os olhos fixos na Pátria celestial.',
      },
      {
        number: 3,
        title: 'A Vinda do Espírito Santo',
        scripture:
          'Chegando o dia de Pentecostes, estavam todos reunidos no mesmo lugar. De repente, veio do céu um ruído, como que de um vento impetuoso, e encheu toda a casa onde estavam sentados. Apareceram-lhes então línguas como de fogo, que se repartiram e repousaram sobre cada um deles. Ficaram todos cheios do Espírito Santo e começaram a falar em outras línguas, conforme o Espírito Santo lhes concedia que falassem.',
        reference: 'Atos 2, 1-4',
        meditation:
          'Contemplemos os dons do Espírito Santo em nossa vida. Abramos o coração para receber os dons e frutos do Espírito.',
      },
      {
        number: 4,
        title: 'A Assunção de Nossa Senhora',
        scripture:
          'Apareceu em seguida um grande sinal no céu: uma Mulher revestida do sol, a lua debaixo dos seus pés e na cabeça uma coroa de doze estrelas. Estava grávida e gritava de dores, sentindo as angústias de dar à luz. Viu-se também outro sinal no céu: um grande Dragão vermelho, com sete cabeças e dez chifres, e nas cabeças sete coroas.',
        reference: 'Apocalipse 12, 1-3',
        meditation:
          'Meditemos sobre a glorificação de Maria em corpo e alma no céu. Peçamos sua intercessão para alcançarmos a glória celeste.',
      },
      {
        number: 5,
        title: 'A Coroação de Nossa Senhora como Rainha do Céu e da Terra',
        scripture:
          'Apareceu em seguida um grande sinal no céu: uma Mulher revestida do sol, a lua debaixo dos seus pés e na cabeça uma coroa de doze estrelas. Alegrai-vos, justos, no Senhor, aos retos fica bem o louvor. Bendizei o Senhor, porque ele é bom, cantai ao seu nome, porque ele é amável.',
        reference: 'Apocalipse 12, 1; Salmo 33, 1.3',
        meditation:
          'Contemplemos Maria coroada Rainha do Céu e nossa intercessora poderosa. Confiemos em sua maternal proteção.',
      },
    ],
  },
  quinta: {
    title: 'Mistérios Luminosos - Quinta-feira',
    menuLabel: 'Quinta - Mistérios Luminosos',
    mysteries: [
      {
        number: 1,
        title: 'O Batismo de Jesus no Rio Jordão',
        scripture:
          "Naqueles dias, Jesus veio de Nazaré da Galileia e foi batizado por João no Jordão. Logo ao sair da água, viu os céus se abrirem e o Espírito, qual pomba, descer sobre ele. E uma voz dos céus bradou: 'Tu és o meu Filho amado, em ti me comprazo'.",
        reference: 'Marcos 1, 9-11',
        meditation:
          'Contemplemos nosso batismo e nossa filiação divina. Vivamos dignamente como filhos de Deus.',
      },
      {
        number: 2,
        title: 'As Bodas de Caná',
        scripture:
          "Três dias depois, houve um casamento em Caná da Galileia, e a mãe de Jesus estava lá. Jesus também foi convidado para o casamento, com os seus discípulos. Como faltasse vinho, a mãe de Jesus lhe disse: 'Eles não têm mais vinho'. Jesus respondeu-lhe: 'Mulher, isso compete a nós? Minha hora ainda não chegou'. Disse, então, sua mãe aos serventes: 'Fazei o que ele vos disser'. Havia ali seis talhas de pedra para as purificações dos judeus, contendo cada uma duas ou três medidas. Jesus disse-lhes: 'Enchei as talhas de água'. E encheram-nas até a borda. 'Tirai agora', disse-lhes Jesus, 'e levai ao mestre-sala'. E eles o fizeram. Logo que o mestre-sala provou da água tornada vinho, sem saber de onde era, embora o soubessem os serventes que haviam tirado a água, chamou o noivo e disse-lhe: 'Todo homem serve primeiro o vinho melhor e, depois de terem bebido bem, então o inferior. Mas tu guardaste o vinho melhor até agora'.",
        reference: 'João 2, 1-10',
        meditation:
          'Meditemos sobre a intercessão de Maria e os milagres de Jesus. Peçamos a Maria que interceda por nossas necessidades.',
      },
      {
        number: 3,
        title: 'O Anúncio do Reino de Deus com o Convite à Conversão',
        scripture:
          'Depois que João foi preso, Jesus foi para a Galileia, pregando o Evangelho de Deus e dizendo: "O tempo está cumprido e o Reino de Deus está próximo; fazei penitência e crede no Evangelho".',
        reference: 'Marcos 1, 14-15',
        meditation:
          'Contemplemos o chamado à conversão e ao Reino de Deus. Convertamo-nos e vivamos segundo o Evangelho.',
      },
      {
        number: 4,
        title: 'A Transfiguração de Jesus',
        scripture:
          'Seis dias depois, Jesus tomou consigo Pedro, Tiago e João, e levou-os sós, em particular, a um alto monte. E transfigurou-se diante deles. Suas vestes tornaram-se resplandecentes e de uma brancura tal, que nenhum lavadeiro sobre a terra as poderia fazer assim tão brancas. Apareceram-lhes Elias e Moisés, e falavam com Jesus. Pedro tomou a palavra e disse a Jesus: "Mestre, é bom estarmos aqui. Façamos três tendas: uma para ti, outra para Moisés e outra para Elias". Com efeito, não sabia o que dizia, pois estavam sobremaneira atemorizados. Formou-se então uma nuvem que os encobriu com sua sombra; e da nuvem veio uma voz: "Este é o meu Filho amado; ouvi-o".',
        reference: 'Marcos 9, 2-7',
        meditation:
          'Meditemos sobre a glória divina de Jesus revelada aos apóstolos. Escutemos a voz de Jesus em nossa vida.',
      },
      {
        number: 5,
        title: 'A Instituição da Eucaristia',
        scripture:
          'Durante a ceia, Jesus tomou o pão e, depois de ter dado graças, partiu-o e deu-lho, dizendo: "Isto é o meu corpo, que é dado por vós; fazei isto em memória de mim". Do mesmo modo tomou também o cálice, depois de ter ceado, dizendo: "Este cálice é a Nova Aliança em meu sangue, que é derramado por vós".',
        reference: 'Lucas 22, 19-20',
        meditation:
          'Contemplemos o dom da Eucaristia e a presença real de Jesus. Participemos da Eucaristia com fé e devoção.',
      },
    ],
  },
  sexta: {
    title: 'Mistérios Dolorosos - Sexta-feira',
    menuLabel: 'Sexta - Mistérios Dolorosos',
    mysteries: [
      {
        number: 1,
        title: 'A Agonia de Jesus no Horto das Oliveiras',
        scripture:
          "Então Jesus chegou com eles a um lugar chamado Getsêmani e disse aos discípulos: 'Assentai-vos aqui, enquanto eu vou ali orar'. Tomando consigo Pedro e os dois filhos de Zebedeu, começou a entristecer-se e a angustiar-se. Disse-lhes então: 'Minha alma está triste até a morte. Ficai aqui e vigiai comigo'. Adiantando-se um pouco, prostrou-se com a face por terra, orando e dizendo: 'Meu Pai, se é possível, afasta de mim este cálice! Todavia, não seja como eu quero, mas sim como tu queres'.",
        reference: 'Mateus 26, 36-39',
        meditation:
          'Contemplemos a agonia de Jesus e sua total submissão à vontade do Pai. Ofereçamos nossas angústias e sofrimentos unidos aos de Cristo.',
      },
      {
        number: 2,
        title: 'A Flagelação de Jesus',
        scripture:
          'Pilatos então tomou Jesus e mandou flagelá-lo. Os soldados, tecendo uma coroa de espinhos, puseram-lha na cabeça e vestiram-no com um manto de púrpura. Aproximavam-se dele e diziam: "Salve, rei dos judeus!". E davam-lhe bofetadas.',
        reference: 'João 19, 1-3',
        meditation:
          'Meditemos sobre os sofrimentos físicos que Jesus suportou por nossos pecados. Peçamos perdão por nossas ofensas e a graça da conversão.',
      },
      {
        number: 3,
        title: 'A Coroação de Espinhos',
        scripture:
          'Os soldados, tecendo uma coroa de espinhos, puseram-lha na cabeça e vestiram-no com um manto de púrpura. Aproximavam-se dele e diziam: "Salve, rei dos judeus!". E davam-lhe bofetadas. Pilatos saiu novamente e disse-lhes: "Eis que eu vo-lo trago fora, para saberdes que não acho nele crime algum". Saiu, pois, Jesus, trazendo a coroa de espinhos e o manto de púrpura. Disse-lhes Pilatos: "Eis o homem!".',
        reference: 'João 19, 2-5',
        meditation:
          'Contemplemos a paciência de Jesus diante das humilhações e zombarias. Aceitemos as humilhações com mansidão e perdão.',
      },
      {
        number: 4,
        title: 'Jesus Carrega a Cruz',
        scripture:
          'Pilatos então o entregou para ser crucificado. Tomaram, pois, a Jesus. Carregando ele mesmo a cruz, saiu para o lugar chamado Calvário, que em hebraico se chama Gólgota. Seguia-o grande multidão do povo e de mulheres que batiam no peito e o lamentavam. Voltando-se para elas, Jesus disse: "Filhas de Jerusalém, não choreis por mim, mas chorai por vós mesmas e por vossos filhos".',
        reference: 'João 19, 16-17; Lucas 23, 27-28',
        meditation:
          'Meditemos sobre a força e o amor de Jesus ao carregar nossa cruz de pecados. Carreguemos nossa cruz diária com coragem e amor.',
      },
      {
        number: 5,
        title: 'A Crucificação e Morte de Jesus',
        scripture:
          'Quando chegaram ao lugar chamado Calvário, ali o crucificaram, bem como aos malfeitores, um à direita e outro à esquerda. Jesus, porém, dizia: "Pai, perdoa-lhes, porque não sabem o que fazem". Era quase à hora sexta e as trevas cobriram toda a terra até a hora nona. O sol se eclipsou. O véu do Templo rasgou-se pelo meio. Jesus deu um forte grito: "Pai, em tuas mãos entrego o meu espírito". E, dizendo isso, expirou.',
        reference: 'Lucas 23, 33-34.44-46',
        meditation:
          'Contemplemos o supremo sacrifício de Jesus por nossa salvação. Agradeçamos o dom inestimável da Redenção e vivamos em santidade.',
      },
    ],
  },
  sabado: {
    title: 'Mistérios Gozosos - Sábado',
    menuLabel: 'Sábado - Mistérios Gozosos',
    mysteries: [
      {
        number: 1,
        title: 'A Anunciação',
        scripture:
          "No sexto mês, o anjo Gabriel foi enviado por Deus a uma cidade da Galileia, chamada Nazaré, a uma virgem desposada com um varão chamado José, da casa de Davi; e o nome da virgem era Maria. Entrando onde ela estava, disse-lhe: 'Alegra-te, cheia de graça, o Senhor está contigo'. Ela ficou intrigada com essa palavra e pôs-se a pensar qual seria o significado da saudação. O anjo, porém, acrescentou: 'Não temas, Maria! Encontraste graça junto de Deus. Eis que conceberás no teu seio e darás à luz um filho, e tu o chamarás com o nome de Jesus'.",
        reference: 'Lucas 1, 26-31',
        meditation:
          'Contemplemos a humildade e obediência de Maria ao aceitar ser a Mãe de Deus. Peçamos a graça de sermos dóceis à vontade divina em nossa vida.',
      },
      {
        number: 2,
        title: 'A Visitação',
        scripture:
          'Naqueles dias, Maria se levantou e foi às pressas às montanhas, a uma cidade de Judá. Entrou em casa de Zacarias e saudou Isabel. Ora, quando Isabel ouviu a saudação de Maria, a criança estremeceu no seu seio e Isabel ficou repleta do Espírito Santo. E exclamou em alta voz: "Bendita és tu entre as mulheres e bendito é o fruto do teu ventre! Donde me vem esta graça de vir a mim a mãe do meu Senhor? Pois quando a voz da tua saudação chegou aos meus ouvidos, a criança estremeceu de alegria no meu seio".',
        reference: 'Lucas 1, 39-44',
        meditation:
          'Meditemos sobre a caridade de Maria em visitar e ajudar sua prima Isabel. Peçamos a graça de servir ao próximo com prontidão e amor generoso.',
      },
      {
        number: 3,
        title: 'O Nascimento de Jesus',
        scripture:
          'Aconteceu que, estando eles ali, completaram-se os dias dela. E deu à luz o seu filho primogênito, e enfaixou-o e reclinou-o numa manjedoura, porque não havia lugar para eles na sala. Havia nessa região pastores que viviam nos campos e guardavam o seu rebanho durante as vigílias da noite. Um anjo do Senhor apareceu-lhes e a glória do Senhor refulgiu ao redor deles; e ficaram possuídos de grande temor. O anjo disse-lhes: "Não temais, eis que vos anuncio uma boa-nova que será uma grande alegria para todo o povo: hoje vos nasceu um Salvador, que é o Cristo Senhor, na cidade de Davi".',
        reference: 'Lucas 2, 6-11',
        meditation:
          'Contemplemos a simplicidade e pobreza do nascimento do Salvador. Abramos nosso coração para acolher Jesus com humildade.',
      },
      {
        number: 4,
        title: 'A Apresentação no Templo',
        scripture:
          "Quando se completaram os dias para a purificação deles segundo a Lei de Moisés, levaram-no a Jerusalém para apresentá-lo ao Senhor, conforme está escrito na Lei do Senhor: 'Todo primogênito do sexo masculino será consagrado ao Senhor', e para oferecerem o sacrifício prescrito pela Lei do Senhor, um par de rolas ou dois pombinhos. Havia em Jerusalém um homem chamado Simeão. Este homem, justo e piedoso, esperava a consolação de Israel, e o Espírito Santo estava nele.",
        reference: 'Lucas 2, 22-25',
        meditation:
          'Meditemos sobre a obediência de Maria e José à lei de Deus. Consagremos nossa vida inteiramente ao Senhor.',
      },
      {
        number: 5,
        title: 'A Perda e o Encontro de Jesus no Templo',
        scripture:
          'Decorridos três dias, encontraram-no no Templo, sentado no meio dos doutores, ouvindo-os e interrogando-os. Todos os que o ouviam estavam extasiados com a sua inteligência e com as suas respostas. Ao vê-lo, ficaram surpresos, e sua mãe lhe disse: "Filho, por que agiste assim conosco? Eis que teu pai e eu, angustiados, te procurávamos". Respondeu-lhes ele: "Por que me procuráveis? Não sabíeis que devo ocupar-me das coisas de meu Pai?".',
        reference: 'Lucas 2, 46-49',
        meditation:
          'Contemplemos Jesus dedicado às coisas de seu Pai celestial. Busquemos fazer sempre a vontade de Deus em primeiro lugar.',
      },
    ],
  },
  domingo: {
    title: 'Mistérios Gloriosos - Domingo',
    menuLabel: 'Domingo - Mistérios Gloriosos',
    mysteries: [
      {
        number: 1,
        title: 'A Ressurreição de Jesus',
        scripture:
          "Passado o sábado, Maria Madalena, Maria, mãe de Tiago, e Salomé compraram aromas para ungir Jesus. No primeiro dia da semana, muito cedo, ao nascer do sol, foram ao sepulcro. Diziam entre si: 'Quem nos removerá a pedra da entrada do sepulcro?'. Levantando os olhos, viram que a pedra já estava removida; e era muito grande. Entrando no sepulcro, viram um jovem sentado à direita, vestido de branco, e ficaram surpreendidas. Ele lhes disse: 'Não vos assusteis! Procurais Jesus de Nazaré, que foi crucificado. Ressuscitou, não está aqui. Eis o lugar onde o puseram'.",
        reference: 'Marcos 16, 1-6',
        meditation:
          'Contemplemos a vitória de Jesus sobre a morte e nossa esperança de vida eterna. Vivamos a alegria pascal da Ressurreição.',
      },
      {
        number: 2,
        title: 'A Ascensão de Jesus ao Céu',
        scripture:
          'Jesus levou os discípulos até perto de Betânia e, erguendo as mãos, abençoou-os. Ora, enquanto os abençoava, separou-se deles e foi elevado ao céu. Eles, depois de se terem prostrado diante dele, voltaram a Jerusalém com grande alegria. E estavam continuamente no Templo bendizendo a Deus.',
        reference: 'Lucas 24, 50-53',
        meditation:
          'Meditemos sobre Jesus preparando-nos um lugar no céu. Vivamos com os olhos fixos na Pátria celestial.',
      },
      {
        number: 3,
        title: 'A Vinda do Espírito Santo',
        scripture:
          'Chegando o dia de Pentecostes, estavam todos reunidos no mesmo lugar. De repente, veio do céu um ruído, como que de um vento impetuoso, e encheu toda a casa onde estavam sentados. Apareceram-lhes então línguas como de fogo, que se repartiram e repousaram sobre cada um deles. Ficaram todos cheios do Espírito Santo e começaram a falar em outras línguas, conforme o Espírito Santo lhes concedia que falassem.',
        reference: 'Atos 2, 1-4',
        meditation:
          'Contemplemos os dons do Espírito Santo em nossa vida. Abramos o coração para receber os dons e frutos do Espírito.',
      },
      {
        number: 4,
        title: 'A Assunção de Nossa Senhora',
        scripture:
          'Apareceu em seguida um grande sinal no céu: uma Mulher revestida do sol, a lua debaixo dos seus pés e na cabeça uma coroa de doze estrelas. Estava grávida e gritava de dores, sentindo as angústias de dar à luz. Viu-se também outro sinal no céu: um grande Dragão vermelho, com sete cabeças e dez chifres, e nas cabeças sete coroas.',
        reference: 'Apocalipse 12, 1-3',
        meditation:
          'Meditemos sobre a glorificação de Maria em corpo e alma no céu. Peçamos sua intercessão para alcançarmos a glória celeste.',
      },
      {
        number: 5,
        title: 'A Coroação de Nossa Senhora como Rainha do Céu e da Terra',
        scripture:
          'Apareceu em seguida um grande sinal no céu: uma Mulher revestida do sol, a lua debaixo dos seus pés e na cabeça uma coroa de doze estrelas. Alegrai-vos, justos, no Senhor, aos retos fica bem o louvor. Bendizei o Senhor, porque ele é bom, cantai ao seu nome, porque ele é amável.',
        reference: 'Apocalipse 12, 1; Salmo 33, 1.3',
        meditation:
          'Contemplemos Maria coroada Rainha do Céu e nossa intercessora poderosa. Confiemos em sua maternal proteção.',
      },
    ],
  },
};

// ========== CATÁLOGO DE TERÇOS ==========

const rosaryCatalog = {
  traditional: {
    key: 'traditional',
    icon: '📿',
    sidebarTitle: 'Terço Mariano',
    daySectionTitle: 'Dias da Semana',
    helpTitle: '💡 Como rezar o Terço Mariano',
    helpTips: [
      {
        title: '1. Preparação:',
        text: 'Encontre um local tranquilo, faça o sinal da cruz e ofereça seu terço com intenção.',
      },
      {
        title: '2. Meditação:',
        text: 'Reflita sobre cada mistério enquanto reza. Use o timer para pausar e meditar. Leia atentamente o texto bíblico completo.',
      },
      {
        title: '3. Ritmo:',
        text: 'Não tenha pressa. Cada Ave-Maria pode durar de 30 a 60 segundos com meditação profunda.',
      },
      {
        title: '4. Navegação:',
        text: 'Use as setas ← → do teclado ou os botões na tela para navegar. Pressione Espaço para controlar o timer.',
      },
    ],
    days: traditionalMysteriesData,
  },
  holyWounds: {
    key: 'holyWounds',
    icon: '🩸',
    sidebarTitle: 'Terço das Santas Chagas',
    daySectionTitle: 'Meditação do Dia',
    helpTitle: '💡 Como rezar o Terço das Santas Chagas',
    helpTips: [
      {
        title: '1. Início:',
        text: 'Faça o sinal da cruz, reze o Creio e depois siga as invocações iniciais conforme indicado.',
      },
      {
        title: '2. Nas contas:',
        text: 'Em cada conta grande reze o oferecimento das Santas Chagas; nas pequenas, repita a jaculatória 10 vezes.',
      },
      {
        title: '3. Meditação:',
        text: 'Use as sugestões diárias para contemplar cada dezena com calma. Leia os textos bíblicos completos com atenção.',
      },
      {
        title: '4. Devoção:',
        text: 'Este terço é uma meditação nas chagas de Cristo. Peça cura para suas próprias feridas espirituais.',
      },
    ],
    days: holyWoundsMeditationsData,
  },
};

class RosaryApp {
  constructor() {
    this.currentRosaryKey = null;
    this.currentDay = null;
    this.currentStep = 0;
    this.isTimerRunning = false;
    this.timerInterval = null;
    this.timerSeconds = 0;
    this.timerDuration = 45;
    this.prayerStructure = [];
    this.firstTimeUser = !localStorage.getItem('returnUser');

    this.settings = {
      theme: localStorage.getItem('theme') || 'dark',
      fontSize: parseInt(localStorage.getItem('fontSize'), 10) || 17,
      soundEnabled: localStorage.getItem('soundEnabled') === 'true',
      autoAdvance: localStorage.getItem('autoAdvance') === 'true',
      backgroundMusic: localStorage.getItem('backgroundMusic') === 'true',
    };

    this.backgroundAudio = document.getElementById('backgroundMusic');
    this.musicPlaying = false;

    this.init();
  }

  init() {
    this.applySettings();
    this.setupEventListeners();
    this.updateTimerDisplay();
    this.showRosarySelector();

    // Marcar como usuário que retornou após primeira visita
    if (this.firstTimeUser) {
      setTimeout(() => {
        localStorage.setItem('returnUser', 'true');
      }, 3000);
    }
  }

  setupEventListeners() {
    document.querySelectorAll('[data-rosary-select]').forEach((button) => {
      button.addEventListener('click', () => {
        this.selectRosary(button.dataset.rosarySelect);
      });
    });

    const menuBtn = document.getElementById('menuBtn');
    const overlay = document.getElementById('overlay');
    const closeSidebar = document.getElementById('closeSidebar');
    const dayMenuList = document.getElementById('dayMenuList');

    menuBtn.addEventListener('click', () => this.toggleSidebar());
    overlay.addEventListener('click', () => this.closeSidebar());
    closeSidebar.addEventListener('click', () => this.closeSidebar());
    document
      .getElementById('backToSelectorBtn')
      .addEventListener('click', () => this.showRosarySelector());

    dayMenuList.addEventListener('click', (event) => {
      const item = event.target.closest('[data-day]');
      if (!item) {
        return;
      }

      event.preventDefault();
      this.changeDay(item.dataset.day);
    });

    document
      .getElementById('prevBtn')
      .addEventListener('click', () => this.previousStep());
    document
      .getElementById('nextBtn')
      .addEventListener('click', () => this.nextStep());

    document
      .getElementById('musicBtn')
      .addEventListener('click', () => this.toggleBackgroundMusic());

    document
      .getElementById('helpBtn')
      .addEventListener('click', () => this.togglePanel('help'));
    document.getElementById('helpToggle').addEventListener('click', (event) => {
      event.preventDefault();
      this.togglePanel('help');
    });

    // Botão flutuante de ajuda
    const floatingHelpBtn = document.getElementById('floatingHelpBtn');
    if (floatingHelpBtn) {
      floatingHelpBtn.addEventListener('click', () => this.togglePanel('help'));
    }

    document
      .getElementById('timerBtn')
      .addEventListener('click', () => this.togglePanel('timer'));
    document.getElementById('timerToggle').addEventListener('click', (event) => {
      event.preventDefault();
      this.togglePanel('timer');
    });

    document
      .getElementById('startTimer')
      .addEventListener('click', () => this.startTimer());
    document
      .getElementById('pauseTimer')
      .addEventListener('click', () => this.pauseTimer());
    document
      .getElementById('resetTimer')
      .addEventListener('click', () => this.resetTimer());

    document.getElementById('timerDuration').addEventListener('input', (event) => {
      this.timerDuration = parseInt(event.target.value, 10);
      document.getElementById(
        'durationDisplay'
      ).textContent = `${this.timerDuration}s`;
    });

    document.getElementById('settingsToggle').addEventListener('click', (event) => {
      event.preventDefault();
      this.toggleModal('settings');
    });

    document
      .getElementById('closeSettings')
      .addEventListener('click', () => this.toggleModal('settings'));

    document.getElementById('themeSelect').addEventListener('change', (event) => {
      this.updateSetting('theme', event.target.value);
    });

    document.getElementById('fontSizeRange').addEventListener('input', (event) => {
      this.updateSetting('fontSize', parseInt(event.target.value, 10));
      document.getElementById(
        'fontSizeDisplay'
      ).textContent = `${event.target.value}px`;
    });

    document.getElementById('soundEnabled').addEventListener('change', (event) => {
      this.updateSetting('soundEnabled', event.target.checked);
    });

    document.getElementById('autoAdvance').addEventListener('change', (event) => {
      this.updateSetting('autoAdvance', event.target.checked);
    });

    document
      .getElementById('backgroundMusicEnabled')
      .addEventListener('change', (event) => {
        this.updateSetting('backgroundMusic', event.target.checked);
        if (event.target.checked) {
          this.playBackgroundMusic();
        } else {
          this.stopBackgroundMusic();
        }
      });

    document.addEventListener('keydown', (event) => {
      if (!this.currentRosaryKey || document.body.classList.contains('selection-mode')) {
        return;
      }

      if (event.key === 'ArrowLeft') this.previousStep();
      if (event.key === 'ArrowRight') this.nextStep();
      if (event.key === ' ') {
        event.preventDefault();
        this.toggleTimer();
      }
      if (event.key === '?') {
        event.preventDefault();
        this.togglePanel('help');
      }
    });
  }

  getTodayKey() {
    const days = [
      'domingo',
      'segunda',
      'terca',
      'quarta',
      'quinta',
      'sexta',
      'sabado',
    ];

    return days[new Date().getDay()];
  }

  getCurrentRosary() {
    return rosaryCatalog[this.currentRosaryKey] || null;
  }

  getCurrentDayData() {
    const rosary = this.getCurrentRosary();
    return rosary?.days?.[this.currentDay] || null;
  }

  getAvailableDays() {
    const rosary = this.getCurrentRosary();
    return rosary ? Object.keys(rosary.days) : [];
  }

  getDefaultDayForRosary(rosary) {
    const today = this.getTodayKey();
    const availableDays = Object.keys(rosary.days);
    return availableDays.includes(today) ? today : availableDays[0];
  }

  selectRosary(rosaryKey) {
    if (!rosaryCatalog[rosaryKey]) {
      return;
    }

    this.currentRosaryKey = rosaryKey;
    this.currentDay = this.getDefaultDayForRosary(rosaryCatalog[rosaryKey]);
    this.currentStep = 0;
    this.prayerStructure = this.generatePrayerStructure();

    document.body.classList.remove('selection-mode');
    this.renderSidebar();
    this.renderHelpContent();
    this.resetTimer();
    this.loadContent();
    this.updateProgress();

    // Mostrar dica para primeira vez
    if (this.firstTimeUser) {
      setTimeout(() => this.showQuickTip(), 1000);
    }
  }

  showQuickTip() {
    const helpBtn = document.getElementById('floatingHelpBtn');
    if (helpBtn) {
      helpBtn.style.animation = 'pulse-help 1s ease-in-out 3';
      setTimeout(() => {
        this.togglePanel('help');
      }, 3000);
    }
  }

  showRosarySelector() {
    this.currentRosaryKey = null;
    this.currentDay = null;
    this.currentStep = 0;
    this.prayerStructure = [];

    this.resetTimer();
    this.closeSidebar();
    this.closePanelsAndModal();
    document.body.classList.add('selection-mode');
  }

  closePanelsAndModal() {
    document.querySelectorAll('.help-panel, .timer-panel, .modal').forEach((panel) => {
      panel.classList.remove('active');
    });
  }

  renderSidebar() {
    const rosary = this.getCurrentRosary();
    if (!rosary) {
      return;
    }

    document.getElementById(
      'sidebarTitle'
    ).textContent = `${rosary.icon} ${rosary.sidebarTitle}`;
    document.getElementById('dayMenuTitle').textContent = rosary.daySectionTitle;

    document.getElementById('dayMenuList').innerHTML = this.getAvailableDays()
      .map((day) => {
        const dayData = rosary.days[day];
        const activeClass = day === this.currentDay ? ' active' : '';

        return `
          <li>
            <a href="#" data-day="${day}" class="menu-item${activeClass}">
              ${dayData.menuLabel || dayData.title}
            </a>
          </li>
        `;
      })
      .join('');
  }

  renderHelpContent() {
    const rosary = this.getCurrentRosary();
    if (!rosary) {
      return;
    }

    document.getElementById('helpPanelTitle').textContent = rosary.helpTitle;
    document.getElementById('helpTips').innerHTML = rosary.helpTips
      .map(
        (tip) => `
          <div class="tip">
            <strong>${tip.title}</strong>
            <p>${tip.text}</p>
          </div>
        `
      )
      .join('');
  }

  generatePrayerStructure() {
    if (this.currentRosaryKey === 'holyWounds') {
      return this.generateHolyWoundsPrayerStructure();
    }

    return this.generateTraditionalPrayerStructure();
  }

  generateTraditionalPrayerStructure() {
    return [
      {
        type: 'opening',
        title: 'Sinal da Cruz',
        content: prayers.signalOfCross,
      },
      { type: 'opening', title: 'Oferecimento', content: prayers.offering },
      { type: 'opening', title: 'Creio', content: prayers.creed },
      { type: 'opening', title: 'Pai Nosso', content: prayers.ourFather },
      {
        type: 'opening',
        title: '1ª Ave Maria',
        content: prayers.hailMary,
        virtue: 'pela virtude da Fé',
      },
      {
        type: 'opening',
        title: '2ª Ave Maria',
        content: prayers.hailMary,
        virtue: 'pela virtude da Esperança',
      },
      {
        type: 'opening',
        title: '3ª Ave Maria',
        content: prayers.hailMary,
        virtue: 'pela virtude da Caridade',
      },
      { type: 'opening', title: 'Glória', content: prayers.glory },
      ...this.generateTraditionalMysteryPrayers(),
      {
        type: 'closing',
        title: 'Infinitas Graças',
        content: prayers.infiniteGraces,
      },
      {
        type: 'closing',
        title: 'Salve Rainha',
        content: prayers.hailHolyQueen,
      },
    ];
  }

  generateTraditionalMysteryPrayers() {
    const prayerItems = [];

    for (let index = 0; index < 5; index++) {
      prayerItems.push({ type: 'mystery-intro', mysteryNumber: index + 1 });
      prayerItems.push({
        type: 'prayer',
        title: 'Pai Nosso',
        content: prayers.ourFather,
      });
      prayerItems.push({
        type: 'prayer',
        title: '10 Ave Marias',
        content: prayers.hailMary,
        mysteryNumber: index + 1,
        badge: '10 vezes',
        instruction: 'Reze esta oração 10 vezes meditando no mistério acima.',
      });
      prayerItems.push({
        type: 'prayer',
        title: 'Glória',
        content: prayers.glory,
      });
      prayerItems.push({
        type: 'prayer',
        title: 'Jaculatória',
        content: prayers.fatima,
      });
    }

    return prayerItems;
  }

  generateHolyWoundsPrayerStructure() {
    return [
      {
        type: 'opening',
        title: 'Sinal da Cruz',
        content: prayers.signalOfCross,
      },
      { type: 'opening', title: 'Creio', content: prayers.creed },
      {
        type: 'opening',
        title: 'Invocação ao Divino Redentor',
        content: prayers.holyWoundsRedeemer,
      },
      {
        type: 'opening',
        title: 'Invocação ao Deus Santo',
        content: prayers.holyWoundsTrisagion,
      },
      {
        type: 'opening',
        title: 'Clamor pelo Preciosíssimo Sangue',
        content: prayers.holyWoundsBlood,
      },
      {
        type: 'opening',
        title: 'Súplica ao Eterno Pai',
        content: prayers.holyWoundsSupplication,
      },
      ...this.generateHolyWoundsMysteryPrayers(),
      {
        type: 'closing',
        title: 'Após os cinco mistérios',
        sections: [
          {
            label: 'Rezar 3 vezes',
            content: prayers.holyWoundsLargeBead,
          },
        ],
        badge: '3 vezes',
        note: 'Amém somente na última vez.',
      },
    ];
  }

  generateHolyWoundsMysteryPrayers() {
    const prayerItems = [];

    for (let index = 0; index < 5; index++) {
      prayerItems.push({
        type: 'mystery-intro',
        mysteryNumber: index + 1,
        introLabel: 'Sugestão para meditação',
      });
      prayerItems.push({
        type: 'prayer',
        title: 'Nas contas grandes',
        content: prayers.holyWoundsLargeBead,
      });
      prayerItems.push({
        type: 'prayer',
        title: 'Nas contas pequenas',
        content: prayers.holyWoundsSmallBead,
        badge: '10 vezes',
        instruction: 'Reze esta jaculatória 10 vezes meditando no texto bíblico acima.',
      });
    }

    return prayerItems;
  }

  toggleSidebar() {
    if (!this.currentRosaryKey) {
      return;
    }

    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const menuBtn = document.getElementById('menuBtn');

    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    menuBtn.classList.toggle('active');
  }

  closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const menuBtn = document.getElementById('menuBtn');

    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    menuBtn.classList.remove('active');
  }

  changeDay(day) {
    const rosary = this.getCurrentRosary();
    if (!rosary || !rosary.days[day]) {
      return;
    }

    this.currentDay = day;
    this.currentStep = 0;
    this.renderSidebar();
    this.loadContent();
    this.updateProgress();
    this.closeSidebar();
  }

  loadContent() {
    const dayData = this.getCurrentDayData();
    const currentPrayer = this.prayerStructure[this.currentStep];

    if (!dayData || !currentPrayer) {
      return;
    }

    document.getElementById('pageTitle').textContent = dayData.title;

    const content = document.getElementById('prayerContent');
    content.classList.add('fade-in');

    if (currentPrayer.type === 'mystery-intro') {
      const mystery =
        dayData.mysteries[currentPrayer.mysteryNumber - 1] ||
        this.createFallbackMystery(currentPrayer.mysteryNumber);
      content.innerHTML = this.renderMysteryIntro(mystery, currentPrayer);
      return;
    }

    content.innerHTML = this.renderPrayer(currentPrayer);

    setTimeout(() => content.classList.remove('fade-in'), 400);
  }

  createFallbackMystery(mysteryNumber) {
    return {
      number: mysteryNumber,
      title: `${mysteryNumber}º Mistério`,
      meditation:
        'Contemple as Santas Chagas de Jesus e permaneça em oração silenciosa.',
    };
  }

  renderMysteryIntro(mystery, prayer) {
    const scriptureBlock = mystery.scripture
      ? `
          <div class="mystery-scripture">
            <p>"${mystery.scripture}"</p>
            ${mystery.reference ? `<cite>${mystery.reference}</cite>` : ''}
          </div>
        `
      : '';

    const introLabel = prayer.introLabel || '💭 Meditação';

    return `
      <div class="mystery-header">
        <div class="mystery-number">${mystery.number}º</div>
        <h2 class="mystery-title">${mystery.title}</h2>
        ${scriptureBlock}
        <div class="mystery-meditation">
          <h4>${introLabel}</h4>
          <p>${mystery.meditation || 'Permaneça em silêncio diante do Senhor.'}</p>
        </div>
      </div>
    `;
  }

  renderPrayer(prayer) {
    let className = `prayer-item ${prayer.type}`;
    if (this.currentStep === this.getCurrentStepIndex()) {
      className += ' current';
    }

    let title = prayer.title;
    if (prayer.virtue) {
      title += ` (${prayer.virtue})`;
    }

    const badge = prayer.badge
      ? `<div class="prayer-badge">${prayer.badge}</div>`
      : '';
    const instruction = prayer.instruction
      ? `<div class="ave-maria-instruction">📿 ${prayer.instruction}</div>`
      : '';
    const note = prayer.note
      ? `<div class="prayer-note">ℹ️ ${prayer.note}</div>`
      : '';

    return `
      <div class="${className}">
        <h3 class="prayer-title">${title}</h3>
        ${badge}
        ${this.renderPrayerBody(prayer)}
        ${instruction}
        ${note}
      </div>
    `;
  }

  renderPrayerBody(prayer) {
    if (prayer.sections?.length) {
      return prayer.sections
        .map(
          (section) => `
            <div class="prayer-section">
              <div class="prayer-section-title">${section.label}</div>
              ${this.renderParagraphBlock(section.content)}
            </div>
          `
        )
        .join('');
    }

    return this.renderParagraphBlock(prayer.content);
  }

  renderParagraphBlock(content) {
    const paragraphs = Array.isArray(content) ? content : [content];

    return `
      <div class="prayer-text">
        ${paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}
      </div>
    `;
  }

  getCurrentStepIndex() {
    return this.currentStep;
  }

  nextStep() {
    if (!this.prayerStructure.length) {
      return;
    }

    if (this.currentStep < this.prayerStructure.length - 1) {
      this.currentStep += 1;
      this.loadContent();
      this.updateProgress();

      if (this.settings.soundEnabled) {
        this.playNotificationSound();
      }

      if (this.settings.autoAdvance && this.isTimerRunning) {
        this.resetTimer();
        this.startTimer();
      }
    }
  }

  previousStep() {
    if (!this.prayerStructure.length) {
      return;
    }

    if (this.currentStep > 0) {
      this.currentStep -= 1;
      this.loadContent();
      this.updateProgress();
    }
  }

  updateProgress() {
    if (!this.prayerStructure.length) {
      return;
    }

    const total = this.prayerStructure.length;
    const current = this.currentStep + 1;
    const percentage = (current / total) * 100;
    const currentPrayer = this.prayerStructure[this.currentStep];
    const totalMysteries = this.prayerStructure.filter(
      (item) => item.type === 'mystery-intro'
    ).length;
    const currentMystery = this.prayerStructure
      .slice(0, this.currentStep + 1)
      .filter((item) => item.type === 'mystery-intro').length;

    let phase = 'Preparação';
    if (currentPrayer.type === 'closing') {
      phase = 'Encerramento';
    } else if (currentMystery > 0) {
      phase = `Mistério ${currentMystery}/${totalMysteries}`;
    }

    document.getElementById('progressFill').style.width = `${percentage}%`;
    document.getElementById(
      'progressText'
    ).textContent = `${current}/${total} etapas • ${phase}`;

    document.getElementById('prevBtn').disabled = this.currentStep === 0;
    document.getElementById('nextBtn').disabled =
      this.currentStep === total - 1;

    if (this.currentStep === total - 1) {
      document.getElementById('nextBtn').textContent = '✅ Concluído';
    } else {
      document.getElementById('nextBtn').textContent = 'Próximo ➡️';
    }
  }

  togglePanel(panelType) {
    if (!this.currentRosaryKey) {
      return;
    }

    const panel = document.getElementById(`${panelType}Panel`);
    const isActive = panel.classList.contains('active');

    document.querySelectorAll('.help-panel, .timer-panel').forEach((item) => {
      item.classList.remove('active');
    });

    if (!isActive) {
      panel.classList.add('active');
    }
  }

  startTimer() {
    if (!this.currentRosaryKey || this.isTimerRunning) {
      return;
    }

    this.isTimerRunning = true;
    this.timerInterval = setInterval(() => {
      this.timerSeconds += 1;
      this.updateTimerDisplay();

      if (this.timerSeconds >= this.timerDuration) {
        this.timerComplete();
      }
    }, 1000);

    document.getElementById('startTimer').textContent = 'Rodando...';
    document.getElementById('startTimer').disabled = true;
  }

  pauseTimer() {
    if (!this.isTimerRunning) {
      return;
    }

    this.isTimerRunning = false;
    clearInterval(this.timerInterval);
    document.getElementById('startTimer').textContent = 'Continuar';
    document.getElementById('startTimer').disabled = false;
  }

  resetTimer() {
    this.isTimerRunning = false;
    this.timerSeconds = 0;
    clearInterval(this.timerInterval);
    this.updateTimerDisplay();
    document.getElementById('startTimer').textContent = 'Iniciar';
    document.getElementById('startTimer').disabled = false;
  }

  toggleBackgroundMusic() {
    if (this.musicPlaying) {
      this.stopBackgroundMusic();
    } else {
      this.playBackgroundMusic();
    }
  }

  async playBackgroundMusic() {
    try {
      this.backgroundAudio.volume = 0.3;

      await this.backgroundAudio.play();
      this.musicPlaying = true;
      this.settings.backgroundMusic = true;
      localStorage.setItem('backgroundMusic', 'true');

      const musicBtn = document.getElementById('musicBtn');
      musicBtn.classList.add('music-playing');
      musicBtn.title = 'Pausar Música de Fundo';
      musicBtn.textContent = '🎵';
    } catch (error) {
      console.log('Erro ao reproduzir música de fundo:', error);
      this.loadFallbackMusic();
    }
  }

  stopBackgroundMusic() {
    this.backgroundAudio.pause();
    this.musicPlaying = false;
    this.settings.backgroundMusic = false;
    localStorage.setItem('backgroundMusic', 'false');

    const musicBtn = document.getElementById('musicBtn');
    musicBtn.classList.remove('music-playing');
    musicBtn.title = 'Tocar Música de Fundo';
    musicBtn.textContent = '🎵';
  }

  loadFallbackMusic() {
    const instrumentalSources = [
      'https://cdn.pixabay.com/audio/2022/08/23/audio_7b6e0434ab.mp3',
      'https://cdn.pixabay.com/audio/2021/08/04/audio_5c31a6ca7e.mp3',
      'https://cdn.pixabay.com/audio/2022/05/27/audio_2cb9a70a4f.mp3',
    ];

    const randomIndex = Math.floor(Math.random() * instrumentalSources.length);
    this.backgroundAudio.src = instrumentalSources[randomIndex];
    this.backgroundAudio.load();
  }

  toggleTimer() {
    if (this.isTimerRunning) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
  }

  updateTimerDisplay() {
    const minutes = Math.floor(this.timerSeconds / 60);
    const seconds = this.timerSeconds % 60;
    const display = `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
    document.getElementById('timerDisplay').textContent = display;
  }

  timerComplete() {
    this.resetTimer();
    if (this.settings.soundEnabled) {
      this.playNotificationSound();
    }

    if (navigator.vibrate) {
      navigator.vibrate([200, 100, 200]);
    }

    if (this.settings.autoAdvance) {
      setTimeout(() => this.nextStep(), 500);
    }
  }

  toggleModal(modalType) {
    const modal = document.getElementById(`${modalType}Modal`);
    modal.classList.toggle('active');
  }

  updateSetting(key, value) {
    this.settings[key] = value;
    localStorage.setItem(key, value);
    this.applySettings();
  }

  applySettings() {
    document.documentElement.setAttribute('data-theme', this.settings.theme);
    document.getElementById('themeSelect').value = this.settings.theme;

    document.documentElement.style.setProperty(
      '--font-size',
      `${this.settings.fontSize}px`
    );
    document.getElementById('fontSizeRange').value = this.settings.fontSize;
    document.getElementById(
      'fontSizeDisplay'
    ).textContent = `${this.settings.fontSize}px`;

    document.getElementById('soundEnabled').checked =
      this.settings.soundEnabled;
    document.getElementById('autoAdvance').checked = this.settings.autoAdvance;
    document.getElementById('backgroundMusicEnabled').checked =
      this.settings.backgroundMusic;

    if (this.settings.backgroundMusic) {
      const musicBtn = document.getElementById('musicBtn');
      musicBtn.classList.add('music-playing');
      musicBtn.title = 'Pausar Música de Fundo';
    }
  }

  playNotificationSound() {
    if (typeof window !== 'undefined' && window.AudioContext) {
      try {
        const audioContext = new (window.AudioContext ||
          window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(
          0.01,
          audioContext.currentTime + 0.5
        );

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
      } catch (error) {
        console.log('Som não disponível', error);
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.rosaryApp = new RosaryApp();
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
