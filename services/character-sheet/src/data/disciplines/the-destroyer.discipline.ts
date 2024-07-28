import {
  DisciplineCategory,
  Discipline,
  DISCIPLINE_DEFAULT_MAX_LEVEL,
} from '@galaxyops/character-sheet-contracts';
import { Skills } from '../skills';
import { awardAbilityPointEachLevel } from './award-ability-points-each-level';

export namespace TheDestroyerDisciplines {
  export const DESTROYER_OF_HEART: Discipline = {
    category: DisciplineCategory.OMEGA,
    description:
      'A master of psychological and emotional manipulation, this discipline allows the wielder to influence and dismantle the very essence of the heart and mind. Capable of instilling profound fear or deep loyalty, the Destroyer of Heart commands the subtle forces of emotional control and mental fortitude.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Destroyer of Heart',
    progression: [
      ...awardAbilityPointEachLevel(1, 1, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 25, skill: Skills.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const DESTROYER_OF_TIME: Discipline = {
    category: DisciplineCategory.OMEGA,
    description:
      'Grants dominion over the flow of time, allowing the wielder to manipulate temporal perception and reality. From speeding up personal actions to slowing down opponents or even glimpsing possible futures, the Destroyer of Time reshapes the very fabric of existence to their will.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Destroyer of Time',
    progression: [
      ...awardAbilityPointEachLevel(1, 1, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 25, skill: Skills.MENTAL_DISCIPLINE_LV1 },
    ],
  };

  export const DESTROYER_OF_LAW: Discipline = {
    category: DisciplineCategory.OMEGA,
    description:
      'Challenges and transcends the established order and rules that govern reality. With this discipline, the wielder can disrupt legal and natural constraints, breaking down barriers and redefining boundaries in both physical and metaphysical realms.',
    maxLevel: DISCIPLINE_DEFAULT_MAX_LEVEL,
    name: 'Destroyer of Law',
    progression: [
      ...awardAbilityPointEachLevel(1, 1, DISCIPLINE_DEFAULT_MAX_LEVEL),
      { level: 25, skill: Skills.MENTAL_DISCIPLINE_LV1 },
    ],
  };
}
