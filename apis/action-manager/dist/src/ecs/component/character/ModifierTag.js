"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifierTag = exports.TargetModifier = exports.ElementModifierTag = void 0;
const Weapon_1 = require("./Weapon");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kaWZpZXJUYWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvZWNzL2NvbXBvbmVudC9jaGFyYWN0ZXIvTW9kaWZpZXJUYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXdDO0FBRXhDOzs7R0FHRztBQUNILElBQVksa0JBV1g7QUFYRCxXQUFZLGtCQUFrQjtJQUM1QiwyQ0FBcUIsQ0FBQTtJQUNyQixpQ0FBVyxDQUFBO0lBQ1gscUNBQWUsQ0FBQTtJQUNmLG1DQUFhLENBQUE7SUFDYixxQ0FBZSxDQUFBO0lBQ2YsdUNBQWlCLENBQUE7SUFDakIsMkNBQXFCLENBQUE7SUFDckIseUNBQW1CLENBQUE7SUFDbkIsMkNBQXFCLENBQUE7SUFDckIscUNBQWUsQ0FBQTtBQUNqQixDQUFDLEVBWFcsa0JBQWtCLEdBQWxCLDBCQUFrQixLQUFsQiwwQkFBa0IsUUFXN0I7QUFFRDs7OztHQUlHO0FBQ0gsSUFBWSxjQXVCWDtBQXZCRCxXQUFZLGNBQWM7SUFDeEIsaURBQStCLENBQUE7SUFDL0IsaURBQStCLENBQUE7SUFDL0IscURBQW1DLENBQUE7SUFDbkMscURBQW1DLENBQUE7SUFDbkMsbURBQWlDLENBQUE7SUFDakMsbURBQWlDLENBQUE7SUFDakMsbURBQWlDLENBQUE7SUFDakMsbURBQWlDLENBQUE7SUFDakMsbURBQWlDLENBQUE7SUFDakMsbURBQWlDLENBQUE7SUFDakMscURBQW1DLENBQUE7SUFDbkMscURBQW1DLENBQUE7SUFDbkMsaUVBQStDLENBQUE7SUFDL0MsaUVBQStDLENBQUE7SUFDL0MsdURBQXFDLENBQUE7SUFDckMsdURBQXFDLENBQUE7SUFDckMseURBQXVDLENBQUE7SUFDdkMseURBQXVDLENBQUE7SUFDdkMsdURBQXFDLENBQUE7SUFDckMsdURBQXFDLENBQUE7SUFDckMsaURBQStCLENBQUE7SUFDL0IsaURBQStCLENBQUE7QUFDakMsQ0FBQyxFQXZCVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQXVCekI7QUFFRDs7O0dBR0c7QUFDVSxRQUFBLFdBQVcsR0FBRztJQUN6QixHQUFHLGtCQUFrQjtJQUNyQixHQUFHLHVCQUFjO0NBQ2xCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1dlYXBvbkNhdGVnb3J5fSBmcm9tICcuL1dlYXBvbic7XG5cbi8qKlxuICogRWxlbWVudE1vZGlmaWVyVGFncyBhcmUgYSB0eXBlIG9mIHRhZyB1c2VkIHRvIGRldGVybWluZSB3ZWFrbmVzcyBhbmQgcmVzaXN0YW5jZVxuICogRm9yIGV4YW1wbGUsIGlmIGEgd2VhcG9uIGRlYWxzIGZpcmUgZGFtYWdlIGJ1dCB0aGUgdGFyZ2V0IGlzIGltbXVuZSB0byBmaXJlLCB0aGUgd2VhcG9uIHdpbGwgZGVhbCBubyBkYW1hZ2UuXG4gKi9cbmV4cG9ydCBlbnVtIEVsZW1lbnRNb2RpZmllclRhZyB7XG4gIEVMRUNUUklDID0gJ0VsZWN0cmljJywgLy8gdGhpcyBpcyB0aGUgZGFtYWdlIHR5cGUgbW9kaWZpZXIgZm9yIGxpZ2h0bmluZy5cbiAgQUlSID0gJ0FpcicsIC8vIHRoaXMgaXMgdGhlIGRhbWFnZSB0eXBlIG1vZGlmaWVyIGZvciB3aW5kLlxuICBFQVJUSCA9ICdFYXJ0aCcsIC8vIHRoaXMgaXMgdGhlIGRhbWFnZSB0eXBlIG1vZGlmaWVyIGZvciBlYXJ0aC5cbiAgRklSRSA9ICdGaXJlJywgLy8gdGhpcyBpcyB0aGUgZGFtYWdlIHR5cGUgbW9kaWZpZXIgZm9yIGZpcmUuXG4gIFdBVEVSID0gJ1dhdGVyJywgLy8gdGhpcyBpcyB0aGUgZGFtYWdlIHR5cGUgbW9kaWZpZXIgZm9yIHdhdGVyLlxuICBOQVRVUkUgPSAnTmF0dXJlJywgLy8gdGhpcyBpcyB0aGUgZGFtYWdlIHR5cGUgbW9kaWZpZXIgZm9yIG5hdHVyZS5cbiAgUEhZU0lDQUwgPSAnUGh5c2ljYWwnLCAvLyB0aGlzIGlzIHRoZSBkYW1hZ2UgdHlwZSBtb2RpZmllciBmb3IgcGh5c2ljYWwuXG4gIFBTWUNISUMgPSAnUHN5Y2hpYycsIC8vIHRoaXMgaXMgdGhlIGRhbWFnZSB0eXBlIG1vZGlmaWVyIGZvciBwc3ljaGljLlxuICBEQVJLTkVTUyA9ICdEYXJrbmVzcycsIC8vIHRoaXMgaXMgdGhlIGRhbWFnZSB0eXBlIG1vZGlmaWVyIGZvciBkYXJrbmVzcy5cbiAgTElHSFQgPSAnTGlnaHQnLCAvLyB0aGlzIGlzIHRoZSBkYW1hZ2UgdHlwZSBtb2RpZmllciBmb3IgbGlnaHQuXG59XG5cbi8qKlxuICogU3RhdGlzdGljTW9kaWZpZXJUYWcgYXJlIHVzZWQgdG8gZGV0ZXJtaW5lIHdlYWtuZXNzIGFuZCByZXNpc3RhbmNlcyB0byBjaGFyYWN0ZXIgc3RhdGlzaXRjc1xuICogY2hhYmdlcyB0aGF0IGNvdWxkIGJlIHRoZSByZXN1bHQgb2YgYSB0cmFpdCwgYWN0aW9uLCBvciBlZmZlY3QgYW5kIGFyZSB1c2VkIGZvciBjb21wdXRhdGlvbiBwdXJwb3Nlcy5cbiAqIFNvbWV0aW1lcyBzdGF0aXN0aWMgbW9kaWZpY2F0aW9uIGlzIHRoZSBzb2xlIHB1cnBvc2Ugb2YgYW4gYXR0YWNrLlxuICovXG5leHBvcnQgZW51bSBUYXJnZXRNb2RpZmllciB7XG4gIExJRkVfREVDUkVBU0UgPSAnTGlmZSBEZWNyZWFzZScsXG4gIExJRkVfSU5DUkVBU0UgPSAnTGlmZSBJbmNyZWFzZScsXG4gIFNQSVJJVF9ERUNSRUFTRSA9ICdTcGlyaXQgRGVjcmVhc2UnLFxuICBTUElSSVRfSU5DUkVBU0UgPSAnU3Bpcml0IEluY3JlYXNlJyxcbiAgRFJJVkVfREVDUkVBU0UgPSAnRHJpdmUgRGVjcmVhc2UnLFxuICBEUklWRV9JTkNSRUFTRSA9ICdEcml2ZSBJbmNyZWFzZScsXG4gIFBPV0VSX0RFQ1JFQVNFID0gJ1Bvd2VyIERlY3JlYXNlJyxcbiAgUE9XRVJfSU5DUkVBU0UgPSAnUG93ZXIgSW5jcmVhc2UnLFxuICBTUEVFRF9ERUNSRUFTRSA9ICdTcGVlZCBEZWNyZWFzZScsXG4gIFNQRUVEX0lOQ1JFQVNFID0gJ1NwZWVkIEluY3JlYXNlJyxcbiAgV0lTRE9NX0RFQ1JFQVNFID0gJ1dpc2RvbSBEZWNyZWFzZScsXG4gIFdJU0RPTV9JTkNSRUFTRSA9ICdXaXNkb20gSW5jcmVhc2UnLFxuICBJTlRFTExJR0VOQ0VfREVDUkVBU0UgPSAnSW50ZWxsaWdlbmNlIERlY3JlYXNlJyxcbiAgSU5URUxMSUdFTkNFX0lOQ1JFQVNFID0gJ0ludGVsbGlnZW5jZSBJbmNyZWFzZScsXG4gIERFRkVOU0VfREVDUkVBU0UgPSAnRGVmZW5zZSBEZWNyZWFzZScsXG4gIERFRkVOU0VfSU5DUkVBU0UgPSAnRGVmZW5zZSBJbmNyZWFzZScsXG4gIEFDQ1VSQUNZX0RFQ1JFQVNFID0gJ0FjY3VyYWN5IERlY3JlYXNlJyxcbiAgQUNDVVJBQ1lfSU5DUkVBU0UgPSAnQWNjdXJhY3kgSW5jcmVhc2UnLFxuICBFVkFTSU9OX0RFQ1JFQVNFID0gJ0V2YXNpb24gRGVjcmVhc2UnLFxuICBFVkFTSU9OX0lOQ1JFQVNFID0gJ0V2YXNpb24gSW5jcmVhc2UnLFxuICBMVUNLX0RFQ1JFQVNFID0gJ0x1Y2sgRGVjcmVhc2UnLFxuICBMVUNLX0lOQ1JFQVNFID0gJ0x1Y2sgSW5jcmVhc2UnLFxufVxuXG4vKipcbiAqIE1vZGlmaWVyVGFnIGlzIGEgdHlwZSBvZiB0YWcgdXNlZCB0byBkZXRlcm1pbmUgd2Vha25lc3MgYW5kIHJlc2lzdGFuY2VcbiAqIEEgY29sbGVjdGlvbiBvZiBtb2RpZmllcnMgdHlwZXMgdGhhdCBhcmUgcGVybWl0dGFibGUgdG8gYXNzaWduIHRvIGEgYWN0aW9uLCB0cmFpdCwgb3IgZWZmZWN0LlxuICovXG5leHBvcnQgY29uc3QgTW9kaWZpZXJUYWcgPSB7XG4gIC4uLkVsZW1lbnRNb2RpZmllclRhZyxcbiAgLi4uV2VhcG9uQ2F0ZWdvcnksXG59O1xuXG5leHBvcnQgdHlwZSBNb2RpZmllclRhZyA9IHR5cGVvZiBNb2RpZmllclRhZztcbiJdfQ==