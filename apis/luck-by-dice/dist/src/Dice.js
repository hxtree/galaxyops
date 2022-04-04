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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EaWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQWdCQTs7R0FFRztBQUNILE1BQWEsSUFBSTtJQWtCYixZQUFtQixLQUE2QjtRQWpCaEQ7O1dBRUc7UUFDSyxXQUFNLEdBQWtCLEVBQUUsQ0FBQztRQWUvQixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUN0QjthQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFTSxlQUFlLENBQUMsTUFBYztRQUNqQyxJQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFDO1lBQ3pCLE9BQU8sTUFBTSxDQUFDO1NBQ2pCO1FBRUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3pDLElBQUcsTUFBTSxHQUFHLFNBQVMsRUFBQztZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztZQUN4QixPQUFPLE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDN0I7YUFBTTtZQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxDQUFDO1NBQ1o7SUFDTCxDQUFDO0lBQ0Q7O09BRUc7SUFDSCxJQUFXLEdBQUc7UUFDVixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxHQUFHO1FBQ1YsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsVUFBVTtRQUNqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQVcsVUFBVSxDQUFDLEtBQW9CO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFXLEtBQUs7UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsS0FBSyxDQUFDLEtBQWE7UUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsS0FBSztRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLEtBQUssQ0FBQyxLQUF5QjtRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLEtBQUs7UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxLQUFLLENBQUMsS0FBeUI7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLElBQUk7UUFDUCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQzNCLE1BQU0sSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUMzQztRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFMUUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxtREFBbUQ7SUFDbkQsSUFBVyxLQUFLO1FBQ1osSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUMzQixNQUFNLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDM0M7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQzNCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN0QjtRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JDLENBQUM7Q0FDSjtBQTdJRCxvQkE2SUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElEaWNlIHtcclxuICAgIGdldCBtYXgoKTogbnVtYmVyO1xyXG4gICAgZ2V0IG1pbigpOiBudW1iZXI7XHJcbiAgICBnZXQgZmFjZXNBcnJheSgpOiBBcnJheTxudW1iZXI+O1xyXG4gICAgc2V0IGZhY2VzQXJyYXkoZmFjZXM6IEFycmF5PG51bWJlcj4pO1xyXG4gICAgZ2V0IGZhY2VzKCk6IG51bWJlcjtcclxuICAgIHNldCBmYWNlcyh2YWx1ZTogbnVtYmVyKTtcclxuICAgIGdldCB2YWx1ZSgpOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcbiAgICBzZXQgdmFsdWUodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCk7XHJcbiAgICBnZXQgYm9udXMoKTogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gICAgc2V0IGJvbnVzKGJvbnVzOiBudW1iZXIgfCB1bmRlZmluZWQpO1xyXG4gICAgcm9sbCgpOiBudW1iZXI7XHJcbiAgICBhbGxvY2F0ZUJvbnVzZXMoYW1vdW50OiBudW1iZXIpOiBudW1iZXI7XHJcbiAgICBnZXQgdG90YWwoKTogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogQSBkaWNlIGhhcyBvbmUgb3IgbW9yZSBmYWNlcywgY2FuIGJlIHJvbGwsIGZlYXR1cmVzIGEgdmFsdWUgYWZ0ZXIgcm9sbGluZywgYW5kIG1heSBhbHNvIGhhdmUgYSBib251c1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERpY2UgaW1wbGVtZW50cyBJRGljZSB7XHJcbiAgICAvKipcclxuICAgICAqIEFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHZhbHVlIGZvciBlYWNoIHNpZGUgb2YgdGhlIGRpY2VcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfZmFjZXM6IEFycmF5PG51bWJlcj4gPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIHRoZSBudW1iZXIgcG9pbnRpbmcgdXAgb24gdGhlIHN1cmZhY2UgYWZ0ZXIgYSByb2xsLlxyXG4gICAgICogQW4gdW5yb2xsZWQgZGljZSBoYXMgbm8gdmFsdWUuXHJcbiAgICAgKiB0aGUgdmFsdWUgaXMgbm90IHRoZSB0b3RhbCBhcyBhIGRpY2VzIGZhY2UgdmFsdWUgbWF5IGJlIG1vZGlmaWVkIGJ5IGx1Y2sgYWxnb3JpdGhtXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX3ZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgYWRkaXRpb25hbCBhbW91bnQgdG8gYmUgYWRkZWQgdG8gZGljZSB2YWx1ZSB3aGVuIGNvbXB1dGluZyB0b3RhbCBiYXNlZCBvbiBsdWNrXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2JvbnVzOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHZhbHVlOiBudW1iZXIgfCBBcnJheTxudW1iZXI+KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgdGhpcy5mYWNlcyA9IHZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5mYWNlc0FycmF5ID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2JvbnVzID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWxsb2NhdGVCb251c2VzKGFtb3VudDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZih0aGlzLl92YWx1ZSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgcmV0dXJuIGFtb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBvdGVudGlhbCA9IHRoaXMubWF4IC0gdGhpcy5fdmFsdWU7XHJcbiAgICAgICAgaWYoYW1vdW50ID4gcG90ZW50aWFsKXtcclxuICAgICAgICAgICAgdGhpcy5fYm9udXMgPSBwb3RlbnRpYWw7XHJcbiAgICAgICAgICAgIHJldHVybiBhbW91bnQgLSBwb3RlbnRpYWw7ICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2JvbnVzID0gYW1vdW50O1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgbWF4aW11bSB2YWx1ZSB0aGF0IHRoZSBkaWNlIGNvdWxkIHBvdGVudGlhbGx5IHJvbGxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBtYXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCwgdGhpcy5fZmFjZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBtaW5pbWFsIHZhbHVlIHRoYXQgdGhlIGRpY2UgY291bGQgcG90ZW50aWFsbHkgcm9sbFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IG1pbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLm1pbi5hcHBseShudWxsLCB0aGlzLl9mYWNlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYWxsIGZhY2VzIG9mIHRoZSBkaWNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgZmFjZXNBcnJheSgpOiBBcnJheTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmFjZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgdGhlIGZhY2VzIG9mIHRoZSBkaWNlIG1hbnVhbGx5IHVzaW5nIGFuIGFycmF5LlxyXG4gICAgICogVXNlIHRoaXMgdG8gc2V0IGFibm9ybWFsIGZhY2VzLCBlLmcuIGEgZGljZSB3aXRoIGV2ZW4gZmFjZXMgWzIsNCw2XSBvciBhIGxvYWRlZCBkaWNlIFs2XVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGZhY2VzQXJyYXkoZmFjZXM6IEFycmF5PG51bWJlcj4pIHtcclxuICAgICAgICB0aGlzLl9mYWNlcyA9IGZhY2VzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRvdGFsIG51bWJlciBvZiBmYWNlcyBvbiBkaWNlLiBGYWNlcyBpcyBub3QgdGhlIG1heC5cclxuICAgICAqIEEgZGljZSBtYXkgb25seSBoYXZlIGEgZmFjZSAxIGFuZCBhbm90aGVyIGZhY2UgMyB3aGljaCB3b3VsZCByZXR1cm4gMiBmYWNlcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBmYWNlcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9mYWNlcy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgZmFjZXMgb24gZGljZSB1c2luZyByYW5nZSAxIHRvIHZhbHVlIHByb3ZpZGVkLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IGZhY2VzKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB2YWx1ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZhY2VzLnB1c2goaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHZhbHVlLCB0aGUgYW1vdW50IHJlc3VsdGluZyBmcm9tIHJvbGxpbmcgZGljZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IHZhbHVlKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHZhbHVlLCB0aGUgYW1vdW50IHJlc3VsdGluZyBmcm9tIHJvbGxpbmcgZGljZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGJvbnVzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgYm9udXMoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYm9udXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgYm9udXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldCBib251cyhib251czogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy5fYm9udXMgPSBib251cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJvbGwgdGhlIGRpY2UgdGhlcmVieSBzZXR0aW5nIHRoZSBkaWNlcyB2YWx1ZVxyXG4gICAgICogQHJldHVybnMgcm9sbCBvdXRjb21lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByb2xsKCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2ZhY2VzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ZhY2VzIHVuZGVmaW5lZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9mYWNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLl9mYWNlcy5sZW5ndGgpXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBUaGUgZGljZXMgdmFsdWUgd2l0aCBib251cyBmcm9tIGx1Y2sgYXBwbGllZCAqL1xyXG4gICAgcHVibGljIGdldCB0b3RhbCgpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICh0aGlzLl92YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdWYWx1ZSB1bmRlZmluZWQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9ib251cyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZSArIHRoaXMuX2JvbnVzO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==