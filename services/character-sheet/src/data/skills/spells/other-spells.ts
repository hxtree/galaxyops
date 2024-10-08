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

export namespace OtherSpells {
  export const REVIVE_LV1: Skill = {
    description: 'Restore life to target',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Revive',
    outcome: { ALLY: [{ chance: 0.9, remove: 'LIFELESS', tags: [] }] },
    target: ActionTarget.ALLY,
  };

  export const CURE_LV1: Skill = {
    description: 'Cures status effects',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Cure',
    outcome: {
      ALLY: [
        { chance: 1, remove: 'COLD' },
        { chance: 1, remove: 'DOOMED' },
        { chance: 1, remove: 'INFECTION' },
        { chance: 1, remove: 'SILENCE' },
      ],
    },
    target: ActionTarget.ALLY,
  };

  export const BARRIER_LV1: Skill = {
    description: 'Barrier StatusEffects',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Barrier',
    outcome: {
      ALLY: [{ add: 'BARRIER', chance: 1, tags: [EffectTag.AIR] }],
    },
    target: ActionTarget.ALLY,
  };

  export const BOOM_LV1: Skill = {
    description: 'Cast Boom on target',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Boom',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+4',
          remove: Attribute.LIFE,
          tags: [EffectTag.FIRE],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const REFLECT_LV1: Skill = {
    description: 'Cast Reflect on target',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Reflect',
    outcome: { OPPONENT: [{ add: 'REFLECT', chance: 1 }] },
    target: ActionTarget.OPPONENT,
  };

  export const FLARE_LV1: Skill = {
    description: 'Cast Flare on target',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Flare',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+4',
          remove: Attribute.LIFE,
          tags: [EffectTag.FIRE],
        },
        {
          quantity: '1d6+4',
          remove: Attribute.LIFE,
          tags: [EffectTag.LIGHT],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const METEOR_LV1: Skill = {
    description: 'Cast Meteor on target',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Meteor',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+4',
          remove: Attribute.LIFE,
          tags: [EffectTag.FIRE],
        },
        {
          quantity: '1d6+4',
          remove: Attribute.LIFE,
          tags: [EffectTag.EARTH],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const TELEPATHY_LV1: Skill = {
    description: 'Cast Telepathy on target',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Telepathy',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+4',
          remove: Attribute.LIFE,
          tags: [EffectTag.PSYCHIC],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const LIGHT_LV1: Skill = {
    description: 'Cast light on target',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Light',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+4',
          remove: Attribute.LIFE,
          tags: [EffectTag.LIGHT],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const DESOLATE_LV1: Skill = {
    description: 'To make an area empty or bare.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Desolate',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+4',
          remove: Attribute.LIFE,
          tags: [EffectTag.DARKNESS],
        },
        {
          quantity: '1d6+4',
          remove: Attribute.LIFE,
          tags: [EffectTag.DARKNESS],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const DARKNESS_LV1: Skill = {
    description: 'Decrease the area that your opponent can see',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Darkness',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+4',
          remove: Attribute.LIFE,
          tags: [EffectTag.DARKNESS],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const STOP_LV1: Skill = {
    description: 'Freezes a character in time',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Stop',
    outcome: {
      OPPONENT: [
        {
          add: 'STOP',
          duration: Duration.fromObject({ seconds: 10 }),
          tags: [EffectTag.TIME],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const SLOW_LV1: Skill = {
    description: 'Slow down an opponent',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Slow',
    outcome: {
      OPPONENT: [
        {
          add: 'SLOW',
          duration: Duration.fromObject({ seconds: 20 }),
          tags: [EffectTag.TIME],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const HASTE_LV1: Skill = {
    areaOfEffect: AreaOfEffect.RADIUS_15FT,
    description: 'Speed up a character',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Haste',
    outcome: {
      OPPONENT: [
        {
          add: 'HASTE',
          tags: [EffectTag.TIME],
        },
      ],
    },
    target: ActionTarget.ALLY,
  };

  export const CHILL_LV1: Skill = {
    description: '',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Chill',
    target: ActionTarget.OPPONENT,
  };

  export const CHARM_LV1: Skill = {
    description: '',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Charm',
    target: ActionTarget.OPPONENT,
  };

  export const FROST_LV1: Skill = {
    description: '',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Frost',
    outcome: {
      OPPONENT: [
        {
          quantity: '1d6+2',
          remove: Attribute.LIFE,
          tags: [EffectTag.COLD],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };

  export const ABSORB_LV1: Skill = {
    description: '',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Absorb',
    target: ActionTarget.OPPONENT,
  };

  export const LEECH_LV1: Skill = {
    description: '',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Leech',
    target: ActionTarget.OPPONENT,
  };

  export const DRAIN_LV1: Skill = {
    description: '',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Drain',
    outcome: {},
    target: ActionTarget.OPPONENT,
  };
}
