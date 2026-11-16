import { useCallback, useEffect, useState } from 'react';
import type { DailyLiturgy } from '@/types';
import { fetchDailyLiturgy } from '@/services/dailyLiturgyApi';

const CACHE_PREFIX = 'chaplet.dailyLiturgy.';

export function dateKey(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
    date.getDate(),
  ).padStart(2, '0')}`;
}

function readCache(key: string): DailyLiturgy | null {
  try {
    const raw = window.localStorage.getItem(CACHE_PREFIX + key);
    return raw ? (JSON.parse(raw) as DailyLiturgy) : null;
  } catch {
    return null;
  }
}

function writeCache(key: string, data: DailyLiturgy) {
  try {
    window.localStorage.setItem(CACHE_PREFIX + key, JSON.stringify(data));
  } catch {
    /* ignora erros de cota / modo privado */
  }
}

interface DailyLiturgyState {
  data: DailyLiturgy | null;
  loading: boolean;
  error: string | null;
  reload: () => void;
}

/**
 * Busca a liturgia (leituras da Missa) de uma data específica, numa API
 * pública, com cache em localStorage por data para evitar refetch e
 * permitir reabrir o painel offline no mesmo dia.
 */
export function useDailyLiturgy(enabled: boolean, date: Date): DailyLiturgyState {
  const key = dateKey(date);
  const [data, setData] = useState<DailyLiturgy | null>(() => readCache(key));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  const reload = useCallback(() => setAttempt((n) => n + 1), []);

  useEffect(() => {
    setData(readCache(key));
    setError(null);
  }, [key]);

  useEffect(() => {
    if (!enabled || data) return;

    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetchDailyLiturgy(date, controller.signal)
      .then((result) => {
        setData(result);
        writeCache(key, result);
      })
      .catch((err: unknown) => {
        if (controller.signal.aborted) return;
        setError(
          err instanceof Error
            ? err.message
            : 'Não foi possível carregar a liturgia.',
        );
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [enabled, data, attempt, key, date]);

  return { data, loading, error, reload };
}
