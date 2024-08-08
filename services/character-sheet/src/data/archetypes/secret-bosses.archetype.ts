import {
  HumanoidCreatureGearSlots,
  Archetype,
  WeaponCategory,
} from '@galaxyops/character-sheet-contracts';
import { Disciplines } from '../disciplines';
import { Affiliations } from '../affiliations';
import { Skills } from '../skills';

export namespace BattlerArchetypes {
  export const GRIM_REAPER: Archetype = {
    alias: ['Death'],
    description: 'Skull face with dark robe and a scythe',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Grim Reaper',
    potentialDisciplines: [
      Disciplines.BASIC_INSTINCT,
      Disciplines.ELITE_INSTINCT,
    ],
    traits: [
      {
        level: 1,
        skill: Skills.DESOLATE_LV1,
      },
    ],
    weaponCompatibility: [WeaponCategory.SYTHE],
  };
}
