import {
  DisciplineCategory,
  Discipline,
  DISCIPLINE_DEFAULT_MAX_LEVEL,
} from '@galaxyops/character-sheet-contracts';
import { Skills } from '../skills';
import { awardAbilityPointEachLevel } from './award-ability-points-each-level';

export namespace TheKeeperDisciplines {
  export const KEEPER_OF_HEART: Discipline = {
    category: DisciplineCategory.OMEGA,
    description:
      'A guardian of emotional stability and mental resilience, this discipline empowers its wielder to protect and mend the heart and mind. The Keeper of Heart fosters trust, fortitude, and healing, offering solace and support to those in emotional distress or psychological turmoil.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Keeper of Heart',
    progression: [
      ...awardAbilityPointEachLevel(1, 1, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 25, skill: Skills.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const KEEPER_OF_TIME: Discipline = {
    category: DisciplineCategory.OMEGA,
    description:
      'This discipline provides mastery over the flow and perception of time, allowing the wielder to preserve stability and order. The Keeper of Time can ensure the smooth passage of moments, restore lost time, and protect against temporal disruptions, maintaining balance within the temporal realm.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Keeper of Time',
    progression: [
      ...awardAbilityPointEachLevel(1, 1, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 25, skill: Skills.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const KEEPER_OF_LAW: Discipline = {
    category: DisciplineCategory.OMEGA,
    description:
      'The Keeper of Law embodies the principles of order and structure, upholding and enforcing the rules that govern reality. This discipline grants the ability to maintain and reinforce laws, whether they be societal, magical, or natural, ensuring justice, stability, and harmony within the framework of existence.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Keeper of Law',
    progression: [
      ...awardAbilityPointEachLevel(1, 1, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 25, skill: Skills.MENTAL_DISCIPLINE_LV1 },
    ],
  };
}
