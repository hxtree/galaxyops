import {
  EffectTag,
  Attribute,
  ActionTarget,
  MenuSlot,
  Skill,
  SkillLevel,
} from '@galaxyops/character-sheet-contracts';

export namespace Gust {
  export const GUST_LV1: Skill = {
    description: 'Creates a strong current of air',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Gust',
    outcome: {
      OPPONENT: [
        { quantity: '1d6+2', remove: Attribute.LIFE, tags: [EffectTag.AIR] },
        {
          add: 'EXILED',
          chance: 0.05,
          tags: [EffectTag.AIR, EffectTag.AERIAL],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const GUST_LV2: Skill = {
    ...GUST_LV1,
    level: SkillLevel.LV2,
    name: 'Gale',
    outcome: {
      OPPONENT: [
        { quantity: '2d6+2', remove: Attribute.LIFE, tags: [EffectTag.AIR] },
        {
          add: 'EXILED',
          chance: 0.3,
          tags: [EffectTag.AIR, EffectTag.AERIAL],
        },
      ],
    },
  };
}
