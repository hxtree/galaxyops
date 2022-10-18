"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusEffect = void 0;
/**
 * Status effects are abnormal states that may have positive or negative effects
 * they can be gained from actions or items and can be healed by resting, certain
 * abilities, or after some time.
 *
 * Status Effects are visible to the player
 */
var StatusEffect;
(function (StatusEffect) {
    // afflictions
    StatusEffect["LIFELESS"] = "Lifeless";
    StatusEffect["KNOCKED_OUT"] = "Knocked Out";
    StatusEffect["CONFUSED"] = "Confused";
    StatusEffect["DRUNK"] = "Drunk";
    StatusEffect["DOOMED"] = "Doomed";
    StatusEffect["MORTALLY_WOUNDED"] = "Mortally Wounded";
    StatusEffect["FROZEN"] = "Frozen";
    StatusEffect["COLD"] = "Cold";
    StatusEffect["BURNED"] = "Burned";
    StatusEffect["BOUND"] = "Bound";
    StatusEffect["SLEEPY"] = "Sleepy";
    StatusEffect["STUNNED"] = "Stunned";
    StatusEffect["DOWN"] = "Down";
    StatusEffect["DISARMED"] = "Disarmed";
    StatusEffect["EXILED"] = "Exiled";
    StatusEffect["INFECTION"] = "Infection";
    StatusEffect["METAMORPHIC"] = "Metamorphic";
    StatusEffect["IGNORANT"] = "Ignorant";
    StatusEffect["ZIPPED"] = "Zipped";
    StatusEffect["SILENCE"] = "Silence";
    StatusEffect["FATHOM"] = "Fathom";
    StatusEffect["DROWNED"] = "Drowned";
    StatusEffect["FEAR"] = "Fear";
    StatusEffect["STOP"] = "Stop";
    StatusEffect["SLOW"] = "Slow";
    // buffs
    StatusEffect["BERSERK"] = "Berserk";
    StatusEffect["BLITZ"] = "Blitz";
    StatusEffect["OMNI"] = "Omni";
    StatusEffect["BARRIER"] = "Barrier";
    StatusEffect["REFLECT"] = "Reflect";
    StatusEffect["HASTE"] = "Haste";
})(StatusEffect = exports.StatusEffect || (exports.StatusEffect = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnQvc3RhdHVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7O0dBTUc7QUFDSCxJQUFZLFlBbUNYO0FBbkNELFdBQVksWUFBWTtJQUN0QixjQUFjO0lBQ2QscUNBQXFCLENBQUE7SUFDckIsMkNBQTJCLENBQUE7SUFDM0IscUNBQXFCLENBQUE7SUFDckIsK0JBQWUsQ0FBQTtJQUNmLGlDQUFpQixDQUFBO0lBQ2pCLHFEQUFxQyxDQUFBO0lBQ3JDLGlDQUFpQixDQUFBO0lBQ2pCLDZCQUFhLENBQUE7SUFDYixpQ0FBaUIsQ0FBQTtJQUNqQiwrQkFBZSxDQUFBO0lBQ2YsaUNBQWlCLENBQUE7SUFDakIsbUNBQW1CLENBQUE7SUFDbkIsNkJBQWEsQ0FBQTtJQUNiLHFDQUFxQixDQUFBO0lBQ3JCLGlDQUFpQixDQUFBO0lBQ2pCLHVDQUF1QixDQUFBO0lBQ3ZCLDJDQUEyQixDQUFBO0lBQzNCLHFDQUFxQixDQUFBO0lBQ3JCLGlDQUFpQixDQUFBO0lBQ2pCLG1DQUFtQixDQUFBO0lBQ25CLGlDQUFpQixDQUFBO0lBQ2pCLG1DQUFtQixDQUFBO0lBQ25CLDZCQUFhLENBQUE7SUFDYiw2QkFBYSxDQUFBO0lBQ2IsNkJBQWEsQ0FBQTtJQUViLFFBQVE7SUFDUixtQ0FBbUIsQ0FBQTtJQUNuQiwrQkFBZSxDQUFBO0lBQ2YsNkJBQWEsQ0FBQTtJQUNiLG1DQUFtQixDQUFBO0lBQ25CLG1DQUFtQixDQUFBO0lBQ25CLCtCQUFlLENBQUE7QUFDakIsQ0FBQyxFQW5DVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQW1DdkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN0YXR1cyBlZmZlY3RzIGFyZSBhYm5vcm1hbCBzdGF0ZXMgdGhhdCBtYXkgaGF2ZSBwb3NpdGl2ZSBvciBuZWdhdGl2ZSBlZmZlY3RzXG4gKiB0aGV5IGNhbiBiZSBnYWluZWQgZnJvbSBhY3Rpb25zIG9yIGl0ZW1zIGFuZCBjYW4gYmUgaGVhbGVkIGJ5IHJlc3RpbmcsIGNlcnRhaW5cbiAqIGFiaWxpdGllcywgb3IgYWZ0ZXIgc29tZSB0aW1lLlxuICpcbiAqIFN0YXR1cyBFZmZlY3RzIGFyZSB2aXNpYmxlIHRvIHRoZSBwbGF5ZXJcbiAqL1xuZXhwb3J0IGVudW0gU3RhdHVzRWZmZWN0IHtcbiAgLy8gYWZmbGljdGlvbnNcbiAgTElGRUxFU1MgPSAnTGlmZWxlc3MnLCAvLyBBZmZsaWN0ZWQgd2hlbiBMaWZlIGlzIGxlc3MgdGhhbiAwXG4gIEtOT0NLRURfT1VUID0gJ0tub2NrZWQgT3V0JywgLy8gaXMgdW5hYmxlIHRvIG1vdmUuIFNldCB3aGVuIFN0YW1pbmEgaXMgbGVzcyB0aGFuIDAuXG4gIENPTkZVU0VEID0gJ0NvbmZ1c2VkJyxcbiAgRFJVTksgPSAnRHJ1bmsnLCAvLyAgYWNjdXJhY3kgZGVjcmVhc2VzLlxuICBET09NRUQgPSAnRG9vbWVkJywgLy8gaGVhbCBiZWZvcmUgdGltZXIgcnVucyBvdXQgb3IgS09zXG4gIE1PUlRBTExZX1dPVU5ERUQgPSAnTW9ydGFsbHkgV291bmRlZCcsXG4gIEZST1pFTiA9ICdGcm96ZW4nLFxuICBDT0xEID0gJ0NvbGQnLCAvLyAgU3BlZWQgcmVkdWNlZFxuICBCVVJORUQgPSAnQnVybmVkJyxcbiAgQk9VTkQgPSAnQm91bmQnLCAvLyBDYW5ub3QgZG8gYW55dGhpbmcgYnV0IEJyZWFrIEZyZWUgb3IgdXNlIFRvb2wgIChpbnRlcmFjdGlvbilcbiAgU0xFRVBZID0gJ1NsZWVweScsXG4gIFNUVU5ORUQgPSAnU3R1bm5lZCcsXG4gIERPV04gPSAnRG93bicsIC8vIGlzIGRpc2FibGVkIGFuZCBoYXMgZmFsbGVuIGRvd25cbiAgRElTQVJNRUQgPSAnRGlzYXJtZWQnLCAvLyBtdXN0IGdldCB3ZWFwb24gYW5kIGFybSBzZWxmIGFnYWluIGluIG9yZGVyIHRvIGF0dGFjay5cbiAgRVhJTEVEID0gJ0V4aWxlZCcsIC8vIEtpY2sgb3V0IG9mIGJhdHRsZSBjYW5ub3QgcmV0dXJuIHVudGlsIGJhdHRsZSBpcyBvdmVyXG4gIElORkVDVElPTiA9ICdJbmZlY3Rpb24nLCAvLyBEYW1hZ2UgaXMgcmVjZWl2ZWQgZWFjaCB0dXJuIHVudGlsIGluZmxpY3Rpb24gaXMgaGVhbGVkLlxuICBNRVRBTU9SUEhJQyA9ICdNZXRhbW9ycGhpYycsIC8vIFlvdSBhcmUgaW5mbGljdGVkIHdpdGggcmFuZG9tIHN0YXR1cyBhZmZlY3QgZWFjaCB0dXJuLlxuICBJR05PUkFOVCA9ICdJZ25vcmFudCcsIC8vIHVuYWJsZSB0byB1c2UgTGVhcm5cbiAgWklQUEVEID0gJ1ppcHBlZCcsIC8vIGNhbm5vdCB1c2UgR2Vhci5cbiAgU0lMRU5DRSA9ICdTaWxlbmNlJywgLy8gY2Fubm90IHVzZSBTcGVsbHMuXG4gIEZBVEhPTSA9ICdGYXRob20nLCAvLyBjYW5ub3QgdXNlIERyaXZlLlxuICBEUk9XTkVEID0gJ0Ryb3duZWQnLFxuICBGRUFSID0gJ0ZlYXInLCAvLyBjYW5ub3QgbW92ZS5cbiAgU1RPUCA9ICdTdG9wJywgLy8gZnJvemVuIGluIHRpbWUuXG4gIFNMT1cgPSAnU2xvdycsIC8vIHNwZWVkIHJlZHVjZWQuXG5cbiAgLy8gYnVmZnNcbiAgQkVSU0VSSyA9ICdCZXJzZXJrJywgLy8gY2FuIG9ubHkgYXR0YWNrLiBQb3dlciBpbmNyZWFzZWQgYnkgRHJpdmUuXG4gIEJMSVRaID0gJ0JsaXR6JywgLy8gU3RyZW5ndGggYW5kIGFyZSBzcGVlZCBtb2RpZmllZCBmb3Igb25seSBkdXJhdGlvbiBvZiBiYXR0bGUgKC01eCB0aHJvdWdoICs1eClcbiAgT01OSSA9ICdPbW5pJywgLy8gZW50ZXJzIGEgYmVyc2VyayBsaWtlIG1vZGUgYW5kIGF0dGFja3MgdW5jb250cm9sbGFibGUuXG4gIEJBUlJJRVIgPSAnQmFycmllcicsIC8vIGRhbWFnZSB0YWtlbiBkZWNyZWFzZXNcbiAgUkVGTEVDVCA9ICdSZWZsZWN0JywgLy8gZGFtYWdlIGlzIHJlZmxlY3RlZCBiYWNrXG4gIEhBU1RFID0gJ0hhc3RlJywgLy8gc3BlZWQgaW5jcmVhc2VkXG59XG4iXX0=