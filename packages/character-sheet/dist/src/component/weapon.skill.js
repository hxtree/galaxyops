"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cleave = exports.Chop = exports.Stab = exports.Strike = exports.Slash = exports.Parry = exports.WeaponSkill = exports.WeaponSkillList = void 0;
/**
 * Weapon Skill
 *
 * Weapon sklills are granted based on the equipped item and characters ability to use weapon.
 * Each directly related to simple use of the players equipped weapon.
 * Each are a type of Command Menu Action which means they can be used in game.
 * They are always located in the first slot of the Basic Command Menu Actions.
 */
var WeaponSkillList;
(function (WeaponSkillList) {
    WeaponSkillList["PARRY"] = "Parry";
    WeaponSkillList["SLASH"] = "Slash";
    WeaponSkillList["STRIKE"] = "Strike";
    WeaponSkillList["STAB"] = "Stab";
    WeaponSkillList["CHOP"] = "Chop";
    WeaponSkillList["CLEAVE"] = "Cleave";
})(WeaponSkillList = exports.WeaponSkillList || (exports.WeaponSkillList = {}));
class WeaponSkill {
}
exports.WeaponSkill = WeaponSkill;
class Parry extends WeaponSkill {
}
exports.Parry = Parry;
class Slash extends WeaponSkill {
}
exports.Slash = Slash;
class Strike extends WeaponSkill {
}
exports.Strike = Strike;
class Stab extends WeaponSkill {
}
exports.Stab = Stab;
class Chop extends WeaponSkill {
}
exports.Chop = Chop;
class Cleave extends WeaponSkill {
}
exports.Cleave = Cleave;
// "15","Cleave lv2",,"13",,"13"
// export class Tech
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhcG9uLnNraWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudC93ZWFwb24uc2tpbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBTUE7Ozs7Ozs7R0FPRztBQUVILElBQVksZUFPWDtBQVBELFdBQVksZUFBZTtJQUN6QixrQ0FBZSxDQUFBO0lBQ2Ysa0NBQWUsQ0FBQTtJQUNmLG9DQUFpQixDQUFBO0lBQ2pCLGdDQUFhLENBQUE7SUFDYixnQ0FBYSxDQUFBO0lBQ2Isb0NBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQVBXLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBTzFCO0FBRUQsTUFBc0IsV0FBVztDQU1oQztBQU5ELGtDQU1DO0FBRUQsTUFBYSxLQUFNLFNBQVEsV0FBVztDQUlyQztBQUpELHNCQUlDO0FBRUQsTUFBYSxLQUFNLFNBQVEsV0FBVztDQVdyQztBQVhELHNCQVdDO0FBRUQsTUFBYSxNQUFPLFNBQVEsV0FBVztDQVd0QztBQVhELHdCQVdDO0FBRUQsTUFBYSxJQUFLLFNBQVEsV0FBVztDQVdwQztBQVhELG9CQVdDO0FBRUQsTUFBYSxJQUFLLFNBQVEsV0FBVztDQVdwQztBQVhELG9CQVdDO0FBRUQsTUFBYSxNQUFPLFNBQVEsV0FBVztDQVd0QztBQVhELHdCQVdDO0FBRUQsZ0NBQWdDO0FBRWhDLG9CQUFvQjtBQUNwQixjQUFjO0FBQ2Qsb0JBQW9CO0FBRXBCLDBHQUEwRztBQUMxRywrQ0FBK0M7QUFDL0MsMEJBQTBCO0FBQzFCLHNEQUFzRDtBQUN0RCxrRUFBa0U7QUFFbEUsNEJBQTRCO0FBRTVCLDJEQUEyRDtBQUMzRCxzQ0FBc0M7QUFDdEMscURBQXFEO0FBQ3JELDhFQUE4RTtBQUM5RSw0Q0FBNEM7QUFDNUMscUhBQXFIO0FBRXJILDRFQUE0RTtBQUM1RSw2REFBNkQ7QUFDN0QsaURBQWlEO0FBQ2pELDZHQUE2RztBQUU3Ryw4UEFBOFA7QUFDOVAsMkVBQTJFO0FBQzNFLCtDQUErQztBQUMvQyx1QkFBdUI7QUFDdkIseUNBQXlDO0FBQ3pDLGtEQUFrRDtBQUNsRCwwQ0FBMEM7QUFDMUMsd0JBQXdCO0FBQ3hCLHlEQUF5RDtBQUN6RCxpQ0FBaUM7QUFDakMsNERBQTREO0FBQzVELDhCQUE4QjtBQUM5Qiw4Q0FBOEM7QUFDOUMsNENBQTRDO0FBQzVDLDhCQUE4QjtBQUM5QiwwQkFBMEI7QUFDMUIsa0NBQWtDO0FBQ2xDLDJCQUEyQjtBQUMzQiw4QkFBOEI7QUFDOUIsMkJBQTJCO0FBQzNCLDJCQUEyQjtBQUMzQixvREFBb0Q7QUFDcEQsMkJBQTJCO0FBQzNCLDZCQUE2QjtBQUU3Qiw2QkFBNkI7QUFDN0Isb0JBQW9CO0FBRXBCLDJDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXR0cmlidXRlfSBmcm9tICcuL2F0dHJpYnV0ZSc7XG5pbXBvcnQge0VmZmVjdFRhZ30gZnJvbSAnLi90YWcuZWZmZWN0JztcbmltcG9ydCB7QmFzZVNraWxsLCBTa2lsbENhdGVnb3J5fSBmcm9tICcuL2Jhc2Uuc2tpbGwnO1xuaW1wb3J0IHtFZmZlY3RUYWJsZSwgTW9kaWZpZXJ9IGZyb20gJy4vdGFibGUuZWZmZWN0JztcbmltcG9ydCB7TWVudVNsb3R9IGZyb20gJy4vbWVudS1zbG90JztcblxuLyoqXG4gKiBXZWFwb24gU2tpbGxcbiAqXG4gKiBXZWFwb24gc2tsaWxscyBhcmUgZ3JhbnRlZCBiYXNlZCBvbiB0aGUgZXF1aXBwZWQgaXRlbSBhbmQgY2hhcmFjdGVycyBhYmlsaXR5IHRvIHVzZSB3ZWFwb24uXG4gKiBFYWNoIGRpcmVjdGx5IHJlbGF0ZWQgdG8gc2ltcGxlIHVzZSBvZiB0aGUgcGxheWVycyBlcXVpcHBlZCB3ZWFwb24uXG4gKiBFYWNoIGFyZSBhIHR5cGUgb2YgQ29tbWFuZCBNZW51IEFjdGlvbiB3aGljaCBtZWFucyB0aGV5IGNhbiBiZSB1c2VkIGluIGdhbWUuXG4gKiBUaGV5IGFyZSBhbHdheXMgbG9jYXRlZCBpbiB0aGUgZmlyc3Qgc2xvdCBvZiB0aGUgQmFzaWMgQ29tbWFuZCBNZW51IEFjdGlvbnMuXG4gKi9cblxuZXhwb3J0IGVudW0gV2VhcG9uU2tpbGxMaXN0IHtcbiAgUEFSUlkgPSAnUGFycnknLFxuICBTTEFTSCA9ICdTbGFzaCcsXG4gIFNUUklLRSA9ICdTdHJpa2UnLFxuICBTVEFCID0gJ1N0YWInLFxuICBDSE9QID0gJ0Nob3AnLFxuICBDTEVBVkUgPSAnQ2xlYXZlJyxcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdlYXBvblNraWxsIGltcGxlbWVudHMgQmFzZVNraWxsIHtcbiAgYWJzdHJhY3QgbmFtZTogV2VhcG9uU2tpbGxMaXN0O1xuICBhYnN0cmFjdCBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBhYnN0cmFjdCBlZmZlY3Q6IEVmZmVjdFRhYmxlO1xuICBtZW51U2xvdDogTWVudVNsb3QuRmlyc3Q7XG4gIGNhdGVnb3J5OiBTa2lsbENhdGVnb3J5LldFQVBPTjtcbn1cblxuZXhwb3J0IGNsYXNzIFBhcnJ5IGV4dGVuZHMgV2VhcG9uU2tpbGwge1xuICBuYW1lOiBXZWFwb25Ta2lsbExpc3QuUEFSUlk7XG4gIGRlc2NyaXB0aW9uOiAnV2FyZCBvZmYgaW5jb21pbmcgYXR0YWNrIHdpdGggYSBjb3VudGVybW92ZS4nO1xuICBlZmZlY3Q6IFtdO1xufVxuXG5leHBvcnQgY2xhc3MgU2xhc2ggZXh0ZW5kcyBXZWFwb25Ta2lsbCB7XG4gIG5hbWU6IFdlYXBvblNraWxsTGlzdC5TTEFTSDtcbiAgZGVzY3JpcHRpb246ICdBdHRhY2sgd2l0aCBhIGJsYWRlLic7XG4gIGVmZmVjdDogW1xuICAgIHtcbiAgICAgIG5hbWU6IEF0dHJpYnV0ZS5MSUZFO1xuICAgICAgbW9kaWZpZXI6IE1vZGlmaWVyLlJFTU9WRTtcbiAgICAgIHF1YW50aXR5OiAnMWQ2KzInO1xuICAgICAgdGFnczogW0VmZmVjdFRhZy5QSFlTSUNBTF07XG4gICAgfSxcbiAgXTtcbn1cblxuZXhwb3J0IGNsYXNzIFN0cmlrZSBleHRlbmRzIFdlYXBvblNraWxsIHtcbiAgbmFtZTogV2VhcG9uU2tpbGxMaXN0LlNUUklLRTtcbiAgZGVzY3JpcHRpb246ICdBdHRhY2sgd2l0aCBhIHN1ZGRlbiBlZmZlY3Qgd2l0aCBhIGJsYWRlLic7XG4gIGVmZmVjdDogW1xuICAgIHtcbiAgICAgIG5hbWU6IEF0dHJpYnV0ZS5MSUZFO1xuICAgICAgbW9kaWZpZXI6IE1vZGlmaWVyLlJFTU9WRTtcbiAgICAgIHF1YW50aXR5OiAnMWQ2KzInO1xuICAgICAgdGFnczogW0VmZmVjdFRhZy5QSFlTSUNBTF07XG4gICAgfSxcbiAgXTtcbn1cblxuZXhwb3J0IGNsYXNzIFN0YWIgZXh0ZW5kcyBXZWFwb25Ta2lsbCB7XG4gIG5hbWU6IFdlYXBvblNraWxsTGlzdC5TVEFCO1xuICBkZXNjcmlwdGlvbjogJ0F0dGFjaCB3aXRoIGEgZm9yd2FyZCBzdHJpa2luZyBtb3Rpb24gd2l0aCBhIGJsYWRlLic7XG4gIGVmZmVjdDogW1xuICAgIHtcbiAgICAgIG5hbWU6IEF0dHJpYnV0ZS5MSUZFO1xuICAgICAgbW9kaWZpZXI6IE1vZGlmaWVyLlJFTU9WRTtcbiAgICAgIHF1YW50aXR5OiAnMWQ2KzInO1xuICAgICAgdGFnczogW0VmZmVjdFRhZy5QSFlTSUNBTF07XG4gICAgfSxcbiAgXTtcbn1cblxuZXhwb3J0IGNsYXNzIENob3AgZXh0ZW5kcyBXZWFwb25Ta2lsbCB7XG4gIG5hbWU6IFdlYXBvblNraWxsTGlzdC5DSE9QO1xuICBkZXNjcmlwdGlvbjogJ0F0dGFjayB3aXRoIGEgZG93bndhcmQgbW90aW9uIHdpdGggYSBibGFkZS4nO1xuICBlZmZlY3Q6IFtcbiAgICB7XG4gICAgICBuYW1lOiBBdHRyaWJ1dGUuTElGRTtcbiAgICAgIG1vZGlmaWVyOiBNb2RpZmllci5SRU1PVkU7XG4gICAgICBxdWFudGl0eTogJzFkNisyJztcbiAgICAgIHRhZ3M6IFtFZmZlY3RUYWcuUEhZU0lDQUxdO1xuICAgIH0sXG4gIF07XG59XG5cbmV4cG9ydCBjbGFzcyBDbGVhdmUgZXh0ZW5kcyBXZWFwb25Ta2lsbCB7XG4gIG5hbWU6IFdlYXBvblNraWxsTGlzdC5DTEVBVkU7XG4gIGRlc2NyaXB0aW9uOiAnQSBzbGFzaCB0ZWNobmlxdWUuJztcbiAgZWZmZWN0OiBbXG4gICAge1xuICAgICAgbmFtZTogQXR0cmlidXRlLkxJRkU7XG4gICAgICBtb2RpZmllcjogTW9kaWZpZXIuUkVNT1ZFO1xuICAgICAgcXVhbnRpdHk6ICcxZDYrMic7XG4gICAgICB0YWdzOiBbRWZmZWN0VGFnLlBIWVNJQ0FMXTtcbiAgICB9LFxuICBdO1xufVxuXG4vLyBcIjE1XCIsXCJDbGVhdmUgbHYyXCIsLFwiMTNcIiwsXCIxM1wiXG5cbi8vIGV4cG9ydCBjbGFzcyBUZWNoXG4vLyBXZWFwb24gVGVjaFxuLy8gU2xhc2gg4oCTIChzdGFtaW5hKVxuXG4vLyBcIjYwXCIsXCJSZXN0b3JpbmcgQXVyYVwiLFwiQWxsaWVzIHdpdGhpbmcgNSBmb290IHJhZGl1cyBzbG93bHkgZ2FpbiBsaWZlLiAxLzIgb2YgU3Bpcml0IHBlci9zZWNcIixcIjU5XCIsLFwiNTlcIlxuLy8gXCI2MVwiLFwiUmVzdXJyZWN0XCIsXCJDdXJlcyBMaWZlbGVzc1wiLFwiNjBcIiwsXCI2MFwiXG4vLyBcIjYyXCIsXCJDdXJlXCIsLFwiNjFcIiwsXCI2MVwiXG4vLyBcIjYzXCIsXCJIZWFsXCIsXCJSZXN0b3JlIGxpZmUgdG8gb25lIHRhcmdldFwiLFwiNjJcIiwsXCI2MlwiXG4vLyBcIjY0XCIsXCJIZWFsIEFsbFwiLFwiUmVzdG9yZSBsaWZlIHRvIGFsbCBuZWFyYnkgdGFyZ2V0c1wiLFwiNjNcIiwsXCI2M1wiXG5cbi8vIFwiNjlcIixcIlN0cmlrZVwiLCxcIjY4XCIsLFwiNjhcIlxuXG4vLyBcIjczXCIsXCJCYWtlXCIsXCJDcmVhdGUgQ29uc3VtYWJsZXMgZnJvbSBSZWNpcGVzXCIsXCI3MlwiLCxcIjcyXCJcbi8vIFwiNzRcIixcIkltcHJvdmVkIERvZGdpbmdcIiwsXCI3M1wiLCxcIjczXCJcbi8vIFwiNzVcIixcIlF1aWNrXCIsXCIgSW5jcmVhc2UgbW92ZW1lbnQgc3BlZWRcIixcIjc0XCIsLFwiNzRcIlxuLy8gXCI3NlwiLFwiRGFya25lc3NcIixcIiBEZWNyZWFzZSB0aGUgYXJlYSB0aGF0IHlvdXIgb3Bwb25lbnQgY2FuIHNlZS5cIixcIjc1XCIsLFwiNzVcIlxuLy8gXCI3N1wiLFwiRmlnaHRlclwiLFwiRG91YmxlIFN0cmlrZVwiLFwiNzZcIiwsXCI3NlwiXG4vLyBcIjc4XCIsXCJCbG9ja1wiLFwiQmxvY2sgZW5lbWllcyB3aXRoIHdpZWxkaW5nIGl0ZW0uIFByZXZlbnRpbmcgQ3JpdGFsIEF0dGFja3MgZnJvbSBkb2luZyBhZGRpdGlvbmFsIGRhbWFnZVwiLFwiNzdcIiwsXCI3N1wiXG5cbi8vIFwiNDlcIixcIkNoZWVyXCIsXCJUYXJnZXRzIFNwaXJpdCBpbmNyZWFzZXMgYnkgMTAlIGZvciBhIGR1cmF0aW9uLlwiLFwiNDhcIiwsXCI0OFwiXG4vLyBcIjUwXCIsXCJTdXBwb3J0XCIsXCJUaGUgbW9zdCBwb3dlcmZ1bCBzdGF0dXMgYm9udXNcIixcIjQ5XCIsLFwiNDlcIlxuLy8gXCI1MVwiLFwiQmx1ZmZcIixcIkRlY2VpdmUgYSBjaGFyYWN0ZXIuXCIsXCI1MFwiLCxcIjUwXCJcbi8vIFwiNTJcIixcIlNlbnNlIEJsdWZmXCIsXCJEZXRlY3QgaWYgc29tZW9uZSBpcyBseWluZyAoaW5kaWNhdGVkIGJ5IGEgaWNvbiB3aGVuIGNoYXJhY3RlciBpcyB0YWxraW5nKVwiLFwiNTFcIiwsXCI1MVwiXG5cbi8vIFwiNTNcIixcIldyYWZ0ZnVsIEJsb3dcIixcIklmIGEgcGxheWVyIGhvbGRzIGRvd24gdGhlIGJ1dHRvbiBmb3IgYSBiYXNpYyBhdHRhY2sgbW92ZSB0aGV5IHdpbGwgZG8gYWRkaXRpb25hbCBwaHlzaWNhbCBkYW1hZ2UgYXQgdGhlIGNvc3Qgb2YgTGlmZSB0byB0aGUgQmVyc2Vya2VyLiBUaGUgbG9uZ2VyIHRoZXkgaG9sZCBkb3duIHRoZSBidXR0b24gdGhlIG1vcmUgTGlmZSB3aWxsIGJlIHRha2VuIGluIHRoZSBleGNoYW5nZS5cIixcIjUyXCIsLFwiNTJcIlxuLy8gXCI1NFwiLFwiVW5keWluZyBQcmlkZVwiLFwiR2FpbiBSYWdlIHR3aWNlIGFzIGZhc3Qgd2hlbiBhdHRhY2tlZC5cIixcIjUzXCIsLFwiNTNcIlxuLy8gXCIzXCIsXCJTY291dFwiLFwiQnJlYWsgYXdheSBmcm9tIHBhcnR5XCIsXCIxXCIsLFwiMVwiXG4vLyBcIjRcIixcIlNjYW5cIiwsXCIyXCIsLFwiMlwiXG4vLyBcIjVcIixcIlNlYXJjaFwiLFwiTG9vayBmb3IgaXRlbXNcIixcIjNcIiwsXCIzXCJcbi8vIFwiNlwiLFwiR3VhcmRcIixcIlByb3RlY3QgYWxseSBmcm9tIGF0dGFja1wiLFwiNFwiLCxcIjRcIlxuLy8gXCI3XCIsXCJQcm90ZWN0XCIsXCJzYW1lIGFzIGd1YXJkP1wiLFwiNVwiLCxcIjVcIlxuLy8gXCI4XCIsXCJGb2N1c1wiLCxcIjZcIiwsXCI2XCJcbi8vIFwiOVwiLFwiUGFycnlcIixcIkF0dGFjayBzb21lb25lcyBhdHRhY2sgdG8gYmxvY2tcIixcIjdcIiwsXCI3XCJcbi8vIFwiMTBcIixcIk9yZGVyL0NvbW1hbmRcIiwsXCI4XCIsLFwiOFwiXG4vLyBcIjExXCIsXCJGb3JtYXRpb25cIixcIkdldCBpbiBwcmVkaWZlbmQgb3JnYW5pemF0aW9uXCIsXCI5XCIsLFwiOVwiXG4vLyBcIjEzXCIsXCJMaWJlcmF0ZVwiLCxcIjExXCIsLFwiMTFcIlxuLy8gXCIxNFwiLFwiRGlzb2JleVwiLFwiQmxvY2sgYSBjb21tYW5kXCIsXCIxMlwiLCxcIjEyXCJcbi8vIFwiMTZcIixcIlByb3RlY3RcIixcIkd1YXJkIGFuIGFsbHlcIixcIjE0XCIsLFwiMTRcIlxuLy8gXCIxN1wiLFwiRGVzb2xhdGVcIiwsXCIxNVwiLCxcIjE1XCJcbi8vIFwiMThcIixcIlJhZ2VcIiwsXCIxNlwiLCxcIjE2XCJcbi8vIFwiMjRcIixcIkNoYXJtLCBDaGlsbFwiLCxcIjIyXCIsLFwiMjJcIlxuLy8gXCIyNVwiLFwiUXVha2VcIiwsXCIyM1wiLCxcIjIzXCJcbi8vIFwiMjZcIixcIkJsaXp6YXJkXCIsLFwiMjRcIiwsXCIyNFwiXG4vLyBcIjI4XCIsXCJGcm9zdFwiLCxcIjI1XCIsLFwiMjVcIlxuLy8gXCIyOVwiLFwiQ2hpbGxcIiwsXCIyNlwiLCxcIjI2XCJcbi8vIFwiMzBcIixcIkFic29yYlwiLFwiQWJvcmIgdGhlIHRhcmdldHMgbGlmZVwiLFwiMjdcIiwsXCIyN1wiXG4vLyBcIjMxXCIsXCJEcmFpblwiLCxcIjI4XCIsLFwiMjhcIlxuLy8gXCIzM1wiLFwiRGlzbWlzc1wiLCxcIjMwXCIsLFwiMzBcIlxuXG4vLyBcIjM0XCIsXCJDb21tYW5kXCIsLFwiMzFcIiwsXCIzMVwiXG4vLyBcIjM1XCIsLCxcIjMyXCIsLFwiMzJcIlxuXG4vLyBcIjM5XCIsXCJEb29tXCIsXCJJbmZsaWN0cyBEb29tZWRcIixcIjM2XCIsLFwiMzZcIlxuIl19