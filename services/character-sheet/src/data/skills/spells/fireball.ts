import {
  Skill,
  SkillLevel,
  MenuSlot,
  ActionTarget,
  Attribute,
  EffectTag,
} from '@galaxyops/character-sheet-contracts';

export namespace Fireball {
  export const FIREBALL_LV1: Skill = {
    description: 'Shoot a fireball at target',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Fireball',
    outcome: {
      OPPONENT: [
        { quantity: '1d6+2', remove: Attribute.LIFE, tags: [EffectTag.FIRE] },
        { add: 'BURNED', chance: 0.2, tags: [EffectTag.FIRE] },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const FIREBALL_LV2: Skill = {
    ...FIREBALL_LV1,
    level: SkillLevel.LV2,
    name: 'Mega Fireball',
    outcome: {
      OPPONENT: [
        { quantity: '2d6+2', remove: Attribute.LIFE, tags: [EffectTag.FIRE] },
        { add: 'BURNED', chance: 0.3, tags: [EffectTag.FIRE] },
      ],
    },
  };
}
