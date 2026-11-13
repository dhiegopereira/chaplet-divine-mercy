import { useState } from 'react';
import type { RosaryKey } from '@/types';
import RosarySelector from '@/components/rosary/RosarySelector';
import PrayerScreen from '@/components/rosary/PrayerScreen';

/**
 * Raiz do aplicativo. Alterna entre a tela de seleção de terço e a
 * tela de oração.
 */
export default function App() {
  const [selected, setSelected] = useState<RosaryKey | null>(null);

  return selected === null ? (
    <RosarySelector onSelect={setSelected} />
  ) : (
    <PrayerScreen rosaryKey={selected} onExit={() => setSelected(null)} />
  );
}
