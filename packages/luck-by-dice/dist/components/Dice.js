"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dice = void 0;
/**
 * A dice has one or more faces, can be roll, features a value after rolling, and may also have a bonus
 */
class Dice {
    constructor(value) {
        /**
         * An array containing the value for each side of the dice
         */
        this._faces = [];
        if (typeof value === 'number') {
            this.faces = value;
        }
        else if (Array.isArray(value)) {
            this.facesArray = value;
        }
        this._bonus = 0;
    }
    allocateBonuses(amount) {
        if (this._value === undefined) {
            return amount;
        }
        const potential = this.max - this._value;
        if (amount > potential) {
            this._bonus = potential;
            return amount - potential;
        }
        else {
            this._bonus = amount;
            return 0;
        }
    }
    /**
     * Get the maximum value that the dice could potentially roll
     */
    get max() {
        return Math.max.apply(null, this._faces);
    }
    /**
     * Get the minimal value that the dice could potentially roll
     */
    get min() {
        return Math.min.apply(null, this._faces);
    }
    /**
     * Get all faces of the dice
     */
    get facesArray() {
        return this._faces;
    }
    /**
     * Set the faces of the dice manually using an array.
     * Use this to set abnormal faces, e.g. a dice with even faces [2,4,6] or a loaded dice [6]
     */
    set facesArray(faces) {
        this._faces = faces;
    }
    /**
     * Get total number of faces on dice. Faces is not the max.
     * A dice may only have a face 1 and another face 3 which would return 2 faces.
     */
    get faces() {
        return this._faces.length;
    }
    /**
     * Set faces on dice using range 1 to value provided.
     */
    set faces(value) {
        for (let i = 1; i <= value; i++) {
            this._faces.push(i);
        }
    }
    /**
     * Get value, the amount resulting from rolling dice
     */
    get value() {
        return this._value;
    }
    /**
     * Set value, the amount resulting from rolling dice
     */
    set value(value) {
        this._value = value;
    }
    /**
     * Get bonus
     */
    get bonus() {
        return this._bonus;
    }
    /**
     * Set bonus
     */
    set bonus(bonus) {
        this._bonus = bonus;
    }
    /**
     * Roll the dice thereby setting the dices value
     * @returns roll outcome
     */
    roll() {
        if (this._faces === undefined) {
            throw new RangeError('Faces undefined');
        }
        this._value = this._faces[Math.floor(Math.random() * this._faces.length)];
        return this._value;
    }
    /** The dices value with bonus from luck applied */
    get total() {
        if (this._value === undefined) {
            throw new RangeError('Value undefined');
        }
        if (this._bonus === undefined) {
            return this._value;
        }
        return this._value + this._bonus;
    }
}
exports.Dice = Dice;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0RpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBZ0JBOztHQUVHO0FBQ0gsTUFBYSxJQUFJO0lBa0JiLFlBQW1CLEtBQTZCO1FBakJoRDs7V0FFRztRQUNLLFdBQU0sR0FBa0IsRUFBRSxDQUFDO1FBZS9CLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3RCO2FBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVNLGVBQWUsQ0FBQyxNQUFjO1FBQ2pDLElBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUM7WUFDekIsT0FBTyxNQUFNLENBQUM7U0FDakI7UUFFRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekMsSUFBRyxNQUFNLEdBQUcsU0FBUyxFQUFDO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1lBQ3hCLE9BQU8sTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUM3QjthQUFNO1lBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsT0FBTyxDQUFDLENBQUM7U0FDWjtJQUNMLENBQUM7SUFDRDs7T0FFRztJQUNILElBQVcsR0FBRztRQUNWLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLEdBQUc7UUFDVixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxVQUFVO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBVyxVQUFVLENBQUMsS0FBb0I7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQVcsS0FBSztRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxLQUFLLENBQUMsS0FBYTtRQUMxQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxLQUFLO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsS0FBSyxDQUFDLEtBQXlCO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsS0FBSztRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLEtBQUssQ0FBQyxLQUF5QjtRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksSUFBSTtRQUNQLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDM0IsTUFBTSxJQUFJLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQzNDO1FBRUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUUxRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVELG1EQUFtRDtJQUNuRCxJQUFXLEtBQUs7UUFDWixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQzNCLE1BQU0sSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUMzQztRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3RCO1FBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQztDQUNKO0FBN0lELG9CQTZJQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSURpY2Uge1xuICAgIGdldCBtYXgoKTogbnVtYmVyO1xuICAgIGdldCBtaW4oKTogbnVtYmVyO1xuICAgIGdldCBmYWNlc0FycmF5KCk6IEFycmF5PG51bWJlcj47XG4gICAgc2V0IGZhY2VzQXJyYXkoZmFjZXM6IEFycmF5PG51bWJlcj4pO1xuICAgIGdldCBmYWNlcygpOiBudW1iZXI7XG4gICAgc2V0IGZhY2VzKHZhbHVlOiBudW1iZXIpO1xuICAgIGdldCB2YWx1ZSgpOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpO1xuICAgIGdldCBib251cygpOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgc2V0IGJvbnVzKGJvbnVzOiBudW1iZXIgfCB1bmRlZmluZWQpO1xuICAgIHJvbGwoKTogbnVtYmVyO1xuICAgIGFsbG9jYXRlQm9udXNlcyhhbW91bnQ6IG51bWJlcik6IG51bWJlcjtcbiAgICBnZXQgdG90YWwoKTogbnVtYmVyO1xufVxuXG4vKipcbiAqIEEgZGljZSBoYXMgb25lIG9yIG1vcmUgZmFjZXMsIGNhbiBiZSByb2xsLCBmZWF0dXJlcyBhIHZhbHVlIGFmdGVyIHJvbGxpbmcsIGFuZCBtYXkgYWxzbyBoYXZlIGEgYm9udXNcbiAqL1xuZXhwb3J0IGNsYXNzIERpY2UgaW1wbGVtZW50cyBJRGljZSB7XG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgY29udGFpbmluZyB0aGUgdmFsdWUgZm9yIGVhY2ggc2lkZSBvZiB0aGUgZGljZVxuICAgICAqL1xuICAgIHByaXZhdGUgX2ZhY2VzOiBBcnJheTxudW1iZXI+ID0gW107XG5cbiAgICAvKipcbiAgICAgKiB0aGUgbnVtYmVyIHBvaW50aW5nIHVwIG9uIHRoZSBzdXJmYWNlIGFmdGVyIGEgcm9sbC5cbiAgICAgKiBBbiB1bnJvbGxlZCBkaWNlIGhhcyBubyB2YWx1ZS5cbiAgICAgKiB0aGUgdmFsdWUgaXMgbm90IHRoZSB0b3RhbCBhcyBhIGRpY2VzIGZhY2UgdmFsdWUgbWF5IGJlIG1vZGlmaWVkIGJ5IGx1Y2sgYWxnb3JpdGhtXG4gICAgICovXG4gICAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhZGRpdGlvbmFsIGFtb3VudCB0byBiZSBhZGRlZCB0byBkaWNlIHZhbHVlIHdoZW4gY29tcHV0aW5nIHRvdGFsIGJhc2VkIG9uIGx1Y2tcbiAgICAgKi9cbiAgICBwcml2YXRlIF9ib251czogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHZhbHVlOiBudW1iZXIgfCBBcnJheTxudW1iZXI+KSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aGlzLmZhY2VzID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuZmFjZXNBcnJheSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2JvbnVzID0gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWxsb2NhdGVCb251c2VzKGFtb3VudDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgaWYodGhpcy5fdmFsdWUgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICByZXR1cm4gYW1vdW50O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcG90ZW50aWFsID0gdGhpcy5tYXggLSB0aGlzLl92YWx1ZTtcbiAgICAgICAgaWYoYW1vdW50ID4gcG90ZW50aWFsKXtcbiAgICAgICAgICAgIHRoaXMuX2JvbnVzID0gcG90ZW50aWFsO1xuICAgICAgICAgICAgcmV0dXJuIGFtb3VudCAtIHBvdGVudGlhbDsgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9ib251cyA9IGFtb3VudDtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbWF4aW11bSB2YWx1ZSB0aGF0IHRoZSBkaWNlIGNvdWxkIHBvdGVudGlhbGx5IHJvbGxcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IG1heCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgdGhpcy5fZmFjZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbWluaW1hbCB2YWx1ZSB0aGF0IHRoZSBkaWNlIGNvdWxkIHBvdGVudGlhbGx5IHJvbGxcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IG1pbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5taW4uYXBwbHkobnVsbCwgdGhpcy5fZmFjZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgZmFjZXMgb2YgdGhlIGRpY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGZhY2VzQXJyYXkoKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mYWNlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGZhY2VzIG9mIHRoZSBkaWNlIG1hbnVhbGx5IHVzaW5nIGFuIGFycmF5LlxuICAgICAqIFVzZSB0aGlzIHRvIHNldCBhYm5vcm1hbCBmYWNlcywgZS5nLiBhIGRpY2Ugd2l0aCBldmVuIGZhY2VzIFsyLDQsNl0gb3IgYSBsb2FkZWQgZGljZSBbNl1cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGZhY2VzQXJyYXkoZmFjZXM6IEFycmF5PG51bWJlcj4pIHtcbiAgICAgICAgdGhpcy5fZmFjZXMgPSBmYWNlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdG90YWwgbnVtYmVyIG9mIGZhY2VzIG9uIGRpY2UuIEZhY2VzIGlzIG5vdCB0aGUgbWF4LlxuICAgICAqIEEgZGljZSBtYXkgb25seSBoYXZlIGEgZmFjZSAxIGFuZCBhbm90aGVyIGZhY2UgMyB3aGljaCB3b3VsZCByZXR1cm4gMiBmYWNlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IGZhY2VzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mYWNlcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGZhY2VzIG9uIGRpY2UgdXNpbmcgcmFuZ2UgMSB0byB2YWx1ZSBwcm92aWRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0IGZhY2VzKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdmFsdWU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fZmFjZXMucHVzaChpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB2YWx1ZSwgdGhlIGFtb3VudCByZXN1bHRpbmcgZnJvbSByb2xsaW5nIGRpY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdmFsdWUsIHRoZSBhbW91bnQgcmVzdWx0aW5nIGZyb20gcm9sbGluZyBkaWNlXG4gICAgICovXG4gICAgcHVibGljIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGJvbnVzXG4gICAgICovXG4gICAgcHVibGljIGdldCBib251cygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fYm9udXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGJvbnVzXG4gICAgICovXG4gICAgcHVibGljIHNldCBib251cyhib251czogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2JvbnVzID0gYm9udXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUm9sbCB0aGUgZGljZSB0aGVyZWJ5IHNldHRpbmcgdGhlIGRpY2VzIHZhbHVlXG4gICAgICogQHJldHVybnMgcm9sbCBvdXRjb21lXG4gICAgICovXG4gICAgcHVibGljIHJvbGwoKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuX2ZhY2VzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGYWNlcyB1bmRlZmluZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5fZmFjZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5fZmFjZXMubGVuZ3RoKV07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cblxuICAgIC8qKiBUaGUgZGljZXMgdmFsdWUgd2l0aCBib251cyBmcm9tIGx1Y2sgYXBwbGllZCAqL1xuICAgIHB1YmxpYyBnZXQgdG90YWwoKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHRoaXMuX3ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdWYWx1ZSB1bmRlZmluZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9ib251cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWUgKyB0aGlzLl9ib251cztcbiAgICB9XG59XG4iXX0=