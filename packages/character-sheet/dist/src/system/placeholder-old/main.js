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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zeXN0ZW0vcGxhY2Vob2xkZXItb2xkL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBc0M7QUFDdEMsNkNBQXNDO0FBQ3RDLCtDQUF3QztBQUN4QywyQ0FBb0M7QUFDcEMsNkNBQXNDO0FBYXRDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxFQUFFLEtBQWtCLEVBQUUsRUFBRTtJQUMzQyxRQUFRLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQzFCLEtBQUssYUFBYTtZQUNkLE9BQU8sTUFBTSxJQUFBLHFCQUFXLEVBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRCxLQUFLLFlBQVk7WUFDYixPQUFPLE1BQU0sSUFBQSxvQkFBVSxFQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsS0FBSyxXQUFXO1lBQ1osT0FBTyxNQUFNLElBQUEsbUJBQVMsR0FBRSxDQUFDO1FBQzdCLEtBQUssWUFBWTtZQUNiLE9BQU8sTUFBTSxJQUFBLG9CQUFVLEVBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxLQUFLLFlBQVk7WUFDYixPQUFPLE1BQU0sSUFBQSxvQkFBVSxFQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQ7WUFDSSxPQUFPLElBQUksQ0FBQztLQUNuQjtBQUNMLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVOb3RlIGZyb20gJy4vY3JlYXRlTm90ZSc7XG5pbXBvcnQgZGVsZXRlTm90ZSBmcm9tICcuL2RlbGV0ZU5vdGUnO1xuaW1wb3J0IGdldE5vdGVCeUlkIGZyb20gJy4vZ2V0Tm90ZUJ5SWQnO1xuaW1wb3J0IGxpc3ROb3RlcyBmcm9tICcuL2xpc3ROb3Rlcyc7XG5pbXBvcnQgdXBkYXRlTm90ZSBmcm9tICcuL3VwZGF0ZU5vdGUnO1xuaW1wb3J0IE5vdGUgZnJvbSAnLi9Ob3RlJztcblxudHlwZSBBcHBTeW5jRXZlbnQgPSB7XG4gICBpbmZvOiB7XG4gICAgIGZpZWxkTmFtZTogc3RyaW5nXG4gIH0sXG4gICBhcmd1bWVudHM6IHtcbiAgICAgbm90ZUlkOiBzdHJpbmcsXG4gICAgIG5vdGU6IE5vdGVcbiAgfVxufVxuXG5leHBvcnRzLmhhbmRsZXIgPSBhc3luYyAoZXZlbnQ6QXBwU3luY0V2ZW50KSA9PiB7XG4gICAgc3dpdGNoIChldmVudC5pbmZvLmZpZWxkTmFtZSkge1xuICAgICAgICBjYXNlIFwiZ2V0Tm90ZUJ5SWRcIjpcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBnZXROb3RlQnlJZChldmVudC5hcmd1bWVudHMubm90ZUlkKTtcbiAgICAgICAgY2FzZSBcImNyZWF0ZU5vdGVcIjpcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBjcmVhdGVOb3RlKGV2ZW50LmFyZ3VtZW50cy5ub3RlKTtcbiAgICAgICAgY2FzZSBcImxpc3ROb3Rlc1wiOlxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGxpc3ROb3RlcygpO1xuICAgICAgICBjYXNlIFwiZGVsZXRlTm90ZVwiOlxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRlbGV0ZU5vdGUoZXZlbnQuYXJndW1lbnRzLm5vdGVJZCk7XG4gICAgICAgIGNhc2UgXCJ1cGRhdGVOb3RlXCI6XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdXBkYXRlTm90ZShldmVudC5hcmd1bWVudHMubm90ZSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59Il19