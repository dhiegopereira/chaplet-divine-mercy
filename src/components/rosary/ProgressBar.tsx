interface ProgressBarProps {
  current: number;
  total: number;
}

/** Barra de progresso da sessão de oração. */
export default function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = total ? Math.round((current / total) * 100) : 0;
  return (
    <div className="progress-bar" title="Seu progresso na oração">
      <div className="progress-fill" style={{ width: `${pct}%` }} />
      <span className="progress-text">
        {current}/{total} etapas
      </span>
    </div>
  );
}
