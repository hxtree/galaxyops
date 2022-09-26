"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createNote_1 = require("./createNote");
const deleteNote_1 = require("./deleteNote");
const getNoteById_1 = require("./getNoteById");
const listNotes_1 = require("./listNotes");
const updateNote_1 = require("./updateNote");
exports.handler = async (event) => {
    switch (event.info.fieldName) {
        case "getNoteById":
            return await (0, getNoteById_1.default)(event.arguments.noteId);
        case "createNote":
            return await (0, createNote_1.default)(event.arguments.note);
        case "listNotes":
            return await (0, listNotes_1.default)();
        case "deleteNote":
            return await (0, deleteNote_1.default)(event.arguments.noteId);
        case "updateNote":
            return await (0, updateNote_1.default)(event.arguments.note);
        default:
            return null;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9lY3Mvc3lzdGVtL3BsYWNlaG9sZGVyLW9sZC9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQXNDO0FBQ3RDLDZDQUFzQztBQUN0QywrQ0FBd0M7QUFDeEMsMkNBQW9DO0FBQ3BDLDZDQUFzQztBQWF0QyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssRUFBRSxLQUFrQixFQUFFLEVBQUU7SUFDM0MsUUFBUSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUMxQixLQUFLLGFBQWE7WUFDZCxPQUFPLE1BQU0sSUFBQSxxQkFBVyxFQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsS0FBSyxZQUFZO1lBQ2IsT0FBTyxNQUFNLElBQUEsb0JBQVUsRUFBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELEtBQUssV0FBVztZQUNaLE9BQU8sTUFBTSxJQUFBLG1CQUFTLEdBQUUsQ0FBQztRQUM3QixLQUFLLFlBQVk7WUFDYixPQUFPLE1BQU0sSUFBQSxvQkFBVSxFQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQsS0FBSyxZQUFZO1lBQ2IsT0FBTyxNQUFNLElBQUEsb0JBQVUsRUFBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xEO1lBQ0ksT0FBTyxJQUFJLENBQUM7S0FDbkI7QUFDTCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlTm90ZSBmcm9tICcuL2NyZWF0ZU5vdGUnO1xuaW1wb3J0IGRlbGV0ZU5vdGUgZnJvbSAnLi9kZWxldGVOb3RlJztcbmltcG9ydCBnZXROb3RlQnlJZCBmcm9tICcuL2dldE5vdGVCeUlkJztcbmltcG9ydCBsaXN0Tm90ZXMgZnJvbSAnLi9saXN0Tm90ZXMnO1xuaW1wb3J0IHVwZGF0ZU5vdGUgZnJvbSAnLi91cGRhdGVOb3RlJztcbmltcG9ydCBOb3RlIGZyb20gJy4vTm90ZSc7XG5cbnR5cGUgQXBwU3luY0V2ZW50ID0ge1xuICAgaW5mbzoge1xuICAgICBmaWVsZE5hbWU6IHN0cmluZ1xuICB9LFxuICAgYXJndW1lbnRzOiB7XG4gICAgIG5vdGVJZDogc3RyaW5nLFxuICAgICBub3RlOiBOb3RlXG4gIH1cbn1cblxuZXhwb3J0cy5oYW5kbGVyID0gYXN5bmMgKGV2ZW50OkFwcFN5bmNFdmVudCkgPT4ge1xuICAgIHN3aXRjaCAoZXZlbnQuaW5mby5maWVsZE5hbWUpIHtcbiAgICAgICAgY2FzZSBcImdldE5vdGVCeUlkXCI6XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZ2V0Tm90ZUJ5SWQoZXZlbnQuYXJndW1lbnRzLm5vdGVJZCk7XG4gICAgICAgIGNhc2UgXCJjcmVhdGVOb3RlXCI6XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgY3JlYXRlTm90ZShldmVudC5hcmd1bWVudHMubm90ZSk7XG4gICAgICAgIGNhc2UgXCJsaXN0Tm90ZXNcIjpcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBsaXN0Tm90ZXMoKTtcbiAgICAgICAgY2FzZSBcImRlbGV0ZU5vdGVcIjpcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBkZWxldGVOb3RlKGV2ZW50LmFyZ3VtZW50cy5ub3RlSWQpO1xuICAgICAgICBjYXNlIFwidXBkYXRlTm90ZVwiOlxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHVwZGF0ZU5vdGUoZXZlbnQuYXJndW1lbnRzLm5vdGUpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufSJdfQ==