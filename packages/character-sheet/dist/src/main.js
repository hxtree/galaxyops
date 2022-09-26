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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQXNDO0FBQ3RDLDZDQUFzQztBQUN0QywrQ0FBd0M7QUFDeEMsMkNBQW9DO0FBQ3BDLDZDQUFzQztBQWF0QyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssRUFBRSxLQUFrQixFQUFFLEVBQUU7SUFDM0MsUUFBUSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUMxQixLQUFLLGFBQWE7WUFDZCxPQUFPLE1BQU0sSUFBQSxxQkFBVyxFQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsS0FBSyxZQUFZO1lBQ2IsT0FBTyxNQUFNLElBQUEsb0JBQVUsRUFBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELEtBQUssV0FBVztZQUNaLE9BQU8sTUFBTSxJQUFBLG1CQUFTLEdBQUUsQ0FBQztRQUM3QixLQUFLLFlBQVk7WUFDYixPQUFPLE1BQU0sSUFBQSxvQkFBVSxFQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQsS0FBSyxZQUFZO1lBQ2IsT0FBTyxNQUFNLElBQUEsb0JBQVUsRUFBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xEO1lBQ0ksT0FBTyxJQUFJLENBQUM7S0FDbkI7QUFDTCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlTm90ZSBmcm9tICcuL2NyZWF0ZU5vdGUnO1xyXG5pbXBvcnQgZGVsZXRlTm90ZSBmcm9tICcuL2RlbGV0ZU5vdGUnO1xyXG5pbXBvcnQgZ2V0Tm90ZUJ5SWQgZnJvbSAnLi9nZXROb3RlQnlJZCc7XHJcbmltcG9ydCBsaXN0Tm90ZXMgZnJvbSAnLi9saXN0Tm90ZXMnO1xyXG5pbXBvcnQgdXBkYXRlTm90ZSBmcm9tICcuL3VwZGF0ZU5vdGUnO1xyXG5pbXBvcnQgTm90ZSBmcm9tICcuL05vdGUnO1xyXG5cclxudHlwZSBBcHBTeW5jRXZlbnQgPSB7XHJcbiAgIGluZm86IHtcclxuICAgICBmaWVsZE5hbWU6IHN0cmluZ1xyXG4gIH0sXHJcbiAgIGFyZ3VtZW50czoge1xyXG4gICAgIG5vdGVJZDogc3RyaW5nLFxyXG4gICAgIG5vdGU6IE5vdGVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydHMuaGFuZGxlciA9IGFzeW5jIChldmVudDpBcHBTeW5jRXZlbnQpID0+IHtcclxuICAgIHN3aXRjaCAoZXZlbnQuaW5mby5maWVsZE5hbWUpIHtcclxuICAgICAgICBjYXNlIFwiZ2V0Tm90ZUJ5SWRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdldE5vdGVCeUlkKGV2ZW50LmFyZ3VtZW50cy5ub3RlSWQpO1xyXG4gICAgICAgIGNhc2UgXCJjcmVhdGVOb3RlXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBjcmVhdGVOb3RlKGV2ZW50LmFyZ3VtZW50cy5ub3RlKTtcclxuICAgICAgICBjYXNlIFwibGlzdE5vdGVzXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBsaXN0Tm90ZXMoKTtcclxuICAgICAgICBjYXNlIFwiZGVsZXRlTm90ZVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZGVsZXRlTm90ZShldmVudC5hcmd1bWVudHMubm90ZUlkKTtcclxuICAgICAgICBjYXNlIFwidXBkYXRlTm90ZVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdXBkYXRlTm90ZShldmVudC5hcmd1bWVudHMubm90ZSk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn0iXX0=