export declare enum Tool {
    GRAPPLING_HOOK = "Grappling Hook"
}
/**
 * Tool Action
 * Tool actions are based on using reusable tools
 */
export declare namespace Tool {
    type ToolType = {
        name: Tool;
        description: string;
    };
    const GrapplingHook: ToolType;
}
