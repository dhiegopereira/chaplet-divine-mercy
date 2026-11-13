/**
 * Catálogo de terços — camada de dados.
 * Monta as definições dos terços a partir dos arquivos JSON (dados) e
 * expõe uma API simples para consulta. Para adicionar um novo terço,
 * basta criar o JSON de mistérios e registrar uma entrada aqui.
 */
import type {
  DaysData,
  Prayers,
  RosaryDefinition,
  RosaryKey,
  Weekday,
} from '@/types';

import holyWoundsMysteries from '@/data/holyWoundsMysteries.json';
import prayersData from '@/data/prayers.json';
import traditionalMysteries from '@/data/traditionalMysteries.json';

export const prayers: Prayers = prayersData as Prayers;

const traditional: RosaryDefinition = {
  key: 'traditional',
  icon: '📿',
  title: 'Terço Mariano',
  sidebarTitle: 'Terço Mariano',
  description:
    'Mistérios Gozosos, Dolorosos, Gloriosos e Luminosos conforme o dia da semana.',
  daySectionTitle: 'Dias da Semana',
  days: traditionalMysteries as DaysData,
};

const holyWounds: RosaryDefinition = {
  key: 'holyWounds',
  icon: '🩸',
  title: 'Terço das Santas Chagas',
  sidebarTitle: 'Terço das Santas Chagas',
  description:
    'Sequência própria de orações com sugestões de meditação diárias.',
  daySectionTitle: 'Meditação do Dia',
  days: holyWoundsMysteries as DaysData,
};

/** Registro central dos terços disponíveis. */
export const rosaryCatalog: Record<RosaryKey, RosaryDefinition> = {
  traditional,
  holyWounds,
};

/** Ordem de exibição na tela de seleção. */
export const rosaryOrder: RosaryKey[] = ['traditional', 'holyWounds'];

export function getRosary(key: RosaryKey): RosaryDefinition {
  return rosaryCatalog[key];
}

/** Retorna a chave do dia atual (segunda..domingo). */
export function getTodayWeekday(): Weekday {
  const map: Weekday[] = [
    'domingo',
    'segunda',
    'terca',
    'quarta',
    'quinta',
    'sexta',
    'sabado',
  ];
  return map[new Date().getDay()];
}

/**
 * Resolve o dia inicial de um terço: usa o dia de hoje se existir,
 * senão o primeiro dia disponível (terços de dia único, como São José).
 */
export function resolveInitialDay(def: RosaryDefinition): Weekday {
  const today = getTodayWeekday();
  if (def.days[today]) return today;
  const first = Object.keys(def.days)[0] as Weekday;
  return first;
}
