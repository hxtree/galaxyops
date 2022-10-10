"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifierTag = exports.TargetModifier = exports.ElementModifierTag = void 0;
const Weapon_1 = require("../equipment/Weapon");
/**
 * ElementModifierTags are a type of tag used to determine weakness and resistance
 * For example, if a weapon deals fire damage but the target is immune to fire, the weapon will deal no damage.
 */
var ElementModifierTag;
(function (ElementModifierTag) {
    ElementModifierTag["ELECTRIC"] = "Electric";
    ElementModifierTag["AIR"] = "Air";
    ElementModifierTag["EARTH"] = "Earth";
    ElementModifierTag["FIRE"] = "Fire";
    ElementModifierTag["WATER"] = "Water";
    ElementModifierTag["NATURE"] = "Nature";
    ElementModifierTag["PHYSICAL"] = "Physical";
    ElementModifierTag["PSYCHIC"] = "Psychic";
    ElementModifierTag["DARKNESS"] = "Darkness";
    ElementModifierTag["LIGHT"] = "Light";
    ElementModifierTag["TIME"] = "Time";
})(ElementModifierTag = exports.ElementModifierTag || (exports.ElementModifierTag = {}));
/**
 * StatisticModifierTag are used to determine weakness and resistances to character statisitcs
 * chabges that could be the result of a trait, action, or effect and are used for computation purposes.
 * Sometimes statistic modification is the sole purpose of an attack.
 */
var TargetModifier;
(function (TargetModifier) {
    TargetModifier["LIFE_DECREASE"] = "Life Decrease";
    TargetModifier["LIFE_INCREASE"] = "Life Increase";
    TargetModifier["SPIRIT_DECREASE"] = "Spirit Decrease";
    TargetModifier["SPIRIT_INCREASE"] = "Spirit Increase";
    TargetModifier["DRIVE_DECREASE"] = "Drive Decrease";
    TargetModifier["DRIVE_INCREASE"] = "Drive Increase";
    TargetModifier["POWER_DECREASE"] = "Power Decrease";
    TargetModifier["POWER_INCREASE"] = "Power Increase";
    TargetModifier["SPEED_DECREASE"] = "Speed Decrease";
    TargetModifier["SPEED_INCREASE"] = "Speed Increase";
    TargetModifier["WISDOM_DECREASE"] = "Wisdom Decrease";
    TargetModifier["WISDOM_INCREASE"] = "Wisdom Increase";
    TargetModifier["INTELLIGENCE_DECREASE"] = "Intelligence Decrease";
    TargetModifier["INTELLIGENCE_INCREASE"] = "Intelligence Increase";
    TargetModifier["DEFENSE_DECREASE"] = "Defense Decrease";
    TargetModifier["DEFENSE_INCREASE"] = "Defense Increase";
    TargetModifier["ACCURACY_DECREASE"] = "Accuracy Decrease";
    TargetModifier["ACCURACY_INCREASE"] = "Accuracy Increase";
    TargetModifier["EVASION_DECREASE"] = "Evasion Decrease";
    TargetModifier["EVASION_INCREASE"] = "Evasion Increase";
    TargetModifier["LUCK_DECREASE"] = "Luck Decrease";
    TargetModifier["LUCK_INCREASE"] = "Luck Increase";
})(TargetModifier = exports.TargetModifier || (exports.TargetModifier = {}));
/**
 * ModifierTag is a type of tag used to determine weakness and resistance
 * A collection of modifiers types that are permittable to assign to a action, trait, or effect.
 */
exports.ModifierTag = {
    ...ElementModifierTag,
    ...Weapon_1.WeaponCategory,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kaWZpZXJUYWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50L2NoYXJhY3Rlci9Nb2RpZmllclRhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxnREFBbUQ7QUFFbkQ7OztHQUdHO0FBQ0gsSUFBWSxrQkFZWDtBQVpELFdBQVksa0JBQWtCO0lBQzVCLDJDQUFxQixDQUFBO0lBQ3JCLGlDQUFXLENBQUE7SUFDWCxxQ0FBZSxDQUFBO0lBQ2YsbUNBQWEsQ0FBQTtJQUNiLHFDQUFlLENBQUE7SUFDZix1Q0FBaUIsQ0FBQTtJQUNqQiwyQ0FBcUIsQ0FBQTtJQUNyQix5Q0FBbUIsQ0FBQTtJQUNuQiwyQ0FBcUIsQ0FBQTtJQUNyQixxQ0FBZSxDQUFBO0lBQ2YsbUNBQWEsQ0FBQTtBQUNmLENBQUMsRUFaVyxrQkFBa0IsR0FBbEIsMEJBQWtCLEtBQWxCLDBCQUFrQixRQVk3QjtBQUVEOzs7O0dBSUc7QUFDSCxJQUFZLGNBdUJYO0FBdkJELFdBQVksY0FBYztJQUN4QixpREFBK0IsQ0FBQTtJQUMvQixpREFBK0IsQ0FBQTtJQUMvQixxREFBbUMsQ0FBQTtJQUNuQyxxREFBbUMsQ0FBQTtJQUNuQyxtREFBaUMsQ0FBQTtJQUNqQyxtREFBaUMsQ0FBQTtJQUNqQyxtREFBaUMsQ0FBQTtJQUNqQyxtREFBaUMsQ0FBQTtJQUNqQyxtREFBaUMsQ0FBQTtJQUNqQyxtREFBaUMsQ0FBQTtJQUNqQyxxREFBbUMsQ0FBQTtJQUNuQyxxREFBbUMsQ0FBQTtJQUNuQyxpRUFBK0MsQ0FBQTtJQUMvQyxpRUFBK0MsQ0FBQTtJQUMvQyx1REFBcUMsQ0FBQTtJQUNyQyx1REFBcUMsQ0FBQTtJQUNyQyx5REFBdUMsQ0FBQTtJQUN2Qyx5REFBdUMsQ0FBQTtJQUN2Qyx1REFBcUMsQ0FBQTtJQUNyQyx1REFBcUMsQ0FBQTtJQUNyQyxpREFBK0IsQ0FBQTtJQUMvQixpREFBK0IsQ0FBQTtBQUNqQyxDQUFDLEVBdkJXLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBdUJ6QjtBQUVEOzs7R0FHRztBQUNVLFFBQUEsV0FBVyxHQUFHO0lBQ3pCLEdBQUcsa0JBQWtCO0lBQ3JCLEdBQUcsdUJBQWM7Q0FDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7V2VhcG9uQ2F0ZWdvcnl9IGZyb20gJy4uL2VxdWlwbWVudC9XZWFwb24nO1xuXG4vKipcbiAqIEVsZW1lbnRNb2RpZmllclRhZ3MgYXJlIGEgdHlwZSBvZiB0YWcgdXNlZCB0byBkZXRlcm1pbmUgd2Vha25lc3MgYW5kIHJlc2lzdGFuY2VcbiAqIEZvciBleGFtcGxlLCBpZiBhIHdlYXBvbiBkZWFscyBmaXJlIGRhbWFnZSBidXQgdGhlIHRhcmdldCBpcyBpbW11bmUgdG8gZmlyZSwgdGhlIHdlYXBvbiB3aWxsIGRlYWwgbm8gZGFtYWdlLlxuICovXG5leHBvcnQgZW51bSBFbGVtZW50TW9kaWZpZXJUYWcge1xuICBFTEVDVFJJQyA9ICdFbGVjdHJpYycsXG4gIEFJUiA9ICdBaXInLFxuICBFQVJUSCA9ICdFYXJ0aCcsXG4gIEZJUkUgPSAnRmlyZScsXG4gIFdBVEVSID0gJ1dhdGVyJyxcbiAgTkFUVVJFID0gJ05hdHVyZScsXG4gIFBIWVNJQ0FMID0gJ1BoeXNpY2FsJyxcbiAgUFNZQ0hJQyA9ICdQc3ljaGljJyxcbiAgREFSS05FU1MgPSAnRGFya25lc3MnLFxuICBMSUdIVCA9ICdMaWdodCcsXG4gIFRJTUUgPSAnVGltZScsXG59XG5cbi8qKlxuICogU3RhdGlzdGljTW9kaWZpZXJUYWcgYXJlIHVzZWQgdG8gZGV0ZXJtaW5lIHdlYWtuZXNzIGFuZCByZXNpc3RhbmNlcyB0byBjaGFyYWN0ZXIgc3RhdGlzaXRjc1xuICogY2hhYmdlcyB0aGF0IGNvdWxkIGJlIHRoZSByZXN1bHQgb2YgYSB0cmFpdCwgYWN0aW9uLCBvciBlZmZlY3QgYW5kIGFyZSB1c2VkIGZvciBjb21wdXRhdGlvbiBwdXJwb3Nlcy5cbiAqIFNvbWV0aW1lcyBzdGF0aXN0aWMgbW9kaWZpY2F0aW9uIGlzIHRoZSBzb2xlIHB1cnBvc2Ugb2YgYW4gYXR0YWNrLlxuICovXG5leHBvcnQgZW51bSBUYXJnZXRNb2RpZmllciB7XG4gIExJRkVfREVDUkVBU0UgPSAnTGlmZSBEZWNyZWFzZScsXG4gIExJRkVfSU5DUkVBU0UgPSAnTGlmZSBJbmNyZWFzZScsXG4gIFNQSVJJVF9ERUNSRUFTRSA9ICdTcGlyaXQgRGVjcmVhc2UnLFxuICBTUElSSVRfSU5DUkVBU0UgPSAnU3Bpcml0IEluY3JlYXNlJyxcbiAgRFJJVkVfREVDUkVBU0UgPSAnRHJpdmUgRGVjcmVhc2UnLFxuICBEUklWRV9JTkNSRUFTRSA9ICdEcml2ZSBJbmNyZWFzZScsXG4gIFBPV0VSX0RFQ1JFQVNFID0gJ1Bvd2VyIERlY3JlYXNlJyxcbiAgUE9XRVJfSU5DUkVBU0UgPSAnUG93ZXIgSW5jcmVhc2UnLFxuICBTUEVFRF9ERUNSRUFTRSA9ICdTcGVlZCBEZWNyZWFzZScsXG4gIFNQRUVEX0lOQ1JFQVNFID0gJ1NwZWVkIEluY3JlYXNlJyxcbiAgV0lTRE9NX0RFQ1JFQVNFID0gJ1dpc2RvbSBEZWNyZWFzZScsXG4gIFdJU0RPTV9JTkNSRUFTRSA9ICdXaXNkb20gSW5jcmVhc2UnLFxuICBJTlRFTExJR0VOQ0VfREVDUkVBU0UgPSAnSW50ZWxsaWdlbmNlIERlY3JlYXNlJyxcbiAgSU5URUxMSUdFTkNFX0lOQ1JFQVNFID0gJ0ludGVsbGlnZW5jZSBJbmNyZWFzZScsXG4gIERFRkVOU0VfREVDUkVBU0UgPSAnRGVmZW5zZSBEZWNyZWFzZScsXG4gIERFRkVOU0VfSU5DUkVBU0UgPSAnRGVmZW5zZSBJbmNyZWFzZScsXG4gIEFDQ1VSQUNZX0RFQ1JFQVNFID0gJ0FjY3VyYWN5IERlY3JlYXNlJyxcbiAgQUNDVVJBQ1lfSU5DUkVBU0UgPSAnQWNjdXJhY3kgSW5jcmVhc2UnLFxuICBFVkFTSU9OX0RFQ1JFQVNFID0gJ0V2YXNpb24gRGVjcmVhc2UnLFxuICBFVkFTSU9OX0lOQ1JFQVNFID0gJ0V2YXNpb24gSW5jcmVhc2UnLFxuICBMVUNLX0RFQ1JFQVNFID0gJ0x1Y2sgRGVjcmVhc2UnLFxuICBMVUNLX0lOQ1JFQVNFID0gJ0x1Y2sgSW5jcmVhc2UnLFxufVxuXG4vKipcbiAqIE1vZGlmaWVyVGFnIGlzIGEgdHlwZSBvZiB0YWcgdXNlZCB0byBkZXRlcm1pbmUgd2Vha25lc3MgYW5kIHJlc2lzdGFuY2VcbiAqIEEgY29sbGVjdGlvbiBvZiBtb2RpZmllcnMgdHlwZXMgdGhhdCBhcmUgcGVybWl0dGFibGUgdG8gYXNzaWduIHRvIGEgYWN0aW9uLCB0cmFpdCwgb3IgZWZmZWN0LlxuICovXG5leHBvcnQgY29uc3QgTW9kaWZpZXJUYWcgPSB7XG4gIC4uLkVsZW1lbnRNb2RpZmllclRhZyxcbiAgLi4uV2VhcG9uQ2F0ZWdvcnksXG59O1xuXG5leHBvcnQgdHlwZSBNb2RpZmllclRhZyA9IHR5cGVvZiBNb2RpZmllclRhZztcbiJdfQ==