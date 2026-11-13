import { useCallback, useEffect, useState } from 'react';
import type { DailyLiturgy } from '@/types';
import { fetchDailyLiturgy } from '@/services/dailyLiturgyApi';

const CACHE_KEY = 'chaplet.dailyLiturgy';

interface Cache {
  key: string;
  data: DailyLiturgy;
}

function todayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
    d.getDate(),
  ).padStart(2, '0')}`;
}

function readCache(): DailyLiturgy | null {
  try {
    const raw = window.localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const cached = JSON.parse(raw) as Cache;
    return cached.key === todayKey() ? cached.data : null;
  } catch {
    return null;
  }
}

function writeCache(data: DailyLiturgy) {
  try {
    window.localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ key: todayKey(), data }),
    );
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
 * Busca a liturgia do dia (leituras da Missa) de uma API pública,
 * com cache em localStorage por dia para evitar refetch e permitir
 * reabrir o painel offline no mesmo dia.
 */
export function useDailyLiturgy(enabled: boolean): DailyLiturgyState {
  const [data, setData] = useState<DailyLiturgy | null>(readCache);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  const reload = useCallback(() => setAttempt((n) => n + 1), []);

  useEffect(() => {
    if (!enabled || data) return;

    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetchDailyLiturgy(controller.signal)
      .then((result) => {
        setData(result);
        writeCache(result);
      })
      .catch((err: unknown) => {
        if (controller.signal.aborted) return;
        setError(
          err instanceof Error
            ? err.message
            : 'Não foi possível carregar a liturgia de hoje.',
        );
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [enabled, data, attempt]);

  return { data, loading, error, reload };
}
