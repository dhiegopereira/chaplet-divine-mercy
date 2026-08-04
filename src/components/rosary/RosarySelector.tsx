import type { RosaryKey } from '@/types';
import { rosaryCatalog, rosaryOrder } from '@/services/rosaryCatalog';

interface RosarySelectorProps {
  onSelect: (key: RosaryKey) => void;
}

/** Tela inicial: escolha do terço a rezar. */
export default function RosarySelector({ onSelect }: RosarySelectorProps) {
  return (
    <section className="selector-screen">
      <div className="selector-content">
        <div className="selector-hero">
          <span className="selector-badge">oração guiada</span>
          <h1>Escolha qual terço deseja rezar</h1>
          <p>
            Terços com navegação simples, meditações e passagens bíblicas.
            Escolha abaixo e comece a rezar.
          </p>
        </div>

        <div className="selector-grid">
          {rosaryOrder.map((key) => {
            const def = rosaryCatalog[key];
            return (
              <button
                key={key}
                type="button"
                className="selector-card"
                onClick={() => onSelect(key)}
              >
                <span className="selector-icon">{def.icon}</span>
                <h2>{def.title}</h2>
                <p>{def.description}</p>
                <span className="selector-action">Acessar este terço</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
