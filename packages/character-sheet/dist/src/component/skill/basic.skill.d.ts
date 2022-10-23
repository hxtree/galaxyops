import { EffectTable } from '../table.effect';
import { Attribute } from '../attribute';
export declare enum Focusable {
    STAMINA = "Stamina",
    TRUE = "True",
    FALSE = "False"
}
export declare enum Basic {
    BOAST = "Boast",
    DISGUISE = "Disguise",
    FOCUS = "Focus",
    GRAPPLE = "Grapple",
    HIDE = "Hide",
    SCAN = "Scan",
    CHEER = "Cheer",
    SUPPORT = "Support",
    HOPE = "Hope",
    INSPIRE = "Inspire",
    SCOUT = "Scout",
    MIMIC = "Mimic",
    PICKPOCKET = "Pickpocket",
    SEAL = "Seal",
    LULLABY = "Lullaby",
    WARD = "Ward",
    SACRIFICE = "Sacrifice",
    PROTECT = "Protect",
    MOCK = "Mock",
    SEARCH = "Search",
    STEAL = "Steal",
    PROTECTION = "Protection",
    LIGHT = "Light",
    REFLECT = "Reflect",
    RAGE = "Rage",
    DISMISS = "Dismiss"
}
/**
 * Class Skills are motor programs that a character learns to preform.
 * Each skill can be acquired via items, etc. but often
 * progression is determined by class.
 */
export declare namespace Basic {
    type BasicType = {
        name: string;
        description: string;
        effect: EffectTable;
        /**
         * Whether the skill must be canceled or automatically stop being performed
         */
        fixed?: boolean;
        /**
         * Stamina Boost Enabled Action
         * By holding down the button used to make that move
         * a player may place more stamina into the move
         * making it a more powerful action.
         * For every 6 seconds, character gains a plus 1 for example.
         */
        booster?: Attribute;
    };
    const Boast: BasicType;
    const Disguise: BasicType;
    const Dismiss: BasicType;
    const Focus: BasicType;
    const Grapple: BasicType;
    const Hide: BasicType;
    const Scan: BasicType;
    const Cheer: BasicType;
    const Support: BasicType;
    const Hope: BasicType;
    const Inspire: BasicType;
    const Scout: BasicType;
    const Mimic: BasicType;
    const Pickpocket: BasicType;
    const Seal: BasicType;
    const Lullaby: BasicType;
    const Ward: BasicType;
    const Sacrifice: BasicType;
    const Protect: BasicType;
    const Mock: BasicType;
    const Search: BasicType;
    const Steal: BasicType;
    const Reflect: BasicType;
    const Protection: BasicType;
    const Light: BasicType;
    const Rage: BasicType;
}
