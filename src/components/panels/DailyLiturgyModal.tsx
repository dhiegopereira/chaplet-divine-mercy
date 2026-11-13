import type { LiturgyPassage } from '@/types';
import { useDailyLiturgy } from '@/hooks/useDailyLiturgy';

interface DailyLiturgyModalProps {
  open: boolean;
  onClose: () => void;
}

const SECTIONS: { key: 'primeiraLeitura' | 'salmo' | 'segundaLeitura' | 'evangelho'; title: string }[] = [
  { key: 'primeiraLeitura', title: 'Primeira Leitura' },
  { key: 'salmo', title: 'Salmo' },
  { key: 'segundaLeitura', title: 'Segunda Leitura' },
  { key: 'evangelho', title: 'Evangelho' },
];

function Passage({ passage }: { passage: LiturgyPassage }) {
  return (
    <div className="liturgy-passage">
      {passage.titulo && <strong>{passage.titulo}</strong>}
      {passage.refrao && (
        <p>
          <em>{passage.refrao}</em>
        </p>
      )}
      <p>{passage.texto}</p>
      <p className="liturgy-reference">{passage.referencia}</p>
    </div>
  );
}

/** Modal com as leituras da Missa do dia, buscadas de uma API pública. */
export default function DailyLiturgyModal({
  open,
  onClose,
}: DailyLiturgyModalProps) {
  const { data, loading, error, reload } = useDailyLiturgy(open);
  if (!open) return null;

  return (
    <div className="liturgy-modal active" onClick={onClose}>
      <div className="liturgy-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="liturgy-modal-header">
          <h3>📖 Liturgia do Dia</h3>
          <button type="button" className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="liturgy-modal-body">
          {loading && <p>Carregando as leituras de hoje…</p>}

          {error && (
            <div className="liturgy-section">
              <p className="liturgy-note">{error}</p>
              <button type="button" className="liturgy-retry-btn" onClick={reload}>
                Tentar novamente
              </button>
            </div>
          )}

          {data && (
            <>
              <p className="liturgy-reference">
                {data.liturgia} · {data.data}
              </p>
              {SECTIONS.map(({ key, title }) => {
                const passages = data.leituras[key];
                if (!passages?.length) return null;
                return (
                  <div className="liturgy-section" key={key}>
                    <span className="liturgy-section-title">{title}</span>
                    <div className="liturgy-passages">
                      {passages.map((passage, i) => (
                        <Passage passage={passage} key={i} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
