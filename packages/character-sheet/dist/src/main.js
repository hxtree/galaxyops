"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const npc_1 = require("./archetype/npc");
async function getCharacterSheet(id) {
    try {
        const archetype = (0, npc_1.npc)(id);
        const character = { id: 2, ...archetype };
        return await Promise.resolve(character);
    }
    catch (err) {
        Promise.reject(new Error('Failed to get CharacterSheet'));
    }
}
async function listCharacterSheets() {
    try {
        const archetype = npc_1.NPCList['Lawzon'];
        const character = { id: 2, ...archetype };
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
            return await getCharacterSheet(event.arguments.characterSheetId);
        default:
            return null;
    }
};
exports.handler = handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHlDQUE2QztBQUU3QyxLQUFLLFVBQVUsaUJBQWlCLENBQUMsRUFBVTtJQUN6QyxJQUFJO1FBQ0YsTUFBTSxTQUFTLEdBQUcsSUFBQSxTQUFHLEVBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUIsTUFBTSxTQUFTLEdBQUcsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsU0FBUyxFQUFDLENBQUM7UUFDeEMsT0FBTyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDekM7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDO0tBQzNEO0FBQ0gsQ0FBQztBQUVELEtBQUssVUFBVSxtQkFBbUI7SUFDaEMsSUFBSTtRQUNGLE1BQU0sU0FBUyxHQUFzQixhQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkQsTUFBTSxTQUFTLEdBQUcsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsU0FBUyxFQUFDLENBQUM7UUFDeEMsT0FBTyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDekM7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO0tBQzVEO0FBQ0gsQ0FBQztBQUVNLE1BQU0sT0FBTyxHQUFHLEtBQUssRUFBRSxLQUFnQyxFQUFFLEVBQUU7SUFDaEUsUUFBUSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUM1QixLQUFLLHFCQUFxQjtZQUN4QixPQUFPLE1BQU0sbUJBQW1CLEVBQUUsQ0FBQztRQUNyQyxLQUFLLHVCQUF1QjtZQUMxQixPQUFPLE1BQU0saUJBQWlCLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ25FO1lBQ0UsT0FBTyxJQUFJLENBQUM7S0FDZjtBQUNILENBQUMsQ0FBQztBQVRXLFFBQUEsT0FBTyxXQVNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXBwU3luY1Jlc29sdmVyRXZlbnR9IGZyb20gJ2F3cy1sYW1iZGEnO1xuaW1wb3J0IHtOUENMaXN0LCBucGN9IGZyb20gJy4vYXJjaGV0eXBlL25wYyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENoYXJhY3RlclNoZWV0KGlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGFyY2hldHlwZSA9IG5wYyhpZCk7XG4gICAgY29uc3QgY2hhcmFjdGVyID0ge2lkOiAyLCAuLi5hcmNoZXR5cGV9O1xuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoY2hhcmFjdGVyKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdGYWlsZWQgdG8gZ2V0IENoYXJhY3RlclNoZWV0JykpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxpc3RDaGFyYWN0ZXJTaGVldHMoKTogUHJvbWlzZTxhbnk+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBhcmNoZXR5cGU6IE5QQ0xpc3QuQ2hhcmFjdGVyID0gTlBDTGlzdFsnTGF3em9uJ107XG4gICAgY29uc3QgY2hhcmFjdGVyID0ge2lkOiAyLCAuLi5hcmNoZXR5cGV9O1xuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoY2hhcmFjdGVyKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdGYWlsZWQgdG8gZ2V0IENoYXJhY3RlclNoZWV0cycpKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlciA9IGFzeW5jIChldmVudDogQXBwU3luY1Jlc29sdmVyRXZlbnQ8YW55PikgPT4ge1xuICBzd2l0Y2ggKGV2ZW50LmluZm8uZmllbGROYW1lKSB7XG4gICAgY2FzZSAnbGlzdENoYXJhY3RlclNoZWV0cyc6XG4gICAgICByZXR1cm4gYXdhaXQgbGlzdENoYXJhY3RlclNoZWV0cygpO1xuICAgIGNhc2UgJ2dldENoYXJhY3RlclNoZWV0QnlJZCc6XG4gICAgICByZXR1cm4gYXdhaXQgZ2V0Q2hhcmFjdGVyU2hlZXQoZXZlbnQuYXJndW1lbnRzLmNoYXJhY3RlclNoZWV0SWQpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcbiJdfQ==