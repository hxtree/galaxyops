export enum Tool {
  GRAPPLING_HOOK = 'Grappling Hook',
}

/**
 * Tool Action
 * Tool actions are based on using reusable tools
 */
export namespace Tool {
  export type ToolType = {
    name: Tool;
    description: string;
  };

  export const GrapplingHook: ToolType = {
    name: Tool.GRAPPLING_HOOK,
    description: 'Enables party to move to higher grounds.',
  };
}
