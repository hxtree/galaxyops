import { Duration } from 'luxon';
import {
  Skill,
  SkillLevel,
  MenuSlot,
  AreaOfEffect,
  ActionTarget,
  Attribute,
  EffectTag,
} from '@galaxyops/character-sheet-contracts';

export namespace Gravity {
  export const GRAVITY_LV1: Skill = {
    areaOfEffect: AreaOfEffect.CONE_15FT,
    coolDownTime: Duration.fromObject({ seconds: 60 }),
    description:
      'Coalesce gravity around target. Causes flying targets to hit ground',
    executionTime: Duration.fromObject({ seconds: 1 }),
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Gravity',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+2',
          remove: Attribute.LIFE,
          tags: [EffectTag.PHYSICAL, EffectTag.AERIAL],
        },
      ],
    },
    prepareTime: Duration.fromObject({ seconds: 3 }),
    recoveryTime: Duration.fromObject({ seconds: 3 }),
    target: ActionTarget.OPPONENT,
  };

  export const GRAVITY_LV2: Skill = {
    ...GRAVITY_LV1,
    areaOfEffect: AreaOfEffect.CONE_20FT,
    coolDownTime: Duration.fromObject({ seconds: 15 }),
    executionTime: Duration.fromObject({ seconds: 1 }),
    level: SkillLevel.LV2,
    outcome: {
      OPPONENT: [
        {
          quantity: '2d6+10',
          remove: Attribute.LIFE,
          tags: [EffectTag.PHYSICAL, EffectTag.AERIAL],
        },
      ],
    },
    prepareTime: Duration.fromObject({ seconds: 2 }),
    recoveryTime: Duration.fromObject({ seconds: 2 }),
  };
}
