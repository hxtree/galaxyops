import {Character} from '../../../entity/Character';
import {MeekuOni} from '../archetype/PlayerCharacter';
import {Attribute} from '../character/Attribute';
import {EffectTable, SkillffectModifier} from '../effect/EffectTable';
import {EffectTag} from '../effect/EffectTag';
import {Catcher} from '../skill/PassiveSkill';
import {GearSlot} from './Gear';

export interface Accessory {
  name: string;
  description: string;
  history?: string; // the history of an item must be discovered
  purpose: string;
  character: Character;
  gearSlots: Array<GearSlot>;
  effects?: EffectTable;
  removable: boolean; // whether player can remove via menus
}

/**
 * Accessories
 * Seondary items that are equippable
 */
export class GoldBracelets {
  name: 'Gold Bracelets';
  description: 'Weighted gold bracelets that occupy both wrists meant';
  purpose: 'Suppress hidden power';
  character: [MeekuOni];
  gearSlots: [GearSlot.RIGHT_WRIST, GearSlot.LEFT_WRIST];
  effects: [
    {
      add: Attribute.EXPERIENCE;
      quanity: '1.5%';
      tags: [EffectTag.PHYSICAL];
    },
    {
      remove: Attribute.POWER;
      quanity: '1000%';
      tags: [EffectTag.PHYSICAL];
    },
  ];
  removable: false;
}

export class RedScarf {
  name: 'Red Scarf';
  character: [MeekuOni];
  description: 'A red scarf knitted.';
  history: 'Knitted by Meeku’s mother to keep him warm';
  gearSlots: [GearSlot.NECK];
  removable: false;
}

export class CowhideVest {
  name: 'Cowhide Vest';
  character: [MeekuOni];
  effects: [
    {
      add: Attribute.DEFENSE;
      quanity: '+5';
      tags: [EffectTag.PHYSICAL];
    },
  ];
  description: 'A brown protective vest made out of cow hide.';
  gearSlots: [GearSlot.TORSO];
}

export class FuneralJar {
  name: 'Funeral Jar';
  description: 'a jar holding the ashes of the dead';
  gearSlots: [GearSlot.WAIST];
  removable: false;
}

export class SwordSheath {
  name: 'Sword sheath';
  description: 'a sheath meant to hold a broad sword.';
  gearSlots: [GearSlot.BACK];
}

export class MagenticGloves {
  name: 'Magnetic Gloves';
  description: 'Helps catch metal objects.';
  // Particularly useful with regards to Traez’s boomerang
  effects: [
    {
      skill: Catcher;
      modifer: SkillffectModifier.ADD;
      tags: [EffectTag.METAL];
    },
  ];
  gearSlots: [GearSlot.RIGHT_HAND, GearSlot.LEFT_HAND];
}

export class CatchersMitt {
  name: 'Catchers Mitt';
  effects: [
    {
      skill: Catcher;
      modifer: SkillffectModifier.ADD;
      tags: [EffectTag.PHYSICAL];
    },
  ];
  gearSlots: [GearSlot.RIGHT_HAND, GearSlot.LEFT_HAND];
}
