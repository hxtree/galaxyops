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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZWNzL2NvbXBvbmVudC9lcXVpcG1lbnQvVG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7OztHQU1HO0FBQ0gsSUFBWSxLQXVDWDtBQXZDRCxXQUFZLEtBQUs7SUFDZjs7Ozs7T0FLRztJQUNILHNCQUFhLENBQUE7SUFFYjs7Ozs7O09BTUc7SUFDSCwwQkFBaUIsQ0FBQTtJQUVqQjs7Ozs7O09BTUc7SUFDSCwwQkFBaUIsQ0FBQTtJQUVqQjs7OztPQUlHO0lBQ0gsc0JBQWEsQ0FBQTtJQUViOzs7T0FHRztJQUNILHdCQUFlLENBQUE7QUFDakIsQ0FBQyxFQXZDVyxLQUFLLEdBQUwsYUFBSyxLQUFMLGFBQUssUUF1Q2hCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUb2tlbnMgYXJlIGNvaW4gc2hhcGVkIG9iamVjdHMgdGhhdCBhIFBsYXllciByZWNpZXZlc1xuICogdGhhdCByZXByZXNlbnQgY2hhcmFjdGVycyBjdXJyZW50bHkgaW4gcGFydHkuXG4gKiBUaGVzZSBjb2lucyBoYXZlIHNpeCBzaWRlcyB3aXRoIGFuIGVuZ3JhdmluZyBvZiB0aGUgY2hhcmFjdGVyIHRoZXkgcmVwcmVzZW50LlxuICogSG93IGEgcGxheWVyIGFycmFuZ2VzIHRva2VucyByZWZsZWN0cyBob3cgcGFydHkgd2lsbCBiZSBhcnJhbmdlZCBhbmQgdmlzYSB2ZXJzYS5cbiAqIERpZmZlcmVudCB0eXBlcyBvZiB0b2tlbnMgcmVwcmVzZW50cyBhIHBsYXllcidzIGFiaWxpdHkgdG8gY29udHJvbCB0aGF0IGNoYXJhY3Rlci5cbiAqL1xuZXhwb3J0IGVudW0gVG9rZW4ge1xuICAvKipcbiAgICogQSBHb2xkIHRva2VuIG1lYW5zOlxuICAgKiBwbGF5ZXIgY2FuIGNvbnRyb2xsZXIgY2hhcmFjdGVyLlxuICAgKiBwbGF5ZXIgY2FuIG9yZGVyIGNoYXJhY3Rlci5cbiAgICogcGxheWVyIGNhbiBhZGp1c3QgY2hhcmFjdGVyJ3MgYWN0aW9uLlxuICAgKi9cbiAgR09MRCA9ICdHb2xkJyxcblxuICAvKipcbiAgICogQSBTaWx2ZXIgdG9rZW4gbWVhbnM6XG4gICAqIHBsYXllciBjYW5ub3QgY29udHJvbGxlciBjaGFyYWN0ZXIuXG4gICAqIHBsYXllciBjYW4gb3JkZXIgdGhlIGNoYXJhY3RlciB0byBwZXJmb3JtIHRhc2tzLlxuICAgKiBwbGF5ZXIgY2Fubm90IGFkanVzdCBjaGFyYWN0ZXIncyBnZWFyLlxuICAgKiBwbGF5ZXIgY2FuIGFkanVzdCBjaGFyYWN0ZXIncyBhY3Rpb24uXG4gICAqL1xuICBTSUxWRVIgPSAnU2lsdmVyJyxcblxuICAvKipcbiAgICogQSBDb3BwZXIgdG9rZW4gbWVhbnM6XG4gICAqIHBsYXllciBjYW5ub3QgY29udHJvbGxlciBjaGFyYWN0ZXIuXG4gICAqIHBsYXllciBjYW5ub3Qgb3JkZXIgdGhlIGNoYXJhY3RlciB0byBwZXJmb3JtIHRhc2tzLlxuICAgKiBwbGF5ZXIgY2Fubm90IGFkanVzdCBjaGFyYWN0ZXIncyBnZWFyLlxuICAgKiBwbGF5ZXIgY2Fubm90IGFkanVzdCBjaGFyYWN0ZXIncyBhY3Rpb24uXG4gICAqL1xuICBDT1BQRVIgPSAnQ29wcGVyJyxcblxuICAvKipcbiAgICogQSBHcmF5IHRva2VuIG1lYW5zOlxuICAgKiBwbGF5ZXIgaGFzIGEgZ29sZCB0b2tlbiBmb3IgYSBjaGFyYWN0ZXIuXG4gICAqIGNoYXJhY3RlciBpcyBjdXJyZW50IG5vdCBpbiBwYXJ0eS5cbiAgICovXG4gIEdSQVkgPSAnR3JheScsXG5cbiAgLyoqXG4gICAqIEEgQmxhY2sgdG9rZW4gbWVhbnM6XG4gICAqIGNoYXJhY3RlciBpcyBkZWFkLlxuICAgKi9cbiAgQkxBQ0sgPSAnQmxhY2snLFxufVxuIl19