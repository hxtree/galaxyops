"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const npc_1 = require("./archetype/npc");
async function getCharacterSheet(id) {
    try {
        // const archetype = new VallonOni();
        const character = {
            id: '2222',
            name: 'Vallon Oni',
            description: 'White hair',
        };
        return await Promise.resolve(character);
    }
    catch (err) {
        Promise.reject(new Error('Failed to get CharacterSheet'));
    }
}
async function listCharacterSheets() {
    try {
        const archetype = new npc_1.VallonOni();
        const character = {
            id: '22',
            name: archetype.name,
            description: archetype.description,
        };
        return await Promise.resolve(character);
    }
    catch (err) {
        Promise.reject(new Error('Failed to get CharacterSheets'));
    }
}
const handler = async (event) => {
    switch (event.info.fieldName) {
        case 'listCharacterSheets':
            return await listCharacterSheets();
        case 'getCharacterSheetById':
            return await getCharacterSheet(event.arguments.id);
        default:
            return null;
    }
};
exports.handler = handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHlDQUEwQztBQUUxQyxLQUFLLFVBQVUsaUJBQWlCLENBQUMsRUFBVTtJQUN6QyxJQUFJO1FBQ0YscUNBQXFDO1FBQ3JDLE1BQU0sU0FBUyxHQUFHO1lBQ2hCLEVBQUUsRUFBRSxNQUFNO1lBQ1YsSUFBSSxFQUFFLFlBQVk7WUFDbEIsV0FBVyxFQUFFLFlBQVk7U0FDMUIsQ0FBQztRQUNGLE9BQU8sTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3pDO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDWixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztLQUMzRDtBQUNILENBQUM7QUFFRCxLQUFLLFVBQVUsbUJBQW1CO0lBQ2hDLElBQUk7UUFDRixNQUFNLFNBQVMsR0FBRyxJQUFJLGVBQVMsRUFBRSxDQUFDO1FBQ2xDLE1BQU0sU0FBUyxHQUFHO1lBQ2hCLEVBQUUsRUFBRSxJQUFJO1lBQ1IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLFdBQVcsRUFBRSxTQUFTLENBQUMsV0FBVztTQUNuQyxDQUFDO1FBQ0YsT0FBTyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDekM7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO0tBQzVEO0FBQ0gsQ0FBQztBQUVNLE1BQU0sT0FBTyxHQUFHLEtBQUssRUFBRSxLQUFnQyxFQUFFLEVBQUU7SUFDaEUsUUFBUSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUM1QixLQUFLLHFCQUFxQjtZQUN4QixPQUFPLE1BQU0sbUJBQW1CLEVBQUUsQ0FBQztRQUNyQyxLQUFLLHVCQUF1QjtZQUMxQixPQUFPLE1BQU0saUJBQWlCLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyRDtZQUNFLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7QUFDSCxDQUFDLENBQUM7QUFUVyxRQUFBLE9BQU8sV0FTbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FwcFN5bmNSZXNvbHZlckV2ZW50fSBmcm9tICdhd3MtbGFtYmRhJztcbmltcG9ydCB7VmFsbG9uT25pfSBmcm9tICcuL2FyY2hldHlwZS9ucGMnO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRDaGFyYWN0ZXJTaGVldChpZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgdHJ5IHtcbiAgICAvLyBjb25zdCBhcmNoZXR5cGUgPSBuZXcgVmFsbG9uT25pKCk7XG4gICAgY29uc3QgY2hhcmFjdGVyID0ge1xuICAgICAgaWQ6ICcyMjIyJyxcbiAgICAgIG5hbWU6ICdWYWxsb24gT25pJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnV2hpdGUgaGFpcicsXG4gICAgfTtcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGNoYXJhY3Rlcik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignRmFpbGVkIHRvIGdldCBDaGFyYWN0ZXJTaGVldCcpKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBsaXN0Q2hhcmFjdGVyU2hlZXRzKCk6IFByb21pc2U8YW55PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgYXJjaGV0eXBlID0gbmV3IFZhbGxvbk9uaSgpO1xuICAgIGNvbnN0IGNoYXJhY3RlciA9IHtcbiAgICAgIGlkOiAnMjInLFxuICAgICAgbmFtZTogYXJjaGV0eXBlLm5hbWUsXG4gICAgICBkZXNjcmlwdGlvbjogYXJjaGV0eXBlLmRlc2NyaXB0aW9uLFxuICAgIH07XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShjaGFyYWN0ZXIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ0ZhaWxlZCB0byBnZXQgQ2hhcmFjdGVyU2hlZXRzJykpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gYXN5bmMgKGV2ZW50OiBBcHBTeW5jUmVzb2x2ZXJFdmVudDxhbnk+KSA9PiB7XG4gIHN3aXRjaCAoZXZlbnQuaW5mby5maWVsZE5hbWUpIHtcbiAgICBjYXNlICdsaXN0Q2hhcmFjdGVyU2hlZXRzJzpcbiAgICAgIHJldHVybiBhd2FpdCBsaXN0Q2hhcmFjdGVyU2hlZXRzKCk7XG4gICAgY2FzZSAnZ2V0Q2hhcmFjdGVyU2hlZXRCeUlkJzpcbiAgICAgIHJldHVybiBhd2FpdCBnZXRDaGFyYWN0ZXJTaGVldChldmVudC5hcmd1bWVudHMuaWQpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcbiJdfQ==