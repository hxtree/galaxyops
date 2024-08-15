import {
  EffectTag,
  Attribute,
  ActionTarget,
  MenuSlot,
  Skill,
  SkillLevel,
} from '@galaxyops/character-sheet-contracts';

export namespace OtherSpells {
  export const CYCLONE_LV1: Skill = {
    description: 'Creates Cyclone',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.MAGIC,
    name: 'Cyclone',
    outcome: {
      OPPONENT: [
        { quantity: '1d6+2', remove: Attribute.LIFE, tags: [EffectTag.AIR] },
        {
          add: 'EXILED',
          chance: 0.2,
          tags: [EffectTag.AIR, EffectTag.AERIAL],
        },
      ],
    },
    target: ActionTarget.OPPONENT,
  };
}
