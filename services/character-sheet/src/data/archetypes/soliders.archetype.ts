import {
  QuadrupedalCreatureGearSlots,
  HumanoidCreatureGearSlots,
  AvianCreatureGearSlots,
  SerpentineCreatureGearSlots,
  AmorphousCreatureGearSlots,
  Archetype,
  Slot,
} from '@galaxyops/character-sheet-contracts';
import { Disciplines } from '../disciplines';
import { AffiliationIds, Affiliations } from '../affiliations';
import { Skills } from '../skills';

export namespace SolidersArchetypes {
  export const CAPTIAN_CULLCUTTER: Archetype = {
    affiliation: [Affiliations.THE_NO_FLUSHERS],
    alias: ['Cap'],
    description: 'A captain of a small band called the wort hogs.',
    gearSlots: [],
    name: 'Captian Cullcutter',
    potentialDisciplines: [Disciplines.SOLIDER],
    supplies: [
      {
        chance: 0.09,
        gearSlotId: Slot.INVENTORY,
        quantity: 1,
        supplyId: 'SPIDER_WEB',
        transferable: true,
      },
    ],
    traits: [
      {
        level: 1,
        skill: Skills.INTIMIDATE_LV1,
      },
    ],
    weaponCompatibility: [],
  };

  export const CLAIRE = {
    affiliation: [Affiliations.THE_NO_FLUSHERS],
    description:
      'A girl about 9 years old with blonde hair. She has a large scary black pet dog she calls Mom. She lies to the dog to get it to attack.',
    gearSlots: [],
    name: 'Claire',
    potentialDisciplines: [Disciplines.SOLIDER],
    supplies: [
      {
        chance: 0.05,
        gearSlotId: Slot.INVENTORY,
        quantity: 1,
        supplyId: 'FANG',
      },
    ],
    traits: [
      { level: 1, skill: Skills.FIREBALL_LV1 },
      { level: 10, skill: Skills.FIREBALL_LV2 },
    ],
    weaponCompatibility: [],
  };
}
