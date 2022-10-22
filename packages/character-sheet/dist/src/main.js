"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const archetype_1 = require("./archetype/archetype");
async function getArchetype(id) {
    try {
        const archetype = (0, archetype_1.Archetype)(id);
        const character = { id: id, ...archetype };
        return await Promise.resolve(character);
    }
    catch (err) {
        Promise.reject(new Error('Failed to get Archetype'));
    }
}
// async function listArchetypes(): Promise<any> {
//   try {
//     const archetype: ArchetypeList.Character = NPCList['Lawzon'];
//     const character = {archetype};
//     return await Promise.resolve(character);
//   } catch (err) {
//     Promise.reject(new Error('Failed to get Archetypes'));
//   }
// }
const handler = async (event) => {
    switch (event.info.fieldName) {
        // case 'listArchetypes':
        //   return await listArchetypes();
        case 'getArchetypeById':
            return await getArchetype(event.arguments.archetypeId);
        default:
            return null;
    }
};
exports.handler = handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHFEQUErRDtBQUUvRCxLQUFLLFVBQVUsWUFBWSxDQUFDLEVBQVU7SUFDcEMsSUFBSTtRQUNGLE1BQU0sU0FBUyxHQUFHLElBQUEscUJBQVMsRUFBQyxFQUFFLENBQUMsQ0FBQztRQUNoQyxNQUFNLFNBQVMsR0FBRyxFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxTQUFTLEVBQUMsQ0FBQztRQUN6QyxPQUFPLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN6QztJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1osT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7S0FDdEQ7QUFDSCxDQUFDO0FBRUQsa0RBQWtEO0FBQ2xELFVBQVU7QUFDVixvRUFBb0U7QUFDcEUscUNBQXFDO0FBQ3JDLCtDQUErQztBQUMvQyxvQkFBb0I7QUFDcEIsNkRBQTZEO0FBQzdELE1BQU07QUFDTixJQUFJO0FBRUcsTUFBTSxPQUFPLEdBQUcsS0FBSyxFQUFFLEtBQWdDLEVBQUUsRUFBRTtJQUNoRSxRQUFRLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQzVCLHlCQUF5QjtRQUN6QixtQ0FBbUM7UUFDbkMsS0FBSyxrQkFBa0I7WUFDckIsT0FBTyxNQUFNLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pEO1lBQ0UsT0FBTyxJQUFJLENBQUM7S0FDZjtBQUNILENBQUMsQ0FBQztBQVRXLFFBQUEsT0FBTyxXQVNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXBwU3luY1Jlc29sdmVyRXZlbnR9IGZyb20gJ2F3cy1sYW1iZGEnO1xuaW1wb3J0IHtBcmNoZXR5cGVMaXN0LCBBcmNoZXR5cGV9IGZyb20gJy4vYXJjaGV0eXBlL2FyY2hldHlwZSc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFyY2hldHlwZShpZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBhcmNoZXR5cGUgPSBBcmNoZXR5cGUoaWQpO1xuICAgIGNvbnN0IGNoYXJhY3RlciA9IHtpZDogaWQsIC4uLmFyY2hldHlwZX07XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShjaGFyYWN0ZXIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ0ZhaWxlZCB0byBnZXQgQXJjaGV0eXBlJykpO1xuICB9XG59XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIGxpc3RBcmNoZXR5cGVzKCk6IFByb21pc2U8YW55PiB7XG4vLyAgIHRyeSB7XG4vLyAgICAgY29uc3QgYXJjaGV0eXBlOiBBcmNoZXR5cGVMaXN0LkNoYXJhY3RlciA9IE5QQ0xpc3RbJ0xhd3pvbiddO1xuLy8gICAgIGNvbnN0IGNoYXJhY3RlciA9IHthcmNoZXR5cGV9O1xuLy8gICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoY2hhcmFjdGVyKTtcbi8vICAgfSBjYXRjaCAoZXJyKSB7XG4vLyAgICAgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdGYWlsZWQgdG8gZ2V0IEFyY2hldHlwZXMnKSk7XG4vLyAgIH1cbi8vIH1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBhc3luYyAoZXZlbnQ6IEFwcFN5bmNSZXNvbHZlckV2ZW50PGFueT4pID0+IHtcbiAgc3dpdGNoIChldmVudC5pbmZvLmZpZWxkTmFtZSkge1xuICAgIC8vIGNhc2UgJ2xpc3RBcmNoZXR5cGVzJzpcbiAgICAvLyAgIHJldHVybiBhd2FpdCBsaXN0QXJjaGV0eXBlcygpO1xuICAgIGNhc2UgJ2dldEFyY2hldHlwZUJ5SWQnOlxuICAgICAgcmV0dXJuIGF3YWl0IGdldEFyY2hldHlwZShldmVudC5hcmd1bWVudHMuYXJjaGV0eXBlSWQpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcbiJdfQ==