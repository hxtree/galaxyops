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
        this._cup.forEach((collection) => {
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
        this._cup.forEach((collection) => {
            total += collection.maxPotential;
        });
        return total;
    }
    get total() {
        let total = 0;
        this._cup.forEach((collection) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHVybi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UdXJuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLCtCQUFnQztBQUNoQyxpQ0FBMkM7QUFDM0MsbURBQThEO0FBZ0I5RCxNQUFhLElBQUk7SUFTZjs7OztPQUlHO0lBQ0gsWUFBbUIsUUFBNEIsRUFBRSxJQUF3QjtRQUN2RSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRXJCLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7U0FDekI7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDN0I7UUFFRCxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFNBQUcsRUFBRSxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQztJQUVELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsSUFBVyxRQUFRLENBQUMsS0FBYTtRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQVcsSUFBSSxDQUFDLElBQVc7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsSUFBVyxHQUFHLENBQUMsR0FBUztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksWUFBWTtRQUNqQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQXVCLEVBQUUsRUFBRTtZQUM1QyxLQUFLLElBQUksVUFBVSxDQUFDLFlBQVksQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFlBQVk7UUFDakIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUF1QixFQUFFLEVBQUU7WUFDNUMsS0FBSyxJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxJQUFXLEtBQUs7UUFDZCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQXVCLEVBQUUsRUFBRTtZQUM1QyxLQUFLLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLElBQUk7UUFDVCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRS9CLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssYUFBTSxDQUFDLE9BQU8sRUFBRTtZQUN4QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbkI7UUFFRCwwREFBMEQ7UUFDMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUU1QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7UUFFL0MsNENBQTRDO1FBQzVDLHlEQUF5RDtRQUN6RCx1RkFBdUY7UUFDdkYsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVuRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztDQUNGO0FBbkhELG9CQW1IQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SUNvbGxlY3Rpb259IGZyb20gJy4vQ29sbGVjdGlvbic7XG5pbXBvcnQge0N1cCwgSUN1cH0gZnJvbSAnLi9DdXAnO1xuaW1wb3J0IHtBY3RpdmUsIElMdWNrLCBMdWNrfSBmcm9tICcuL0x1Y2snO1xuaW1wb3J0IHtJTm90YXRpb25Db2RlYywgTm90YXRpb25Db2RlY30gZnJvbSAnLi9Ob3RhdGlvbkNvZGVjJztcblxuZXhwb3J0IGludGVyZmFjZSBJVHVybiB7XG4gIGdldCBub3RhdGlvbigpOiBzdHJpbmc7XG4gIHNldCBub3RhdGlvbih2YWx1ZTogc3RyaW5nKTtcbiAgZ2V0IGx1Y2soKTogSUx1Y2s7XG4gIHNldCBsdWNrKGx1Y2s6IElMdWNrKTtcbiAgZ2V0IGN1cCgpOiBJQ3VwO1xuICBzZXQgY3VwKGN1cDogSUN1cCk7XG4gIG1pblBvdGVudGlhbCgpOiBudW1iZXI7XG4gIG1heFBvdGVudGlhbCgpOiBudW1iZXI7XG4gIGdldCB0b3RhbCgpOiBudW1iZXI7XG4gIGdldCBleHRyYUJvbnVzKCk6IG51bWJlcjtcbiAgcm9sbCgpOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBUdXJuIGltcGxlbWVudHMgSVR1cm4ge1xuICBwcml2YXRlIF9ub3RhdGlvbkNvZGVjOiBJTm90YXRpb25Db2RlYztcblxuICBwcml2YXRlIF9jdXA6IElDdXA7XG5cbiAgcHJpdmF0ZSBfbHVjazogSUx1Y2s7XG5cbiAgcHJpdmF0ZSBfZXh0cmFCb251czogbnVtYmVyOyAvLyBzdXJwbHVzQm9udXM7XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSBub3RhdGlvbiAtIGRpY2Ugbm90YXRpb24gdG8gYmUgdXNlZCBmb3IgdHVyblxuICAgKiBAcGFyYW0gbHVjayAtIGluaXRhbCB2YWx1ZSBvZiBsdWNrXG4gICAqL1xuICBwdWJsaWMgY29uc3RydWN0b3Iobm90YXRpb246IHN0cmluZyB8IHVuZGVmaW5lZCwgbHVjazogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fbm90YXRpb25Db2RlYyA9IG5ldyBOb3RhdGlvbkNvZGVjKCk7XG4gICAgdGhpcy5fZXh0cmFCb251cyA9IDA7XG5cbiAgICBpZiAobHVjayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9sdWNrID0gbmV3IEx1Y2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbHVjayA9IG5ldyBMdWNrKGx1Y2spO1xuICAgIH1cblxuICAgIGlmIChub3RhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9jdXAgPSBuZXcgQ3VwKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2N1cCA9IHRoaXMuX25vdGF0aW9uQ29kZWMuZGVjb2RlQ3VwKG5vdGF0aW9uKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5vdGF0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGF0aW9uQ29kZWMuZW5jb2RlQ3VwKHRoaXMuX2N1cCk7XG4gIH1cblxuICBwdWJsaWMgc2V0IG5vdGF0aW9uKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jdXAgPSB0aGlzLl9ub3RhdGlvbkNvZGVjLmRlY29kZUN1cCh2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGx1Y2soKTogSUx1Y2sge1xuICAgIHJldHVybiB0aGlzLl9sdWNrO1xuICB9XG5cbiAgcHVibGljIHNldCBsdWNrKGx1Y2s6IElMdWNrKSB7XG4gICAgdGhpcy5fbHVjayA9IGx1Y2s7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGN1cCgpOiBJQ3VwIHtcbiAgICByZXR1cm4gdGhpcy5fY3VwO1xuICB9XG5cbiAgcHVibGljIHNldCBjdXAoY3VwOiBJQ3VwKSB7XG4gICAgdGhpcy5fY3VwID0gY3VwO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBtaW4gcG90ZW50aWFsIG9mIHR1cm5cbiAgICogQHJldHVybnNcbiAgICovXG4gIHB1YmxpYyBtaW5Qb3RlbnRpYWwoKTogbnVtYmVyIHtcbiAgICBsZXQgdG90YWwgPSAwO1xuICAgIHRoaXMuX2N1cC5mb3JFYWNoKChjb2xsZWN0aW9uOiBJQ29sbGVjdGlvbikgPT4ge1xuICAgICAgdG90YWwgKz0gY29sbGVjdGlvbi5taW5Qb3RlbnRpYWw7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRvdGFsO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBtYXhpbXVtIHBvdGVudGlhbCBvZiB0dXJuXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBwdWJsaWMgbWF4UG90ZW50aWFsKCk6IG51bWJlciB7XG4gICAgbGV0IHRvdGFsID0gMDtcbiAgICB0aGlzLl9jdXAuZm9yRWFjaCgoY29sbGVjdGlvbjogSUNvbGxlY3Rpb24pID0+IHtcbiAgICAgIHRvdGFsICs9IGNvbGxlY3Rpb24ubWF4UG90ZW50aWFsO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRvdGFsO1xuICB9XG5cbiAgcHVibGljIGdldCB0b3RhbCgpOiBudW1iZXIge1xuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgdGhpcy5fY3VwLmZvckVhY2goKGNvbGxlY3Rpb246IElDb2xsZWN0aW9uKSA9PiB7XG4gICAgICB0b3RhbCArPSBjb2xsZWN0aW9uLnRvdGFsO1xuICAgIH0pO1xuICAgIHJldHVybiB0b3RhbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZXh0cmFCb251cygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9leHRyYUJvbnVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJvbGwgY3VwIG9mIGRpY2VcbiAgICogQHJldHVybnNcbiAgICovXG4gIHB1YmxpYyByb2xsKCk6IG51bWJlciB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9jdXAucm9sbCgpO1xuXG4gICAgaWYgKHRoaXMuX2x1Y2suc3RhdHVzID09PSBBY3RpdmUuZGlzYWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMudG90YWw7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIGx1Y2sgYmFzZSB2YWx1ZSBiYXNlZCBvbiByb2xsIG91dGNvbWUgcGVyY2VudGFnZVxuICAgIHRoaXMuX2x1Y2sudXBkYXRlKHRoaXMuX2N1cC5vdXRjb21lUGVyY2VudCk7XG5cbiAgICBjb25zdCBib251cyA9IHRoaXMuX2x1Y2subW9kaWZ5KHZhbHVlKSAtIHZhbHVlO1xuXG4gICAgLy8gdGFrZSBsdWNrIG1vZGlmaWVyIGFuZCBkaXN0cmlidXRlIHRvIGRpY2VcbiAgICAvLyBsdWNrIG1vZGlmaWVzIGFjdHVhbCBkaWNlIG5vdCBtb2RpZmllcnMgb3IgbXVsdGlwbGllcnNcbiAgICAvLyB0aGVyZSBpcyB0aGUgcG90ZW50aWFsIGZvciBhbiBhbW91bnQgdG8gc3RpbGwgZXhpc3QgYWZ0ZXIgYWJvdmUgaXRlcmF0aW9ucywgc3RvcmUgaXRcbiAgICB0aGlzLl9leHRyYUJvbnVzID0gdGhpcy5jdXAuYWxsb2NhdGVCb251c2VzKGJvbnVzKTtcblxuICAgIHJldHVybiB0aGlzLnRvdGFsO1xuICB9XG59XG4iXX0=