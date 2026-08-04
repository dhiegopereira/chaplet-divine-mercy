/**
 * Gerador da estrutura de oração — camada de serviço (lógica de domínio).
 * Converte um terço + dia num array navegável de `PrayerStep`.
 * Portado das funções generate*PrayerStructure do app original, sem UI.
 */
import type { DayData, PrayerStep, Prayers, RosaryKey } from '@/types';
import { prayers } from './rosaryCatalog';

const OPENING_VIRTUES = [
  'pela virtude da Fé',
  'pela virtude da Esperança',
  'pela virtude da Caridade',
];

function traditionalMysterySteps(day: DayData, p: Prayers): PrayerStep[] {
  const steps: PrayerStep[] = [];
  day.mysteries.forEach((mystery) => {
    steps.push({ type: 'mystery-intro', mysteryNumber: mystery.number });
    steps.push({ type: 'prayer', title: 'Pai Nosso', content: p.ourFather });
    steps.push({
      type: 'prayer',
      title: '10 Ave Marias',
      content: p.hailMary,
      mysteryNumber: mystery.number,
      badge: '10 vezes',
      instruction: 'Reze esta oração 10 vezes meditando no mistério.',
    });
    steps.push({ type: 'prayer', title: 'Glória', content: p.glory });
    steps.push({ type: 'prayer', title: 'Jaculatória', content: p.fatima });
  });
  return steps;
}

function generateTraditional(day: DayData, p: Prayers): PrayerStep[] {
  return [
    { type: 'opening', title: 'Sinal da Cruz', content: p.signalOfCross },
    { type: 'opening', title: 'Oferecimento', content: p.offering },
    { type: 'opening', title: 'Creio', content: p.creed },
    { type: 'opening', title: 'Pai Nosso', content: p.ourFather },
    ...OPENING_VIRTUES.map<PrayerStep>((virtue, i) => ({
      type: 'opening',
      title: `${i + 1}ª Ave Maria`,
      content: p.hailMary,
      virtue,
    })),
    { type: 'opening', title: 'Glória', content: p.glory },
    ...traditionalMysterySteps(day, p),
    { type: 'closing', title: 'Infinitas Graças', content: p.infiniteGraces },
    { type: 'closing', title: 'Salve Rainha', content: p.hailHolyQueen },
  ];
}

function holyWoundsMysterySteps(day: DayData, p: Prayers): PrayerStep[] {
  const steps: PrayerStep[] = [];
  day.mysteries.forEach((mystery) => {
    steps.push({
      type: 'mystery-intro',
      mysteryNumber: mystery.number,
      introLabel: 'Sugestão para meditação do terço',
    });
    steps.push({
      type: 'prayer',
      title: 'Nas contas grandes',
      content: p.holyWoundsLargeBead,
    });
    steps.push({
      type: 'prayer',
      title: 'Nas contas pequenas',
      content: p.holyWoundsSmallBead,
      badge: '10 vezes',
      instruction: 'Reze esta jaculatória 10 vezes nesta dezena.',
    });
  });
  return steps;
}

function generateHolyWounds(day: DayData, p: Prayers): PrayerStep[] {
  return [
    { type: 'opening', title: 'Sinal da Cruz', content: p.signalOfCross },
    { type: 'opening', title: 'Creio', content: p.creed },
    {
      type: 'opening',
      title: 'Invocação ao Divino Redentor',
      content: p.holyWoundsRedeemer,
    },
    {
      type: 'opening',
      title: 'Invocação ao Deus Santo',
      content: p.holyWoundsTrisagion,
    },
    {
      type: 'opening',
      title: 'Clamor pelo Preciosíssimo Sangue',
      content: p.holyWoundsBlood,
    },
    {
      type: 'opening',
      title: 'Súplica ao Eterno Pai',
      content: p.holyWoundsSupplication,
    },
    ...holyWoundsMysterySteps(day, p),
    {
      type: 'closing',
      title: 'Após os cinco mistérios',
      badge: '3 vezes',
      sections: [{ label: 'Rezar 3 vezes', content: p.holyWoundsLargeBead }],
      note: 'Amém somente na última vez, conforme o livreto das Santas Chagas.',
    },
  ];
}

/**
 * Terço de São José: reutiliza a estrutura mariana (mesmo ritmo de dezenas),
 * pois segue o formato do terço comum com Pai-Nosso, 10 Ave-Marias, Glória.
 */
function generateSaoJose(day: DayData, p: Prayers): PrayerStep[] {
  return generateTraditional(day, p);
}

const GENERATORS: Record<
  RosaryKey,
  (day: DayData, p: Prayers) => PrayerStep[]
> = {
  traditional: generateTraditional,
  holyWounds: generateHolyWounds,
  saoJose: generateSaoJose,
};

/** Gera a estrutura de oração para um terço e um dia específicos. */
export function generatePrayerStructure(
  rosaryKey: RosaryKey,
  day: DayData,
): PrayerStep[] {
  return GENERATORS[rosaryKey](day, prayers);
}
