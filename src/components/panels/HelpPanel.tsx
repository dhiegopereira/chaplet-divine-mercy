import type { RosaryDefinition } from '@/types';

interface HelpPanelProps {
  open: boolean;
  rosary: RosaryDefinition;
}

/** Painel com dicas de como rezar o terço selecionado. */
export default function HelpPanel({ open, rosary }: HelpPanelProps) {
  if (!open) return null;
  return (
    <div className="help-panel">
      <div className="help-content">
        <h3>{rosary.helpTitle}</h3>
        <div className="help-tips">
          {rosary.helpTips.map((tip, i) => (
            <div className="tip" key={i}>
              <strong>{tip.title}</strong>
              <p>{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
