"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const typeorm_1 = require("typeorm");
let Player = class Player {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Player.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Player.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Player.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Player.prototype, "createdAt", void 0);
Player = __decorate([
    (0, typeorm_1.Entity)()
], Player);
exports.Player = Player;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2VudGl0eS9QbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUNBQW9HO0FBR3BHLElBQWEsTUFBTSxHQUFuQixNQUFhLE1BQU07Q0FhbEIsQ0FBQTtBQVZHO0lBREMsSUFBQSxnQ0FBc0IsRUFBQyxNQUFNLENBQUM7O2tDQUNwQjtBQUdYO0lBREMsSUFBQSxnQkFBTSxHQUFFOztzQ0FDTTtBQUdmO0lBREMsSUFBQSwwQkFBZ0IsR0FBRTs4QkFDUixJQUFJO3lDQUFDO0FBR2hCO0lBREMsSUFBQSwwQkFBZ0IsR0FBRTs4QkFDUixJQUFJO3lDQUFDO0FBWlAsTUFBTTtJQURsQixJQUFBLGdCQUFNLEdBQUU7R0FDSSxNQUFNLENBYWxCO0FBYlksd0JBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sIENvbHVtbiwgVXBkYXRlRGF0ZUNvbHVtbiwgQ3JlYXRlRGF0ZUNvbHVtbn0gZnJvbSBcInR5cGVvcm1cIjtcbiAgIFxuQEVudGl0eSgpXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcblxuICAgIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKFwidXVpZFwiKVxuICAgIGlkOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uKClcbiAgICB1c2VySWQ6IG51bWJlcjtcblxuICAgIEBVcGRhdGVEYXRlQ29sdW1uKClcbiAgICB1cGRhdGVkQXQ6IERhdGU7XG5cbiAgICBAQ3JlYXRlRGF0ZUNvbHVtbigpXG4gICAgY3JlYXRlZEF0OiBEYXRlO1xufSJdfQ==