"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeaponSkill = exports.Weapon = void 0;
const attribute_1 = require("../attribute");
const tag_effect_1 = require("../tag.effect");
/**
 * Weapon Skill
 *
 * Weapon sklills are granted based on the equipped item and characters ability to use weapon.
 * Each directly related to simple use of the players equipped weapon.
 * Each are a type of Command Menu Action which means they can be used in game.
 * They are always located in the first slot of the Basic Command Menu Actions.
 */
var Weapon;
(function (Weapon) {
    Weapon["PARRY"] = "Parry";
    Weapon["SLASH"] = "Slash";
    Weapon["STRIKE"] = "Strike";
    Weapon["STAB"] = "Stab";
    Weapon["CHOP"] = "Chop";
    Weapon["CLEAVE"] = "Cleave";
})(Weapon = exports.Weapon || (exports.Weapon = {}));
// category: SkillCategory.WEAPON;
var WeaponSkill;
(function (WeaponSkill) {
    WeaponSkill.Parry = {
        name: Weapon.PARRY,
        description: 'Ward off incoming attack with a countermove.',
        effect: [],
    };
    WeaponSkill.Slash = {
        name: Weapon.SLASH,
        description: 'Attack with a blade.',
        effect: [
            {
                remove: attribute_1.Attribute.LIFE,
                quantity: '1d6+2',
                tags: [tag_effect_1.EffectTag.PHYSICAL],
            },
        ],
    };
    WeaponSkill.Strike = {
        name: Weapon.STRIKE,
        description: 'Attack with a sudden effect with a blade.',
        effect: [
            {
                remove: attribute_1.Attribute.LIFE,
                quantity: '1d6+2',
                tags: [tag_effect_1.EffectTag.PHYSICAL],
            },
        ],
    };
    WeaponSkill.Stab = {
        name: Weapon.STAB,
        description: 'Attach with a forward striking motion with a blade.',
        effect: [
            {
                remove: attribute_1.Attribute.LIFE,
                quantity: '1d6+2',
                tags: [tag_effect_1.EffectTag.PHYSICAL],
            },
        ],
    };
    WeaponSkill.Chop = {
        name: Weapon.CHOP,
        description: 'Attack with a downward motion with a blade.',
        effect: [
            {
                remove: attribute_1.Attribute.LIFE,
                quantity: '1d6+2',
                tags: [tag_effect_1.EffectTag.PHYSICAL],
            },
        ],
    };
    WeaponSkill.Cleave = {
        name: Weapon.CLEAVE,
        description: 'A slash technique.',
        effect: [
            {
                remove: attribute_1.Attribute.LIFE,
                quantity: '1d6+2',
                tags: [tag_effect_1.EffectTag.PHYSICAL],
            },
        ],
    };
    // "15","Cleave lv2",,"13",,"13"
    // export const Tech
    // Weapon Tech
    // Slash – (stamina)
    // "60","Restoring Aura","Allies withing 5 foot radius slowly gain life. 1/2 of Spirit per/sec","59",,"59"
    // "61","Resurrect","Cures Lifeless","60",,"60"
    // "62","Cure",,"61",,"61"
    // "63","Heal","Restore life to one target","62",,"62"
    // "64","Heal All","Restore life to all nearby targets","63",,"63"
    // "69","Strike",,"68",,"68"
    // "73","Bake","Create Consumables from Recipes","72",,"72"
    // "74","Improved Dodging",,"73",,"73"
    // "75","Quick"," Increase movement speed","74",,"74"
    // "76","Darkness"," Decrease the area that your opponent can see.","75",,"75"
    // "77","Fighter","Double Strike","76",,"76"
    // "78","Block","Block enemies with wielding item. Preventing Crital Attacks from doing additional damage","77",,"77"
    // "49","Cheer","Targets Spirit increases by 10% for a duration.","48",,"48"
    // "50","Support","The most powerful status bonus","49",,"49"
    // "51","Bluff","Deceive a character.","50",,"50"
    // "52","Sense Bluff","Detect if someone is lying (indicated by a icon when character is talking)","51",,"51"
    // "53","Wraftful Blow","If a player holds down the button for a basic attack move they will do additional physical damage at the cost of Life to the Berserker. The longer they hold down the button the more Life will be taken in the exchange.","52",,"52"
    // "54","Undying Pride","Gain Rage twice as fast when attacked.","53",,"53"
    // "3","Scout","Break away from party","1",,"1"
    // "4","Scan",,"2",,"2"
    // "5","Search","Look for items","3",,"3"
    // "6","Guard","Protect ally from attack","4",,"4"
    // "7","Protect","same as guard?","5",,"5"
    // "8","Focus",,"6",,"6"
    // "9","Parry","Attack someones attack to block","7",,"7"
    // "10","Order/Command",,"8",,"8"
    // "11","Formation","Get in predifend organization","9",,"9"
    // "13","Liberate",,"11",,"11"
    // "14","Disobey","Block a command","12",,"12"
    // "16","Protect","Guard an ally","14",,"14"
    // "17","Desolate",,"15",,"15"
    // "18","Rage",,"16",,"16"
    // "24","Charm, Chill",,"22",,"22"
    // "25","Quake",,"23",,"23"
    // "26","Blizzard",,"24",,"24"
    // "28","Frost",,"25",,"25"
    // "29","Chill",,"26",,"26"
    // "30","Absorb","Aborb the targets life","27",,"27"
    // "31","Drain",,"28",,"28"
    // "33","Dismiss",,"30",,"30"
    // "34","Command",,"31",,"31"
    // "35",,,"32",,"32"
    // "39","Doom","Inflicts Doomed","36",,"36"
})(WeaponSkill = exports.WeaponSkill || (exports.WeaponSkill = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhcG9uLnNraWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudC9za2lsbC93ZWFwb24uc2tpbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNENBQXVDO0FBQ3ZDLDhDQUF3QztBQUd4Qzs7Ozs7OztHQU9HO0FBRUgsSUFBWSxNQU9YO0FBUEQsV0FBWSxNQUFNO0lBQ2hCLHlCQUFlLENBQUE7SUFDZix5QkFBZSxDQUFBO0lBQ2YsMkJBQWlCLENBQUE7SUFDakIsdUJBQWEsQ0FBQTtJQUNiLHVCQUFhLENBQUE7SUFDYiwyQkFBaUIsQ0FBQTtBQUNuQixDQUFDLEVBUFcsTUFBTSxHQUFOLGNBQU0sS0FBTixjQUFNLFFBT2pCO0FBRUQsa0NBQWtDO0FBQ2xDLElBQWlCLFdBQVcsQ0FnSTNCO0FBaElELFdBQWlCLFdBQVc7SUFPYixpQkFBSyxHQUFlO1FBQy9CLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSztRQUNsQixXQUFXLEVBQUUsOENBQThDO1FBQzNELE1BQU0sRUFBRSxFQUFFO0tBQ1gsQ0FBQztJQUVXLGlCQUFLLEdBQWU7UUFDL0IsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLO1FBQ2xCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsTUFBTSxFQUFFLHFCQUFTLENBQUMsSUFBSTtnQkFDdEIsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLElBQUksRUFBRSxDQUFDLHNCQUFTLENBQUMsUUFBUSxDQUFDO2FBQzNCO1NBQ0Y7S0FDRixDQUFDO0lBRVcsa0JBQU0sR0FBZTtRQUNoQyxJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU07UUFDbkIsV0FBVyxFQUFFLDJDQUEyQztRQUN4RCxNQUFNLEVBQUU7WUFDTjtnQkFDRSxNQUFNLEVBQUUscUJBQVMsQ0FBQyxJQUFJO2dCQUN0QixRQUFRLEVBQUUsT0FBTztnQkFDakIsSUFBSSxFQUFFLENBQUMsc0JBQVMsQ0FBQyxRQUFRLENBQUM7YUFDM0I7U0FDRjtLQUNGLENBQUM7SUFFVyxnQkFBSSxHQUFlO1FBQzlCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtRQUNqQixXQUFXLEVBQUUscURBQXFEO1FBQ2xFLE1BQU0sRUFBRTtZQUNOO2dCQUNFLE1BQU0sRUFBRSxxQkFBUyxDQUFDLElBQUk7Z0JBQ3RCLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixJQUFJLEVBQUUsQ0FBQyxzQkFBUyxDQUFDLFFBQVEsQ0FBQzthQUMzQjtTQUNGO0tBQ0YsQ0FBQztJQUVXLGdCQUFJLEdBQWU7UUFDOUIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1FBQ2pCLFdBQVcsRUFBRSw2Q0FBNkM7UUFDMUQsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsTUFBTSxFQUFFLHFCQUFTLENBQUMsSUFBSTtnQkFDdEIsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLElBQUksRUFBRSxDQUFDLHNCQUFTLENBQUMsUUFBUSxDQUFDO2FBQzNCO1NBQ0Y7S0FDRixDQUFDO0lBRVcsa0JBQU0sR0FBZTtRQUNoQyxJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU07UUFDbkIsV0FBVyxFQUFFLG9CQUFvQjtRQUNqQyxNQUFNLEVBQUU7WUFDTjtnQkFDRSxNQUFNLEVBQUUscUJBQVMsQ0FBQyxJQUFJO2dCQUN0QixRQUFRLEVBQUUsT0FBTztnQkFDakIsSUFBSSxFQUFFLENBQUMsc0JBQVMsQ0FBQyxRQUFRLENBQUM7YUFDM0I7U0FDRjtLQUNGLENBQUM7SUFFRixnQ0FBZ0M7SUFFaEMsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxvQkFBb0I7SUFFcEIsMEdBQTBHO0lBQzFHLCtDQUErQztJQUMvQywwQkFBMEI7SUFDMUIsc0RBQXNEO0lBQ3RELGtFQUFrRTtJQUVsRSw0QkFBNEI7SUFFNUIsMkRBQTJEO0lBQzNELHNDQUFzQztJQUN0QyxxREFBcUQ7SUFDckQsOEVBQThFO0lBQzlFLDRDQUE0QztJQUM1QyxxSEFBcUg7SUFFckgsNEVBQTRFO0lBQzVFLDZEQUE2RDtJQUM3RCxpREFBaUQ7SUFDakQsNkdBQTZHO0lBRTdHLDhQQUE4UDtJQUM5UCwyRUFBMkU7SUFDM0UsK0NBQStDO0lBQy9DLHVCQUF1QjtJQUN2Qix5Q0FBeUM7SUFDekMsa0RBQWtEO0lBQ2xELDBDQUEwQztJQUMxQyx3QkFBd0I7SUFDeEIseURBQXlEO0lBQ3pELGlDQUFpQztJQUNqQyw0REFBNEQ7SUFDNUQsOEJBQThCO0lBQzlCLDhDQUE4QztJQUM5Qyw0Q0FBNEM7SUFDNUMsOEJBQThCO0lBQzlCLDBCQUEwQjtJQUMxQixrQ0FBa0M7SUFDbEMsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLG9EQUFvRDtJQUNwRCwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBRTdCLDZCQUE2QjtJQUM3QixvQkFBb0I7SUFFcEIsMkNBQTJDO0FBQzdDLENBQUMsRUFoSWdCLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBZ0kzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXR0cmlidXRlfSBmcm9tICcuLi9hdHRyaWJ1dGUnO1xuaW1wb3J0IHtFZmZlY3RUYWd9IGZyb20gJy4uL3RhZy5lZmZlY3QnO1xuaW1wb3J0IHtFZmZlY3RUYWJsZX0gZnJvbSAnLi4vdGFibGUuZWZmZWN0JztcblxuLyoqXG4gKiBXZWFwb24gU2tpbGxcbiAqXG4gKiBXZWFwb24gc2tsaWxscyBhcmUgZ3JhbnRlZCBiYXNlZCBvbiB0aGUgZXF1aXBwZWQgaXRlbSBhbmQgY2hhcmFjdGVycyBhYmlsaXR5IHRvIHVzZSB3ZWFwb24uXG4gKiBFYWNoIGRpcmVjdGx5IHJlbGF0ZWQgdG8gc2ltcGxlIHVzZSBvZiB0aGUgcGxheWVycyBlcXVpcHBlZCB3ZWFwb24uXG4gKiBFYWNoIGFyZSBhIHR5cGUgb2YgQ29tbWFuZCBNZW51IEFjdGlvbiB3aGljaCBtZWFucyB0aGV5IGNhbiBiZSB1c2VkIGluIGdhbWUuXG4gKiBUaGV5IGFyZSBhbHdheXMgbG9jYXRlZCBpbiB0aGUgZmlyc3Qgc2xvdCBvZiB0aGUgQmFzaWMgQ29tbWFuZCBNZW51IEFjdGlvbnMuXG4gKi9cblxuZXhwb3J0IGVudW0gV2VhcG9uIHtcbiAgUEFSUlkgPSAnUGFycnknLFxuICBTTEFTSCA9ICdTbGFzaCcsXG4gIFNUUklLRSA9ICdTdHJpa2UnLFxuICBTVEFCID0gJ1N0YWInLFxuICBDSE9QID0gJ0Nob3AnLFxuICBDTEVBVkUgPSAnQ2xlYXZlJyxcbn1cblxuLy8gY2F0ZWdvcnk6IFNraWxsQ2F0ZWdvcnkuV0VBUE9OO1xuZXhwb3J0IG5hbWVzcGFjZSBXZWFwb25Ta2lsbCB7XG4gIGV4cG9ydCB0eXBlIFdlYXBvblR5cGUgPSB7XG4gICAgbmFtZTogV2VhcG9uO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgZWZmZWN0OiBFZmZlY3RUYWJsZTtcbiAgfTtcblxuICBleHBvcnQgY29uc3QgUGFycnk6IFdlYXBvblR5cGUgPSB7XG4gICAgbmFtZTogV2VhcG9uLlBBUlJZLFxuICAgIGRlc2NyaXB0aW9uOiAnV2FyZCBvZmYgaW5jb21pbmcgYXR0YWNrIHdpdGggYSBjb3VudGVybW92ZS4nLFxuICAgIGVmZmVjdDogW10sXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IFNsYXNoOiBXZWFwb25UeXBlID0ge1xuICAgIG5hbWU6IFdlYXBvbi5TTEFTSCxcbiAgICBkZXNjcmlwdGlvbjogJ0F0dGFjayB3aXRoIGEgYmxhZGUuJyxcbiAgICBlZmZlY3Q6IFtcbiAgICAgIHtcbiAgICAgICAgcmVtb3ZlOiBBdHRyaWJ1dGUuTElGRSxcbiAgICAgICAgcXVhbnRpdHk6ICcxZDYrMicsXG4gICAgICAgIHRhZ3M6IFtFZmZlY3RUYWcuUEhZU0lDQUxdLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBTdHJpa2U6IFdlYXBvblR5cGUgPSB7XG4gICAgbmFtZTogV2VhcG9uLlNUUklLRSxcbiAgICBkZXNjcmlwdGlvbjogJ0F0dGFjayB3aXRoIGEgc3VkZGVuIGVmZmVjdCB3aXRoIGEgYmxhZGUuJyxcbiAgICBlZmZlY3Q6IFtcbiAgICAgIHtcbiAgICAgICAgcmVtb3ZlOiBBdHRyaWJ1dGUuTElGRSxcbiAgICAgICAgcXVhbnRpdHk6ICcxZDYrMicsXG4gICAgICAgIHRhZ3M6IFtFZmZlY3RUYWcuUEhZU0lDQUxdLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBTdGFiOiBXZWFwb25UeXBlID0ge1xuICAgIG5hbWU6IFdlYXBvbi5TVEFCLFxuICAgIGRlc2NyaXB0aW9uOiAnQXR0YWNoIHdpdGggYSBmb3J3YXJkIHN0cmlraW5nIG1vdGlvbiB3aXRoIGEgYmxhZGUuJyxcbiAgICBlZmZlY3Q6IFtcbiAgICAgIHtcbiAgICAgICAgcmVtb3ZlOiBBdHRyaWJ1dGUuTElGRSxcbiAgICAgICAgcXVhbnRpdHk6ICcxZDYrMicsXG4gICAgICAgIHRhZ3M6IFtFZmZlY3RUYWcuUEhZU0lDQUxdLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBDaG9wOiBXZWFwb25UeXBlID0ge1xuICAgIG5hbWU6IFdlYXBvbi5DSE9QLFxuICAgIGRlc2NyaXB0aW9uOiAnQXR0YWNrIHdpdGggYSBkb3dud2FyZCBtb3Rpb24gd2l0aCBhIGJsYWRlLicsXG4gICAgZWZmZWN0OiBbXG4gICAgICB7XG4gICAgICAgIHJlbW92ZTogQXR0cmlidXRlLkxJRkUsXG4gICAgICAgIHF1YW50aXR5OiAnMWQ2KzInLFxuICAgICAgICB0YWdzOiBbRWZmZWN0VGFnLlBIWVNJQ0FMXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgQ2xlYXZlOiBXZWFwb25UeXBlID0ge1xuICAgIG5hbWU6IFdlYXBvbi5DTEVBVkUsXG4gICAgZGVzY3JpcHRpb246ICdBIHNsYXNoIHRlY2huaXF1ZS4nLFxuICAgIGVmZmVjdDogW1xuICAgICAge1xuICAgICAgICByZW1vdmU6IEF0dHJpYnV0ZS5MSUZFLFxuICAgICAgICBxdWFudGl0eTogJzFkNisyJyxcbiAgICAgICAgdGFnczogW0VmZmVjdFRhZy5QSFlTSUNBTF0sXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgLy8gXCIxNVwiLFwiQ2xlYXZlIGx2MlwiLCxcIjEzXCIsLFwiMTNcIlxuXG4gIC8vIGV4cG9ydCBjb25zdCBUZWNoXG4gIC8vIFdlYXBvbiBUZWNoXG4gIC8vIFNsYXNoIOKAkyAoc3RhbWluYSlcblxuICAvLyBcIjYwXCIsXCJSZXN0b3JpbmcgQXVyYVwiLFwiQWxsaWVzIHdpdGhpbmcgNSBmb290IHJhZGl1cyBzbG93bHkgZ2FpbiBsaWZlLiAxLzIgb2YgU3Bpcml0IHBlci9zZWNcIixcIjU5XCIsLFwiNTlcIlxuICAvLyBcIjYxXCIsXCJSZXN1cnJlY3RcIixcIkN1cmVzIExpZmVsZXNzXCIsXCI2MFwiLCxcIjYwXCJcbiAgLy8gXCI2MlwiLFwiQ3VyZVwiLCxcIjYxXCIsLFwiNjFcIlxuICAvLyBcIjYzXCIsXCJIZWFsXCIsXCJSZXN0b3JlIGxpZmUgdG8gb25lIHRhcmdldFwiLFwiNjJcIiwsXCI2MlwiXG4gIC8vIFwiNjRcIixcIkhlYWwgQWxsXCIsXCJSZXN0b3JlIGxpZmUgdG8gYWxsIG5lYXJieSB0YXJnZXRzXCIsXCI2M1wiLCxcIjYzXCJcblxuICAvLyBcIjY5XCIsXCJTdHJpa2VcIiwsXCI2OFwiLCxcIjY4XCJcblxuICAvLyBcIjczXCIsXCJCYWtlXCIsXCJDcmVhdGUgQ29uc3VtYWJsZXMgZnJvbSBSZWNpcGVzXCIsXCI3MlwiLCxcIjcyXCJcbiAgLy8gXCI3NFwiLFwiSW1wcm92ZWQgRG9kZ2luZ1wiLCxcIjczXCIsLFwiNzNcIlxuICAvLyBcIjc1XCIsXCJRdWlja1wiLFwiIEluY3JlYXNlIG1vdmVtZW50IHNwZWVkXCIsXCI3NFwiLCxcIjc0XCJcbiAgLy8gXCI3NlwiLFwiRGFya25lc3NcIixcIiBEZWNyZWFzZSB0aGUgYXJlYSB0aGF0IHlvdXIgb3Bwb25lbnQgY2FuIHNlZS5cIixcIjc1XCIsLFwiNzVcIlxuICAvLyBcIjc3XCIsXCJGaWdodGVyXCIsXCJEb3VibGUgU3RyaWtlXCIsXCI3NlwiLCxcIjc2XCJcbiAgLy8gXCI3OFwiLFwiQmxvY2tcIixcIkJsb2NrIGVuZW1pZXMgd2l0aCB3aWVsZGluZyBpdGVtLiBQcmV2ZW50aW5nIENyaXRhbCBBdHRhY2tzIGZyb20gZG9pbmcgYWRkaXRpb25hbCBkYW1hZ2VcIixcIjc3XCIsLFwiNzdcIlxuXG4gIC8vIFwiNDlcIixcIkNoZWVyXCIsXCJUYXJnZXRzIFNwaXJpdCBpbmNyZWFzZXMgYnkgMTAlIGZvciBhIGR1cmF0aW9uLlwiLFwiNDhcIiwsXCI0OFwiXG4gIC8vIFwiNTBcIixcIlN1cHBvcnRcIixcIlRoZSBtb3N0IHBvd2VyZnVsIHN0YXR1cyBib251c1wiLFwiNDlcIiwsXCI0OVwiXG4gIC8vIFwiNTFcIixcIkJsdWZmXCIsXCJEZWNlaXZlIGEgY2hhcmFjdGVyLlwiLFwiNTBcIiwsXCI1MFwiXG4gIC8vIFwiNTJcIixcIlNlbnNlIEJsdWZmXCIsXCJEZXRlY3QgaWYgc29tZW9uZSBpcyBseWluZyAoaW5kaWNhdGVkIGJ5IGEgaWNvbiB3aGVuIGNoYXJhY3RlciBpcyB0YWxraW5nKVwiLFwiNTFcIiwsXCI1MVwiXG5cbiAgLy8gXCI1M1wiLFwiV3JhZnRmdWwgQmxvd1wiLFwiSWYgYSBwbGF5ZXIgaG9sZHMgZG93biB0aGUgYnV0dG9uIGZvciBhIGJhc2ljIGF0dGFjayBtb3ZlIHRoZXkgd2lsbCBkbyBhZGRpdGlvbmFsIHBoeXNpY2FsIGRhbWFnZSBhdCB0aGUgY29zdCBvZiBMaWZlIHRvIHRoZSBCZXJzZXJrZXIuIFRoZSBsb25nZXIgdGhleSBob2xkIGRvd24gdGhlIGJ1dHRvbiB0aGUgbW9yZSBMaWZlIHdpbGwgYmUgdGFrZW4gaW4gdGhlIGV4Y2hhbmdlLlwiLFwiNTJcIiwsXCI1MlwiXG4gIC8vIFwiNTRcIixcIlVuZHlpbmcgUHJpZGVcIixcIkdhaW4gUmFnZSB0d2ljZSBhcyBmYXN0IHdoZW4gYXR0YWNrZWQuXCIsXCI1M1wiLCxcIjUzXCJcbiAgLy8gXCIzXCIsXCJTY291dFwiLFwiQnJlYWsgYXdheSBmcm9tIHBhcnR5XCIsXCIxXCIsLFwiMVwiXG4gIC8vIFwiNFwiLFwiU2NhblwiLCxcIjJcIiwsXCIyXCJcbiAgLy8gXCI1XCIsXCJTZWFyY2hcIixcIkxvb2sgZm9yIGl0ZW1zXCIsXCIzXCIsLFwiM1wiXG4gIC8vIFwiNlwiLFwiR3VhcmRcIixcIlByb3RlY3QgYWxseSBmcm9tIGF0dGFja1wiLFwiNFwiLCxcIjRcIlxuICAvLyBcIjdcIixcIlByb3RlY3RcIixcInNhbWUgYXMgZ3VhcmQ/XCIsXCI1XCIsLFwiNVwiXG4gIC8vIFwiOFwiLFwiRm9jdXNcIiwsXCI2XCIsLFwiNlwiXG4gIC8vIFwiOVwiLFwiUGFycnlcIixcIkF0dGFjayBzb21lb25lcyBhdHRhY2sgdG8gYmxvY2tcIixcIjdcIiwsXCI3XCJcbiAgLy8gXCIxMFwiLFwiT3JkZXIvQ29tbWFuZFwiLCxcIjhcIiwsXCI4XCJcbiAgLy8gXCIxMVwiLFwiRm9ybWF0aW9uXCIsXCJHZXQgaW4gcHJlZGlmZW5kIG9yZ2FuaXphdGlvblwiLFwiOVwiLCxcIjlcIlxuICAvLyBcIjEzXCIsXCJMaWJlcmF0ZVwiLCxcIjExXCIsLFwiMTFcIlxuICAvLyBcIjE0XCIsXCJEaXNvYmV5XCIsXCJCbG9jayBhIGNvbW1hbmRcIixcIjEyXCIsLFwiMTJcIlxuICAvLyBcIjE2XCIsXCJQcm90ZWN0XCIsXCJHdWFyZCBhbiBhbGx5XCIsXCIxNFwiLCxcIjE0XCJcbiAgLy8gXCIxN1wiLFwiRGVzb2xhdGVcIiwsXCIxNVwiLCxcIjE1XCJcbiAgLy8gXCIxOFwiLFwiUmFnZVwiLCxcIjE2XCIsLFwiMTZcIlxuICAvLyBcIjI0XCIsXCJDaGFybSwgQ2hpbGxcIiwsXCIyMlwiLCxcIjIyXCJcbiAgLy8gXCIyNVwiLFwiUXVha2VcIiwsXCIyM1wiLCxcIjIzXCJcbiAgLy8gXCIyNlwiLFwiQmxpenphcmRcIiwsXCIyNFwiLCxcIjI0XCJcbiAgLy8gXCIyOFwiLFwiRnJvc3RcIiwsXCIyNVwiLCxcIjI1XCJcbiAgLy8gXCIyOVwiLFwiQ2hpbGxcIiwsXCIyNlwiLCxcIjI2XCJcbiAgLy8gXCIzMFwiLFwiQWJzb3JiXCIsXCJBYm9yYiB0aGUgdGFyZ2V0cyBsaWZlXCIsXCIyN1wiLCxcIjI3XCJcbiAgLy8gXCIzMVwiLFwiRHJhaW5cIiwsXCIyOFwiLCxcIjI4XCJcbiAgLy8gXCIzM1wiLFwiRGlzbWlzc1wiLCxcIjMwXCIsLFwiMzBcIlxuXG4gIC8vIFwiMzRcIixcIkNvbW1hbmRcIiwsXCIzMVwiLCxcIjMxXCJcbiAgLy8gXCIzNVwiLCwsXCIzMlwiLCxcIjMyXCJcblxuICAvLyBcIjM5XCIsXCJEb29tXCIsXCJJbmZsaWN0cyBEb29tZWRcIixcIjM2XCIsLFwiMzZcIlxufVxuIl19