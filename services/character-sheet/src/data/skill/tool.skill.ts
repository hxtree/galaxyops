/**
 * Tool Action
 * Tool actions are based on using reusable tools
 */
export namespace Tool {
  export type Type = {
    name: string;
    description: string;
  };

  export const GRAPPLING_HOOK: Type = {
    name: 'Grappling Hook',
    description: 'Enables party to move to higher grounds.',
  };
}
