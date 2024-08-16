import {
  EffectTag,
  Attribute,
  ActionTarget,
  MenuSlot,
  Skill,
  SkillLevel,
} from '@galaxyops/character-sheet-contracts';

export namespace Heal {
  export const HEAL_LV1: Skill = {
    description: 'Heal target',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Heal',
    outcome: {
      ALLY: [
        { add: Attribute.LIFE, quantity: '1d6+2', tags: [EffectTag.WATER] },
      ],
    },
    target: ActionTarget.ALLY,
  };

  export const HEAL_LV2: Skill = {
    description: 'Heal target',
    level: SkillLevel.LV2,
    menuSlot: MenuSlot.MAGIC,
    name: 'Heal',
    outcome: {
      ALLY: [
        { add: Attribute.LIFE, quantity: '2d6+2', tags: [EffectTag.WATER] },
      ],
    },
    target: ActionTarget.ALLY,
  };
}
