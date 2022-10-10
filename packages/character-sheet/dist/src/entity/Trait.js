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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trait = exports.Effect = exports.Operator = void 0;
const typeorm_1 = require("typeorm");
const Character_1 = require("./Character");
const ModifierTag_1 = require("../tag/ModifierTag");
var Operator;
(function (Operator) {
    Operator["ADD"] = "ADD";
    Operator["MULTIPLY"] = "MULTIPLY";
    Operator["SUBTRACT"] = "SUBTRACT";
    Operator["DIVIDE"] = "DIVIDE";
})(Operator = exports.Operator || (exports.Operator = {}));
var Effect;
(function (Effect) {
    Effect["WEAK"] = "Weak";
    Effect["RESIST"] = "Resist";
    Effect["ABSORB"] = "Absorb";
    Effect["IMMUNE"] = "Immune";
    Effect["HEAL"] = "Heal";
})(Effect = exports.Effect || (exports.Effect = {}));
/**
 * Trait indicates a characters single resistances or weakness to type of effect
 * Trait-based resistances and weaknesses are calculated by the game engine based on whether tag is associated
 * with action being applied to target character.
 * Traits are stackable; a character can have multiple traits with the same ModifierType.
 *
 * e.g.
 * RESIST FIRE ADD 50
 * WEAK ICE MULTIPLY 0.5
 * IMMUNE BLADE NULL NULL
 * IMMUNE POSION NULL NULL
 * RESISTANT SPEED_DECREASE DIVIDE 0.5
 * HEAL LIFE_INCREASE MULTIPLY 1.25
*/
let Trait = class Trait {
    toJSON() {
        return {
            id: this.id,
            character: this.character,
            modifier: this.modifier,
            operator: this.operator,
            value: this.value,
            updateAt: this.updatedAt,
            createdAt: this.createdAt
        };
    }
    /**
     * "Resistant to fire (-70%)"
     * "Weak to cold (x2.5)"
     * "Immune to frost"
     */
    toString() {
        let description = '';
        let modifier = this.modifier.toString().toLowerCase();
        switch (this.effect) {
            case Effect.WEAK:
                description = `Weak to ${modifier}`;
                break;
            case Effect.RESIST:
                description = `Resistant to ${modifier}`;
                break;
            case Effect.ABSORB:
                description = `Absorbs ${modifier}`;
                break;
            case Effect.IMMUNE:
                description = `Immune to ${modifier}`;
                return description;
            case Effect.HEAL:
                description = `Heals ${modifier}`;
                break;
        }
        // todo revisit this
        switch (this.operator) {
            case Operator.ADD:
                description += ` (+${modifier})`;
                break;
            case Operator.MULTIPLY:
                description += ` (x${modifier})`;
                break;
            case Operator.SUBTRACT:
                description += ` (-${modifier})`;
                break;
            case Operator.DIVIDE:
                description += ` (-${modifier}%)`;
                break;
        }
        return description;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Trait.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Character_1.Character, (character) => character.traits),
    __metadata("design:type", typeof (_a = typeof Character_1.Character !== "undefined" && Character_1.Character) === "function" ? _a : Object)
], Trait.prototype, "character", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: Effect
    }),
    __metadata("design:type", String)
], Trait.prototype, "effect", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: ModifierTag_1.ModifierTag
    }),
    __metadata("design:type", typeof (_b = typeof ModifierTag_1.ModifierTag !== "undefined" && ModifierTag_1.ModifierTag) === "function" ? _b : Object)
], Trait.prototype, "modifier", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: Operator
    }),
    __metadata("design:type", String)
], Trait.prototype, "operator", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Trait.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Trait.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Trait.prototype, "createdAt", void 0);
Trait = __decorate([
    (0, typeorm_1.Entity)()
], Trait);
exports.Trait = Trait;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhaXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZW50aXR5L1RyYWl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBZ0g7QUFDaEgsMkNBQXdDO0FBQ3hDLG9EQUFpRDtBQUVqRCxJQUFZLFFBS1g7QUFMRCxXQUFZLFFBQVE7SUFDaEIsdUJBQVcsQ0FBQTtJQUNYLGlDQUFxQixDQUFBO0lBQ3JCLGlDQUFxQixDQUFBO0lBQ3JCLDZCQUFpQixDQUFBO0FBQ3JCLENBQUMsRUFMVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQUtuQjtBQUVELElBQVksTUFNWDtBQU5ELFdBQVksTUFBTTtJQUNkLHVCQUFhLENBQUE7SUFDYiwyQkFBaUIsQ0FBQTtJQUNqQiwyQkFBaUIsQ0FBQTtJQUNqQiwyQkFBaUIsQ0FBQTtJQUNqQix1QkFBYSxDQUFBO0FBQ2pCLENBQUMsRUFOVyxNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFNakI7QUFFRDs7Ozs7Ozs7Ozs7OztFQWFFO0FBRUYsSUFBYSxLQUFLLEdBQWxCLE1BQWEsS0FBSztJQW1DUCxNQUFNO1FBQ1QsT0FBTztZQUNILEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDeEIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQzVCLENBQUM7SUFDTixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLFFBQVE7UUFDWixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUV0RCxRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUM7WUFDaEIsS0FBSyxNQUFNLENBQUMsSUFBSTtnQkFDWixXQUFXLEdBQUcsV0FBVyxRQUFRLEVBQUUsQ0FBQztnQkFDcEMsTUFBTTtZQUNWLEtBQUssTUFBTSxDQUFDLE1BQU07Z0JBQ2QsV0FBVyxHQUFHLGdCQUFnQixRQUFRLEVBQUUsQ0FBQztnQkFDekMsTUFBTTtZQUNWLEtBQUssTUFBTSxDQUFDLE1BQU07Z0JBQ2QsV0FBVyxHQUFHLFdBQVcsUUFBUSxFQUFFLENBQUM7Z0JBQ3BDLE1BQU07WUFDVixLQUFLLE1BQU0sQ0FBQyxNQUFNO2dCQUNkLFdBQVcsR0FBRyxhQUFhLFFBQVEsRUFBRSxDQUFDO2dCQUN0QyxPQUFPLFdBQVcsQ0FBQztZQUN2QixLQUFLLE1BQU0sQ0FBQyxJQUFJO2dCQUNaLFdBQVcsR0FBRyxTQUFTLFFBQVEsRUFBRSxDQUFDO2dCQUNsQyxNQUFNO1NBQ2I7UUFFRCxvQkFBb0I7UUFDcEIsUUFBUSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ25CLEtBQUssUUFBUSxDQUFDLEdBQUc7Z0JBQ2IsV0FBVyxJQUFJLE1BQU0sUUFBUSxHQUFHLENBQUM7Z0JBQ2pDLE1BQU07WUFDVixLQUFLLFFBQVEsQ0FBQyxRQUFRO2dCQUNsQixXQUFXLElBQUksTUFBTSxRQUFRLEdBQUcsQ0FBQztnQkFDakMsTUFBTTtZQUNWLEtBQUssUUFBUSxDQUFDLFFBQVE7Z0JBQ2xCLFdBQVcsSUFBSSxNQUFNLFFBQVEsR0FBRyxDQUFDO2dCQUNqQyxNQUFNO1lBQ1YsS0FBSyxRQUFRLENBQUMsTUFBTTtnQkFDaEIsV0FBVyxJQUFJLE1BQU0sUUFBUSxJQUFJLENBQUM7Z0JBQ2xDLE1BQU07U0FDYjtRQUVELE9BQU8sV0FBVyxDQUFDO0lBQ3ZCLENBQUM7Q0FDSixDQUFBO0FBekZHO0lBREMsSUFBQSxnQ0FBc0IsRUFBQyxNQUFNLENBQUM7O2lDQUNwQjtBQUdYO0lBREMsSUFBQSxtQkFBUyxFQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7a0RBQ2pELHFCQUFTLG9CQUFULHFCQUFTO3dDQUFDO0FBTXJCO0lBSkMsSUFBQSxnQkFBTSxFQUFDO1FBQ0osSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsTUFBTTtLQUNmLENBQUM7O3FDQUNhO0FBTWY7SUFKQyxJQUFBLGdCQUFNLEVBQUM7UUFDSixJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSx5QkFBVztLQUNwQixDQUFDO2tEQUNRLHlCQUFXLG9CQUFYLHlCQUFXO3VDQUFDO0FBTXRCO0lBSkMsSUFBQSxnQkFBTSxFQUFDO1FBQ0osSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsUUFBUTtLQUNqQixDQUFDOzt1Q0FDaUI7QUFHbkI7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O29DQUNLO0FBR2Q7SUFEQyxJQUFBLDBCQUFnQixHQUFFOzhCQUNSLElBQUk7d0NBQUM7QUFHaEI7SUFEQyxJQUFBLDBCQUFnQixHQUFFOzhCQUNSLElBQUk7d0NBQUM7QUFqQ1AsS0FBSztJQURqQixJQUFBLGdCQUFNLEdBQUU7R0FDSSxLQUFLLENBNEZqQjtBQTVGWSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiwgQ29sdW1uLCBNYW55VG9PbmUsIENyZWF0ZURhdGVDb2x1bW4sIFVwZGF0ZURhdGVDb2x1bW4gfSBmcm9tIFwidHlwZW9ybVwiO1xuaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSBcIi4vQ2hhcmFjdGVyXCI7XG5pbXBvcnQgeyBNb2RpZmllclRhZyB9IGZyb20gXCIuLi90YWcvTW9kaWZpZXJUYWdcIjtcblxuZXhwb3J0IGVudW0gT3BlcmF0b3Ige1xuICAgIEFERCA9IFwiQUREXCIsXG4gICAgTVVMVElQTFkgPSBcIk1VTFRJUExZXCIsXG4gICAgU1VCVFJBQ1QgPSBcIlNVQlRSQUNUXCIsXG4gICAgRElWSURFID0gXCJESVZJREVcIlxufVxuXG5leHBvcnQgZW51bSBFZmZlY3Qge1xuICAgIFdFQUsgPSAnV2VhaycsIC8vIFdlYWtuZXNzLCBpbmNyZWFzZXMgZGFtYWdlIHRha2VuIGJ5IHRoZSBkYW1hZ2UgdHlwZS5cbiAgICBSRVNJU1QgPSAnUmVzaXN0JywgLy8gUmVzaXN0YW5jZS4gZGVjcmVhc2VzIGRhbWFnZSB0YWtlbiBieSB0aGUgZGFtYWdlIHR5cGUuXG4gICAgQUJTT1JCID0gJ0Fic29yYicsIC8vIEFic29ycHRpb24sIHJlZHVjZXMgZGFtYWdlIHR5cGUgYXJlYSBvZiBlZmZlY3QgdG8gbmVhcmJ5IHRhcmdldHMuXG4gICAgSU1NVU5FID0gJ0ltbXVuZScsIC8vIEltbXVuaXR5LCBjb21wbGV0ZWx5IGJsb2NrcyBkYW1hZ2UgdGFrZW4gYnkgdGhlIGRhbWFnZSB0eXBlLlxuICAgIEhFQUwgPSAnSGVhbCcsIC8vIEhlYWxpbmcsIHJldmVyc2VzIGRhbWFnZSB0YWtlbiBpbnRvIGhlYWxpbmcgYnkgdGhlIGRhbWFnZSB0eXBlLlxufVxuXG4vKipcbiAqIFRyYWl0IGluZGljYXRlcyBhIGNoYXJhY3RlcnMgc2luZ2xlIHJlc2lzdGFuY2VzIG9yIHdlYWtuZXNzIHRvIHR5cGUgb2YgZWZmZWN0IFxuICogVHJhaXQtYmFzZWQgcmVzaXN0YW5jZXMgYW5kIHdlYWtuZXNzZXMgYXJlIGNhbGN1bGF0ZWQgYnkgdGhlIGdhbWUgZW5naW5lIGJhc2VkIG9uIHdoZXRoZXIgdGFnIGlzIGFzc29jaWF0ZWQgXG4gKiB3aXRoIGFjdGlvbiBiZWluZyBhcHBsaWVkIHRvIHRhcmdldCBjaGFyYWN0ZXIuXG4gKiBUcmFpdHMgYXJlIHN0YWNrYWJsZTsgYSBjaGFyYWN0ZXIgY2FuIGhhdmUgbXVsdGlwbGUgdHJhaXRzIHdpdGggdGhlIHNhbWUgTW9kaWZpZXJUeXBlLlxuICogXG4gKiBlLmcuIFxuICogUkVTSVNUIEZJUkUgQUREIDUwXG4gKiBXRUFLIElDRSBNVUxUSVBMWSAwLjVcbiAqIElNTVVORSBCTEFERSBOVUxMIE5VTExcbiAqIElNTVVORSBQT1NJT04gTlVMTCBOVUxMXG4gKiBSRVNJU1RBTlQgU1BFRURfREVDUkVBU0UgRElWSURFIDAuNVxuICogSEVBTCBMSUZFX0lOQ1JFQVNFIE1VTFRJUExZIDEuMjVcbiovXG5ARW50aXR5KClcbmV4cG9ydCBjbGFzcyBUcmFpdCB7XG5cbiAgICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbihcInV1aWRcIilcbiAgICBpZDogc3RyaW5nO1xuXG4gICAgQE1hbnlUb09uZSgoKSA9PiBDaGFyYWN0ZXIsIChjaGFyYWN0ZXIpID0+IGNoYXJhY3Rlci50cmFpdHMpXG4gICAgY2hhcmFjdGVyOiBDaGFyYWN0ZXI7XG5cbiAgICBAQ29sdW1uKHtcbiAgICAgICAgdHlwZTogXCJlbnVtXCIsXG4gICAgICAgIGVudW06IEVmZmVjdFxuICAgIH0pXG4gICAgZWZmZWN0OiBFZmZlY3Q7XG5cbiAgICBAQ29sdW1uKHtcbiAgICAgICAgdHlwZTogXCJlbnVtXCIsXG4gICAgICAgIGVudW06IE1vZGlmaWVyVGFnXG4gICAgfSlcbiAgICBtb2RpZmllcjogTW9kaWZpZXJUYWc7XG5cbiAgICBAQ29sdW1uKHtcbiAgICAgICAgdHlwZTogXCJlbnVtXCIsXG4gICAgICAgIGVudW06IE9wZXJhdG9yXG4gICAgfSlcbiAgICBvcGVyYXRvcjogT3BlcmF0b3I7XG5cbiAgICBAQ29sdW1uKClcbiAgICB2YWx1ZTogbnVtYmVyO1xuXG4gICAgQFVwZGF0ZURhdGVDb2x1bW4oKVxuICAgIHVwZGF0ZWRBdDogRGF0ZTtcblxuICAgIEBDcmVhdGVEYXRlQ29sdW1uKClcbiAgICBjcmVhdGVkQXQ6IERhdGU7XG5cbiAgICBwdWJsaWMgdG9KU09OKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgICAgIGNoYXJhY3RlcjogdGhpcy5jaGFyYWN0ZXIsXG4gICAgICAgICAgICBtb2RpZmllcjogdGhpcy5tb2RpZmllcixcbiAgICAgICAgICAgIG9wZXJhdG9yOiB0aGlzLm9wZXJhdG9yLFxuICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICB1cGRhdGVBdDogdGhpcy51cGRhdGVkQXQsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IHRoaXMuY3JlYXRlZEF0XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXCJSZXNpc3RhbnQgdG8gZmlyZSAoLTcwJSlcIlxuICAgICAqIFwiV2VhayB0byBjb2xkICh4Mi41KVwiXG4gICAgICogXCJJbW11bmUgdG8gZnJvc3RcIlxuICAgICAqL1xuICAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gJyc7XG4gICAgICAgIGxldCBtb2RpZmllciA9IHRoaXMubW9kaWZpZXIudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy5lZmZlY3Qpe1xuICAgICAgICAgICAgY2FzZSBFZmZlY3QuV0VBSzpcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA9IGBXZWFrIHRvICR7bW9kaWZpZXJ9YDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRWZmZWN0LlJFU0lTVDpcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA9IGBSZXNpc3RhbnQgdG8gJHttb2RpZmllcn1gO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBFZmZlY3QuQUJTT1JCOlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gYEFic29yYnMgJHttb2RpZmllcn1gO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBFZmZlY3QuSU1NVU5FOlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gYEltbXVuZSB0byAke21vZGlmaWVyfWA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgY2FzZSBFZmZlY3QuSEVBTDpcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA9IGBIZWFscyAke21vZGlmaWVyfWA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0b2RvIHJldmlzaXQgdGhpc1xuICAgICAgICBzd2l0Y2ggKHRoaXMub3BlcmF0b3IpIHtcbiAgICAgICAgICAgIGNhc2UgT3BlcmF0b3IuQUREOlxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uICs9IGAgKCske21vZGlmaWVyfSlgO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBPcGVyYXRvci5NVUxUSVBMWTpcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiArPSBgICh4JHttb2RpZmllcn0pYDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgT3BlcmF0b3IuU1VCVFJBQ1Q6XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gKz0gYCAoLSR7bW9kaWZpZXJ9KWA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIE9wZXJhdG9yLkRJVklERTogICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uICs9IGAgKC0ke21vZGlmaWVyfSUpYDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgICB9XG59XG5cblxuIl19