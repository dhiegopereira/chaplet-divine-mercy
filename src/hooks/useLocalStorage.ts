import { useCallback, useEffect, useState } from 'react';

/**
 * Hook genérico de persistência em localStorage com serialização segura.
 * Mantém o estado sincronizado entre re-renderizações e recarregamentos.
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  deserialize?: (raw: string) => T,
): [T, (value: T | ((prev: T) => T)) => void] {
  const read = useCallback((): T => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw === null) return initialValue;
      return deserialize ? deserialize(raw) : (JSON.parse(raw) as T);
    } catch {
      return initialValue;
    }
  }, [key, initialValue, deserialize]);

  const [value, setValue] = useState<T>(read);

  const update = useCallback(
    (next: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const resolved =
          typeof next === 'function' ? (next as (p: T) => T)(prev) : next;
        try {
          const serialized =
            typeof resolved === 'string'
              ? resolved
              : JSON.stringify(resolved);
          window.localStorage.setItem(key, serialized);
        } catch {
          /* ignore quota / private mode errors */
        }
        return resolved;
      });
    },
    [key],
  );

  // Sincroniza se a chave mudar.
  useEffect(() => {
    setValue(read());
  }, [read]);

  return [value, update];
}
