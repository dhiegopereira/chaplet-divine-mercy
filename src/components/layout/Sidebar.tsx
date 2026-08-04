import type { RosaryDefinition, Weekday } from '@/types';

interface SidebarProps {
  open: boolean;
  rosary: RosaryDefinition;
  activeDay: Weekday;
  onSelectDay: (day: Weekday) => void;
  onClose: () => void;
  onOpenSettings: () => void;
  onToggleHelp: () => void;
  onToggleTimer: () => void;
}

/** Menu lateral com os dias/mistérios do terço e funcionalidades. */
export default function Sidebar({
  open,
  rosary,
  activeDay,
  onSelectDay,
  onClose,
  onOpenSettings,
  onToggleHelp,
  onToggleTimer,
}: SidebarProps) {
  const days = Object.entries(rosary.days) as [Weekday, { menuLabel: string }][];

  return (
    <>
      <div
        className={`overlay${open ? ' visible' : ''}`}
        onClick={onClose}
        aria-hidden
      />
      <nav className={`sidebar${open ? ' open' : ''}`} aria-label="Menu">
        <div className="sidebar-header">
          <h2>
            {rosary.icon} {rosary.sidebarTitle}
          </h2>
          <button
            type="button"
            className="close-btn"
            onClick={onClose}
            title="Fechar menu"
          >
            &times;
          </button>
        </div>

        <div className="sidebar-content">
          <div className="menu-section">
            <h3>{rosary.daySectionTitle}</h3>
            <ul className="menu-list">
              {days.map(([day, data]) => (
                <li key={day}>
                  <button
                    type="button"
                    className={`menu-item${day === activeDay ? ' active' : ''}`}
                    onClick={() => {
                      onSelectDay(day);
                      onClose();
                    }}
                  >
                    {data.menuLabel}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="menu-section">
            <h3>Funcionalidades</h3>
            <ul className="menu-list">
              <li>
                <button type="button" className="menu-item" onClick={onToggleTimer}>
                  ⏱️ Timer de Meditação
                </button>
              </li>
              <li>
                <button type="button" className="menu-item" onClick={onToggleHelp}>
                  ❓ Guia de Oração
                </button>
              </li>
              <li>
                <button type="button" className="menu-item" onClick={onOpenSettings}>
                  ⚙️ Configurações
                </button>
              </li>
            </ul>
          </div>

          <div className="menu-section menu-tips">
            <h4>💡 Dicas Rápidas</h4>
            <ul className="quick-tips">
              <li>
                <kbd>←</kbd> <kbd>→</kbd> Navegar
              </li>
              <li>
                <kbd>Espaço</kbd> Timer
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
