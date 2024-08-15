import {
  EffectTag,
  AreaOfEffect,
  Attribute,
  ActionTarget,
  MenuSlot,
  Skill,
  SkillLevel,
} from '@galaxyops/character-sheet-contracts';

export namespace Quake {
  export const QUAKE_LV1: Skill = {
    areaOfEffect: AreaOfEffect.RADIUS_15FT,
    description: 'Shakes earth surrounding target',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Quake',
    outcome: {
      OPPONENT: [
        { quantity: '1d6+2', remove: Attribute.LIFE, tags: [EffectTag.EARTH] },
        {
          add: 'DOWN',
          chance: 0.2,
          tags: [EffectTag.EARTH, EffectTag.GROUND_LEVEL],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };
}
