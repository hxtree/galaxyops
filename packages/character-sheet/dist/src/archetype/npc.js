"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.npc = exports.NPCList = void 0;
/**
 * A human or non-humanoid character.
 */
var NPCList;
(function (NPCList) {
    NPCList.VallonOni = {
        name: 'Vallon Oni',
        description: 'White hair',
    };
    NPCList.Mischievous = {
        name: 'Mischievous',
        description: 'A black and white cat with yellow eyes.',
    };
    NPCList.MahdiTsia = {
        name: 'Mahdi Tsia',
        description: "Malace's brother",
    };
    NPCList.Lawzon = {
        name: 'Lawzon',
        description: '',
        history: 'Rumored to be the most powerful fighter from the north. He fought only to protect his village until it was wiped out from a great frost. He now wonders around lifelessly in search of an end. He is by far the most strongest of the seven but has no will to fight.',
    };
    NPCList.Janus = {
        name: 'Janus',
        description: 'The Keeper of Time',
    };
    NPCList.Spider = {
        name: 'Spider',
        description: 'A spider',
    };
})(NPCList = exports.NPCList || (exports.NPCList = {}));
const npc = (id) => {
    const npcId = id;
    const archetype = NPCList[npcId];
    return archetype;
};
exports.npc = npc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FyY2hldHlwZS9ucGMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBTUE7O0dBRUc7QUFDSCxJQUFpQixPQUFPLENBNkN2QjtBQTdDRCxXQUFpQixPQUFPO0lBY1QsaUJBQVMsR0FBYztRQUNsQyxJQUFJLEVBQUUsWUFBWTtRQUNsQixXQUFXLEVBQUUsWUFBWTtLQUMxQixDQUFDO0lBRVcsbUJBQVcsR0FBYztRQUNwQyxJQUFJLEVBQUUsYUFBYTtRQUNuQixXQUFXLEVBQUUseUNBQXlDO0tBQ3ZELENBQUM7SUFFVyxpQkFBUyxHQUFjO1FBQ2xDLElBQUksRUFBRSxZQUFZO1FBQ2xCLFdBQVcsRUFBRSxrQkFBa0I7S0FDaEMsQ0FBQztJQUVXLGNBQU0sR0FBYztRQUMvQixJQUFJLEVBQUUsUUFBUTtRQUNkLFdBQVcsRUFBRSxFQUFFO1FBQ2YsT0FBTyxFQUNMLHVRQUF1UTtLQUMxUSxDQUFDO0lBRVcsYUFBSyxHQUFjO1FBQzlCLElBQUksRUFBRSxPQUFPO1FBQ2IsV0FBVyxFQUFFLG9CQUFvQjtLQUNsQyxDQUFDO0lBRVcsY0FBTSxHQUFjO1FBQy9CLElBQUksRUFBRSxRQUFRO1FBQ2QsV0FBVyxFQUFFLFVBQVU7S0FDeEIsQ0FBQztBQUNKLENBQUMsRUE3Q2dCLE9BQU8sR0FBUCxlQUFPLEtBQVAsZUFBTyxRQTZDdkI7QUFLTSxNQUFNLEdBQUcsR0FBRyxDQUFDLEVBQVUsRUFBRSxFQUFFO0lBQ2hDLE1BQU0sS0FBSyxHQUFZLEVBQWEsQ0FBQztJQUNyQyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyxDQUFDO0FBSlcsUUFBQSxHQUFHLE9BSWQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RyaXZlLCBMaWZlLCBTcGlyaXR9IGZyb20gJy4uL2NvbXBvbmVudC9nYXVnZXMnO1xuaW1wb3J0IHtTdGF0c30gZnJvbSAnLi4vY29tcG9uZW50L3N0YXRzJztcbmltcG9ydCB7VHJhaXR9IGZyb20gJy4uL2NvbXBvbmVudC90cmFpdCc7XG5pbXBvcnQge0l0ZW1zfSBmcm9tICcuLi9jb21wb25lbnQvaXRlbS5nZWFyJztcbmltcG9ydCB7U3RhdHVzRWZmZWN0fSBmcm9tICcuLi9jb21wb25lbnQvc3RhdHVzLmVmZmVjdCc7XG5cbi8qKlxuICogQSBodW1hbiBvciBub24taHVtYW5vaWQgY2hhcmFjdGVyLlxuICovXG5leHBvcnQgbmFtZXNwYWNlIE5QQ0xpc3Qge1xuICBleHBvcnQgdHlwZSBDaGFyYWN0ZXIgPSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgaGlzdG9yeT86IHN0cmluZztcbiAgICBsaWZlPzogTGlmZTtcbiAgICBkcml2ZT86IERyaXZlO1xuICAgIHNwaXJpdD86IFNwaXJpdDtcbiAgICBzdGF0cz86IFN0YXRzO1xuICAgIHRyYWl0cz86IFRyYWl0W107XG4gICAgc3RhdHVzRWZmZWN0cz86IFN0YXR1c0VmZmVjdFtdO1xuICAgIGxvb3Q/OiBJdGVtcztcbiAgfTtcblxuICBleHBvcnQgY29uc3QgVmFsbG9uT25pOiBDaGFyYWN0ZXIgPSB7XG4gICAgbmFtZTogJ1ZhbGxvbiBPbmknLFxuICAgIGRlc2NyaXB0aW9uOiAnV2hpdGUgaGFpcicsXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IE1pc2NoaWV2b3VzOiBDaGFyYWN0ZXIgPSB7XG4gICAgbmFtZTogJ01pc2NoaWV2b3VzJyxcbiAgICBkZXNjcmlwdGlvbjogJ0EgYmxhY2sgYW5kIHdoaXRlIGNhdCB3aXRoIHllbGxvdyBleWVzLicsXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IE1haGRpVHNpYTogQ2hhcmFjdGVyID0ge1xuICAgIG5hbWU6ICdNYWhkaSBUc2lhJyxcbiAgICBkZXNjcmlwdGlvbjogXCJNYWxhY2UncyBicm90aGVyXCIsXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IExhd3pvbjogQ2hhcmFjdGVyID0ge1xuICAgIG5hbWU6ICdMYXd6b24nLFxuICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICBoaXN0b3J5OlxuICAgICAgJ1J1bW9yZWQgdG8gYmUgdGhlIG1vc3QgcG93ZXJmdWwgZmlnaHRlciBmcm9tIHRoZSBub3J0aC4gSGUgZm91Z2h0IG9ubHkgdG8gcHJvdGVjdCBoaXMgdmlsbGFnZSB1bnRpbCBpdCB3YXMgd2lwZWQgb3V0IGZyb20gYSBncmVhdCBmcm9zdC4gSGUgbm93IHdvbmRlcnMgYXJvdW5kIGxpZmVsZXNzbHkgaW4gc2VhcmNoIG9mIGFuIGVuZC4gSGUgaXMgYnkgZmFyIHRoZSBtb3N0IHN0cm9uZ2VzdCBvZiB0aGUgc2V2ZW4gYnV0IGhhcyBubyB3aWxsIHRvIGZpZ2h0LicsXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IEphbnVzOiBDaGFyYWN0ZXIgPSB7XG4gICAgbmFtZTogJ0phbnVzJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoZSBLZWVwZXIgb2YgVGltZScsXG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IFNwaWRlcjogQ2hhcmFjdGVyID0ge1xuICAgIG5hbWU6ICdTcGlkZXInLFxuICAgIGRlc2NyaXB0aW9uOiAnQSBzcGlkZXInLFxuICB9O1xufVxuXG5leHBvcnQgdHlwZSBOUENLZXkgPSB0eXBlb2YgTlBDTGlzdDtcbmV4cG9ydCB0eXBlIE5QQ1R5cGUgPSBrZXlvZiBOUENLZXk7XG5cbmV4cG9ydCBjb25zdCBucGMgPSAoaWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBucGNJZDogTlBDVHlwZSA9IGlkIGFzIE5QQ1R5cGU7XG4gIGNvbnN0IGFyY2hldHlwZSA9IE5QQ0xpc3RbbnBjSWRdO1xuICByZXR1cm4gYXJjaGV0eXBlO1xufTtcbiJdfQ==