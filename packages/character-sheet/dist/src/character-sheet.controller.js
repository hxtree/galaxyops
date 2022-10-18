"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterSheetController = void 0;
const character_sheet_model_1 = require("./model/character-sheet.model");
class CharacterSheetController {
    /**
     * Get a character's sheet
     */
    get(id) {
        const result = new character_sheet_model_1.CharacterSheet();
        return result;
    }
}
exports.CharacterSheetController = CharacterSheetController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVyLXNoZWV0LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY2hhcmFjdGVyLXNoZWV0LmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EseUVBQThFO0FBRTlFLE1BQWEsd0JBQXdCO0lBQ25DOztPQUVHO0lBQ0gsR0FBRyxDQUFDLEVBQVU7UUFDWixNQUFNLE1BQU0sR0FBRyxJQUFJLHNDQUFjLEVBQUUsQ0FBQztRQUNwQyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBQ0Y7QUFSRCw0REFRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7djQgYXMgdXVpZHY0fSBmcm9tICd1dWlkJztcbmltcG9ydCB7Q2hhcmFjdGVyU2hlZXQsIElDaGFyYWN0ZXJTaGVldH0gZnJvbSAnLi9tb2RlbC9jaGFyYWN0ZXItc2hlZXQubW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyU2hlZXRDb250cm9sbGVyIHtcbiAgLyoqXG4gICAqIEdldCBhIGNoYXJhY3RlcidzIHNoZWV0XG4gICAqL1xuICBnZXQoaWQ6IHV1aWR2NCk6IElDaGFyYWN0ZXJTaGVldCB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IENoYXJhY3RlclNoZWV0KCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIl19