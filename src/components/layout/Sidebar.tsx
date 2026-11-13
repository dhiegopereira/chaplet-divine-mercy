import type { RosaryDefinition, Weekday } from '@/types';

interface SidebarProps {
  open: boolean;
  rosary: RosaryDefinition;
  activeDay: Weekday;
  onSelectDay: (day: Weekday) => void;
  onClose: () => void;
}

/** Menu lateral com os dias/mistérios do terço. */
export default function Sidebar({
  open,
  rosary,
  activeDay,
  onSelectDay,
  onClose,
}: SidebarProps) {
  const days = Object.entries(rosary.days) as [Weekday, { menuLabel: string }][];

  return (
    <>
      <div
        className={`overlay${open ? ' active' : ''}`}
        onClick={onClose}
        aria-hidden
      />
      <nav className={`sidebar${open ? ' active' : ''}`} aria-label="Menu">
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
        </div>
      </nav>
    </>
  );
}
