import type { ThemeName } from '@/types';
import { useSettings } from '@/context/SettingsContext';

interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
}

/** Modal de configurações (tema, fonte, sons, avanço automático, música). */
export default function SettingsModal({ open, onClose }: SettingsModalProps) {
  const { settings, setTheme, setFontSize, toggle } = useSettings();
  if (!open) return null;

  return (
    <div className="modal visible" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>⚙️ Configurações</h3>
          <button type="button" className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div className="setting-group">
            <label htmlFor="theme-select">Tema:</label>
            <select
              id="theme-select"
              value={settings.theme}
              onChange={(e) => setTheme(e.target.value as ThemeName)}
            >
              <option value="light">Claro</option>
              <option value="dark">Escuro</option>
              <option value="sepia">Sépia</option>
            </select>
          </div>

          <div className="setting-group">
            <label htmlFor="font-size">Tamanho da Fonte:</label>
            <input
              id="font-size"
              type="range"
              min={14}
              max={24}
              value={settings.fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
            />
            <span>{settings.fontSize}px</span>
          </div>

          <div className="setting-group">
            <label>
              <input
                type="checkbox"
                checked={settings.soundEnabled}
                onChange={() => toggle('soundEnabled')}
              />{' '}
              Sons de notificação
            </label>
          </div>

          <div className="setting-group">
            <label>
              <input
                type="checkbox"
                checked={settings.autoAdvance}
                onChange={() => toggle('autoAdvance')}
              />{' '}
              Avançar automaticamente
            </label>
          </div>

          <div className="setting-group">
            <label>
              <input
                type="checkbox"
                checked={settings.backgroundMusic}
                onChange={() => toggle('backgroundMusic')}
              />{' '}
              Música de fundo instrumental
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
