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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBc0M7QUFDdEMsNkNBQXNDO0FBQ3RDLCtDQUF3QztBQUN4QywyQ0FBb0M7QUFDcEMsNkNBQXNDO0FBYXRDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxFQUFFLEtBQWtCLEVBQUUsRUFBRTtJQUMzQyxRQUFRLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQzFCLEtBQUssYUFBYTtZQUNkLE9BQU8sTUFBTSxJQUFBLHFCQUFXLEVBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRCxLQUFLLFlBQVk7WUFDYixPQUFPLE1BQU0sSUFBQSxvQkFBVSxFQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsS0FBSyxXQUFXO1lBQ1osT0FBTyxNQUFNLElBQUEsbUJBQVMsR0FBRSxDQUFDO1FBQzdCLEtBQUssWUFBWTtZQUNiLE9BQU8sTUFBTSxJQUFBLG9CQUFVLEVBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxLQUFLLFlBQVk7WUFDYixPQUFPLE1BQU0sSUFBQSxvQkFBVSxFQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQ7WUFDSSxPQUFPLElBQUksQ0FBQztLQUNuQjtBQUNMLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVOb3RlIGZyb20gJy4vY3JlYXRlTm90ZSc7XHJcbmltcG9ydCBkZWxldGVOb3RlIGZyb20gJy4vZGVsZXRlTm90ZSc7XHJcbmltcG9ydCBnZXROb3RlQnlJZCBmcm9tICcuL2dldE5vdGVCeUlkJztcclxuaW1wb3J0IGxpc3ROb3RlcyBmcm9tICcuL2xpc3ROb3Rlcyc7XHJcbmltcG9ydCB1cGRhdGVOb3RlIGZyb20gJy4vdXBkYXRlTm90ZSc7XHJcbmltcG9ydCBOb3RlIGZyb20gJy4vTm90ZSc7XHJcblxyXG50eXBlIEFwcFN5bmNFdmVudCA9IHtcclxuICAgaW5mbzoge1xyXG4gICAgIGZpZWxkTmFtZTogc3RyaW5nXHJcbiAgfSxcclxuICAgYXJndW1lbnRzOiB7XHJcbiAgICAgbm90ZUlkOiBzdHJpbmcsXHJcbiAgICAgbm90ZTogTm90ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0cy5oYW5kbGVyID0gYXN5bmMgKGV2ZW50OkFwcFN5bmNFdmVudCkgPT4ge1xyXG4gICAgc3dpdGNoIChldmVudC5pbmZvLmZpZWxkTmFtZSkge1xyXG4gICAgICAgIGNhc2UgXCJnZXROb3RlQnlJZFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgZ2V0Tm90ZUJ5SWQoZXZlbnQuYXJndW1lbnRzLm5vdGVJZCk7XHJcbiAgICAgICAgY2FzZSBcImNyZWF0ZU5vdGVcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGNyZWF0ZU5vdGUoZXZlbnQuYXJndW1lbnRzLm5vdGUpO1xyXG4gICAgICAgIGNhc2UgXCJsaXN0Tm90ZXNcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGxpc3ROb3RlcygpO1xyXG4gICAgICAgIGNhc2UgXCJkZWxldGVOb3RlXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBkZWxldGVOb3RlKGV2ZW50LmFyZ3VtZW50cy5ub3RlSWQpO1xyXG4gICAgICAgIGNhc2UgXCJ1cGRhdGVOb3RlXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB1cGRhdGVOb3RlKGV2ZW50LmFyZ3VtZW50cy5ub3RlKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufSJdfQ==