interface HeaderProps {
  title: string;
  onBack: () => void;
  onToggleMenu: () => void;
}

/** Cabeçalho da tela de oração. */
export default function Header({ title, onBack, onToggleMenu }: HeaderProps) {
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
    </header>
  );
}
