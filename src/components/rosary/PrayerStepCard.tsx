import type { PrayerStep, RosaryDefinition, Weekday } from '@/types';

interface PrayerStepCardProps {
  step: PrayerStep;
  rosary: RosaryDefinition;
  day: Weekday;
}

function renderContent(content: string | string[] | undefined) {
  if (!content) return null;
  const paragraphs = Array.isArray(content) ? content : [content];
  return paragraphs.map((text, i) => (
    <p className="prayer-text" key={i}>
      {text}
    </p>
  ));
}

/** Renderiza uma etapa da oração conforme seu tipo. */
export default function PrayerStepCard({
  step,
  rosary,
  day,
}: PrayerStepCardProps) {
  if (step.type === 'mystery-intro' && step.mysteryNumber != null) {
    const mystery = rosary.days[day]?.mysteries.find(
      (m) => m.number === step.mysteryNumber,
    );
    if (!mystery) return null;
    return (
      <article className="mystery-header">
        <div className="mystery-number">
          {step.introLabel ?? `${mystery.number}º Mistério`}
        </div>
        <h2 className="mystery-title">{mystery.title}</h2>
        <blockquote className="mystery-scripture">
          {mystery.scripture}
          <cite>{mystery.reference}</cite>
        </blockquote>
        <div className="mystery-meditation">
          <h4>Meditação</h4>
          <p>{mystery.meditation}</p>
        </div>
      </article>
    );
  }

  return (
    <article className="prayer-item current">
      <h2 className="prayer-title">{step.title}</h2>
      {step.badge && <span className="prayer-badge">{step.badge}</span>}

      {step.virtue && <p className="prayer-note">{step.virtue}</p>}

      {renderContent(step.content)}

      {step.sections?.map((section, i) => (
        <div className="prayer-section" key={i}>
          <span className="prayer-section-title">{section.label}</span>
          {renderContent(section.content)}
        </div>
      ))}

      {step.instruction && (
        <p className="ave-maria-instruction">{step.instruction}</p>
      )}
      {step.note && <p className="prayer-note">{step.note}</p>}
    </article>
  );
}
