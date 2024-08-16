import {
  EffectTag,
  Attribute,
  ActionTarget,
  MenuSlot,
  Skill,
  SkillLevel,
} from '@galaxyops/character-sheet-contracts';

export namespace Aqua {
  export const AQUA_LV1: Skill = {
    description: 'Creates Aqua',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Aqua',
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
