import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from 'react';
import type { Settings, ThemeName } from '@/types';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const DEFAULT_SETTINGS: Settings = {
  theme: 'dark',
  fontSize: 17,
  soundEnabled: false,
  autoAdvance: false,
  backgroundMusic: false,
};

interface SettingsContextValue {
  settings: Settings;
  setTheme: (theme: ThemeName) => void;
  setFontSize: (size: number) => void;
  toggle: (key: 'soundEnabled' | 'autoAdvance' | 'backgroundMusic') => void;
}

const SettingsContext = createContext<SettingsContextValue | null>(null);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useLocalStorage<Settings>(
    'chaplet.settings',
    DEFAULT_SETTINGS,
  );

  // Aplica tema e tamanho de fonte no <html> (efeitos colaterais isolados).
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', settings.theme);
    document.documentElement.style.setProperty(
      '--user-font-size',
      `${settings.fontSize}px`,
    );
  }, [settings.theme, settings.fontSize]);

  const setTheme = useCallback(
    (theme: ThemeName) => setSettings((s) => ({ ...s, theme })),
    [setSettings],
  );
  const setFontSize = useCallback(
    (fontSize: number) => setSettings((s) => ({ ...s, fontSize })),
    [setSettings],
  );
  const toggle = useCallback(
    (key: 'soundEnabled' | 'autoAdvance' | 'backgroundMusic') =>
      setSettings((s) => ({ ...s, [key]: !s[key] })),
    [setSettings],
  );

  const value = useMemo<SettingsContextValue>(
    () => ({ settings, setTheme, setFontSize, toggle }),
    [settings, setTheme, setFontSize, toggle],
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings(): SettingsContextValue {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings deve ser usado dentro de SettingsProvider');
  return ctx;
}
