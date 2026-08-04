interface HeaderProps {
  title: string;
  onBack: () => void;
  onToggleMenu: () => void;
  onToggleHelp: () => void;
  onToggleTimer: () => void;
  onToggleMusic: () => void;
}

/** Cabeçalho da tela de oração. */
export default function Header({
  title,
  onBack,
  onToggleMenu,
  onToggleHelp,
  onToggleTimer,
  onToggleMusic,
}: HeaderProps) {
  return (
    <header className="header">
      <div className="header-start">
        <button
          type="button"
          className="back-btn"
          onClick={onBack}
          title="Voltar e escolher outro terço"
        >
          ←
        </button>
        <button
          type="button"
          className="menu-btn"
          onClick={onToggleMenu}
          title="Abrir menu"
          aria-label="Abrir menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <h1 className="header-title">{title}</h1>
      <div className="header-actions">
        <button
          type="button"
          className="action-btn"
          onClick={onToggleMusic}
          title="Música de fundo"
        >
          🎵
        </button>
        <button
          type="button"
          className="action-btn"
          onClick={onToggleHelp}
          title="Guia de oração"
        >
          ❓
        </button>
        <button
          type="button"
          className="action-btn"
          onClick={onToggleTimer}
          title="Timer de meditação"
        >
          ⏱️
        </button>
      </div>
    </header>
  );
}
