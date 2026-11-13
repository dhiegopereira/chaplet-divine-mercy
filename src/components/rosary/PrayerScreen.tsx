import { useEffect, useState } from 'react';
import type { RosaryKey } from '@/types';
import { getRosary } from '@/services/rosaryCatalog';
import { useRosary } from '@/hooks/useRosary';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import PrayerStepCard from '@/components/rosary/PrayerStepCard';
import PrayerControls from '@/components/rosary/PrayerControls';
import ProgressBar from '@/components/rosary/ProgressBar';

interface PrayerScreenProps {
  rosaryKey: RosaryKey;
  onExit: () => void;
}

/** Tela de oração: orquestra estado do terço e navegação entre etapas. */
export default function PrayerScreen({ rosaryKey, onExit }: PrayerScreenProps) {
  const session = useRosary(rosaryKey);
  const rosary = getRosary(session.rosaryKey);
  const dayData = rosary.days[session.day];

  const [menuOpen, setMenuOpen] = useState(false);

  // Navegação por teclado (setas).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') session.next();
      else if (e.key === 'ArrowLeft') session.prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [session]);

  const currentStep = session.steps[session.step];
  const title = dayData?.title ?? rosary.title;

  return (
    <div className="app-container">
      <Sidebar
        open={menuOpen}
        rosary={rosary}
        activeDay={session.day}
        onSelectDay={session.selectDay}
        onClose={() => setMenuOpen(false)}
      />

      <main className="main-content">
        <Header
          title={title}
          onBack={onExit}
          onToggleMenu={() => setMenuOpen((v) => !v)}
        />

        <section className="prayer-content">
          {currentStep && (
            <PrayerStepCard
              step={currentStep}
              rosary={rosary}
              day={session.day}
            />
          )}
        </section>

        <ProgressBar current={session.step + 1} total={session.steps.length} />

        <PrayerControls
          onPrev={session.prev}
          onNext={session.next}
          disablePrev={session.step === 0}
          disableNext={session.step >= session.steps.length - 1}
        />
      </main>
    </div>
  );
}
