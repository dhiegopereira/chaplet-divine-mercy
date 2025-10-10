// ========== DADOS DOS MISTÉRIOS ==========
const mysteriesData = {
  segunda: {
    title: 'Mistérios Gozosos - Segunda-feira',
    type: 'gozosos',
    mysteries: [
      {
        number: 1,
        title: 'A Anunciação',
        scripture:
          "O anjo Gabriel foi enviado por Deus a uma cidade da Galileia, chamada Nazaré, a uma virgem... O anjo lhe disse: 'Ave, cheia de graça, o Senhor está contigo'.",
        reference: 'Lc 1, 26-28',
        meditation:
          'Contemplemos a humildade e obediência de Maria ao aceitar ser a Mãe de Deus.',
      },
      {
        number: 2,
        title: 'A Visitação',
        scripture:
          'Maria partiu para a região montanhosa, dirigindo-se, apressadamente, a uma cidade de Judá. Entrou na casa de Zacarias e saudou Isabel. Quando Isabel ouviu a saudação de Maria, a criança lhe estremeceu no ventre.',
        reference: 'Lc 1, 39-41',
        meditation:
          'Meditemos sobre a caridade de Maria em visitar e ajudar sua prima Isabel.',
      },
      {
        number: 3,
        title: 'O Nascimento de Jesus',
        scripture:
          'Enquanto lá estavam, completaram-se os dias dela. E Maria deu à luz seu filho primogênito, envolveu-o em faixas e deitou-o numa manjedoura, porque não havia lugar para eles na hospedaria.',
        reference: 'Lc 2, 6-7',
        meditation:
          'Contemplemos a simplicidade e pobreza do nascimento do Salvador.',
      },
      {
        number: 4,
        title: 'A Apresentação no Templo',
        scripture:
          "Levaram-no a Jerusalém para apresentá-lo ao Senhor, conforme está escrito na lei do Senhor: 'Todo primogênito do sexo masculino será consagrado ao Senhor'.",
        reference: 'Lc 2, 22-23',
        meditation:
          'Meditemos sobre a obediência de Maria e José à lei de Deus.',
      },
      {
        number: 5,
        title: 'A Perda e o Encontro de Jesus no Templo',
        scripture:
          'Três dias depois, encontraram-no no templo, sentado no meio dos doutores, ouvindo-os e interrogando-os. Todos os que o ouviam estavam estupefatos com sua inteligência e suas respostas.',
        reference: 'Lc 2, 46-47',
        meditation:
          'Contemplemos Jesus dedicado às coisas de seu Pai celestial.',
      },
    ],
  },

  terca: {
    title: 'Mistérios Dolorosos - Terça-feira',
    type: 'dolorosos',
    mysteries: [
      {
        number: 1,
        title: 'A Agonia de Jesus no Horto das Oliveiras',
        scripture:
          "Então lhes disse: 'Minha alma está numa tristeza de morte. Ficai aqui e vigiai comigo'. Adiantando-se um pouco, prostrou-se com a face por terra e orava: 'Meu Pai, se é possível, afasta de mim este cálice. Todavia, faça-se não como eu quero, mas como tu queres'.",
        reference: 'Mt 26, 38-39',
        meditation:
          'Contemplemos a agonia de Jesus e sua total submissão à vontade do Pai.',
      },
      {
        number: 2,
        title: 'A Flagelação de Jesus',
        scripture: 'Pilatos então tomou Jesus e mandou flagelá-lo.',
        reference: 'Jo 19, 1',
        meditation:
          'Meditemos sobre os sofrimentos físicos que Jesus suportou por nossos pecados.',
      },
      {
        number: 3,
        title: 'A Coroação de Espinhos',
        scripture:
          "Os soldados, tecendo uma coroa de espinhos, puseram-lha na cabeça e vestiram-no com um manto de púrpura. Aproximavam-se dele e diziam: 'Salve, rei dos judeus!'.",
        reference: 'Jo 19, 2-3',
        meditation:
          'Contemplemos a paciência de Jesus diante das humilhações e zombarias.',
      },
      {
        number: 4,
        title: 'Jesus Carrega a Cruz',
        scripture:
          'Então Pilatos o entregou para ser crucificado. Tomaram, pois, a Jesus, que, carregando a sua cruz, saiu para o lugar chamado Calvário.',
        reference: 'Jo 19, 16-17',
        meditation:
          'Meditemos sobre a força de Jesus para carregar nossa cruz de pecados.',
      },
      {
        number: 5,
        title: 'A Crucificação e Morte de Jesus',
        scripture:
          "Chegados ao lugar chamado Calvário, ali o crucificaram. [...] Jesus exclamou com voz forte: 'Pai, em tuas mãos entrego o meu espírito'. E, dizendo isso, expirou.",
        reference: 'Lc 23, 33.46',
        meditation:
          'Contemplemos o supremo sacrifício de Jesus por nossa salvação.',
      },
    ],
  },

  quarta: {
    title: 'Mistérios Gloriosos - Quarta-feira',
    type: 'gloriosos',
    mysteries: [
      {
        number: 1,
        title: 'A Ressurreição de Jesus',
        scripture:
          "O anjo disse às mulheres: 'Não tenhais medo! Sei que procurais Jesus, que foi crucificado. Ele não está aqui, pois ressuscitou, como havia dito. Vinde ver o lugar onde ele estava'.",
        reference: 'Mt 28, 5-6',
        meditation:
          'Contemplemos a vitória de Jesus sobre a morte e nossa esperança de vida eterna.',
      },
      {
        number: 2,
        title: 'A Ascensão de Jesus ao Céu',
        scripture:
          'Enquanto os abençoava, afastou-se deles e foi elevado ao céu.',
        reference: 'Lc 24, 51',
        meditation: 'Meditemos sobre Jesus preparando-nos um lugar no céu.',
      },
      {
        number: 3,
        title: 'A Vinda do Espírito Santo',
        scripture:
          'De repente, veio do céu um ruído, como de um vento impetuoso, e encheu toda a casa onde se encontravam. Então apareceram línguas como de fogo, que se repartiram e pousaram sobre cada um deles. Todos ficaram cheios do Espírito Santo.',
        reference: 'At 2, 2-4',
        meditation: 'Contemplemos os dons do Espírito Santo em nossa vida.',
      },
      {
        number: 4,
        title: 'A Assunção de Nossa Senhora',
        scripture:
          'Uma grande sinal apareceu no céu: uma mulher vestida de sol, tendo a lua debaixo dos pés e sobre a cabeça uma coroa de doze estrelas.',
        reference: 'Ap 12, 1',
        meditation:
          'Meditemos sobre a glorificação de Maria em corpo e alma no céu.',
      },
      {
        number: 5,
        title: 'A Coroação de Nossa Senhora como Rainha do Céu e da Terra',
        scripture:
          'Apareceu, então, um grande sinal no céu: uma mulher... sobre a cabeça uma coroa de doze estrelas.',
        reference: 'Ap 12, 1',
        meditation:
          'Contemplemos Maria coroada Rainha do Céu e nossa intercessora.',
      },
    ],
  },

  quinta: {
    title: 'Mistérios Luminosos - Quinta-feira',
    type: 'luminosos',
    mysteries: [
      {
        number: 1,
        title: 'O Batismo de Jesus no Rio Jordão',
        scripture:
          "Depois que Jesus foi batizado, saiu logo da água. Eis que os céus se abriram e ele viu o Espírito de Deus descendo como pomba e vindo sobre ele. E do céu veio uma voz: 'Este é o meu Filho amado, em quem me comprazo'.",
        reference: 'Mt 3, 16-17',
        meditation: 'Contemplemos nosso batismo e nossa filiação divina.',
      },
      {
        number: 2,
        title: 'As Bodas de Caná',
        scripture:
          "A mãe de Jesus disse aos serventes: 'Fazei tudo o que ele vos disser'. Jesus disse: 'Enchei as talhas de água'. Eles as encheram até a borda. Disse-lhes: 'Tirai agora e levai ao mestre-sala'. E a água transformou-se em vinho.",
        reference: 'Jo 2, 5-7.9',
        meditation:
          'Meditemos sobre a intercessão de Maria e os milagres de Jesus.',
      },
      {
        number: 3,
        title: 'O Anúncio do Reino de Deus com o Convite à Conversão',
        scripture:
          'O tempo já se completou e o Reino de Deus está próximo. Convertei-vos e crede no Evangelho.',
        reference: 'Mc 1, 15',
        meditation: 'Contemplemos o chamado à conversão e ao Reino de Deus.',
      },
      {
        number: 4,
        title: 'A Transfiguração de Jesus',
        scripture:
          'Jesus tomou consigo Pedro, Tiago e João, e os levou a um lugar à parte, sobre um alto monte. E transfigurou-se diante deles; seu rosto brilhou como o sol e suas roupas ficaram brancas como a luz.',
        reference: 'Mt 17, 1-2',
        meditation:
          'Meditemos sobre a glória divina de Jesus revelada aos apóstolos.',
      },
      {
        number: 5,
        title: 'A Instituição da Eucaristia',
        scripture:
          "Enquanto comiam, Jesus tomou o pão, pronunciou a bênção, partiu-o e deu aos discípulos, dizendo: 'Tomai e comei, isto é o meu corpo'. Tomou depois um cálice, deu graças e deu-lho, dizendo: 'Bebei dele todos; pois isto é o meu sangue, o sangue da aliança, derramado em favor de muitos para remissão dos pecados'.",
        reference: 'Mt 26, 26-28',
        meditation:
          'Contemplemos o dom da Eucaristia e a presença real de Jesus.',
      },
    ],
  },

  sexta: {
    title: 'Mistérios Dolorosos - Sexta-feira',
    type: 'dolorosos',
    mysteries: [
      {
        number: 1,
        title: 'A Agonia de Jesus no Horto das Oliveiras',
        scripture:
          "Então lhes disse: 'Minha alma está numa tristeza de morte. Ficai aqui e vigiai comigo'. Adiantando-se um pouco, prostrou-se com a face por terra e orava: 'Meu Pai, se é possível, afasta de mim este cálice. Todavia, faça-se não como eu quero, mas como tu queres'.",
        reference: 'Mt 26, 38-39',
        meditation:
          'Contemplemos a agonia de Jesus e sua total submissão à vontade do Pai.',
      },
      {
        number: 2,
        title: 'A Flagelação de Jesus',
        scripture: 'Pilatos então tomou Jesus e mandou flagelá-lo.',
        reference: 'Jo 19, 1',
        meditation:
          'Meditemos sobre os sofrimentos físicos que Jesus suportou por nossos pecados.',
      },
      {
        number: 3,
        title: 'A Coroação de Espinhos',
        scripture:
          "Os soldados, tecendo uma coroa de espinhos, puseram-lha na cabeça e vestiram-no com um manto de púrpura. Aproximavam-se dele e diziam: 'Salve, rei dos judeus!'.",
        reference: 'Jo 19, 2-3',
        meditation:
          'Contemplemos a paciência de Jesus diante das humilhações e zombarias.',
      },
      {
        number: 4,
        title: 'Jesus Carrega a Cruz',
        scripture:
          'Então Pilatos o entregou para ser crucificado. Tomaram, pois, a Jesus, que, carregando a sua cruz, saiu para o lugar chamado Calvário.',
        reference: 'Jo 19, 16-17',
        meditation:
          'Meditemos sobre a força de Jesus para carregar nossa cruz de pecados.',
      },
      {
        number: 5,
        title: 'A Crucificação e Morte de Jesus',
        scripture:
          "Chegados ao lugar chamado Calvário, ali o crucificaram. [...] Jesus exclamou com voz forte: 'Pai, em tuas mãos entrego o meu espírito'. E, dizendo isso, expirou.",
        reference: 'Lc 23, 33.46',
        meditation:
          'Contemplemos o supremo sacrifício de Jesus por nossa salvação.',
      },
    ],
  },

  sabado: {
    title: 'Mistérios Gozosos - Sábado',
    type: 'gozosos',
    mysteries: [
      {
        number: 1,
        title: 'A Anunciação',
        scripture:
          "O anjo Gabriel foi enviado por Deus a uma cidade da Galileia, chamada Nazaré, a uma virgem... O anjo lhe disse: 'Ave, cheia de graça, o Senhor está contigo'.",
        reference: 'Lc 1, 26-28',
        meditation:
          'Contemplemos a humildade e obediência de Maria ao aceitar ser a Mãe de Deus.',
      },
      {
        number: 2,
        title: 'A Visitação',
        scripture:
          'Maria partiu para a região montanhosa, dirigindo-se, apressadamente, a uma cidade de Judá. Entrou na casa de Zacarias e saudou Isabel. Quando Isabel ouviu a saudação de Maria, a criança lhe estremeceu no ventre.',
        reference: 'Lc 1, 39-41',
        meditation:
          'Meditemos sobre a caridade de Maria em visitar e ajudar sua prima Isabel.',
      },
      {
        number: 3,
        title: 'O Nascimento de Jesus',
        scripture:
          'Enquanto lá estavam, completaram-se os dias dela. E Maria deu à luz seu filho primogênito, envolveu-o em faixas e deitou-o numa manjedoura, porque não havia lugar para eles na hospedaria.',
        reference: 'Lc 2, 6-7',
        meditation:
          'Contemplemos a simplicidade e pobreza do nascimento do Salvador.',
      },
      {
        number: 4,
        title: 'A Apresentação no Templo',
        scripture:
          "Levaram-no a Jerusalém para apresentá-lo ao Senhor, conforme está escrito na lei do Senhor: 'Todo primogênito do sexo masculino será consagrado ao Senhor'.",
        reference: 'Lc 2, 22-23',
        meditation:
          'Meditemos sobre a obediência de Maria e José à lei de Deus.',
      },
      {
        number: 5,
        title: 'A Perda e o Encontro de Jesus no Templo',
        scripture:
          'Três dias depois, encontraram-no no templo, sentado no meio dos doutores, ouvindo-os e interrogando-os. Todos os que o ouviam estavam estupefatos com sua inteligência e suas respostas.',
        reference: 'Lc 2, 46-47',
        meditation:
          'Contemplemos Jesus dedicado às coisas de seu Pai celestial.',
      },
    ],
  },

  domingo: {
    title: 'Mistérios Gloriosos - Domingo',
    type: 'gloriosos',
    mysteries: [
      {
        number: 1,
        title: 'A Ressurreição de Jesus',
        scripture:
          "O anjo disse às mulheres: 'Não tenhais medo! Sei que procurais Jesus, que foi crucificado. Ele não está aqui, pois ressuscitou, como havia dito. Vinde ver o lugar onde ele estava'.",
        reference: 'Mt 28, 5-6',
        meditation:
          'Contemplemos a vitória de Jesus sobre a morte e nossa esperança de vida eterna.',
      },
      {
        number: 2,
        title: 'A Ascensão de Jesus ao Céu',
        scripture:
          'Enquanto os abençoava, afastou-se deles e foi elevado ao céu.',
        reference: 'Lc 24, 51',
        meditation: 'Meditemos sobre Jesus preparando-nos um lugar no céu.',
      },
      {
        number: 3,
        title: 'A Vinda do Espírito Santo',
        scripture:
          'De repente, veio do céu um ruído, como de um vento impetuoso, e encheu toda a casa onde se encontravam. Então apareceram línguas como de fogo, que se repartiram e pousaram sobre cada um deles. Todos ficaram cheios do Espírito Santo.',
        reference: 'At 2, 2-4',
        meditation: 'Contemplemos os dons do Espírito Santo em nossa vida.',
      },
      {
        number: 4,
        title: 'A Assunção de Nossa Senhora',
        scripture:
          'Uma grande sinal apareceu no céu: uma mulher vestida de sol, tendo a lua debaixo dos pés e sobre a cabeça uma coroa de doze estrelas.',
        reference: 'Ap 12, 1',
        meditation:
          'Meditemos sobre a glorificação de Maria em corpo e alma no céu.',
      },
      {
        number: 5,
        title: 'A Coroação de Nossa Senhora como Rainha do Céu e da Terra',
        scripture:
          'Apareceu, então, um grande sinal no céu: uma mulher... sobre a cabeça uma coroa de doze estrelas.',
        reference: 'Ap 12, 1',
        meditation:
          'Contemplemos Maria coroada Rainha do Céu e nossa intercessora.',
      },
    ],
  },
};

// ========== ORAÇÕES ==========
const prayers = {
  signalOfCross: 'Em nome do Pai, e do Filho, e do Espírito Santo. Amém.',
  offering:
    'Divino Jesus, nós Vos oferecemos este terço que vamos rezar, meditando nos mistérios da Vossa Redenção. Concedei-nos, por intercessão da Virgem Maria, Vossa Mãe, as virtudes que nos são necessárias para bem rezá-lo e a graça de ganharmos as indulgências desta santa devoção.',
  creed:
    'Creio em Deus Pai todo-poderoso, criador do céu e da terra; e em Jesus Cristo, seu único Filho, nosso Senhor; que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus, está sentado à direita de Deus Pai todo-poderoso, donde há de vir a julgar os vivos e os mortos; creio no Espírito Santo, na santa Igreja Católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne, na vida eterna. Amém.',
  ourFather:
    'Pai nosso que estais nos céus, santificado seja o vosso nome; venha a nós o vosso reino; seja feita a vossa vontade assim na terra como no céu; o pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.',
  hailMary:
    'Ave Maria, cheia de graça, o Senhor é convosco; bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém.',
  glory:
    'Glória ao Pai, ao Filho e ao Espírito Santo, assim como era no princípio, agora e sempre. Amém.',
  fatima:
    'Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o céu, principalmente as que mais precisarem da vossa misericórdia. Mãe de Deus, derramai sobre a humanidade inteira as graças eficazes da Vossa chama de amor, agora e na hora da nossa morte. Amém.',
  infiniteGraces:
    'Infinitas graças vos damos, Soberana Rainha, pelos benefícios que todos os dias recebemos de vossas mãos liberais. Dignai-vos agora e para sempre, tomar-nos debaixo de vosso poderoso amparo; e, para mais vos obrigar, vos saudamos com uma Salve Rainha.',
  hailHolyQueen:
    'Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degredados filhos de Eva; a vós suspiramos, gemendo e chorando neste vale de lágrimas. Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei; e depois deste desterro, mostrai-nos Jesus, bendito fruto do vosso ventre. Ó clemente, ó piedosa, ó doce sempre Virgem Maria. Rogai por nós, Santa Mãe de Deus, para que sejamos dignos das promessas de Cristo. Amém.',
};

// ========== ESTADO DA APLICAÇÃO ==========
class RosaryApp {
  constructor() {
    // Estado atual
    this.currentDay = this.getTodayKey();
    this.currentStep = 0;
    this.currentMystery = 0;
    this.isTimerRunning = false;
    this.timerInterval = null;
    this.timerSeconds = 0;
    this.timerDuration = 45; // segundos padrão

    // Configurações
    this.settings = {
      theme: localStorage.getItem('theme') || 'dark',
      fontSize: parseInt(localStorage.getItem('fontSize')) || 17,
      soundEnabled: localStorage.getItem('soundEnabled') === 'true',
      autoAdvance: localStorage.getItem('autoAdvance') === 'true',
      backgroundMusic: localStorage.getItem('backgroundMusic') === 'true',
    };

    // Elemento de áudio para música de fundo
    this.backgroundAudio = document.getElementById('backgroundMusic');
    this.musicPlaying = false;

    // Estrutura das orações
    this.prayerStructure = this.generatePrayerStructure();

    this.init();
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

  generatePrayerStructure() {
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
        title: '1ª Ave Maria (Fé)',
        content: prayers.hailMary,
        virtue: 'pela virtude da Fé',
      },
      {
        type: 'opening',
        title: '2ª Ave Maria (Esperança)',
        content: prayers.hailMary,
        virtue: 'pela virtude da Esperança',
      },
      {
        type: 'opening',
        title: '3ª Ave Maria (Caridade)',
        content: prayers.hailMary,
        virtue: 'pela virtude da Caridade',
      },
      { type: 'opening', title: 'Glória', content: prayers.glory },
      ...this.generateMysteriesPrayers(),
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

  generateMysteriesPrayers() {
    const prayerItems = [];
    for (let i = 0; i < 5; i++) {
      prayerItems.push({ type: 'mystery-intro', mysteryNumber: i + 1 });
      prayerItems.push({
        type: 'prayer',
        title: 'Pai Nosso',
        content: prayers.ourFather,
      });

      // Simplificado: apenas uma Ave Maria com instrução para rezar 10
      prayerItems.push({
        type: 'prayer',
        title: '10 Ave Marias',
        content: prayers.hailMary,
        mysteryNumber: i + 1,
        isAveMariaSet: true,
        instruction: 'Reze esta oração 10 vezes meditando no mistério',
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

  init() {
    this.applySettings();
    this.setupEventListeners();
    this.loadContent();
    this.updateProgress();
  }

  setupEventListeners() {
    // Menu lateral
    const menuBtn = document.getElementById('menuBtn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const closeSidebar = document.getElementById('closeSidebar');

    menuBtn.addEventListener('click', () => this.toggleSidebar());
    overlay.addEventListener('click', () => this.closeSidebar());
    closeSidebar.addEventListener('click', () => this.closeSidebar());

    // Menu de navegação
    document.querySelectorAll('[data-day]').forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        this.changeDayOras(e.target.dataset.day);
      });
    });

    // Controles principais
    document
      .getElementById('prevBtn')
      .addEventListener('click', () => this.previousStep());
    document
      .getElementById('nextBtn')
      .addEventListener('click', () => this.nextStep());

    // Panels
    document
      .getElementById('musicBtn')
      .addEventListener('click', () => this.toggleBackgroundMusic());

    document
      .getElementById('helpBtn')
      .addEventListener('click', () => this.togglePanel('help'));
    document.getElementById('helpToggle').addEventListener('click', (e) => {
      e.preventDefault();
      this.togglePanel('help');
    });

    document
      .getElementById('timerBtn')
      .addEventListener('click', () => this.togglePanel('timer'));
    document.getElementById('timerToggle').addEventListener('click', (e) => {
      e.preventDefault();
      this.togglePanel('timer');
    });

    // Timer controls
    document
      .getElementById('startTimer')
      .addEventListener('click', () => this.startTimer());
    document
      .getElementById('pauseTimer')
      .addEventListener('click', () => this.pauseTimer());
    document
      .getElementById('resetTimer')
      .addEventListener('click', () => this.resetTimer());

    const timerDuration = document.getElementById('timerDuration');
    timerDuration.addEventListener('input', (e) => {
      this.timerDuration = parseInt(e.target.value);
      document.getElementById(
        'durationDisplay'
      ).textContent = `${this.timerDuration}s`;
    });

    // Configurações
    document.getElementById('settingsToggle').addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleModal('settings');
    });

    document
      .getElementById('closeSettings')
      .addEventListener('click', () => this.toggleModal('settings'));

    // Settings controls
    document.getElementById('themeSelect').addEventListener('change', (e) => {
      this.updateSetting('theme', e.target.value);
    });

    document.getElementById('fontSizeRange').addEventListener('input', (e) => {
      this.updateSetting('fontSize', parseInt(e.target.value));
      document.getElementById(
        'fontSizeDisplay'
      ).textContent = `${e.target.value}px`;
    });

    document.getElementById('soundEnabled').addEventListener('change', (e) => {
      this.updateSetting('soundEnabled', e.target.checked);
    });

    document.getElementById('autoAdvance').addEventListener('change', (e) => {
      this.updateSetting('autoAdvance', e.target.checked);
    });

    document
      .getElementById('backgroundMusicEnabled')
      .addEventListener('change', (e) => {
        this.updateSetting('backgroundMusic', e.target.checked);
        if (e.target.checked) {
          this.playBackgroundMusic();
        } else {
          this.stopBackgroundMusic();
        }
      });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.previousStep();
      if (e.key === 'ArrowRight') this.nextStep();
      if (e.key === ' ') {
        e.preventDefault();
        this.toggleTimer();
      }
    });
  }

  toggleSidebar() {
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

  changeDayOras(day) {
    this.currentDay = day;
    this.currentStep = 0;
    this.currentMystery = 0;

    // Atualizar menu ativo
    document.querySelectorAll('.menu-item').forEach((item) => {
      item.classList.remove('active');
    });
    document.querySelector(`[data-day="${day}"]`).classList.add('active');

    this.loadContent();
    this.updateProgress();
    this.closeSidebar();
  }

  loadContent() {
    const data = mysteriesData[this.currentDay];
    document.getElementById('pageTitle').textContent = data.title;

    const content = document.getElementById('prayerContent');
    const currentPrayer = this.prayerStructure[this.currentStep];

    if (currentPrayer.type === 'mystery-intro') {
      const mystery = data.mysteries[currentPrayer.mysteryNumber - 1];
      content.innerHTML = this.renderMysteryIntro(mystery);
    } else {
      content.innerHTML = this.renderPrayer(currentPrayer);
    }
  }

  renderMysteryIntro(mystery) {
    return `
            <div class="mystery-header">
                <div class="mystery-number">${mystery.number}º</div>
                <h2 class="mystery-title">${mystery.title}</h2>
                <div class="mystery-scripture">
                    <p>"${mystery.scripture}"</p>
                    <cite>(${mystery.reference})</cite>
                </div>
                <div class="mystery-meditation">
                    <h4>💭 Reflexão:</h4>
                    <p>${mystery.meditation}</p>
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

    let extraInfo = '';
    if (prayer.mysteryNumber && prayer.hailMaryNumber) {
      extraInfo = `
                <div class="prayer-count">
                    ${prayer.mysteryNumber}º Mistério - ${prayer.hailMaryNumber}/10 Ave Marias
                </div>
            `;
    }

    // Instrução especial para as 10 Ave Marias
    let instruction = '';
    if (prayer.isAveMariaSet && prayer.instruction) {
      instruction = `
                <div class="ave-maria-instruction">
                    📿 ${prayer.instruction}
                </div>
            `;
    }

    return `
            <div class="${className}">
                <h3 class="prayer-title">${title}</h3>
                <div class="prayer-text">${prayer.content}</div>
                ${instruction}
                ${extraInfo}
            </div>
        `;
  }

  getCurrentStepIndex() {
    return this.currentStep;
  }

  nextStep() {
    if (this.currentStep < this.prayerStructure.length - 1) {
      this.currentStep++;
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
    if (this.currentStep > 0) {
      this.currentStep--;
      this.loadContent();
      this.updateProgress();
    }
  }

  updateProgress() {
    const total = this.prayerStructure.length;
    const current = this.currentStep + 1;
    const percentage = (current / total) * 100;

    // Calcular mistério atual (cada mistério tem 5 orações)
    const currentMystery = Math.floor(this.currentStep / 5) + 1;
    const totalMysteries = 5;

    document.getElementById('progressFill').style.width = `${percentage}%`;
    document.getElementById(
      'progressText'
    ).textContent = `${currentMystery}/${totalMysteries} mistérios`;

    // Atualizar botões
    document.getElementById('prevBtn').disabled = this.currentStep === 0;
    document.getElementById('nextBtn').disabled =
      this.currentStep === total - 1;

    if (this.currentStep === total - 1) {
      document.getElementById('nextBtn').textContent = '✅ Concluído';
    } else {
      document.getElementById('nextBtn').textContent = 'Próximo ➡️';
    }
  }

  // ========== TIMER ==========
  togglePanel(panelType) {
    const panel = document.getElementById(`${panelType}Panel`);
    const isActive = panel.classList.contains('active');

    // Fechar todos os painéis
    document.querySelectorAll('.help-panel, .timer-panel').forEach((p) => {
      p.classList.remove('active');
    });

    // Abrir o painel solicitado se não estava ativo
    if (!isActive) {
      panel.classList.add('active');
    }
  }

  startTimer() {
    if (!this.isTimerRunning) {
      this.isTimerRunning = true;
      this.timerInterval = setInterval(() => {
        this.timerSeconds++;
        this.updateTimerDisplay();

        if (this.timerSeconds >= this.timerDuration) {
          this.timerComplete();
        }
      }, 1000);

      document.getElementById('startTimer').textContent = 'Rodando...';
      document.getElementById('startTimer').disabled = true;
    }
  }

  pauseTimer() {
    if (this.isTimerRunning) {
      this.isTimerRunning = false;
      clearInterval(this.timerInterval);
      document.getElementById('startTimer').textContent = 'Continuar';
      document.getElementById('startTimer').disabled = false;
    }
  }

  resetTimer() {
    this.isTimerRunning = false;
    this.timerSeconds = 0;
    clearInterval(this.timerInterval);
    this.updateTimerDisplay();
    document.getElementById('startTimer').textContent = 'Iniciar';
    document.getElementById('startTimer').disabled = false;
  }

  // ========== MÚSICA DE FUNDO ==========
  toggleBackgroundMusic() {
    if (this.musicPlaying) {
      this.stopBackgroundMusic();
    } else {
      this.playBackgroundMusic();
    }
  }

  async playBackgroundMusic() {
    try {
      // Configurar volume baixo para música de fundo
      this.backgroundAudio.volume = 0.3;

      await this.backgroundAudio.play();
      this.musicPlaying = true;
      this.settings.backgroundMusic = true;
      localStorage.setItem('backgroundMusic', 'true');

      // Atualizar visual do botão
      const musicBtn = document.getElementById('musicBtn');
      musicBtn.classList.add('music-playing');
      musicBtn.title = 'Pausar Música de Fundo';
      musicBtn.textContent = '🎵';
    } catch (error) {
      console.log('Erro ao reproduzir música de fundo:', error);
      // Fallback: usar uma URL de música instrumental gratuita
      this.loadFallbackMusic();
    }
  }

  stopBackgroundMusic() {
    this.backgroundAudio.pause();
    this.musicPlaying = false;
    this.settings.backgroundMusic = false;
    localStorage.setItem('backgroundMusic', 'false');

    // Atualizar visual do botão
    const musicBtn = document.getElementById('musicBtn');
    musicBtn.classList.remove('music-playing');
    musicBtn.title = 'Tocar Música de Fundo';
    musicBtn.textContent = '🎵';
  }

  loadFallbackMusic() {
    // Múltiplas opções de música instrumental suave para oração
    const fallbackSources = [
      // Música de meditação gerada (tons simples)
      'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQoGAACBhYqFbF1fdJFRuoqJhH+Ih4lhkYuFh4p9l4mHgol9i4l/kYmBhoeHjIZ/j4qEiYaJkIaIdYSRg46DjIeFhoeOh4yGhYiHh4mGhol5kol+hoeEh4qGhYmGhoiOg4yFgol+h42Jh4yBhYaLhYeBdJKJhYaKg4yGiY2Hi4t/kYmGh4eNjIaGgIuLhYmLh4yDi4eKhYOHe5SJhYaLhYaMfYyMhYqGh42KeYyKhIaNg4yIhY2GjIJ8kYqGh4qBi4eHjYmNhI6Dh4aLg46Ig4aJkYR/jg==',
      // Backup: silêncio suave se não conseguir carregar música online
      'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA=',
    ];

    // Tentar carregar uma fonte de música instrumental gratuita
    const instrumentalSources = [
      'https://cdn.pixabay.com/audio/2022/08/23/audio_7b6e0434ab.mp3',
      'https://cdn.pixabay.com/audio/2021/08/04/audio_5c31a6ca7e.mp3',
      'https://cdn.pixabay.com/audio/2022/05/27/audio_2cb9a70a4f.mp3',
    ];

    // Escolher aleatoriamente uma das músicas instrumentais
    const randomIndex = Math.floor(Math.random() * instrumentalSources.length);
    this.backgroundAudio.src = instrumentalSources[randomIndex];
    this.backgroundAudio.load();

    // Se falhar, usar o fallback
    this.backgroundAudio.addEventListener(
      'error',
      () => {
        this.backgroundAudio.src = fallbackSources[0];
        this.backgroundAudio.load();
      },
      { once: true }
    );
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

    // Pequena vibração no mobile se disponível
    if (navigator.vibrate) {
      navigator.vibrate([200, 100, 200]);
    }

    if (this.settings.autoAdvance) {
      setTimeout(() => this.nextStep(), 500);
    }
  }

  // ========== CONFIGURAÇÕES ==========
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
    // Tema
    document.documentElement.setAttribute('data-theme', this.settings.theme);
    document.getElementById('themeSelect').value = this.settings.theme;

    // Tamanho da fonte
    document.documentElement.style.setProperty(
      '--font-size',
      `${this.settings.fontSize}px`
    );
    document.getElementById('fontSizeRange').value = this.settings.fontSize;
    document.getElementById(
      'fontSizeDisplay'
    ).textContent = `${this.settings.fontSize}px`;

    // Configurações boolean
    document.getElementById('soundEnabled').checked =
      this.settings.soundEnabled;
    document.getElementById('autoAdvance').checked = this.settings.autoAdvance;
    document.getElementById('backgroundMusicEnabled').checked =
      this.settings.backgroundMusic;

    // Aplicar configuração de música de fundo
    if (this.settings.backgroundMusic) {
      const musicBtn = document.getElementById('musicBtn');
      musicBtn.classList.add('music-playing');
      musicBtn.title = 'Pausar Música de Fundo';
    }
  }

  playNotificationSound() {
    // Simular som com Web Audio API (opcional)
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
      } catch (e) {
        console.log('Som não disponível');
      }
    }
  }
}

// ========== INICIALIZAÇÃO ==========
document.addEventListener('DOMContentLoaded', () => {
  window.rosaryApp = new RosaryApp();
});

// Service Worker para PWA (opcional)
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
