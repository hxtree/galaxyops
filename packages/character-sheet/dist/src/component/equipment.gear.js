"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipment = void 0;
const accessories_gear_1 = require("./accessories.gear");
const outfit_gear_1 = require("./outfit.gear");
const weapon_gear_1 = require("./weapon.gear");
exports.Equipment = {
    ...accessories_gear_1.Accessories,
    ...outfit_gear_1.Outfit,
    ...weapon_gear_1.Weapons,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1aXBtZW50LmdlYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50L2VxdWlwbWVudC5nZWFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlEQUErQztBQUMvQywrQ0FBcUM7QUFDckMsK0NBQXNDO0FBRXpCLFFBQUEsU0FBUyxHQUFHO0lBQ3ZCLEdBQUcsOEJBQVc7SUFDZCxHQUFHLG9CQUFNO0lBQ1QsR0FBRyxxQkFBTztDQUNYLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FjY2Vzc29yaWVzfSBmcm9tICcuL2FjY2Vzc29yaWVzLmdlYXInO1xuaW1wb3J0IHtPdXRmaXR9IGZyb20gJy4vb3V0Zml0LmdlYXInO1xuaW1wb3J0IHtXZWFwb25zfSBmcm9tICcuL3dlYXBvbi5nZWFyJztcblxuZXhwb3J0IGNvbnN0IEVxdWlwbWVudCA9IHtcbiAgLi4uQWNjZXNzb3JpZXMsXG4gIC4uLk91dGZpdCxcbiAgLi4uV2VhcG9ucyxcbn07XG5cbmV4cG9ydCB0eXBlIEVxdWlwbWVudCA9IHR5cGVvZiBFcXVpcG1lbnQ7XG4iXX0=