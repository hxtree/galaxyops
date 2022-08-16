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
    // buffs
    StatusEffect["BERSERK"] = "Berserk";
    StatusEffect["BLITZ"] = "Blitz";
    StatusEffect["OMNI"] = "Omni";
    StatusEffect["BARRIER"] = "Barrier";
    StatusEffect["REFLECT"] = "Reflect";
})(StatusEffect = exports.StatusEffect || (exports.StatusEffect = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHVzRWZmZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2Vjcy9jb21wb25lbnQvY2hhcmFjdGVyL1N0YXR1c0VmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7O0dBTUc7QUFDSCxJQUFZLFlBZ0NYO0FBaENELFdBQVksWUFBWTtJQUN0QixjQUFjO0lBQ2QscUNBQXFCLENBQUE7SUFDckIsMkNBQTJCLENBQUE7SUFDM0IscUNBQXFCLENBQUE7SUFDckIsK0JBQWUsQ0FBQTtJQUNmLGlDQUFpQixDQUFBO0lBQ2pCLHFEQUFxQyxDQUFBO0lBQ3JDLGlDQUFpQixDQUFBO0lBQ2pCLDZCQUFhLENBQUE7SUFDYixpQ0FBaUIsQ0FBQTtJQUNqQiwrQkFBZSxDQUFBO0lBQ2YsaUNBQWlCLENBQUE7SUFDakIsbUNBQW1CLENBQUE7SUFDbkIsNkJBQWEsQ0FBQTtJQUNiLHFDQUFxQixDQUFBO0lBQ3JCLGlDQUFpQixDQUFBO0lBQ2pCLHVDQUF1QixDQUFBO0lBQ3ZCLDJDQUEyQixDQUFBO0lBQzNCLHFDQUFxQixDQUFBO0lBQ3JCLGlDQUFpQixDQUFBO0lBQ2pCLG1DQUFtQixDQUFBO0lBQ25CLGlDQUFpQixDQUFBO0lBQ2pCLG1DQUFtQixDQUFBO0lBQ25CLDZCQUFhLENBQUE7SUFFYixRQUFRO0lBQ1IsbUNBQW1CLENBQUE7SUFDbkIsK0JBQWUsQ0FBQTtJQUNmLDZCQUFhLENBQUE7SUFDYixtQ0FBbUIsQ0FBQTtJQUNuQixtQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBaENXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBZ0N2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3RhdHVzIGVmZmVjdHMgYXJlIGFibm9ybWFsIHN0YXRlcyB0aGF0IG1heSBoYXZlIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIGVmZmVjdHNcbiAqIHRoZXkgY2FuIGJlIGdhaW5lZCBmcm9tIGFjdGlvbnMgb3IgaXRlbXMgYW5kIGNhbiBiZSBoZWFsZWQgYnkgcmVzdGluZywgY2VydGFpblxuICogYWJpbGl0aWVzLCBvciBhZnRlciBzb21lIHRpbWUuXG4gKlxuICogU3RhdHVzIEVmZmVjdHMgYXJlIHZpc2libGUgdG8gdGhlIHBsYXllclxuICovXG5leHBvcnQgZW51bSBTdGF0dXNFZmZlY3Qge1xuICAvLyBhZmZsaWN0aW9uc1xuICBMSUZFTEVTUyA9ICdMaWZlbGVzcycsIC8vIEFmZmxpY3RlZCB3aGVuIExpZmUgaXMgbGVzcyB0aGFuIDBcbiAgS05PQ0tFRF9PVVQgPSAnS25vY2tlZCBPdXQnLCAvLyBjaGFyYWN0ZXIgaXMgdW5hYmxlIHRvIG1vdmUuIFNldCB3aGVuIFN0YW1pbmEgaXMgbGVzcyB0aGFuIDAuXG4gIENPTkZVU0VEID0gJ0NvbmZ1c2VkJyxcbiAgRFJVTksgPSAnRHJ1bmsnLCAvLyAgY2hhcmFjdGVyIGFjY3VyYWN5IGRlY3JlYXNlcy5cbiAgRE9PTUVEID0gJ0Rvb21lZCcsIC8vIGhlYWwgYmVmb3JlIHRpbWVyIHJ1bnMgb3V0IG9yIGNoYXJhY3RlciBLT3NcbiAgTU9SVEFMTFlfV09VTkRFRCA9ICdNb3J0YWxseSBXb3VuZGVkJyxcbiAgRlJPWkVOID0gJ0Zyb3plbicsXG4gIENPTEQgPSAnQ29sZCcsIC8vICBTcGVlZCByZWR1Y2VkXG4gIEJVUk5FRCA9ICdCdXJuZWQnLFxuICBCT1VORCA9ICdCb3VuZCcsIC8vIENhbm5vdCBkbyBhbnl0aGluZyBidXQgQnJlYWsgRnJlZSBvciB1c2UgVG9vbCAgKGludGVyYWN0aW9uKVxuICBTTEVFUFkgPSAnU2xlZXB5JyxcbiAgU1RVTk5FRCA9ICdTdHVubmVkJyxcbiAgRE9XTiA9ICdEb3duJywgLy8gY2hhcmFjdGVyIGlzIGRpc2FibGVkIGFuZCBoYXMgZmFsbGVuIGRvd25cbiAgRElTQVJNRUQgPSAnRGlzYXJtZWQnLCAvLyBjaGFyYWN0ZXIgbXVzdCBnZXQgd2VhcG9uIGFuZCBhcm0gc2VsZiBhZ2FpbiBpbiBvcmRlciB0byBhdHRhY2suXG4gIEVYSUxFRCA9ICdFeGlsZWQnLCAvLyBLaWNrIG91dCBvZiBiYXR0bGUgY2Fubm90IHJldHVybiB1bnRpbCBiYXR0bGUgaXMgb3ZlclxuICBJTkZFQ1RJT04gPSAnSW5mZWN0aW9uJywgLy8gRGFtYWdlIGlzIHJlY2VpdmVkIGVhY2ggdHVybiB1bnRpbCBpbmZsaWN0aW9uIGlzIGhlYWxlZC5cbiAgTUVUQU1PUlBISUMgPSAnTWV0YW1vcnBoaWMnLCAvLyBZb3UgYXJlIGluZmxpY3RlZCB3aXRoIHJhbmRvbSBzdGF0dXMgYWZmZWN0IGVhY2ggdHVybi5cbiAgSUdOT1JBTlQgPSAnSWdub3JhbnQnLCAvLyBjaGFyYWN0ZXIgdW5hYmxlIHRvIHVzZSBMZWFyblxuICBaSVBQRUQgPSAnWmlwcGVkJywgLy8gY2hhcmFjdGVyIGNhbm5vdCB1c2UgR2Vhci5cbiAgU0lMRU5DRSA9ICdTaWxlbmNlJywgLy8gY2hhcmFjdGVyIGNhbm5vdCB1c2UgU3BlbGxzLlxuICBGQVRIT00gPSAnRmF0aG9tJywgLy8gY2hhcmFjdGVyIGNhbm5vdCB1c2UgRHJpdmUuXG4gIERST1dORUQgPSAnRHJvd25lZCcsXG4gIEZFQVIgPSAnRmVhcicsIC8vIGNoYXJhY3RlciBjYW5ub3QgbW92ZS5cblxuICAvLyBidWZmc1xuICBCRVJTRVJLID0gJ0JlcnNlcmsnLCAvLyBjaGFyYWN0ZXIgY2FuIG9ubHkgYXR0YWNrLiBQb3dlciBpbmNyZWFzZWQgYnkgRHJpdmUuXG4gIEJMSVRaID0gJ0JsaXR6JywgLy8gU3RyZW5ndGggYW5kIGFyZSBzcGVlZCBtb2RpZmllZCBmb3Igb25seSBkdXJhdGlvbiBvZiBiYXR0bGUgKC01eCB0aHJvdWdoICs1eClcbiAgT01OSSA9ICdPbW5pJywgLy8gY2hhcmFjdGVyIGVudGVycyBhIGJlcnNlcmsgbGlrZSBtb2RlIGFuZCBhdHRhY2tzIHVuY29udHJvbGxhYmxlLlxuICBCQVJSSUVSID0gJ0JhcnJpZXInLCAvLyBkYW1hZ2UgdGFrZW4gZGVjcmVhc2VzXG4gIFJFRkxFQ1QgPSAnUmVmbGVjdCcsIC8vIGRhbWFnZSBpcyByZWZsZWN0ZWQgYmFja1xufVxuXG5leHBvcnQgdHlwZSBTdGF0dXNFZmZlY3RzID0gQXJyYXk8U3RhdHVzRWZmZWN0PjtcbiJdfQ==