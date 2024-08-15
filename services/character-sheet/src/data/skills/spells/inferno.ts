import { Duration } from 'luxon';
import {
  EffectTag,
  Attribute,
  ActionTarget,
  MenuSlot,
  Skill,
  SkillLevel,
} from '@galaxyops/character-sheet-contracts';

export namespace Inferno {
  export const INFERNO_LV1: Skill = {
    description: 'Creates a Inferno',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Inferno',
    outcome: {
      OPPONENT: [
        { quantity: '1d6+2', remove: Attribute.LIFE, tags: [EffectTag.FIRE] },
        { add: 'BURNED', chance: 0.2, tags: [EffectTag.FIRE] },
      ],
    },
    target: ActionTarget.OPPONENT,
  };
}
