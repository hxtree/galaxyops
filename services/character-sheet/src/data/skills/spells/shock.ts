import { Duration } from 'luxon';
import {
  EffectTag,
  AreaOfEffect,
  Attribute,
  ActionTarget,
  MenuSlot,
  Skill,
  SkillLevel,
} from '@galaxyops/character-sheet-contracts';

export namespace Shock {
  export const SHOCK_LV1: Skill = {
    description: 'Electrocutes target',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Shock',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+2',
          remove: Attribute.LIFE,
          tags: [EffectTag.ELECTRIC],
        },
        { add: 'STUNNED', chance: 0.2, tags: [EffectTag.ELECTRIC] },
      ],
    },
    target: ActionTarget.OPPONENT,
  };
}
