import {
  EffectTag,
  Attribute,
  ActionTarget,
  MenuSlot,
  Skill,
  SkillLevel,
} from '@galaxyops/character-sheet-contracts';

export namespace Tsunami {
  export const TSUNAMI_LV1: Skill = {
    description: 'A water-based attack that creates Tsunami',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Tsunami',
    outcome: {
      OPPONENT: [
        { quantity: '1d6+2', remove: Attribute.LIFE, tags: [EffectTag.WATER] },
        {
          add: 'EXILED',
          chance: 0.2,
          tags: [EffectTag.WATER, EffectTag.GROUND_LEVEL],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };
}
