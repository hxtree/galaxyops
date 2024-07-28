import { CreatureMasteryDisciplines } from './creature-mastery.discipline';
import { DemonicDisciplines } from './demonic.discipline';
import { InstinctDisciplines } from './instinct.discipline';
import { MagiDisciplines } from './magi.discipline';
import { MilitaryDisciplines } from './military.discipline';
import { ProfessionDisciplines } from './profession.discipline';
import { RebelForcesDisciplines } from './rebel-forces.discipline';
import { ShinobiClanDisciplines } from './shinobi-clan.discipline';
import { TheDestroyerDisciplines } from './the-destroyer.discipline';
import { TheKeeperDisciplines } from './the-keepers.discipline';
import { WarriorDisciplines } from './warrior.discipline';

export * from './award-ability-points-each-level';
export * from './can-learn';

export const Disciplines = {
  ...CreatureMasteryDisciplines,
  ...DemonicDisciplines,
  ...InstinctDisciplines,
  ...MagiDisciplines,
  ...MilitaryDisciplines,
  ...ProfessionDisciplines,
  ...RebelForcesDisciplines,
  ...ShinobiClanDisciplines,
  ...TheDestroyerDisciplines,
  ...TheKeeperDisciplines,
  ...WarriorDisciplines,
};

export const DisciplineIds = Object.keys(Disciplines);

export type DisciplineId = keyof typeof Disciplines;
