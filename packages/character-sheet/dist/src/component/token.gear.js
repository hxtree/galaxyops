"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
/**
 * Tokens are coin shaped objects that a Player recieves
 * that represent characters currently in party.
 * These coins have six sides with an engraving of the character they represent.
 * How a player arranges tokens reflects how party will be arranged and visa versa.
 * Different types of tokens represents a player's ability to control that character.
 */
var Token;
(function (Token) {
    /**
     * A Gold token means:
     * player can controller character.
     * player can order character.
     * player can adjust character's action.
     */
    Token["GOLD"] = "Gold";
    /**
     * A Silver token means:
     * player cannot controller character.
     * player can order the character to perform tasks.
     * player cannot adjust character's gear.
     * player can adjust character's action.
     */
    Token["SILVER"] = "Silver";
    /**
     * A Copper token means:
     * player cannot controller character.
     * player cannot order the character to perform tasks.
     * player cannot adjust character's gear.
     * player cannot adjust character's action.
     */
    Token["COPPER"] = "Copper";
    /**
     * A Gray token means:
     * player has a gold token for a character.
     * character is current not in party.
     */
    Token["GRAY"] = "Gray";
    /**
     * A Black token means:
     * character is dead.
     */
    Token["BLACK"] = "Black";
})(Token = exports.Token || (exports.Token = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uZ2Vhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnQvdG9rZW4uZ2Vhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7O0dBTUc7QUFDSCxJQUFZLEtBdUNYO0FBdkNELFdBQVksS0FBSztJQUNmOzs7OztPQUtHO0lBQ0gsc0JBQWEsQ0FBQTtJQUViOzs7Ozs7T0FNRztJQUNILDBCQUFpQixDQUFBO0lBRWpCOzs7Ozs7T0FNRztJQUNILDBCQUFpQixDQUFBO0lBRWpCOzs7O09BSUc7SUFDSCxzQkFBYSxDQUFBO0lBRWI7OztPQUdHO0lBQ0gsd0JBQWUsQ0FBQTtBQUNqQixDQUFDLEVBdkNXLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQXVDaEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRva2VucyBhcmUgY29pbiBzaGFwZWQgb2JqZWN0cyB0aGF0IGEgUGxheWVyIHJlY2lldmVzXG4gKiB0aGF0IHJlcHJlc2VudCBjaGFyYWN0ZXJzIGN1cnJlbnRseSBpbiBwYXJ0eS5cbiAqIFRoZXNlIGNvaW5zIGhhdmUgc2l4IHNpZGVzIHdpdGggYW4gZW5ncmF2aW5nIG9mIHRoZSBjaGFyYWN0ZXIgdGhleSByZXByZXNlbnQuXG4gKiBIb3cgYSBwbGF5ZXIgYXJyYW5nZXMgdG9rZW5zIHJlZmxlY3RzIGhvdyBwYXJ0eSB3aWxsIGJlIGFycmFuZ2VkIGFuZCB2aXNhIHZlcnNhLlxuICogRGlmZmVyZW50IHR5cGVzIG9mIHRva2VucyByZXByZXNlbnRzIGEgcGxheWVyJ3MgYWJpbGl0eSB0byBjb250cm9sIHRoYXQgY2hhcmFjdGVyLlxuICovXG5leHBvcnQgZW51bSBUb2tlbiB7XG4gIC8qKlxuICAgKiBBIEdvbGQgdG9rZW4gbWVhbnM6XG4gICAqIHBsYXllciBjYW4gY29udHJvbGxlciBjaGFyYWN0ZXIuXG4gICAqIHBsYXllciBjYW4gb3JkZXIgY2hhcmFjdGVyLlxuICAgKiBwbGF5ZXIgY2FuIGFkanVzdCBjaGFyYWN0ZXIncyBhY3Rpb24uXG4gICAqL1xuICBHT0xEID0gJ0dvbGQnLFxuXG4gIC8qKlxuICAgKiBBIFNpbHZlciB0b2tlbiBtZWFuczpcbiAgICogcGxheWVyIGNhbm5vdCBjb250cm9sbGVyIGNoYXJhY3Rlci5cbiAgICogcGxheWVyIGNhbiBvcmRlciB0aGUgY2hhcmFjdGVyIHRvIHBlcmZvcm0gdGFza3MuXG4gICAqIHBsYXllciBjYW5ub3QgYWRqdXN0IGNoYXJhY3RlcidzIGdlYXIuXG4gICAqIHBsYXllciBjYW4gYWRqdXN0IGNoYXJhY3RlcidzIGFjdGlvbi5cbiAgICovXG4gIFNJTFZFUiA9ICdTaWx2ZXInLFxuXG4gIC8qKlxuICAgKiBBIENvcHBlciB0b2tlbiBtZWFuczpcbiAgICogcGxheWVyIGNhbm5vdCBjb250cm9sbGVyIGNoYXJhY3Rlci5cbiAgICogcGxheWVyIGNhbm5vdCBvcmRlciB0aGUgY2hhcmFjdGVyIHRvIHBlcmZvcm0gdGFza3MuXG4gICAqIHBsYXllciBjYW5ub3QgYWRqdXN0IGNoYXJhY3RlcidzIGdlYXIuXG4gICAqIHBsYXllciBjYW5ub3QgYWRqdXN0IGNoYXJhY3RlcidzIGFjdGlvbi5cbiAgICovXG4gIENPUFBFUiA9ICdDb3BwZXInLFxuXG4gIC8qKlxuICAgKiBBIEdyYXkgdG9rZW4gbWVhbnM6XG4gICAqIHBsYXllciBoYXMgYSBnb2xkIHRva2VuIGZvciBhIGNoYXJhY3Rlci5cbiAgICogY2hhcmFjdGVyIGlzIGN1cnJlbnQgbm90IGluIHBhcnR5LlxuICAgKi9cbiAgR1JBWSA9ICdHcmF5JyxcblxuICAvKipcbiAgICogQSBCbGFjayB0b2tlbiBtZWFuczpcbiAgICogY2hhcmFjdGVyIGlzIGRlYWQuXG4gICAqL1xuICBCTEFDSyA9ICdCbGFjaycsXG59XG4iXX0=