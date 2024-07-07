import { MenuSlot } from '../menu-slot';
import { SkillType } from '.';

/**
 * Tool Action
 * Tool actions are based on the use of reusable tools.
 */
export namespace Tool {
  export const GRAPPLING_HOOK: SkillType = {
    description: 'Allows the party to move to higher ground.',
    menuSlot: MenuSlot.TOOLS,
    name: 'Grappling Hook',
  };

  export const DIG: SkillType = {
    description: 'Allows the party to dig a hole.',
    menuSlot: MenuSlot.TOOLS,
    name: 'Dig',
  };

  export const FISH: SkillType = {
    description: 'Allows the party to fish.',
    menuSlot: MenuSlot.TOOLS,
    name: 'Fish',
  };
}
