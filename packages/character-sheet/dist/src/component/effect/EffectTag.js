"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EffectTag = void 0;
/**
 * Tag  are used in determining effectiveness of an effect with regards to weaknesses and resistances
 * can be to assign to a action, trait, or effect.
 * Some tags can be automatically added, like LIFE_DECREASE IF attack decreases life.
 */
var EffectTag;
(function (EffectTag) {
    // Element
    EffectTag["ELECTRIC"] = "Electric";
    EffectTag["AIR"] = "Air";
    EffectTag["EARTH"] = "Earth";
    EffectTag["FIRE"] = "Fire";
    EffectTag["WATER"] = "Water";
    EffectTag["NATURE"] = "Nature";
    EffectTag["PHYSICAL"] = "Physical";
    EffectTag["PSYCHIC"] = "Psychic";
    EffectTag["DARKNESS"] = "Darkness";
    EffectTag["LIGHT"] = "Light";
    EffectTag["TIME"] = "Time";
    EffectTag["METAL"] = "Metal";
    // flying
    EffectTag["AERIAL"] = "Aerial";
    EffectTag["GROUNDLEVEL"] = "Ground-Level";
    //
    EffectTag["POISON"] = "Poison";
    // Weapon
    EffectTag["ARROW"] = "Arrow";
    EffectTag["BOW"] = "Bow";
    EffectTag["BLADE"] = "Blade";
    EffectTag["BLUNT"] = "Blunt";
    EffectTag["CLAW"] = "Claw";
    EffectTag["CROSSBOW"] = "Crossbow";
    EffectTag["DAGGER"] = "Dagger";
    EffectTag["DART"] = "Dart";
    EffectTag["FLAIL"] = "Flail";
    EffectTag["HAMMER"] = "Hammer";
    EffectTag["HAND_AXE"] = "Hand Axe";
    EffectTag["HAND_SWORD"] = "Hand Sword";
    EffectTag["HATCHET"] = "Hatchet";
    EffectTag["KNIFE"] = "Knife";
    EffectTag["MACE"] = "Mace";
    EffectTag["POLEARM"] = "Polearm";
    EffectTag["SHIELD"] = "Shield";
    EffectTag["STAFF"] = "Staff";
    EffectTag["SWORD"] = "Sword";
    EffectTag["SHEILD_SWORD"] = "Shield Sword";
    EffectTag["TOME"] = "Tome";
    EffectTag["WAND"] = "Wand";
    EffectTag["UNARMED"] = "Unarmed";
    EffectTag["UNKNOWN"] = "Unknown";
})(EffectTag = exports.EffectTag || (exports.EffectTag = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWZmZWN0VGFnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudC9lZmZlY3QvRWZmZWN0VGFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7O0dBSUc7QUFDSCxJQUFZLFNBK0NYO0FBL0NELFdBQVksU0FBUztJQUNuQixVQUFVO0lBQ1Ysa0NBQXFCLENBQUE7SUFDckIsd0JBQVcsQ0FBQTtJQUNYLDRCQUFlLENBQUE7SUFDZiwwQkFBYSxDQUFBO0lBQ2IsNEJBQWUsQ0FBQTtJQUNmLDhCQUFpQixDQUFBO0lBQ2pCLGtDQUFxQixDQUFBO0lBQ3JCLGdDQUFtQixDQUFBO0lBQ25CLGtDQUFxQixDQUFBO0lBQ3JCLDRCQUFlLENBQUE7SUFDZiwwQkFBYSxDQUFBO0lBQ2IsNEJBQWUsQ0FBQTtJQUVmLFNBQVM7SUFDVCw4QkFBaUIsQ0FBQTtJQUNqQix5Q0FBNEIsQ0FBQTtJQUU1QixFQUFFO0lBQ0YsOEJBQWlCLENBQUE7SUFFakIsU0FBUztJQUNULDRCQUFlLENBQUE7SUFDZix3QkFBVyxDQUFBO0lBQ1gsNEJBQWUsQ0FBQTtJQUNmLDRCQUFlLENBQUE7SUFDZiwwQkFBYSxDQUFBO0lBQ2Isa0NBQXFCLENBQUE7SUFDckIsOEJBQWlCLENBQUE7SUFDakIsMEJBQWEsQ0FBQTtJQUNiLDRCQUFlLENBQUE7SUFDZiw4QkFBaUIsQ0FBQTtJQUNqQixrQ0FBcUIsQ0FBQTtJQUNyQixzQ0FBeUIsQ0FBQTtJQUN6QixnQ0FBbUIsQ0FBQTtJQUNuQiw0QkFBZSxDQUFBO0lBQ2YsMEJBQWEsQ0FBQTtJQUNiLGdDQUFtQixDQUFBO0lBQ25CLDhCQUFpQixDQUFBO0lBQ2pCLDRCQUFlLENBQUE7SUFDZiw0QkFBZSxDQUFBO0lBQ2YsMENBQTZCLENBQUE7SUFDN0IsMEJBQWEsQ0FBQTtJQUNiLDBCQUFhLENBQUE7SUFDYixnQ0FBbUIsQ0FBQTtJQUNuQixnQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBL0NXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBK0NwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGFnICBhcmUgdXNlZCBpbiBkZXRlcm1pbmluZyBlZmZlY3RpdmVuZXNzIG9mIGFuIGVmZmVjdCB3aXRoIHJlZ2FyZHMgdG8gd2Vha25lc3NlcyBhbmQgcmVzaXN0YW5jZXNcbiAqIGNhbiBiZSB0byBhc3NpZ24gdG8gYSBhY3Rpb24sIHRyYWl0LCBvciBlZmZlY3QuXG4gKiBTb21lIHRhZ3MgY2FuIGJlIGF1dG9tYXRpY2FsbHkgYWRkZWQsIGxpa2UgTElGRV9ERUNSRUFTRSBJRiBhdHRhY2sgZGVjcmVhc2VzIGxpZmUuXG4gKi9cbmV4cG9ydCBlbnVtIEVmZmVjdFRhZyB7XG4gIC8vIEVsZW1lbnRcbiAgRUxFQ1RSSUMgPSAnRWxlY3RyaWMnLFxuICBBSVIgPSAnQWlyJyxcbiAgRUFSVEggPSAnRWFydGgnLFxuICBGSVJFID0gJ0ZpcmUnLFxuICBXQVRFUiA9ICdXYXRlcicsXG4gIE5BVFVSRSA9ICdOYXR1cmUnLFxuICBQSFlTSUNBTCA9ICdQaHlzaWNhbCcsXG4gIFBTWUNISUMgPSAnUHN5Y2hpYycsXG4gIERBUktORVNTID0gJ0RhcmtuZXNzJyxcbiAgTElHSFQgPSAnTGlnaHQnLFxuICBUSU1FID0gJ1RpbWUnLFxuICBNRVRBTCA9ICdNZXRhbCcsXG5cbiAgLy8gZmx5aW5nXG4gIEFFUklBTCA9ICdBZXJpYWwnLCAvLyBoYXBwZW5pbmcgaW4gdGhlIHNreSwgZWZmZWN0aXZlIGFnYWluc3QgZmx5aW5nXG4gIEdST1VORExFVkVMID0gJ0dyb3VuZC1MZXZlbCcsIC8vIGhhcHBlbnMgb24gdGhlIGdyb3VuZCwgaW5lZmZlY3RpdmUgYWdhaW5zdCBmbHlpbmdcblxuICAvL1xuICBQT0lTT04gPSAnUG9pc29uJyxcblxuICAvLyBXZWFwb25cbiAgQVJST1cgPSAnQXJyb3cnLFxuICBCT1cgPSAnQm93JyxcbiAgQkxBREUgPSAnQmxhZGUnLFxuICBCTFVOVCA9ICdCbHVudCcsXG4gIENMQVcgPSAnQ2xhdycsXG4gIENST1NTQk9XID0gJ0Nyb3NzYm93JyxcbiAgREFHR0VSID0gJ0RhZ2dlcicsXG4gIERBUlQgPSAnRGFydCcsXG4gIEZMQUlMID0gJ0ZsYWlsJyxcbiAgSEFNTUVSID0gJ0hhbW1lcicsXG4gIEhBTkRfQVhFID0gJ0hhbmQgQXhlJyxcbiAgSEFORF9TV09SRCA9ICdIYW5kIFN3b3JkJyxcbiAgSEFUQ0hFVCA9ICdIYXRjaGV0JyxcbiAgS05JRkUgPSAnS25pZmUnLFxuICBNQUNFID0gJ01hY2UnLFxuICBQT0xFQVJNID0gJ1BvbGVhcm0nLFxuICBTSElFTEQgPSAnU2hpZWxkJyxcbiAgU1RBRkYgPSAnU3RhZmYnLFxuICBTV09SRCA9ICdTd29yZCcsXG4gIFNIRUlMRF9TV09SRCA9ICdTaGllbGQgU3dvcmQnLFxuICBUT01FID0gJ1RvbWUnLFxuICBXQU5EID0gJ1dhbmQnLFxuICBVTkFSTUVEID0gJ1VuYXJtZWQnLFxuICBVTktOT1dOID0gJ1Vua25vd24nLFxufVxuIl19