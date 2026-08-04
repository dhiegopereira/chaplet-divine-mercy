import { useCallback, useEffect, useRef, useState } from 'react';

interface UseTimerResult {
  seconds: number;
  isRunning: boolean;
  duration: number;
  start: () => void;
  pause: () => void;
  reset: () => void;
  toggle: () => void;
  setDuration: (value: number) => void;
}

/**
 * Timer de meditação. Conta de forma crescente e emite `onComplete`
 * a cada ciclo de `duration` segundos (usado para auto-avançar Ave-Marias).
 */
export function useTimer(
  initialDuration = 45,
  onCycleComplete?: () => void,
): UseTimerResult {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [duration, setDuration] = useState(initialDuration);
  const intervalRef = useRef<number | null>(null);
  const cycleRef = useRef(onCycleComplete);
  cycleRef.current = onCycleComplete;

  useEffect(() => {
    if (!isRunning) return;
    intervalRef.current = window.setInterval(() => {
      setSeconds((prev) => {
        const next = prev + 1;
        if (next >= duration) {
          cycleRef.current?.();
          return 0;
        }
        return next;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [isRunning, duration]);

  const start = useCallback(() => setIsRunning(true), []);
  const pause = useCallback(() => setIsRunning(false), []);
  const reset = useCallback(() => {
    setIsRunning(false);
    setSeconds(0);
  }, []);
  const toggle = useCallback(() => setIsRunning((r) => !r), []);

  return { seconds, isRunning, duration, start, pause, reset, toggle, setDuration };
}
