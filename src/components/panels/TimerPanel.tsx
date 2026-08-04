interface TimerPanelProps {
  open: boolean;
  seconds: number;
  duration: number;
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
  onDurationChange: (value: number) => void;
}

function format(seconds: number) {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

/** Painel do timer de meditação. */
export default function TimerPanel({
  open,
  seconds,
  duration,
  isRunning,
  onStart,
  onPause,
  onReset,
  onDurationChange,
}: TimerPanelProps) {
  if (!open) return null;
  return (
    <div className="timer-panel">
      <div className="timer-content">
        <h3>⏱️ Timer de Meditação</h3>
        <div className="timer-display">
          <span>{format(seconds)}</span>
        </div>
        <div className="timer-controls">
          <button
            type="button"
            className="timer-btn"
            onClick={onStart}
            disabled={isRunning}
          >
            Iniciar
          </button>
          <button
            type="button"
            className="timer-btn"
            onClick={onPause}
            disabled={!isRunning}
          >
            Pausar
          </button>
          <button type="button" className="timer-btn" onClick={onReset}>
            Reiniciar
          </button>
        </div>
        <div className="timer-settings">
          <label htmlFor="timer-duration">
            Tempo por Ave-Maria (segundos):
          </label>
          <input
            id="timer-duration"
            type="range"
            min={30}
            max={120}
            value={duration}
            onChange={(e) => onDurationChange(Number(e.target.value))}
          />
          <span>{duration}s</span>
        </div>
      </div>
    </div>
  );
}
