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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2VhcG9uU2tpbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50L3NraWxsL1dlYXBvblNraWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQU1BOzs7Ozs7O0dBT0c7QUFFSCxJQUFZLGVBT1g7QUFQRCxXQUFZLGVBQWU7SUFDekIsa0NBQWUsQ0FBQTtJQUNmLGtDQUFlLENBQUE7SUFDZixvQ0FBaUIsQ0FBQTtJQUNqQixnQ0FBYSxDQUFBO0lBQ2IsZ0NBQWEsQ0FBQTtJQUNiLG9DQUFpQixDQUFBO0FBQ25CLENBQUMsRUFQVyxlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQU8xQjtBQUVELE1BQXNCLFdBQVc7Q0FNaEM7QUFORCxrQ0FNQztBQUVELE1BQWEsS0FBTSxTQUFRLFdBQVc7Q0FJckM7QUFKRCxzQkFJQztBQUVELE1BQWEsS0FBTSxTQUFRLFdBQVc7Q0FXckM7QUFYRCxzQkFXQztBQUVELE1BQWEsTUFBTyxTQUFRLFdBQVc7Q0FXdEM7QUFYRCx3QkFXQztBQUVELE1BQWEsSUFBSyxTQUFRLFdBQVc7Q0FXcEM7QUFYRCxvQkFXQztBQUVELE1BQWEsSUFBSyxTQUFRLFdBQVc7Q0FXcEM7QUFYRCxvQkFXQztBQUVELE1BQWEsTUFBTyxTQUFRLFdBQVc7Q0FXdEM7QUFYRCx3QkFXQztBQUVELGdDQUFnQztBQUVoQyxvQkFBb0I7QUFDcEIsY0FBYztBQUNkLG9CQUFvQjtBQUVwQiwwR0FBMEc7QUFDMUcsK0NBQStDO0FBQy9DLDBCQUEwQjtBQUMxQixzREFBc0Q7QUFDdEQsa0VBQWtFO0FBRWxFLDRCQUE0QjtBQUU1QiwyREFBMkQ7QUFDM0Qsc0NBQXNDO0FBQ3RDLHFEQUFxRDtBQUNyRCw4RUFBOEU7QUFDOUUsNENBQTRDO0FBQzVDLHFIQUFxSDtBQUVySCw0RUFBNEU7QUFDNUUsNkRBQTZEO0FBQzdELGlEQUFpRDtBQUNqRCw2R0FBNkc7QUFFN0csOFBBQThQO0FBQzlQLDJFQUEyRTtBQUMzRSwrQ0FBK0M7QUFDL0MsdUJBQXVCO0FBQ3ZCLHlDQUF5QztBQUN6QyxrREFBa0Q7QUFDbEQsMENBQTBDO0FBQzFDLHdCQUF3QjtBQUN4Qix5REFBeUQ7QUFDekQsaUNBQWlDO0FBQ2pDLDREQUE0RDtBQUM1RCw4QkFBOEI7QUFDOUIsOENBQThDO0FBQzlDLDRDQUE0QztBQUM1Qyw4QkFBOEI7QUFDOUIsMEJBQTBCO0FBQzFCLGtDQUFrQztBQUNsQywyQkFBMkI7QUFDM0IsOEJBQThCO0FBQzlCLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0Isb0RBQW9EO0FBQ3BELDJCQUEyQjtBQUMzQiw2QkFBNkI7QUFFN0IsNkJBQTZCO0FBQzdCLG9CQUFvQjtBQUVwQiwyQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F0dHJpYnV0ZX0gZnJvbSAnLi4vY2hhcmFjdGVyL0F0dHJpYnV0ZSc7XG5pbXBvcnQge0VmZmVjdFRhZ30gZnJvbSAnLi4vZWZmZWN0L0VmZmVjdFRhZyc7XG5pbXBvcnQge0Jhc2VTa2lsbCwgU2tpbGxDYXRlZ29yeX0gZnJvbSAnLi9CYXNlU2tpbGwnO1xuaW1wb3J0IHtFZmZlY3RUYWJsZSwgTW9kaWZpZXJ9IGZyb20gJy4uL2VmZmVjdC9FZmZlY3RUYWJsZSc7XG5pbXBvcnQge01lbnVTbG90fSBmcm9tICcuLi9jaGFyYWN0ZXIvTWVudVNsb3QnO1xuXG4vKipcbiAqIFdlYXBvbiBTa2lsbFxuICpcbiAqIFdlYXBvbiBza2xpbGxzIGFyZSBncmFudGVkIGJhc2VkIG9uIHRoZSBlcXVpcHBlZCBpdGVtIGFuZCBjaGFyYWN0ZXJzIGFiaWxpdHkgdG8gdXNlIHdlYXBvbi5cbiAqIEVhY2ggZGlyZWN0bHkgcmVsYXRlZCB0byBzaW1wbGUgdXNlIG9mIHRoZSBwbGF5ZXJzIGVxdWlwcGVkIHdlYXBvbi5cbiAqIEVhY2ggYXJlIGEgdHlwZSBvZiBDb21tYW5kIE1lbnUgQWN0aW9uIHdoaWNoIG1lYW5zIHRoZXkgY2FuIGJlIHVzZWQgaW4gZ2FtZS5cbiAqIFRoZXkgYXJlIGFsd2F5cyBsb2NhdGVkIGluIHRoZSBmaXJzdCBzbG90IG9mIHRoZSBCYXNpYyBDb21tYW5kIE1lbnUgQWN0aW9ucy5cbiAqL1xuXG5leHBvcnQgZW51bSBXZWFwb25Ta2lsbExpc3Qge1xuICBQQVJSWSA9ICdQYXJyeScsXG4gIFNMQVNIID0gJ1NsYXNoJyxcbiAgU1RSSUtFID0gJ1N0cmlrZScsXG4gIFNUQUIgPSAnU3RhYicsXG4gIENIT1AgPSAnQ2hvcCcsXG4gIENMRUFWRSA9ICdDbGVhdmUnLFxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgV2VhcG9uU2tpbGwgaW1wbGVtZW50cyBCYXNlU2tpbGwge1xuICBhYnN0cmFjdCBuYW1lOiBXZWFwb25Ta2lsbExpc3Q7XG4gIGFic3RyYWN0IGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGFic3RyYWN0IGVmZmVjdDogRWZmZWN0VGFibGU7XG4gIG1lbnVTbG90OiBNZW51U2xvdC5GaXJzdDtcbiAgY2F0ZWdvcnk6IFNraWxsQ2F0ZWdvcnkuV0VBUE9OO1xufVxuXG5leHBvcnQgY2xhc3MgUGFycnkgZXh0ZW5kcyBXZWFwb25Ta2lsbCB7XG4gIG5hbWU6IFdlYXBvblNraWxsTGlzdC5QQVJSWTtcbiAgZGVzY3JpcHRpb246ICdXYXJkIG9mZiBpbmNvbWluZyBhdHRhY2sgd2l0aCBhIGNvdW50ZXJtb3ZlLic7XG4gIGVmZmVjdDogW107XG59XG5cbmV4cG9ydCBjbGFzcyBTbGFzaCBleHRlbmRzIFdlYXBvblNraWxsIHtcbiAgbmFtZTogV2VhcG9uU2tpbGxMaXN0LlNMQVNIO1xuICBkZXNjcmlwdGlvbjogJ0F0dGFjayB3aXRoIGEgYmxhZGUuJztcbiAgZWZmZWN0OiBbXG4gICAge1xuICAgICAgbmFtZTogQXR0cmlidXRlLkxJRkU7XG4gICAgICBtb2RpZmllcjogTW9kaWZpZXIuUkVNT1ZFO1xuICAgICAgcXVhbnRpdHk6ICcxZDYrMic7XG4gICAgICB0YWdzOiBbRWZmZWN0VGFnLlBIWVNJQ0FMXTtcbiAgICB9LFxuICBdO1xufVxuXG5leHBvcnQgY2xhc3MgU3RyaWtlIGV4dGVuZHMgV2VhcG9uU2tpbGwge1xuICBuYW1lOiBXZWFwb25Ta2lsbExpc3QuU1RSSUtFO1xuICBkZXNjcmlwdGlvbjogJ0F0dGFjayB3aXRoIGEgc3VkZGVuIGVmZmVjdCB3aXRoIGEgYmxhZGUuJztcbiAgZWZmZWN0OiBbXG4gICAge1xuICAgICAgbmFtZTogQXR0cmlidXRlLkxJRkU7XG4gICAgICBtb2RpZmllcjogTW9kaWZpZXIuUkVNT1ZFO1xuICAgICAgcXVhbnRpdHk6ICcxZDYrMic7XG4gICAgICB0YWdzOiBbRWZmZWN0VGFnLlBIWVNJQ0FMXTtcbiAgICB9LFxuICBdO1xufVxuXG5leHBvcnQgY2xhc3MgU3RhYiBleHRlbmRzIFdlYXBvblNraWxsIHtcbiAgbmFtZTogV2VhcG9uU2tpbGxMaXN0LlNUQUI7XG4gIGRlc2NyaXB0aW9uOiAnQXR0YWNoIHdpdGggYSBmb3J3YXJkIHN0cmlraW5nIG1vdGlvbiB3aXRoIGEgYmxhZGUuJztcbiAgZWZmZWN0OiBbXG4gICAge1xuICAgICAgbmFtZTogQXR0cmlidXRlLkxJRkU7XG4gICAgICBtb2RpZmllcjogTW9kaWZpZXIuUkVNT1ZFO1xuICAgICAgcXVhbnRpdHk6ICcxZDYrMic7XG4gICAgICB0YWdzOiBbRWZmZWN0VGFnLlBIWVNJQ0FMXTtcbiAgICB9LFxuICBdO1xufVxuXG5leHBvcnQgY2xhc3MgQ2hvcCBleHRlbmRzIFdlYXBvblNraWxsIHtcbiAgbmFtZTogV2VhcG9uU2tpbGxMaXN0LkNIT1A7XG4gIGRlc2NyaXB0aW9uOiAnQXR0YWNrIHdpdGggYSBkb3dud2FyZCBtb3Rpb24gd2l0aCBhIGJsYWRlLic7XG4gIGVmZmVjdDogW1xuICAgIHtcbiAgICAgIG5hbWU6IEF0dHJpYnV0ZS5MSUZFO1xuICAgICAgbW9kaWZpZXI6IE1vZGlmaWVyLlJFTU9WRTtcbiAgICAgIHF1YW50aXR5OiAnMWQ2KzInO1xuICAgICAgdGFnczogW0VmZmVjdFRhZy5QSFlTSUNBTF07XG4gICAgfSxcbiAgXTtcbn1cblxuZXhwb3J0IGNsYXNzIENsZWF2ZSBleHRlbmRzIFdlYXBvblNraWxsIHtcbiAgbmFtZTogV2VhcG9uU2tpbGxMaXN0LkNMRUFWRTtcbiAgZGVzY3JpcHRpb246ICdBIHNsYXNoIHRlY2huaXF1ZS4nO1xuICBlZmZlY3Q6IFtcbiAgICB7XG4gICAgICBuYW1lOiBBdHRyaWJ1dGUuTElGRTtcbiAgICAgIG1vZGlmaWVyOiBNb2RpZmllci5SRU1PVkU7XG4gICAgICBxdWFudGl0eTogJzFkNisyJztcbiAgICAgIHRhZ3M6IFtFZmZlY3RUYWcuUEhZU0lDQUxdO1xuICAgIH0sXG4gIF07XG59XG5cbi8vIFwiMTVcIixcIkNsZWF2ZSBsdjJcIiwsXCIxM1wiLCxcIjEzXCJcblxuLy8gZXhwb3J0IGNsYXNzIFRlY2hcbi8vIFdlYXBvbiBUZWNoXG4vLyBTbGFzaCDigJMgKHN0YW1pbmEpXG5cbi8vIFwiNjBcIixcIlJlc3RvcmluZyBBdXJhXCIsXCJBbGxpZXMgd2l0aGluZyA1IGZvb3QgcmFkaXVzIHNsb3dseSBnYWluIGxpZmUuIDEvMiBvZiBTcGlyaXQgcGVyL3NlY1wiLFwiNTlcIiwsXCI1OVwiXG4vLyBcIjYxXCIsXCJSZXN1cnJlY3RcIixcIkN1cmVzIExpZmVsZXNzXCIsXCI2MFwiLCxcIjYwXCJcbi8vIFwiNjJcIixcIkN1cmVcIiwsXCI2MVwiLCxcIjYxXCJcbi8vIFwiNjNcIixcIkhlYWxcIixcIlJlc3RvcmUgbGlmZSB0byBvbmUgdGFyZ2V0XCIsXCI2MlwiLCxcIjYyXCJcbi8vIFwiNjRcIixcIkhlYWwgQWxsXCIsXCJSZXN0b3JlIGxpZmUgdG8gYWxsIG5lYXJieSB0YXJnZXRzXCIsXCI2M1wiLCxcIjYzXCJcblxuLy8gXCI2OVwiLFwiU3RyaWtlXCIsLFwiNjhcIiwsXCI2OFwiXG5cbi8vIFwiNzNcIixcIkJha2VcIixcIkNyZWF0ZSBDb25zdW1hYmxlcyBmcm9tIFJlY2lwZXNcIixcIjcyXCIsLFwiNzJcIlxuLy8gXCI3NFwiLFwiSW1wcm92ZWQgRG9kZ2luZ1wiLCxcIjczXCIsLFwiNzNcIlxuLy8gXCI3NVwiLFwiUXVpY2tcIixcIiBJbmNyZWFzZSBtb3ZlbWVudCBzcGVlZFwiLFwiNzRcIiwsXCI3NFwiXG4vLyBcIjc2XCIsXCJEYXJrbmVzc1wiLFwiIERlY3JlYXNlIHRoZSBhcmVhIHRoYXQgeW91ciBvcHBvbmVudCBjYW4gc2VlLlwiLFwiNzVcIiwsXCI3NVwiXG4vLyBcIjc3XCIsXCJGaWdodGVyXCIsXCJEb3VibGUgU3RyaWtlXCIsXCI3NlwiLCxcIjc2XCJcbi8vIFwiNzhcIixcIkJsb2NrXCIsXCJCbG9jayBlbmVtaWVzIHdpdGggd2llbGRpbmcgaXRlbS4gUHJldmVudGluZyBDcml0YWwgQXR0YWNrcyBmcm9tIGRvaW5nIGFkZGl0aW9uYWwgZGFtYWdlXCIsXCI3N1wiLCxcIjc3XCJcblxuLy8gXCI0OVwiLFwiQ2hlZXJcIixcIlRhcmdldHMgU3Bpcml0IGluY3JlYXNlcyBieSAxMCUgZm9yIGEgZHVyYXRpb24uXCIsXCI0OFwiLCxcIjQ4XCJcbi8vIFwiNTBcIixcIlN1cHBvcnRcIixcIlRoZSBtb3N0IHBvd2VyZnVsIHN0YXR1cyBib251c1wiLFwiNDlcIiwsXCI0OVwiXG4vLyBcIjUxXCIsXCJCbHVmZlwiLFwiRGVjZWl2ZSBhIGNoYXJhY3Rlci5cIixcIjUwXCIsLFwiNTBcIlxuLy8gXCI1MlwiLFwiU2Vuc2UgQmx1ZmZcIixcIkRldGVjdCBpZiBzb21lb25lIGlzIGx5aW5nIChpbmRpY2F0ZWQgYnkgYSBpY29uIHdoZW4gY2hhcmFjdGVyIGlzIHRhbGtpbmcpXCIsXCI1MVwiLCxcIjUxXCJcblxuLy8gXCI1M1wiLFwiV3JhZnRmdWwgQmxvd1wiLFwiSWYgYSBwbGF5ZXIgaG9sZHMgZG93biB0aGUgYnV0dG9uIGZvciBhIGJhc2ljIGF0dGFjayBtb3ZlIHRoZXkgd2lsbCBkbyBhZGRpdGlvbmFsIHBoeXNpY2FsIGRhbWFnZSBhdCB0aGUgY29zdCBvZiBMaWZlIHRvIHRoZSBCZXJzZXJrZXIuIFRoZSBsb25nZXIgdGhleSBob2xkIGRvd24gdGhlIGJ1dHRvbiB0aGUgbW9yZSBMaWZlIHdpbGwgYmUgdGFrZW4gaW4gdGhlIGV4Y2hhbmdlLlwiLFwiNTJcIiwsXCI1MlwiXG4vLyBcIjU0XCIsXCJVbmR5aW5nIFByaWRlXCIsXCJHYWluIFJhZ2UgdHdpY2UgYXMgZmFzdCB3aGVuIGF0dGFja2VkLlwiLFwiNTNcIiwsXCI1M1wiXG4vLyBcIjNcIixcIlNjb3V0XCIsXCJCcmVhayBhd2F5IGZyb20gcGFydHlcIixcIjFcIiwsXCIxXCJcbi8vIFwiNFwiLFwiU2NhblwiLCxcIjJcIiwsXCIyXCJcbi8vIFwiNVwiLFwiU2VhcmNoXCIsXCJMb29rIGZvciBpdGVtc1wiLFwiM1wiLCxcIjNcIlxuLy8gXCI2XCIsXCJHdWFyZFwiLFwiUHJvdGVjdCBhbGx5IGZyb20gYXR0YWNrXCIsXCI0XCIsLFwiNFwiXG4vLyBcIjdcIixcIlByb3RlY3RcIixcInNhbWUgYXMgZ3VhcmQ/XCIsXCI1XCIsLFwiNVwiXG4vLyBcIjhcIixcIkZvY3VzXCIsLFwiNlwiLCxcIjZcIlxuLy8gXCI5XCIsXCJQYXJyeVwiLFwiQXR0YWNrIHNvbWVvbmVzIGF0dGFjayB0byBibG9ja1wiLFwiN1wiLCxcIjdcIlxuLy8gXCIxMFwiLFwiT3JkZXIvQ29tbWFuZFwiLCxcIjhcIiwsXCI4XCJcbi8vIFwiMTFcIixcIkZvcm1hdGlvblwiLFwiR2V0IGluIHByZWRpZmVuZCBvcmdhbml6YXRpb25cIixcIjlcIiwsXCI5XCJcbi8vIFwiMTNcIixcIkxpYmVyYXRlXCIsLFwiMTFcIiwsXCIxMVwiXG4vLyBcIjE0XCIsXCJEaXNvYmV5XCIsXCJCbG9jayBhIGNvbW1hbmRcIixcIjEyXCIsLFwiMTJcIlxuLy8gXCIxNlwiLFwiUHJvdGVjdFwiLFwiR3VhcmQgYW4gYWxseVwiLFwiMTRcIiwsXCIxNFwiXG4vLyBcIjE3XCIsXCJEZXNvbGF0ZVwiLCxcIjE1XCIsLFwiMTVcIlxuLy8gXCIxOFwiLFwiUmFnZVwiLCxcIjE2XCIsLFwiMTZcIlxuLy8gXCIyNFwiLFwiQ2hhcm0sIENoaWxsXCIsLFwiMjJcIiwsXCIyMlwiXG4vLyBcIjI1XCIsXCJRdWFrZVwiLCxcIjIzXCIsLFwiMjNcIlxuLy8gXCIyNlwiLFwiQmxpenphcmRcIiwsXCIyNFwiLCxcIjI0XCJcbi8vIFwiMjhcIixcIkZyb3N0XCIsLFwiMjVcIiwsXCIyNVwiXG4vLyBcIjI5XCIsXCJDaGlsbFwiLCxcIjI2XCIsLFwiMjZcIlxuLy8gXCIzMFwiLFwiQWJzb3JiXCIsXCJBYm9yYiB0aGUgdGFyZ2V0cyBsaWZlXCIsXCIyN1wiLCxcIjI3XCJcbi8vIFwiMzFcIixcIkRyYWluXCIsLFwiMjhcIiwsXCIyOFwiXG4vLyBcIjMzXCIsXCJEaXNtaXNzXCIsLFwiMzBcIiwsXCIzMFwiXG5cbi8vIFwiMzRcIixcIkNvbW1hbmRcIiwsXCIzMVwiLCxcIjMxXCJcbi8vIFwiMzVcIiwsLFwiMzJcIiwsXCIzMlwiXG5cbi8vIFwiMzlcIixcIkRvb21cIixcIkluZmxpY3RzIERvb21lZFwiLFwiMzZcIiwsXCIzNlwiXG4iXX0=