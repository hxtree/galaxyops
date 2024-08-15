import {
  EffectTag,
  Attribute,
  ActionTarget,
  MenuSlot,
  Skill,
  SkillLevel,
} from '@galaxyops/character-sheet-contracts';

export namespace Landslide {
  export const LANDSLIDE_LV1: Skill = {
    description: 'Creates a landslide',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Landslide',
    outcome: {
      OPPONENT: [
        { quantity: '1d6+2', remove: Attribute.LIFE, tags: [EffectTag.EARTH] },
        { add: 'DOWN', chance: 0.2, tags: [EffectTag.EARTH] },
        { add: 'EXILED', chance: 0.3, tags: [EffectTag.EARTH] },
      ],
    },
    target: ActionTarget.OPPONENT,
  };
}
