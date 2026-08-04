import { useEffect, useState } from 'react';
import type { RosaryKey } from '@/types';
import { getRosary } from '@/services/rosaryCatalog';
import { useRosary } from '@/hooks/useRosary';
import { useTimer } from '@/hooks/useTimer';
import { useSettings } from '@/context/SettingsContext';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import HelpPanel from '@/components/panels/HelpPanel';
import TimerPanel from '@/components/panels/TimerPanel';
import SettingsModal from '@/components/panels/SettingsModal';
import PrayerStepCard from '@/components/rosary/PrayerStepCard';
import PrayerControls from '@/components/rosary/PrayerControls';
import ProgressBar from '@/components/rosary/ProgressBar';

interface PrayerScreenProps {
  rosaryKey: RosaryKey;
  onExit: () => void;
}

/** Tela de oração: orquestra estado do terço, timer, painéis e navegação. */
export default function PrayerScreen({ rosaryKey, onExit }: PrayerScreenProps) {
  const { settings } = useSettings();
  const session = useRosary(rosaryKey);
  const rosary = getRosary(session.rosaryKey);
  const dayData = rosary.days[session.day];

  const [menuOpen, setMenuOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [timerOpen, setTimerOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const timer = useTimer(45, () => {
    if (settings.autoAdvance) session.next();
  });

  // Navegação por teclado (setas + espaço).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') session.next();
      else if (e.key === 'ArrowLeft') session.prev();
      else if (e.code === 'Space') {
        e.preventDefault();
        timer.toggle();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [session, timer]);

  const currentStep = session.steps[session.step];
  const title = dayData?.title ?? rosary.title;

  return (
    <div className="app-shell">
      <Sidebar
        open={menuOpen}
        rosary={rosary}
        activeDay={session.day}
        onSelectDay={session.selectDay}
        onClose={() => setMenuOpen(false)}
        onOpenSettings={() => {
          setSettingsOpen(true);
          setMenuOpen(false);
        }}
        onToggleHelp={() => setHelpOpen((v) => !v)}
        onToggleTimer={() => setTimerOpen((v) => !v)}
      />

      <main className="main-content">
        <Header
          title={title}
          onBack={onExit}
          onToggleMenu={() => setMenuOpen((v) => !v)}
          onToggleHelp={() => setHelpOpen((v) => !v)}
          onToggleTimer={() => setTimerOpen((v) => !v)}
          onToggleMusic={() => setTimerOpen((v) => v)}
        />

        <HelpPanel open={helpOpen} rosary={rosary} />

        <TimerPanel
          open={timerOpen}
          seconds={timer.seconds}
          duration={timer.duration}
          isRunning={timer.isRunning}
          onStart={timer.start}
          onPause={timer.pause}
          onReset={timer.reset}
          onDurationChange={timer.setDuration}
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

      <SettingsModal open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>
  );
}
