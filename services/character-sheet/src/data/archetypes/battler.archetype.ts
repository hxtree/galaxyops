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
import { Affiliations } from '../affiliations';
import { Skills } from '../skills';

export namespace BattlerArchetypes {
  export const SPIDER: Archetype = {
    alias: ['Creepy Crawlers'],
    description: 'A spider',
    gearSlots: [],
    name: 'Spider',
    potentialDisciplines: [
      Disciplines.BASIC_INSTINCT,
      Disciplines.ELITE_INSTINCT,
      Disciplines.SPIDER_MASTERY,
    ],
    supplies: [
      {
        chance: 0.09,
        gearSlotId: Slot.INVENTORY,
        quantity: 1,
        supplyId: 'SPIDER_WEB',
        transferable: true,
      },
      {
        chance: 0.05,
        gearSlotId: Slot.INVENTORY,
        quantity: 1,
        supplyId: 'FANG',
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

  export const INFERNO_ARACHNID = {
    description: 'A fire spider',
    gearSlots: [],
    name: 'Inferno Arachnid',
    potentialDisciplines: [
      Disciplines.ELITE_INSTINCT,
      Disciplines.SPIDER_MASTERY,
    ],
    supplies: [
      {
        chance: 0.09,
        gearSlotId: Slot.INVENTORY,
        quantity: 1,
        supplyId: 'SPIDER_WEB',
      },
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

  export const SEA_HORSE: Archetype = {
    alias: ['Legless Horse'],
    description: 'A spider',
    gearSlots: [],
    name: 'Sea Horse',
    potentialDisciplines: [
      Disciplines.BASIC_INSTINCT,
      Disciplines.ELITE_INSTINCT,
    ],
    traits: [
      {
        level: 1,
        skill: Skills.AQUA_LV1,
      },
    ],
    weaponCompatibility: [],
  };

  export const SENSITIVE_PLANT: Archetype = {
    alias: ['Weepers'],
    description: 'A plant that drops when touched',
    gearSlots: [],
    name: 'Sensitive Plant',
    potentialDisciplines: [Disciplines.DETRIMENTAL_INSTINCT],
    traits: [
      {
        level: 20,
        skill: Skills.SLASH_LV1,
      },
    ],
    weaponCompatibility: [],
  };

  export const DEEP_THINKER: Archetype = {
    alias: ['Fish Brains'],
    description: 'A humanoid, fish, monster',
    gearSlots: [],
    name: 'Deep Thinker',
    potentialDisciplines: [Disciplines.ELITE_INSTINCT],
    traits: [
      {
        level: 1,
        skill: Skills.TELEPATHY_LV1,
      },
    ],
  };

  export const SLIME: Archetype = {
    alias: ['Goop', 'Sludge'],
    description: 'A ball of slime',
    gearSlots: AmorphousCreatureGearSlots,
    name: 'Slime',
    potentialDisciplines: [
      Disciplines.BASIC_INSTINCT,
      Disciplines.ELITE_INSTINCT,
    ],
    traits: [
      {
        level: 1,
        skill: Skills.ABSORB_LV1,
      },
      {
        level: 1,
        skill: Skills.DRAIN_LV1,
      },
      {
        level: 1,
        skill: Skills.STRIKE_LV1,
      },
    ],
  };

  export const GEL: Archetype = {
    alias: ['Blob', 'Jello', 'Squishy'],
    description: 'A gel based creature',
    gearSlots: AmorphousCreatureGearSlots,
    name: 'Gel',
    potentialDisciplines: [
      Disciplines.BASIC_INSTINCT,
      Disciplines.ELITE_INSTINCT,
    ],
    traits: [
      {
        level: 1,
        skill: Skills.ABSORB_LV1,
      },
      {
        level: 1,
        skill: Skills.STEAL_LV1,
      },
    ],
  };

  export const PHOENIX: Archetype = {
    description: 'A bird of fire.',
    gearSlots: AvianCreatureGearSlots,
    name: 'Phoenix',
    potentialDisciplines: [Disciplines.LEGENDARY_INSTINCT],
    traits: [
      {
        level: 1,
        skill: Skills.FIREBALL_LV1,
      },
    ],
    weaponCompatibility: [],
  };

  export const SNOW_LEOPARD: Archetype = {
    description: 'A creature that lives far to the north.',
    // can be seen near Lawzon
    gearSlots: QuadrupedalCreatureGearSlots,
    name: 'Snow Leopard',
    potentialDisciplines: [Disciplines.ELITE_INSTINCT],
    traits: [
      {
        level: 1,
        skill: Skills.FROST_LV1,
      },
      {
        level: 1,
        skill: Skills.CLAW_LV1,
      },
    ],
  };

  export const CHIMERA: Archetype = {
    description: 'A combination of two or more animals.',
    gearSlots: QuadrupedalCreatureGearSlots,
    name: 'Chimera',
    potentialDisciplines: [
      Disciplines.DETRIMENTAL_INSTINCT,
      Disciplines.ELITE_INSTINCT,
    ],
    supplies: [
      {
        chance: 0.05,
        gearSlotId: Slot.INVENTORY,
        quantity: 1,
        supplyId: 'FANG',
        transferable: true,
      },
    ],
    traits: [
      {
        level: 1,
        skill: Skills.BITE_LV2,
      },
    ],
  };

  export const SLOW_MOVER: Archetype = {
    description: 'A type of sloth like creature.',
    // that lives around the maiden of the mist
    gearSlots: [],
    name: 'Slow Mover',
    potentialDisciplines: [Disciplines.DETRIMENTAL_INSTINCT],
  };

  export const SNAKE_OF_THE_WATER: Archetype = {
    description: 'A type of dragon.',
    gearSlots: SerpentineCreatureGearSlots,
    name: 'Snake of the Water',
    potentialDisciplines: [Disciplines.ELITE_INSTINCT],
    supplies: [
      {
        chance: 0.05,
        gearSlotId: Slot.INVENTORY,
        quantity: 1,
        supplyId: 'FANG',
        transferable: true,
      },
    ],
    traits: [
      {
        level: 1,
        skill: Skills.AQUA_LV1,
      },
      {
        level: 1,
        skill: Skills.STRIKE_LV1,
      },
      {
        level: 1,
        skill: Skills.BITE_LV1,
      },
    ],
  };

  export const BANDIT: Archetype = {
    affiliation: [Affiliations.FLIPPING_PROFITEERS],
    description: 'Bandit.',
    gearSlots: HumanoidCreatureGearSlots,
    name: 'Bandit',
    potentialDisciplines: [Disciplines.BASIC_INSTINCT],
    supplies: [
      {
        chance: 0.09,
        gearSlotId: Slot.INVENTORY,
        quantity: 2,
        supplyId: 'GC',
        transferable: true,
      },
      {
        chance: 0.009,
        gearSlotId: Slot.INVENTORY,
        quantity: 25,
        supplyId: 'GC',
        transferable: true,
      },
      {
        chance: 0.002,
        gearSlotId: Slot.INVENTORY,
        quantity: 1,
        supplyId: 'RUBBER_DUCK',
        transferable: true,
      },
    ],
    traits: [
      {
        level: 1,
        skill: Skills.STEAL_LV1,
      },
      {
        level: 1,
        skill: Skills.GRAPPLE_LV1,
      },
      {
        level: 1,
        skill: Skills.STRIKE_LV1,
      },
    ],
  };
}
