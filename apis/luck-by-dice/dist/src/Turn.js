"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Turn = void 0;
const Cup_1 = require("./Cup");
const Luck_1 = require("./Luck");
const NotationCodec_1 = require("./NotationCodec");
class Turn {
    /**
     * Constructor
     * @param notation - dice notation to be used for turn
     * @param luck - inital value of luck
     */
    constructor(notation, luck) {
        this._notationCodec = new NotationCodec_1.NotationCodec();
        this._extraBonus = 0;
        if (luck === undefined) {
            this._luck = new Luck_1.Luck();
        }
        else {
            this._luck = new Luck_1.Luck(luck);
        }
        if (notation === undefined) {
            this._cup = new Cup_1.Cup();
        }
        else {
            this._cup = this._notationCodec.decodeCup(notation);
        }
    }
    get notation() {
        return this._notationCodec.encodeCup(this._cup);
    }
    set notation(value) {
        this._cup = this._notationCodec.decodeCup(value);
    }
    get luck() {
        return this._luck;
    }
    set luck(luck) {
        this._luck = luck;
    }
    get cup() {
        return this._cup;
    }
    set cup(cup) {
        this._cup = cup;
    }
    /**
     * Get min potential of turn
     * @returns
     */
    minPotential() {
        let total = 0;
        this._cup.forEach(function (collection) {
            total += collection.minPotential;
        });
        return total;
    }
    /**
     * Get maximum potential of turn
     * @returns
     */
    maxPotential() {
        let total = 0;
        this._cup.forEach(function (collection) {
            total += collection.maxPotential;
        });
        return total;
    }
    get total() {
        let total = 0;
        this._cup.forEach(function (collection) {
            total += collection.total;
        });
        return total;
    }
    get extraBonus() {
        return this._extraBonus;
    }
    /**
     * Roll cup of dice
     * @returns
     */
    roll() {
        const value = this._cup.roll();
        if (this._luck.status === Luck_1.Active.disable) {
            return this.total;
        }
        // update luck base value based on roll outcome percentage
        this._luck.update(this._cup.outcomePercent);
        const bonus = this._luck.modify(value) - value;
        // take luck modifier and distribute to dice
        // luck modifies actual dice not modifiers or multipliers
        // there is the potential for an amount to still exist after above iterations, store it
        this._extraBonus = this.cup.allocateBonuses(bonus);
        return this.total;
    }
}
exports.Turn = Turn;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHVybi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UdXJuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLCtCQUdlO0FBQ2YsaUNBSWdCO0FBQ2hCLG1EQUd5QjtBQW1CekIsTUFBYSxJQUFJO0lBT2I7Ozs7T0FJRztJQUNILFlBQ0ksUUFBNEIsRUFDNUIsSUFBd0I7UUFFeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUVyQixJQUFHLElBQUksS0FBSyxTQUFTLEVBQUM7WUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1NBQzNCO2FBQU07WUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CO1FBRUQsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxTQUFHLEVBQUUsQ0FBQztTQUN6QjthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2RDtJQUNMLENBQUM7SUFFRCxJQUFXLFFBQVE7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsSUFBVyxRQUFRLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxJQUFXLElBQUk7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQVcsSUFBSSxDQUFDLElBQVc7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQVcsR0FBRztRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBVyxHQUFHLENBQUMsR0FBUztRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksWUFBWTtRQUVmLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsVUFBdUI7WUFDL0MsS0FBSyxJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksWUFBWTtRQUVmLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsVUFBdUI7WUFDL0MsS0FBSyxJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsSUFBVyxLQUFLO1FBRVosSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxVQUF1QjtZQUMvQyxLQUFLLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxJQUFXLFVBQVU7UUFDakIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxJQUFJO1FBRVAsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUUvQixJQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLGFBQU0sQ0FBQyxPQUFPLEVBQUM7WUFDcEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3JCO1FBRUQsMERBQTBEO1FBQzFELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFNUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBRS9DLDRDQUE0QztRQUM1Qyx5REFBeUQ7UUFDekQsdUZBQXVGO1FBQ3ZGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbkQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Q0FDSjtBQXhIRCxvQkF3SEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQ29sbGVjdGlvbiB9IGZyb20gJy4vQ29sbGVjdGlvbic7XHJcbmltcG9ydCB7XHJcbiAgICBDdXAsXHJcbiAgICBJQ3VwXHJcbn0gZnJvbSAnLi9DdXAnO1xyXG5pbXBvcnQge1xyXG4gICAgQWN0aXZlLFxyXG4gICAgSUx1Y2ssXHJcbiAgICBMdWNrXHJcbn0gZnJvbSAnLi9MdWNrJztcclxuaW1wb3J0IHtcclxuICAgIElOb3RhdGlvbkNvZGVjLFxyXG4gICAgTm90YXRpb25Db2RlY1xyXG59IGZyb20gJy4vTm90YXRpb25Db2RlYyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUdXJuIHtcclxuICAgICBnZXQgbm90YXRpb24oKTogc3RyaW5nO1xyXG4gICAgIHNldCBub3RhdGlvbih2YWx1ZTogc3RyaW5nKTtcclxuICAgICBnZXQgbHVjaygpOiBJTHVjaztcclxuICAgICBzZXQgbHVjayhsdWNrOiBJTHVjayk7XHJcbiAgICAgZ2V0IGN1cCgpOiBJQ3VwO1xyXG4gICAgIHNldCBjdXAoY3VwOiBJQ3VwKTtcclxuICAgICBtaW5Qb3RlbnRpYWwoKTogbnVtYmVyO1xyXG4gICAgIG1heFBvdGVudGlhbCgpOiBudW1iZXI7XHJcbiAgICAgZ2V0IHRvdGFsKCk6IG51bWJlcjtcclxuICAgICBnZXQgZXh0cmFCb251cygpOiBudW1iZXI7XHJcbiAgICAgcm9sbCgpOiBudW1iZXI7XHJcblxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUdXJuIGltcGxlbWVudHMgSVR1cm5cclxue1xyXG4gICAgcHJpdmF0ZSBfbm90YXRpb25Db2RlYzogSU5vdGF0aW9uQ29kZWM7XHJcbiAgICBwcml2YXRlIF9jdXA6IElDdXA7XHJcbiAgICBwcml2YXRlIF9sdWNrOiBJTHVjaztcclxuICAgIHByaXZhdGUgX2V4dHJhQm9udXM6IG51bWJlcjsgLy9zdXJwbHVzQm9udXM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RvclxyXG4gICAgICogQHBhcmFtIG5vdGF0aW9uIC0gZGljZSBub3RhdGlvbiB0byBiZSB1c2VkIGZvciB0dXJuIFxyXG4gICAgICogQHBhcmFtIGx1Y2sgLSBpbml0YWwgdmFsdWUgb2YgbHVja1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgbm90YXRpb246IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICAgICAgICBsdWNrOiBudW1iZXIgfCB1bmRlZmluZWRcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX25vdGF0aW9uQ29kZWMgPSBuZXcgTm90YXRpb25Db2RlYygpO1xyXG4gICAgICAgIHRoaXMuX2V4dHJhQm9udXMgPSAwO1xyXG5cclxuICAgICAgICBpZihsdWNrID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICB0aGlzLl9sdWNrID0gbmV3IEx1Y2soKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9sdWNrID0gbmV3IEx1Y2sobHVjayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobm90YXRpb24gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXAgPSBuZXcgQ3VwKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fY3VwID0gdGhpcy5fbm90YXRpb25Db2RlYy5kZWNvZGVDdXAobm90YXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG5vdGF0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25vdGF0aW9uQ29kZWMuZW5jb2RlQ3VwKHRoaXMuX2N1cCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBub3RhdGlvbih2YWx1ZTogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLl9jdXAgPSB0aGlzLl9ub3RhdGlvbkNvZGVjLmRlY29kZUN1cCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBsdWNrKCk6IElMdWNrIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbHVjaztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGx1Y2sobHVjazogSUx1Y2spe1xyXG4gICAgICAgIHRoaXMuX2x1Y2sgPSBsdWNrO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY3VwKCk6IElDdXAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBjdXAoY3VwOiBJQ3VwKSB7XHJcbiAgICAgICAgdGhpcy5fY3VwID0gY3VwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IG1pbiBwb3RlbnRpYWwgb2YgdHVyblxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBtaW5Qb3RlbnRpYWwoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcclxuICAgICAgICB0aGlzLl9jdXAuZm9yRWFjaChmdW5jdGlvbiAoY29sbGVjdGlvbjogSUNvbGxlY3Rpb24pIHtcclxuICAgICAgICAgICAgdG90YWwgKz0gY29sbGVjdGlvbi5taW5Qb3RlbnRpYWw7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IG1heGltdW0gcG90ZW50aWFsIG9mIHR1cm5cclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbWF4UG90ZW50aWFsKCk6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICAgICAgdGhpcy5fY3VwLmZvckVhY2goZnVuY3Rpb24gKGNvbGxlY3Rpb246IElDb2xsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRvdGFsICs9IGNvbGxlY3Rpb24ubWF4UG90ZW50aWFsO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdG90YWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB0b3RhbCgpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgIHRoaXMuX2N1cC5mb3JFYWNoKGZ1bmN0aW9uIChjb2xsZWN0aW9uOiBJQ29sbGVjdGlvbikge1xyXG4gICAgICAgICAgICB0b3RhbCArPSBjb2xsZWN0aW9uLnRvdGFsO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0b3RhbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGV4dHJhQm9udXMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZXh0cmFCb251cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJvbGwgY3VwIG9mIGRpY2UgXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJvbGwoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl9jdXAucm9sbCgpO1xyXG5cclxuICAgICAgICBpZih0aGlzLl9sdWNrLnN0YXR1cyA9PT0gQWN0aXZlLmRpc2FibGUpe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b3RhbDtcclxuICAgICAgICB9XHJcbiAgICAgXHJcbiAgICAgICAgLy8gdXBkYXRlIGx1Y2sgYmFzZSB2YWx1ZSBiYXNlZCBvbiByb2xsIG91dGNvbWUgcGVyY2VudGFnZVxyXG4gICAgICAgIHRoaXMuX2x1Y2sudXBkYXRlKHRoaXMuX2N1cC5vdXRjb21lUGVyY2VudCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJvbnVzID0gdGhpcy5fbHVjay5tb2RpZnkodmFsdWUpIC0gdmFsdWU7XHJcblxyXG4gICAgICAgIC8vIHRha2UgbHVjayBtb2RpZmllciBhbmQgZGlzdHJpYnV0ZSB0byBkaWNlXHJcbiAgICAgICAgLy8gbHVjayBtb2RpZmllcyBhY3R1YWwgZGljZSBub3QgbW9kaWZpZXJzIG9yIG11bHRpcGxpZXJzXHJcbiAgICAgICAgLy8gdGhlcmUgaXMgdGhlIHBvdGVudGlhbCBmb3IgYW4gYW1vdW50IHRvIHN0aWxsIGV4aXN0IGFmdGVyIGFib3ZlIGl0ZXJhdGlvbnMsIHN0b3JlIGl0XHJcbiAgICAgICAgdGhpcy5fZXh0cmFCb251cyA9IHRoaXMuY3VwLmFsbG9jYXRlQm9udXNlcyhib251cyk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnRvdGFsO1xyXG4gICAgfVxyXG59Il19