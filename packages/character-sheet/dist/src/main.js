"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const npc_1 = require("./archetype/npc");
async function getCharacterSheet(id) {
    try {
        const archetype = new npc_1.VallonOni();
        const character = {
            id: 2,
            name: archetype.name,
            description: archetype.description,
        };
        return await Promise.resolve(character);
    }
    catch (err) {
        Promise.reject(new Error('Get CharacterSheet Fail'));
    }
}
const handler = async (event) => {
    switch (event.info.fieldName) {
        case 'getNoteById':
            return await getCharacterSheet(event.arguments.note);
        default:
            return null;
    }
};
exports.handler = handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHlDQUEwQztBQUUxQyxLQUFLLFVBQVUsaUJBQWlCLENBQUMsRUFBVTtJQUN6QyxJQUFJO1FBQ0YsTUFBTSxTQUFTLEdBQUcsSUFBSSxlQUFTLEVBQUUsQ0FBQztRQUNsQyxNQUFNLFNBQVMsR0FBRztZQUNoQixFQUFFLEVBQUUsQ0FBQztZQUNMLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixXQUFXLEVBQUUsU0FBUyxDQUFDLFdBQVc7U0FDbkMsQ0FBQztRQUNGLE9BQU8sTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3pDO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDWixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztLQUN0RDtBQUNILENBQUM7QUFFTSxNQUFNLE9BQU8sR0FBRyxLQUFLLEVBQUUsS0FBZ0MsRUFBRSxFQUFFO0lBQ2hFLFFBQVEsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDNUIsS0FBSyxhQUFhO1lBQ2hCLE9BQU8sTUFBTSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZEO1lBQ0UsT0FBTyxJQUFJLENBQUM7S0FDZjtBQUNILENBQUMsQ0FBQztBQVBXLFFBQUEsT0FBTyxXQU9sQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXBwU3luY1Jlc29sdmVyRXZlbnR9IGZyb20gJ2F3cy1sYW1iZGEnO1xuaW1wb3J0IHtWYWxsb25Pbml9IGZyb20gJy4vYXJjaGV0eXBlL25wYyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENoYXJhY3RlclNoZWV0KGlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGFyY2hldHlwZSA9IG5ldyBWYWxsb25PbmkoKTtcbiAgICBjb25zdCBjaGFyYWN0ZXIgPSB7XG4gICAgICBpZDogMixcbiAgICAgIG5hbWU6IGFyY2hldHlwZS5uYW1lLFxuICAgICAgZGVzY3JpcHRpb246IGFyY2hldHlwZS5kZXNjcmlwdGlvbixcbiAgICB9O1xuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoY2hhcmFjdGVyKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdHZXQgQ2hhcmFjdGVyU2hlZXQgRmFpbCcpKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlciA9IGFzeW5jIChldmVudDogQXBwU3luY1Jlc29sdmVyRXZlbnQ8YW55PikgPT4ge1xuICBzd2l0Y2ggKGV2ZW50LmluZm8uZmllbGROYW1lKSB7XG4gICAgY2FzZSAnZ2V0Tm90ZUJ5SWQnOlxuICAgICAgcmV0dXJuIGF3YWl0IGdldENoYXJhY3RlclNoZWV0KGV2ZW50LmFyZ3VtZW50cy5ub3RlKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG4iXX0=