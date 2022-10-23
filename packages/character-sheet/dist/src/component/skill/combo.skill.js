"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Combo = void 0;
const weapon_skill_1 = require("./weapon.skill");
var Combo;
(function (Combo) {
    Combo["BLITZ"] = "Blitz";
})(Combo = exports.Combo || (exports.Combo = {}));
/**
 * Combo Skills use is revoked unless character action history matches exactly
 * prerequisite of prior skills
 * Once prerequisite is matched the combination activation button (Square by default)
 * can be pressed to activate the action
 *
 * If prerequestes is undefined, a player may customize a characters to set a custom
 * combo in order for quicker action selection.
 */
(function (Combo) {
    Combo.Blitz = {
        name: Combo.BLITZ,
        description: '',
        prerequisite: [weapon_skill_1.Weapon.SLASH, weapon_skill_1.Weapon.SLASH, weapon_skill_1.Weapon.SLASH],
    };
})(Combo = exports.Combo || (exports.Combo = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYm8uc2tpbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50L3NraWxsL2NvbWJvLnNraWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlEQUFzQztBQUV0QyxJQUFZLEtBRVg7QUFGRCxXQUFZLEtBQUs7SUFDZix3QkFBZSxDQUFBO0FBQ2pCLENBQUMsRUFGVyxLQUFLLEdBQUwsYUFBSyxLQUFMLGFBQUssUUFFaEI7QUFFRDs7Ozs7Ozs7R0FRRztBQUNILFdBQWlCLEtBQUs7SUFPUCxXQUFLLEdBQWM7UUFDOUIsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLO1FBQ2pCLFdBQVcsRUFBRSxFQUFFO1FBQ2YsWUFBWSxFQUFFLENBQUMscUJBQU0sQ0FBQyxLQUFLLEVBQUUscUJBQU0sQ0FBQyxLQUFLLEVBQUUscUJBQU0sQ0FBQyxLQUFLLENBQUM7S0FDekQsQ0FBQztBQUNKLENBQUMsRUFaZ0IsS0FBSyxHQUFMLGFBQUssS0FBTCxhQUFLLFFBWXJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtXZWFwb259IGZyb20gJy4vd2VhcG9uLnNraWxsJztcblxuZXhwb3J0IGVudW0gQ29tYm8ge1xuICBCTElUWiA9ICdCbGl0eicsXG59XG5cbi8qKlxuICogQ29tYm8gU2tpbGxzIHVzZSBpcyByZXZva2VkIHVubGVzcyBjaGFyYWN0ZXIgYWN0aW9uIGhpc3RvcnkgbWF0Y2hlcyBleGFjdGx5XG4gKiBwcmVyZXF1aXNpdGUgb2YgcHJpb3Igc2tpbGxzXG4gKiBPbmNlIHByZXJlcXVpc2l0ZSBpcyBtYXRjaGVkIHRoZSBjb21iaW5hdGlvbiBhY3RpdmF0aW9uIGJ1dHRvbiAoU3F1YXJlIGJ5IGRlZmF1bHQpXG4gKiBjYW4gYmUgcHJlc3NlZCB0byBhY3RpdmF0ZSB0aGUgYWN0aW9uXG4gKlxuICogSWYgcHJlcmVxdWVzdGVzIGlzIHVuZGVmaW5lZCwgYSBwbGF5ZXIgbWF5IGN1c3RvbWl6ZSBhIGNoYXJhY3RlcnMgdG8gc2V0IGEgY3VzdG9tXG4gKiBjb21ibyBpbiBvcmRlciBmb3IgcXVpY2tlciBhY3Rpb24gc2VsZWN0aW9uLlxuICovXG5leHBvcnQgbmFtZXNwYWNlIENvbWJvIHtcbiAgZXhwb3J0IHR5cGUgQ29tYm9UeXBlID0ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIHByZXJlcXVpc2l0ZT86IFdlYXBvbltdOyAvLyB0b2RvIGZpZ3VyZSBvdXIgcHJvZ3JhbW1hdGljIHNvbHV0aW9uXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IEJsaXR6OiBDb21ib1R5cGUgPSB7XG4gICAgbmFtZTogQ29tYm8uQkxJVFosXG4gICAgZGVzY3JpcHRpb246ICcnLFxuICAgIHByZXJlcXVpc2l0ZTogW1dlYXBvbi5TTEFTSCwgV2VhcG9uLlNMQVNILCBXZWFwb24uU0xBU0hdLFxuICB9O1xufVxuIl19