#!/bin/bash
# Script para atualizar textos bíblicos no script.js

cd /home/diego/Documentos/jobs/chaplet-divine-mercy

# Fazer backup se ainda não existir
if [ ! -f "script.js.original" ]; then
  cp script.js script.js.original
fi

# Usar o script-improved.js que já tem textos completos
# Adicionar as partes finais que faltam

cat >> script-improved.js << 'ENDOFPART2'
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
ENDOFPART2

# Substituir o arquivo original
mv script.js script.js.backup
mv script-improved.js script.js

echo "✅ Script atualizado com textos bíblicos completos e melhorias!"
echo "📝 Backup salvo em script.js.backup"
