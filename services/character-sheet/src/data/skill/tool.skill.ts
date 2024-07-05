import { MenuSlot } from '../menu-slot';
import { SkillType } from '.';

/**
 * Tool Action
 * Tool actions are based on the use of reusable tools.
 */
export namespace Tool {
  export const GRAPPLING_HOOK: SkillType = {
    name: 'Grappling Hook',
    description: 'Allows the party to move to higher ground.',
    menuSlot: MenuSlot.TOOLS,
  };

  export const DIG: SkillType = {
    name: 'Dig',
    description: 'Allows the party to dig a hole.',
    menuSlot: MenuSlot.TOOLS,
  };

  export const FISH: SkillType = {
    name: 'Fish',
    description: 'Allows the party to fish.',
    menuSlot: MenuSlot.TOOLS,
  };
}
