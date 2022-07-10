import { BaseCharacter } from '../BaseCharacter';

// Tokens are coin shaped objects that a Player recieves that represent characters currently in party. 
// These coins have six sides with an engraving of the character they represent. 
// Different types of tokens represents a Players ability to control that character. 
// How a player arranges tokens is how your party will be arranged and visa versa.
export enum Token {
    // A gold token represences a character that is able to be controlled and can be ordered.
    GOLD = "Gold",
    
    // A siler token  means that the character will not be able to be controlled but can be ordered. 
    // The player is not able to adjust the gear of these players but they can adjust their actions.
    SILVER = 'Silver',

    // A copper means that the character will not be able to be controlled or ordered.
    // In addition the player is not able to adjust the gear of these players or their actions.
    COPPER = 'Copper',

    // A gray token means that the player has a gold token for a character but they are not in the party currently
    GRAY = 'Gray',

    // A black token is used to represent a dead party member
    BLACK = 'Black',
}

export abstract class BasePlayerCharacter extends BaseCharacter {
    protected _token: Token;
}