"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovementSkill = exports.Movement = void 0;
const attribute_1 = require("../attribute");
/**
 * MovementSkill
 * actions that are directly related to movement
 */
var Movement;
(function (Movement) {
    Movement["WALK"] = "Walk";
    Movement["RUN"] = "Run";
    Movement["SWIM"] = "Swim";
    Movement["BACK_FLIP"] = "Back Flip";
    Movement["DOUBLE_BACK_FLIP"] = "Double Back Flip";
    Movement["HIGH_JUMP"] = "High Jump";
    Movement["CLIMB"] = "Climb";
})(Movement = exports.Movement || (exports.Movement = {}));
var MovementSkill;
(function (MovementSkill) {
    MovementSkill.Walk = {
        name: Movement.WALK,
        description: 'Move slowly forward or backward side to side',
        // (Light press Direction Pad) Move slowly.
    };
    MovementSkill.Run = {
        name: Movement.RUN,
        description: 'Move quickly using stamina',
        consumes: attribute_1.Attribute.SPIRIT,
        // consumes stanmina
        // (walk + Square)
        // (Hard press Direction Pad with Stamina)
    };
    MovementSkill.Swim = {
        name: Movement.SWIM,
        description: 'Move in deep water',
        // consumes stanmina
    };
    MovementSkill.BackFlip = {
        name: Movement.BACK_FLIP,
        description: 'Quickly move backwards',
    };
    MovementSkill.DoubleBackFlip = {
        name: Movement.DOUBLE_BACK_FLIP,
        description: 'Quickly move backwards twice',
    };
    MovementSkill.HighJump = {
        name: Movement.HIGH_JUMP,
        description: 'Charged vertical jump',
    };
    MovementSkill.Climb = {
        name: Movement.CLIMB,
        description: 'Scale a wall',
    };
    // "83","Trek","Used to determine how steep an angled tile you can stand on. If your character fails to trek the tile then they will fall from it and will be to step onto it.","82",,"82"
    // Trek – Used to determine how steep an angled tile you can stand on. If your character fails to trek the tile then they will fall from it and will be to step onto it.
    // Duck – (Hold Square + Backwards?) used to evaded attacks works best if preformed during attack.
    // "84","Duck","(Hold Square + Backwards?) used to evaded attacks works best if preformed during attack.","83",,"83"
    // Basic – (Square) jump.
    // Jump – (Square) Jumping uses stamina and can be used to move to otherwise unreachable places. The more stamina
    // "85","Jump","(Square) Jumping uses stamina and can be used to move to otherwise unreachable places. The more stamina","84",,"84"
    // High – (Stamina Boost + Square) jump straight up in the air using a stamina boost.
    // Long – (Directional Pad + Press Square) jump a long way.
    // "87","Long Jump","Jump a long way (different than running?)","86",,"86"
    // "88","Running Jump","Running while jumping","87",,"87"
    // "89","Swim","Must be learned","88",,"88"
    // "90","Dive","Take a breath and dive down based on stamina","89",,"89"
    // Fly – magic person?
})(MovementSkill = exports.MovementSkill || (exports.MovementSkill = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZW1lbnQuc2tpbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50L3NraWxsL21vdmVtZW50LnNraWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDRDQUF1QztBQUV2Qzs7O0dBR0c7QUFDSCxJQUFZLFFBUVg7QUFSRCxXQUFZLFFBQVE7SUFDbEIseUJBQWEsQ0FBQTtJQUNiLHVCQUFXLENBQUE7SUFDWCx5QkFBYSxDQUFBO0lBQ2IsbUNBQXVCLENBQUE7SUFDdkIsaURBQXFDLENBQUE7SUFDckMsbUNBQXVCLENBQUE7SUFDdkIsMkJBQWUsQ0FBQTtBQUNqQixDQUFDLEVBUlcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFRbkI7QUFFRCxJQUFpQixhQUFhLENBcUU3QjtBQXJFRCxXQUFpQixhQUFhO0lBT2Ysa0JBQUksR0FBaUI7UUFDaEMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJO1FBQ25CLFdBQVcsRUFBRSw4Q0FBOEM7UUFDM0QsMkNBQTJDO0tBQzVDLENBQUM7SUFFVyxpQkFBRyxHQUFpQjtRQUMvQixJQUFJLEVBQUUsUUFBUSxDQUFDLEdBQUc7UUFDbEIsV0FBVyxFQUFFLDRCQUE0QjtRQUN6QyxRQUFRLEVBQUUscUJBQVMsQ0FBQyxNQUFNO1FBQzFCLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsMENBQTBDO0tBQzNDLENBQUM7SUFFVyxrQkFBSSxHQUFpQjtRQUNoQyxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUk7UUFDbkIsV0FBVyxFQUFFLG9CQUFvQjtRQUNqQyxvQkFBb0I7S0FDckIsQ0FBQztJQUVXLHNCQUFRLEdBQWlCO1FBQ3BDLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUztRQUN4QixXQUFXLEVBQUUsd0JBQXdCO0tBQ3RDLENBQUM7SUFFVyw0QkFBYyxHQUFpQjtRQUMxQyxJQUFJLEVBQUUsUUFBUSxDQUFDLGdCQUFnQjtRQUMvQixXQUFXLEVBQUUsOEJBQThCO0tBQzVDLENBQUM7SUFFVyxzQkFBUSxHQUFpQjtRQUNwQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVM7UUFDeEIsV0FBVyxFQUFFLHVCQUF1QjtLQUNyQyxDQUFDO0lBRVcsbUJBQUssR0FBaUI7UUFDakMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLO1FBQ3BCLFdBQVcsRUFBRSxjQUFjO0tBQzVCLENBQUM7SUFFRiwwTEFBMEw7SUFDMUwsd0tBQXdLO0lBRXhLLGtHQUFrRztJQUNsRyxvSEFBb0g7SUFFcEgseUJBQXlCO0lBQ3pCLGlIQUFpSDtJQUNqSCxtSUFBbUk7SUFFbkkscUZBQXFGO0lBRXJGLDJEQUEyRDtJQUMzRCwwRUFBMEU7SUFDMUUseURBQXlEO0lBRXpELDJDQUEyQztJQUUzQyx3RUFBd0U7SUFFeEUsc0JBQXNCO0FBQ3hCLENBQUMsRUFyRWdCLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBcUU3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXR0cmlidXRlfSBmcm9tICcuLi9hdHRyaWJ1dGUnO1xuXG4vKipcbiAqIE1vdmVtZW50U2tpbGxcbiAqIGFjdGlvbnMgdGhhdCBhcmUgZGlyZWN0bHkgcmVsYXRlZCB0byBtb3ZlbWVudFxuICovXG5leHBvcnQgZW51bSBNb3ZlbWVudCB7XG4gIFdBTEsgPSAnV2FsaycsXG4gIFJVTiA9ICdSdW4nLFxuICBTV0lNID0gJ1N3aW0nLFxuICBCQUNLX0ZMSVAgPSAnQmFjayBGbGlwJyxcbiAgRE9VQkxFX0JBQ0tfRkxJUCA9ICdEb3VibGUgQmFjayBGbGlwJyxcbiAgSElHSF9KVU1QID0gJ0hpZ2ggSnVtcCcsXG4gIENMSU1CID0gJ0NsaW1iJyxcbn1cblxuZXhwb3J0IG5hbWVzcGFjZSBNb3ZlbWVudFNraWxsIHtcbiAgZXhwb3J0IHR5cGUgTW92ZW1lbnRUeXBlID0ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGNvbnN1bWVzPzogQXR0cmlidXRlO1xuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBXYWxrOiBNb3ZlbWVudFR5cGUgPSB7XG4gICAgbmFtZTogTW92ZW1lbnQuV0FMSyxcbiAgICBkZXNjcmlwdGlvbjogJ01vdmUgc2xvd2x5IGZvcndhcmQgb3IgYmFja3dhcmQgc2lkZSB0byBzaWRlJyxcbiAgICAvLyAoTGlnaHQgcHJlc3MgRGlyZWN0aW9uIFBhZCkgTW92ZSBzbG93bHkuXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IFJ1bjogTW92ZW1lbnRUeXBlID0ge1xuICAgIG5hbWU6IE1vdmVtZW50LlJVTixcbiAgICBkZXNjcmlwdGlvbjogJ01vdmUgcXVpY2tseSB1c2luZyBzdGFtaW5hJyxcbiAgICBjb25zdW1lczogQXR0cmlidXRlLlNQSVJJVCxcbiAgICAvLyBjb25zdW1lcyBzdGFubWluYVxuICAgIC8vICh3YWxrICsgU3F1YXJlKVxuICAgIC8vIChIYXJkIHByZXNzIERpcmVjdGlvbiBQYWQgd2l0aCBTdGFtaW5hKVxuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBTd2ltOiBNb3ZlbWVudFR5cGUgPSB7XG4gICAgbmFtZTogTW92ZW1lbnQuU1dJTSxcbiAgICBkZXNjcmlwdGlvbjogJ01vdmUgaW4gZGVlcCB3YXRlcicsXG4gICAgLy8gY29uc3VtZXMgc3Rhbm1pbmFcbiAgfTtcblxuICBleHBvcnQgY29uc3QgQmFja0ZsaXA6IE1vdmVtZW50VHlwZSA9IHtcbiAgICBuYW1lOiBNb3ZlbWVudC5CQUNLX0ZMSVAsXG4gICAgZGVzY3JpcHRpb246ICdRdWlja2x5IG1vdmUgYmFja3dhcmRzJyxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgRG91YmxlQmFja0ZsaXA6IE1vdmVtZW50VHlwZSA9IHtcbiAgICBuYW1lOiBNb3ZlbWVudC5ET1VCTEVfQkFDS19GTElQLFxuICAgIGRlc2NyaXB0aW9uOiAnUXVpY2tseSBtb3ZlIGJhY2t3YXJkcyB0d2ljZScsXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IEhpZ2hKdW1wOiBNb3ZlbWVudFR5cGUgPSB7XG4gICAgbmFtZTogTW92ZW1lbnQuSElHSF9KVU1QLFxuICAgIGRlc2NyaXB0aW9uOiAnQ2hhcmdlZCB2ZXJ0aWNhbCBqdW1wJyxcbiAgfTtcblxuICBleHBvcnQgY29uc3QgQ2xpbWI6IE1vdmVtZW50VHlwZSA9IHtcbiAgICBuYW1lOiBNb3ZlbWVudC5DTElNQixcbiAgICBkZXNjcmlwdGlvbjogJ1NjYWxlIGEgd2FsbCcsXG4gIH07XG5cbiAgLy8gXCI4M1wiLFwiVHJla1wiLFwiVXNlZCB0byBkZXRlcm1pbmUgaG93IHN0ZWVwIGFuIGFuZ2xlZCB0aWxlIHlvdSBjYW4gc3RhbmQgb24uIElmIHlvdXIgY2hhcmFjdGVyIGZhaWxzIHRvIHRyZWsgdGhlIHRpbGUgdGhlbiB0aGV5IHdpbGwgZmFsbCBmcm9tIGl0IGFuZCB3aWxsIGJlIHRvIHN0ZXAgb250byBpdC5cIixcIjgyXCIsLFwiODJcIlxuICAvLyBUcmVrIOKAkyBVc2VkIHRvIGRldGVybWluZSBob3cgc3RlZXAgYW4gYW5nbGVkIHRpbGUgeW91IGNhbiBzdGFuZCBvbi4gSWYgeW91ciBjaGFyYWN0ZXIgZmFpbHMgdG8gdHJlayB0aGUgdGlsZSB0aGVuIHRoZXkgd2lsbCBmYWxsIGZyb20gaXQgYW5kIHdpbGwgYmUgdG8gc3RlcCBvbnRvIGl0LlxuXG4gIC8vIER1Y2sg4oCTIChIb2xkIFNxdWFyZSArIEJhY2t3YXJkcz8pIHVzZWQgdG8gZXZhZGVkIGF0dGFja3Mgd29ya3MgYmVzdCBpZiBwcmVmb3JtZWQgZHVyaW5nIGF0dGFjay5cbiAgLy8gXCI4NFwiLFwiRHVja1wiLFwiKEhvbGQgU3F1YXJlICsgQmFja3dhcmRzPykgdXNlZCB0byBldmFkZWQgYXR0YWNrcyB3b3JrcyBiZXN0IGlmIHByZWZvcm1lZCBkdXJpbmcgYXR0YWNrLlwiLFwiODNcIiwsXCI4M1wiXG5cbiAgLy8gQmFzaWMg4oCTIChTcXVhcmUpIGp1bXAuXG4gIC8vIEp1bXAg4oCTIChTcXVhcmUpIEp1bXBpbmcgdXNlcyBzdGFtaW5hIGFuZCBjYW4gYmUgdXNlZCB0byBtb3ZlIHRvIG90aGVyd2lzZSB1bnJlYWNoYWJsZSBwbGFjZXMuIFRoZSBtb3JlIHN0YW1pbmFcbiAgLy8gXCI4NVwiLFwiSnVtcFwiLFwiKFNxdWFyZSkgSnVtcGluZyB1c2VzIHN0YW1pbmEgYW5kIGNhbiBiZSB1c2VkIHRvIG1vdmUgdG8gb3RoZXJ3aXNlIHVucmVhY2hhYmxlIHBsYWNlcy4gVGhlIG1vcmUgc3RhbWluYVwiLFwiODRcIiwsXCI4NFwiXG5cbiAgLy8gSGlnaCDigJMgKFN0YW1pbmEgQm9vc3QgKyBTcXVhcmUpIGp1bXAgc3RyYWlnaHQgdXAgaW4gdGhlIGFpciB1c2luZyBhIHN0YW1pbmEgYm9vc3QuXG5cbiAgLy8gTG9uZyDigJMgKERpcmVjdGlvbmFsIFBhZCArIFByZXNzIFNxdWFyZSkganVtcCBhIGxvbmcgd2F5LlxuICAvLyBcIjg3XCIsXCJMb25nIEp1bXBcIixcIkp1bXAgYSBsb25nIHdheSAoZGlmZmVyZW50IHRoYW4gcnVubmluZz8pXCIsXCI4NlwiLCxcIjg2XCJcbiAgLy8gXCI4OFwiLFwiUnVubmluZyBKdW1wXCIsXCJSdW5uaW5nIHdoaWxlIGp1bXBpbmdcIixcIjg3XCIsLFwiODdcIlxuXG4gIC8vIFwiODlcIixcIlN3aW1cIixcIk11c3QgYmUgbGVhcm5lZFwiLFwiODhcIiwsXCI4OFwiXG5cbiAgLy8gXCI5MFwiLFwiRGl2ZVwiLFwiVGFrZSBhIGJyZWF0aCBhbmQgZGl2ZSBkb3duIGJhc2VkIG9uIHN0YW1pbmFcIixcIjg5XCIsLFwiODlcIlxuXG4gIC8vIEZseSDigJMgbWFnaWMgcGVyc29uP1xufVxuIl19