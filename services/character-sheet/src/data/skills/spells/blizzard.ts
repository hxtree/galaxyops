import { Duration } from 'luxon';
import {
  EffectTag,
  Attribute,
  ActionTarget,
  MenuSlot,
  Skill,
  SkillLevel,
} from '@galaxyops/character-sheet-contracts';

export namespace Blizzard {
  export const BLIZZARD_LV1: Skill = {
    description: 'Creates a Blizzard',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Blizzard',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+2',
          remove: Attribute.LIFE,
          tags: [EffectTag.WATER, EffectTag.AIR],
        },
        {
          add: 'COLD',
          chance: 0.2,
          tags: [EffectTag.WATER, EffectTag.AIR],
        },
        {
          add: 'EXILED',
          chance: 0.3,
          tags: [EffectTag.WATER, EffectTag.AIR],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };
}
