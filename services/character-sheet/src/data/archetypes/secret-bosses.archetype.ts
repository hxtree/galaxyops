import {
  HumanoidCreatureGearSlots,
  Archetype,
  WeaponCategory,
} from '@galaxyops/character-sheet-contracts';
import { Disciplines } from '../disciplines';
import { Skills } from '../skills';

export namespace SecretBossesArchetypes {
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

  export const WARLING: Archetype = {
    alias: ['Wind Bag'],
    description: 'The embodiment of a traveling cyclone',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Warling',
    potentialDisciplines: [Disciplines.WIZARD, Disciplines.HISTORIAN],
    traits: [
      {
        level: 1,
        skill: Skills.CYCLONE_LV1,
      },
    ],
  };
}
