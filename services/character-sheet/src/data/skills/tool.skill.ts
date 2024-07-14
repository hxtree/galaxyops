import {
  MenuSlot,
  Skill,
  SkillLevel,
} from '@galaxyops/character-sheet-contracts';

/**
 * Tool Action
 * Tool actions are based on the use of reusable tools.
 */
export namespace Tool {
  export const GRAPPLING_HOOK_LV1: Skill = {
    description: 'Allows the party to move to higher ground.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.TOOLS,
    name: 'Grappling Hook',
  };

  export const DIG_LV1: Skill = {
    description: 'Allows the party to dig a hole.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.TOOLS,
    name: 'Dig',
  };

  export const FISH_LV1: Skill = {
    description: 'Allows the party to fish.',
    level: SkillLevel.LV1,
    menuSlot: MenuSlot.TOOLS,
    name: 'Fish',
  };
}
