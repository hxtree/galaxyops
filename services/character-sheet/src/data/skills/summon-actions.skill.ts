import {
  MenuSlot,
  Skill,
  SkillLevel,
} from '@galaxyops/character-sheet-contracts';

export namespace SummonActions {
  // modify the party to remove summon
  // all summons could be an archetype
  // they would get a copper or silver party token which doesn't persist
  export const DISMISS_LV1: Skill = {
    description: 'Release a summon.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: 'Dismiss',
    outcome: {},
  };

  // modify the party to add summon
  export const SUMMON_LV1: Skill = {
    backstory: '',
    description: '',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: '???',
  };

  export const COMMAND_LV1: Skill = {
    backstory: '',
    description: '',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.SUMMON,
    name: '???',
  };
}
