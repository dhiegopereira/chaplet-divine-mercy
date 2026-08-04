interface PrayerControlsProps {
  onPrev: () => void;
  onNext: () => void;
  disablePrev: boolean;
  disableNext: boolean;
}

/** Controles de navegação entre etapas. */
export default function PrayerControls({
  onPrev,
  onNext,
  disablePrev,
  disableNext,
}: PrayerControlsProps) {
  return (
    <div className="prayer-controls">
      <button
        type="button"
        className="control-btn"
        onClick={onPrev}
        disabled={disablePrev}
        title="Oração anterior (←)"
      >
        ⬅️ Anterior
      </button>
      <button
        type="button"
        className="control-btn primary"
        onClick={onNext}
        disabled={disableNext}
        title="Próxima oração (→)"
      >
        Próximo ➡️
      </button>
    </div>
  );
}
