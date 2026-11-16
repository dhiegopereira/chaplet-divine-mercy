/**
 * Cliente da API pública de liturgia diária (liturgia.up.railway.app).
 * Projeto comunitário de código aberto, sem licença declarada — usado aqui
 * apenas para leitura em app pessoal de oração, nunca redistribuído.
 */
import type { DailyLiturgy } from '@/types';

const API_URL = 'https://liturgia.up.railway.app/v2/';

export async function fetchDailyLiturgy(
  date: Date,
  signal?: AbortSignal,
): Promise<DailyLiturgy> {
  const params = new URLSearchParams({
    dia: String(date.getDate()),
    mes: String(date.getMonth() + 1),
    ano: String(date.getFullYear()),
  });
  const res = await fetch(`${API_URL}?${params.toString()}`, {
    signal,
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error(`Não foi possível buscar a liturgia (${res.status}).`);
  }
  return (await res.json()) as DailyLiturgy;
}
