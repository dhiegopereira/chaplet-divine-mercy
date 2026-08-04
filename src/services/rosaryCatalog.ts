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
import saoJoseMysteries from '@/data/saoJoseMysteries.json';
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
  helpTitle: '💡 Como rezar o Terço Mariano',
  helpTips: [
    {
      title: '1. Preparação:',
      text: 'Encontre um local tranquilo, faça o sinal da cruz e ofereça seu terço com intenção.',
    },
    {
      title: '2. Meditação:',
      text: 'Reflita sobre cada mistério enquanto reza. Use o timer para pausar e meditar.',
    },
    {
      title: '3. Ritmo:',
      text: 'Não tenha pressa. Cada Ave-Maria pode durar de 30 a 60 segundos com meditação profunda.',
    },
  ],
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
  helpTitle: '💡 Como rezar o Terço das Santas Chagas',
  helpTips: [
    {
      title: '1. Início:',
      text: 'Faça o sinal da cruz, reze o Creio e depois siga as invocações iniciais.',
    },
    {
      title: '2. Nas contas:',
      text: 'Nas contas grandes reze o oferecimento das Santas Chagas; nas pequenas, a jaculatória 10 vezes.',
    },
    {
      title: '3. Devoção:',
      text: 'Meditação nas chagas de Cristo. Peça cura para suas próprias feridas espirituais.',
    },
  ],
  days: holyWoundsMysteries as DaysData,
};

const saoJose: RosaryDefinition = {
  key: 'saoJose',
  icon: '🌿',
  title: 'Terço de São José',
  sidebarTitle: 'Terço de São José',
  description:
    'Cinco mistérios da Sagrada Família — da Anunciação à boa morte de José — com meditações sobre fé, paternidade e fidelidade.',
  daySectionTitle: 'Mistérios',
  helpTitle: '💡 Como rezar o Terço de São José',
  helpTips: [
    {
      title: '1. Preparação:',
      text: 'Faça o sinal da cruz e coloque na intenção sua caminhada, seu relacionamento ou sua família.',
    },
    {
      title: '2. Meditação:',
      text: 'Contemple São José, guardião da Sagrada Família e modelo de fidelidade e pureza.',
    },
    {
      title: '3. Rezar a dois:',
      text: 'Em silêncio na capela, casais podem rezar ao mesmo tempo, colocando a caminhada na intenção do terço.',
    },
  ],
  days: saoJoseMysteries as DaysData,
};

/** Registro central dos terços disponíveis. */
export const rosaryCatalog: Record<RosaryKey, RosaryDefinition> = {
  traditional,
  holyWounds,
  saoJose,
};

/** Ordem de exibição na tela de seleção. */
export const rosaryOrder: RosaryKey[] = ['traditional', 'holyWounds', 'saoJose'];

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
