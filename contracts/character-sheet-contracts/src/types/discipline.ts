import { Skill } from './skill';

export enum DisciplineCategory {
  // Specialty Classes
  PROFESSION = 'Profession',
  // Combat Classes
  ARCHETYPE = 'Archetype',
  // Spirit Class
  // Drive Classes
  OMEGA = 'Omega',
}

export type GainSkillType = {
  level: number;
  skill: Skill;
};

export type GainAttributeType = {
  level: number;
  power?: number;
  speed?: number;
  wisdom?: number;
  intelligence?: number;
  defense?: number;
  accuracy?: number;
  evasion?: number;
  luck?: number;
};

export type AbilityPointProgression = {
  level: number;
  abilityPoints: number;
};

export type SkillProgression = {
  level: number;
  skill: Skill;
};

export type DisciplineProgression = AbilityPointProgression | SkillProgression;

export const DISCIPLINE_DEFAULT_MAX_LEVEL = 20;

export type Discipline = {
  name: string;
  description: string;
  category: DisciplineCategory;
  history?: string;
  prerequisites?: string; // DisciplineId[]; // After level etc?
  // could also be event like defeated Lawzon, but may be that's too
  // character specific?
  progression?: DisciplineProgression[];
  maxLevel: number;
};
