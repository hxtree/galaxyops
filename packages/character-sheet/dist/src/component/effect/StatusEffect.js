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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHVzRWZmZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudC9lZmZlY3QvU3RhdHVzRWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7R0FNRztBQUNILElBQVksWUFtQ1g7QUFuQ0QsV0FBWSxZQUFZO0lBQ3RCLGNBQWM7SUFDZCxxQ0FBcUIsQ0FBQTtJQUNyQiwyQ0FBMkIsQ0FBQTtJQUMzQixxQ0FBcUIsQ0FBQTtJQUNyQiwrQkFBZSxDQUFBO0lBQ2YsaUNBQWlCLENBQUE7SUFDakIscURBQXFDLENBQUE7SUFDckMsaUNBQWlCLENBQUE7SUFDakIsNkJBQWEsQ0FBQTtJQUNiLGlDQUFpQixDQUFBO0lBQ2pCLCtCQUFlLENBQUE7SUFDZixpQ0FBaUIsQ0FBQTtJQUNqQixtQ0FBbUIsQ0FBQTtJQUNuQiw2QkFBYSxDQUFBO0lBQ2IscUNBQXFCLENBQUE7SUFDckIsaUNBQWlCLENBQUE7SUFDakIsdUNBQXVCLENBQUE7SUFDdkIsMkNBQTJCLENBQUE7SUFDM0IscUNBQXFCLENBQUE7SUFDckIsaUNBQWlCLENBQUE7SUFDakIsbUNBQW1CLENBQUE7SUFDbkIsaUNBQWlCLENBQUE7SUFDakIsbUNBQW1CLENBQUE7SUFDbkIsNkJBQWEsQ0FBQTtJQUNiLDZCQUFhLENBQUE7SUFDYiw2QkFBYSxDQUFBO0lBRWIsUUFBUTtJQUNSLG1DQUFtQixDQUFBO0lBQ25CLCtCQUFlLENBQUE7SUFDZiw2QkFBYSxDQUFBO0lBQ2IsbUNBQW1CLENBQUE7SUFDbkIsbUNBQW1CLENBQUE7SUFDbkIsK0JBQWUsQ0FBQTtBQUNqQixDQUFDLEVBbkNXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBbUN2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3RhdHVzIGVmZmVjdHMgYXJlIGFibm9ybWFsIHN0YXRlcyB0aGF0IG1heSBoYXZlIHBvc2l0aXZlIG9yIG5lZ2F0aXZlIGVmZmVjdHNcbiAqIHRoZXkgY2FuIGJlIGdhaW5lZCBmcm9tIGFjdGlvbnMgb3IgaXRlbXMgYW5kIGNhbiBiZSBoZWFsZWQgYnkgcmVzdGluZywgY2VydGFpblxuICogYWJpbGl0aWVzLCBvciBhZnRlciBzb21lIHRpbWUuXG4gKlxuICogU3RhdHVzIEVmZmVjdHMgYXJlIHZpc2libGUgdG8gdGhlIHBsYXllclxuICovXG5leHBvcnQgZW51bSBTdGF0dXNFZmZlY3Qge1xuICAvLyBhZmZsaWN0aW9uc1xuICBMSUZFTEVTUyA9ICdMaWZlbGVzcycsIC8vIEFmZmxpY3RlZCB3aGVuIExpZmUgaXMgbGVzcyB0aGFuIDBcbiAgS05PQ0tFRF9PVVQgPSAnS25vY2tlZCBPdXQnLCAvLyBpcyB1bmFibGUgdG8gbW92ZS4gU2V0IHdoZW4gU3RhbWluYSBpcyBsZXNzIHRoYW4gMC5cbiAgQ09ORlVTRUQgPSAnQ29uZnVzZWQnLFxuICBEUlVOSyA9ICdEcnVuaycsIC8vICBhY2N1cmFjeSBkZWNyZWFzZXMuXG4gIERPT01FRCA9ICdEb29tZWQnLCAvLyBoZWFsIGJlZm9yZSB0aW1lciBydW5zIG91dCBvciBLT3NcbiAgTU9SVEFMTFlfV09VTkRFRCA9ICdNb3J0YWxseSBXb3VuZGVkJyxcbiAgRlJPWkVOID0gJ0Zyb3plbicsXG4gIENPTEQgPSAnQ29sZCcsIC8vICBTcGVlZCByZWR1Y2VkXG4gIEJVUk5FRCA9ICdCdXJuZWQnLFxuICBCT1VORCA9ICdCb3VuZCcsIC8vIENhbm5vdCBkbyBhbnl0aGluZyBidXQgQnJlYWsgRnJlZSBvciB1c2UgVG9vbCAgKGludGVyYWN0aW9uKVxuICBTTEVFUFkgPSAnU2xlZXB5JyxcbiAgU1RVTk5FRCA9ICdTdHVubmVkJyxcbiAgRE9XTiA9ICdEb3duJywgLy8gaXMgZGlzYWJsZWQgYW5kIGhhcyBmYWxsZW4gZG93blxuICBESVNBUk1FRCA9ICdEaXNhcm1lZCcsIC8vIG11c3QgZ2V0IHdlYXBvbiBhbmQgYXJtIHNlbGYgYWdhaW4gaW4gb3JkZXIgdG8gYXR0YWNrLlxuICBFWElMRUQgPSAnRXhpbGVkJywgLy8gS2ljayBvdXQgb2YgYmF0dGxlIGNhbm5vdCByZXR1cm4gdW50aWwgYmF0dGxlIGlzIG92ZXJcbiAgSU5GRUNUSU9OID0gJ0luZmVjdGlvbicsIC8vIERhbWFnZSBpcyByZWNlaXZlZCBlYWNoIHR1cm4gdW50aWwgaW5mbGljdGlvbiBpcyBoZWFsZWQuXG4gIE1FVEFNT1JQSElDID0gJ01ldGFtb3JwaGljJywgLy8gWW91IGFyZSBpbmZsaWN0ZWQgd2l0aCByYW5kb20gc3RhdHVzIGFmZmVjdCBlYWNoIHR1cm4uXG4gIElHTk9SQU5UID0gJ0lnbm9yYW50JywgLy8gdW5hYmxlIHRvIHVzZSBMZWFyblxuICBaSVBQRUQgPSAnWmlwcGVkJywgLy8gY2Fubm90IHVzZSBHZWFyLlxuICBTSUxFTkNFID0gJ1NpbGVuY2UnLCAvLyBjYW5ub3QgdXNlIFNwZWxscy5cbiAgRkFUSE9NID0gJ0ZhdGhvbScsIC8vIGNhbm5vdCB1c2UgRHJpdmUuXG4gIERST1dORUQgPSAnRHJvd25lZCcsXG4gIEZFQVIgPSAnRmVhcicsIC8vIGNhbm5vdCBtb3ZlLlxuICBTVE9QID0gJ1N0b3AnLCAvLyBmcm96ZW4gaW4gdGltZS5cbiAgU0xPVyA9ICdTbG93JywgLy8gc3BlZWQgcmVkdWNlZC5cblxuICAvLyBidWZmc1xuICBCRVJTRVJLID0gJ0JlcnNlcmsnLCAvLyBjYW4gb25seSBhdHRhY2suIFBvd2VyIGluY3JlYXNlZCBieSBEcml2ZS5cbiAgQkxJVFogPSAnQmxpdHonLCAvLyBTdHJlbmd0aCBhbmQgYXJlIHNwZWVkIG1vZGlmaWVkIGZvciBvbmx5IGR1cmF0aW9uIG9mIGJhdHRsZSAoLTV4IHRocm91Z2ggKzV4KVxuICBPTU5JID0gJ09tbmknLCAvLyBlbnRlcnMgYSBiZXJzZXJrIGxpa2UgbW9kZSBhbmQgYXR0YWNrcyB1bmNvbnRyb2xsYWJsZS5cbiAgQkFSUklFUiA9ICdCYXJyaWVyJywgLy8gZGFtYWdlIHRha2VuIGRlY3JlYXNlc1xuICBSRUZMRUNUID0gJ1JlZmxlY3QnLCAvLyBkYW1hZ2UgaXMgcmVmbGVjdGVkIGJhY2tcbiAgSEFTVEUgPSAnSGFzdGUnLCAvLyBzcGVlZCBpbmNyZWFzZWRcbn1cblxuZXhwb3J0IHR5cGUgU3RhdHVzRWZmZWN0cyA9IEFycmF5PFN0YXR1c0VmZmVjdD47XG4iXX0=