/**
 * Domain types — camada de domínio.
 * Fonte única de verdade para os contratos de dados do aplicativo de terços.
 * Nenhum componente ou serviço deve redefinir estes tipos.
 */

/** Dias da semana usados como chave nos catálogos de mistérios. */
export type Weekday =
  | 'segunda'
  | 'terca'
  | 'quarta'
  | 'quinta'
  | 'sexta'
  | 'sabado'
  | 'domingo';

/** Identificador de um terço no catálogo. */
export type RosaryKey = 'traditional' | 'holyWounds' | 'saoJose';

/** Um mistério individual (meditação + passagem bíblica). */
export interface Mystery {
  number: number;
  title: string;
  scripture: string;
  reference: string;
  meditation: string;
}

/** Conteúdo de um dia: título, rótulo do menu e os 5 mistérios. */
export interface DayData {
  title: string;
  menuLabel: string;
  mysteries: Mystery[];
}

/** Mapa de dias -> conteúdo. Nem todo terço usa os 7 dias. */
export type DaysData = Partial<Record<Weekday, DayData>>;

/** Dica exibida no painel de ajuda. */
export interface HelpTip {
  title: string;
  text: string;
}

/** Definição de um terço no catálogo (metadados + dados por dia). */
export interface RosaryDefinition {
  key: RosaryKey;
  icon: string;
  title: string;
  sidebarTitle: string;
  description: string;
  daySectionTitle: string;
  helpTitle: string;
  helpTips: HelpTip[];
  days: DaysData;
}

/** Chaves das orações comuns/compartilhadas. */
export type PrayerKey =
  | 'signalOfCross'
  | 'offering'
  | 'creed'
  | 'ourFather'
  | 'hailMary'
  | 'glory'
  | 'fatima'
  | 'infiniteGraces'
  | 'hailHolyQueen'
  | 'holyWoundsRedeemer'
  | 'holyWoundsTrisagion'
  | 'holyWoundsBlood'
  | 'holyWoundsSupplication'
  | 'holyWoundsLargeBead'
  | 'holyWoundsSmallBead';

export type Prayers = Record<PrayerKey, string>;

/** Tipo de cada etapa gerada na estrutura de oração. */
export type PrayerStepType = 'opening' | 'closing' | 'prayer' | 'mystery-intro';

/** Seção agrupada (usada no fechamento das Santas Chagas). */
export interface PrayerSection {
  label: string;
  content: string | string[];
}

/**
 * Uma etapa da oração — unidade navegável na tela.
 * Campos opcionais dependem do `type`.
 */
export interface PrayerStep {
  type: PrayerStepType;
  title?: string;
  content?: string | string[];
  /** Virtude associada às 3 Ave-Marias de abertura. */
  virtue?: string;
  /** Número do mistério (intro e "10 Ave-Marias"). */
  mysteryNumber?: number;
  /** Selo textual, ex.: "10 vezes" / "3 vezes". */
  badge?: string;
  /** Instrução curta exibida abaixo do conteúdo. */
  instruction?: string;
  /** Observação adicional (fechamentos). */
  note?: string;
  /** Rótulo da introdução do mistério (Santas Chagas). */
  introLabel?: string;
  /** Seções agrupadas (fechamento das Santas Chagas). */
  sections?: PrayerSection[];
}

/** Configurações do usuário, persistidas em localStorage. */
export type ThemeName = 'light' | 'dark' | 'sepia';

export interface Settings {
  theme: ThemeName;
  fontSize: number;
  soundEnabled: boolean;
  autoAdvance: boolean;
  backgroundMusic: boolean;
}
