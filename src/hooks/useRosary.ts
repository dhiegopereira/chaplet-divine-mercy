import { useCallback, useMemo, useState } from 'react';
import type { PrayerStep, RosaryKey, Weekday } from '@/types';
import {
  getRosary,
  resolveInitialDay,
} from '@/services/rosaryCatalog';
import { generatePrayerStructure } from '@/services/prayerStructure';

interface RosarySession {
  rosaryKey: RosaryKey;
  day: Weekday;
  step: number;
  steps: PrayerStep[];
  progress: number; // 0..1
  selectRosary: (key: RosaryKey) => void;
  selectDay: (day: Weekday) => void;
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
  reset: () => void;
}

/**
 * Orquestra o estado de uma sessão de terço:
 * qual terço, qual dia, em que etapa, e a estrutura de orações resultante.
 * A geração das etapas é delegada ao serviço (separação de responsabilidade).
 */
export function useRosary(initialKey: RosaryKey): RosarySession {
  const [rosaryKey, setRosaryKey] = useState<RosaryKey>(initialKey);
  const [day, setDay] = useState<Weekday>(() =>
    resolveInitialDay(getRosary(initialKey)),
  );
  const [step, setStep] = useState(0);

  const steps = useMemo<PrayerStep[]>(() => {
    const def = getRosary(rosaryKey);
    const dayData = def.days[day];
    if (!dayData) return [];
    return generatePrayerStructure(rosaryKey, dayData);
  }, [rosaryKey, day]);

  const selectRosary = useCallback((key: RosaryKey) => {
    setRosaryKey(key);
    setDay(resolveInitialDay(getRosary(key)));
    setStep(0);
  }, []);

  const selectDay = useCallback((next: Weekday) => {
    setDay(next);
    setStep(0);
  }, []);

  const next = useCallback(
    () => setStep((s) => Math.min(s + 1, steps.length - 1)),
    [steps.length],
  );
  const prev = useCallback(() => setStep((s) => Math.max(s - 1, 0)), []);
  const goTo = useCallback(
    (index: number) =>
      setStep(() => Math.max(0, Math.min(index, steps.length - 1))),
    [steps.length],
  );
  const reset = useCallback(() => setStep(0), []);

  const progress = steps.length ? (step + 1) / steps.length : 0;

  return {
    rosaryKey,
    day,
    step,
    steps,
    progress,
    selectRosary,
    selectDay,
    next,
    prev,
    goTo,
    reset,
  };
}
