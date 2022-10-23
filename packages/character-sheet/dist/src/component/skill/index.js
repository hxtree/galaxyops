"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillCategory = void 0;
/**
 * Skills are decoupled from the actor and target.
 * Skills refer to abilities that assigned to characters.
 */
__exportStar(require("./basic.skill"), exports);
__exportStar(require("./drive.skill"), exports);
__exportStar(require("./item.skill"), exports);
__exportStar(require("./spell.skill"), exports);
__exportStar(require("./tool.skill"), exports);
__exportStar(require("./weapon.skill"), exports);
__exportStar(require("./movement.skill"), exports);
__exportStar(require("./passive.skill"), exports);
__exportStar(require("./teamwork.skill"), exports);
__exportStar(require("./summon.skill"), exports);
__exportStar(require("./trap.skill"), exports);
// Is this more of a system than a component?
var SkillCategory;
(function (SkillCategory) {
    SkillCategory["MOVEMENT"] = "Movement";
    SkillCategory["MENU"] = "Menu";
    SkillCategory["COMBO"] = "Combo";
    SkillCategory["INTERACTION"] = "Interaction";
    SkillCategory["WEAPON"] = "Weapon";
    SkillCategory["CLASS"] = "Class";
    SkillCategory["DRIVE"] = "Drive";
    SkillCategory["PARTY"] = "Party";
    SkillCategory["GEAR"] = "Gear";
    SkillCategory["NATURAL"] = "Natural";
})(SkillCategory = exports.SkillCategory || (exports.SkillCategory = {}));
// const MasterSkillList = {
//   ...WeaponSkillList,
//   ...TrapSkillList,
//   ...ClassSkillList,
//   ...DriveSkillList,
//   ...ComboSkillList,
//   ...SpellSkillList,
//   ...TeamworkSkillList,
//   ...PassiveSkillList,
//   ...ItemSkillList,
//   ...InteractionSkillList,
//   ...ToolSkillList,
//   ...Summon,
// };
// export type MasterSkillListType = typeof MasterSkillList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50L3NraWxsL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztHQUdHO0FBQ0gsZ0RBQThCO0FBQzlCLGdEQUE4QjtBQUM5QiwrQ0FBNkI7QUFDN0IsZ0RBQThCO0FBQzlCLCtDQUE2QjtBQUM3QixpREFBK0I7QUFDL0IsbURBQWlDO0FBQ2pDLGtEQUFnQztBQUNoQyxtREFBaUM7QUFDakMsaURBQStCO0FBQy9CLCtDQUE2QjtBQUU3Qiw2Q0FBNkM7QUFDN0MsSUFBWSxhQVdYO0FBWEQsV0FBWSxhQUFhO0lBQ3ZCLHNDQUFxQixDQUFBO0lBQ3JCLDhCQUFhLENBQUE7SUFDYixnQ0FBZSxDQUFBO0lBQ2YsNENBQTJCLENBQUE7SUFDM0Isa0NBQWlCLENBQUE7SUFDakIsZ0NBQWUsQ0FBQTtJQUNmLGdDQUFlLENBQUE7SUFDZixnQ0FBZSxDQUFBO0lBQ2YsOEJBQWEsQ0FBQTtJQUNiLG9DQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFYVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQVd4QjtBQUVELDRCQUE0QjtBQUM1Qix3QkFBd0I7QUFDeEIsc0JBQXNCO0FBQ3RCLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2QiwwQkFBMEI7QUFDMUIseUJBQXlCO0FBQ3pCLHNCQUFzQjtBQUN0Qiw2QkFBNkI7QUFDN0Isc0JBQXNCO0FBQ3RCLGVBQWU7QUFDZixLQUFLO0FBQ0wsNERBQTREIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTa2lsbHMgYXJlIGRlY291cGxlZCBmcm9tIHRoZSBhY3RvciBhbmQgdGFyZ2V0LlxuICogU2tpbGxzIHJlZmVyIHRvIGFiaWxpdGllcyB0aGF0IGFzc2lnbmVkIHRvIGNoYXJhY3RlcnMuXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vYmFzaWMuc2tpbGwnO1xuZXhwb3J0ICogZnJvbSAnLi9kcml2ZS5za2lsbCc7XG5leHBvcnQgKiBmcm9tICcuL2l0ZW0uc2tpbGwnO1xuZXhwb3J0ICogZnJvbSAnLi9zcGVsbC5za2lsbCc7XG5leHBvcnQgKiBmcm9tICcuL3Rvb2wuc2tpbGwnO1xuZXhwb3J0ICogZnJvbSAnLi93ZWFwb24uc2tpbGwnO1xuZXhwb3J0ICogZnJvbSAnLi9tb3ZlbWVudC5za2lsbCc7XG5leHBvcnQgKiBmcm9tICcuL3Bhc3NpdmUuc2tpbGwnO1xuZXhwb3J0ICogZnJvbSAnLi90ZWFtd29yay5za2lsbCc7XG5leHBvcnQgKiBmcm9tICcuL3N1bW1vbi5za2lsbCc7XG5leHBvcnQgKiBmcm9tICcuL3RyYXAuc2tpbGwnO1xuXG4vLyBJcyB0aGlzIG1vcmUgb2YgYSBzeXN0ZW0gdGhhbiBhIGNvbXBvbmVudD9cbmV4cG9ydCBlbnVtIFNraWxsQ2F0ZWdvcnkge1xuICBNT1ZFTUVOVCA9ICdNb3ZlbWVudCcsIC8vIGNoYW5nZXMgcG9zaXRpb25cbiAgTUVOVSA9ICdNZW51JywgLy8gYWN0aXZhdGVkIHZpYSBtZW51XG4gIENPTUJPID0gJ0NvbWJvJywgLy8gYWN0aXZhdGVkIHZpYSBjb21ib1xuICBJTlRFUkFDVElPTiA9ICdJbnRlcmFjdGlvbicsIC8vIGluIHJlbGF0aW9uIHRvIG9iamVjdFxuICBXRUFQT04gPSAnV2VhcG9uJyxcbiAgQ0xBU1MgPSAnQ2xhc3MnLFxuICBEUklWRSA9ICdEcml2ZScsXG4gIFBBUlRZID0gJ1BhcnR5JyxcbiAgR0VBUiA9ICdHZWFyJywgLy8gYXJlIHJlbGF0ZWQgdG8gdGhlIHVzZSBvZiBnZWFyXG4gIE5BVFVSQUwgPSAnTmF0dXJhbCcsIC8vICBhY3Rpb25zIHRoYXQgZG8gbm90IG5lZWQgdG8gYmUgY2FsbGVkIHRvIGJlIHVzZWQgPz8/IFRoZXNlIHNvdW5kIGxpa2UgdHJhaXRzIG9yIHNvbWV0aGluZz9cbn1cblxuLy8gY29uc3QgTWFzdGVyU2tpbGxMaXN0ID0ge1xuLy8gICAuLi5XZWFwb25Ta2lsbExpc3QsXG4vLyAgIC4uLlRyYXBTa2lsbExpc3QsXG4vLyAgIC4uLkNsYXNzU2tpbGxMaXN0LFxuLy8gICAuLi5Ecml2ZVNraWxsTGlzdCxcbi8vICAgLi4uQ29tYm9Ta2lsbExpc3QsXG4vLyAgIC4uLlNwZWxsU2tpbGxMaXN0LFxuLy8gICAuLi5UZWFtd29ya1NraWxsTGlzdCxcbi8vICAgLi4uUGFzc2l2ZVNraWxsTGlzdCxcbi8vICAgLi4uSXRlbVNraWxsTGlzdCxcbi8vICAgLi4uSW50ZXJhY3Rpb25Ta2lsbExpc3QsXG4vLyAgIC4uLlRvb2xTa2lsbExpc3QsXG4vLyAgIC4uLlN1bW1vbixcbi8vIH07XG4vLyBleHBvcnQgdHlwZSBNYXN0ZXJTa2lsbExpc3RUeXBlID0gdHlwZW9mIE1hc3RlclNraWxsTGlzdDtcbiJdfQ==