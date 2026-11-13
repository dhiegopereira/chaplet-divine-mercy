import { useState } from 'react';
import type { RosaryKey } from '@/types';
import { SettingsProvider } from '@/context/SettingsContext';
import RosarySelector from '@/components/rosary/RosarySelector';
import PrayerScreen from '@/components/rosary/PrayerScreen';
import DailyLiturgyModal from '@/components/panels/DailyLiturgyModal';

/**
 * Raiz do aplicativo. Alterna entre a tela de seleção de terço e a
 * tela de oração. O estado de configurações é fornecido globalmente.
 */
export default function App() {
  const [selected, setSelected] = useState<RosaryKey | null>(null);
  const [liturgyOpen, setLiturgyOpen] = useState(false);

  return (
    <SettingsProvider>
      {selected === null ? (
        <RosarySelector
          onSelect={setSelected}
          onOpenLiturgy={() => setLiturgyOpen(true)}
        />
      ) : (
        <PrayerScreen
          rosaryKey={selected}
          onExit={() => setSelected(null)}
          onOpenLiturgy={() => setLiturgyOpen(true)}
        />
      )}
      <DailyLiturgyModal
        open={liturgyOpen}
        onClose={() => setLiturgyOpen(false)}
      />
    </SettingsProvider>
  );
}
