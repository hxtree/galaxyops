import {
  EffectTag,
  Attribute,
  ActionTarget,
  MenuSlot,
  Skill,
  SkillLevel,
} from '@galaxyops/character-sheet-contracts';

export namespace Twister {
  export const TWISTER_LV1: Skill = {
    description: 'Creates a Twister',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Twister',
    outcome: {
      OPPONENT: [
        { quantity: '1d6+2', remove: Attribute.LIFE, tags: [EffectTag.AIR] },
        {
          add: 'BURNED',
          chance: 0.2,
          tags: [EffectTag.AIR, EffectTag.AERIAL],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };
}
