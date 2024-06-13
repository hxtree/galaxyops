import { MenuSlot } from '../menu-slot';

/**
 * Tool Action
 * Tool actions are based on the use of reusable tools.
 */
export namespace Tool {
  export type Type = {
    name: string;
    description: string;
    menuSlot: MenuSlot;
  };

  export const GRAPPLING_HOOK: Type = {
    name: 'Grappling Hook',
    description: 'Allows the party to move to higher ground.',
    menuSlot: MenuSlot.FOURTH,
  };

  export const DIG: Type = {
    name: 'Dig',
    description: 'Allows the party to dig a hole.',
    menuSlot: MenuSlot.FOURTH,
  };

  export const FISH: Type = {
    name: 'Fish',
    description: 'Allows the party to fish.',
    menuSlot: MenuSlot.FOURTH,
  };
}
