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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EaWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQWdCQTs7R0FFRztBQUNILE1BQWEsSUFBSTtJQWtCYixZQUFtQixLQUE2QjtRQWpCaEQ7O1dBRUc7UUFDSyxXQUFNLEdBQWtCLEVBQUUsQ0FBQztRQWUvQixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUN0QjthQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFTSxlQUFlLENBQUMsTUFBYztRQUNqQyxJQUFHLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFDO1lBQ3pCLE9BQU8sTUFBTSxDQUFDO1NBQ2pCO1FBRUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3pDLElBQUcsTUFBTSxHQUFHLFNBQVMsRUFBQztZQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztZQUN4QixPQUFPLE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDN0I7YUFBTTtZQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxDQUFDO1NBQ1o7SUFDTCxDQUFDO0lBQ0Q7O09BRUc7SUFDSCxJQUFXLEdBQUc7UUFDVixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxHQUFHO1FBQ1YsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsVUFBVTtRQUNqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQVcsVUFBVSxDQUFDLEtBQW9CO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFXLEtBQUs7UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsS0FBSyxDQUFDLEtBQWE7UUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsS0FBSztRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLEtBQUssQ0FBQyxLQUF5QjtRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLEtBQUs7UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxLQUFLLENBQUMsS0FBeUI7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLElBQUk7UUFDUCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQzNCLE1BQU0sSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUMzQztRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFMUUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxtREFBbUQ7SUFDbkQsSUFBVyxLQUFLO1FBQ1osSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUMzQixNQUFNLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDM0M7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQzNCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUN0QjtRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JDLENBQUM7Q0FDSjtBQTdJRCxvQkE2SUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElEaWNlIHtcbiAgICBnZXQgbWF4KCk6IG51bWJlcjtcbiAgICBnZXQgbWluKCk6IG51bWJlcjtcbiAgICBnZXQgZmFjZXNBcnJheSgpOiBBcnJheTxudW1iZXI+O1xuICAgIHNldCBmYWNlc0FycmF5KGZhY2VzOiBBcnJheTxudW1iZXI+KTtcbiAgICBnZXQgZmFjZXMoKTogbnVtYmVyO1xuICAgIHNldCBmYWNlcyh2YWx1ZTogbnVtYmVyKTtcbiAgICBnZXQgdmFsdWUoKTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKTtcbiAgICBnZXQgYm9udXMoKTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIHNldCBib251cyhib251czogbnVtYmVyIHwgdW5kZWZpbmVkKTtcbiAgICByb2xsKCk6IG51bWJlcjtcbiAgICBhbGxvY2F0ZUJvbnVzZXMoYW1vdW50OiBudW1iZXIpOiBudW1iZXI7XG4gICAgZ2V0IHRvdGFsKCk6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBBIGRpY2UgaGFzIG9uZSBvciBtb3JlIGZhY2VzLCBjYW4gYmUgcm9sbCwgZmVhdHVyZXMgYSB2YWx1ZSBhZnRlciByb2xsaW5nLCBhbmQgbWF5IGFsc28gaGF2ZSBhIGJvbnVzXG4gKi9cbmV4cG9ydCBjbGFzcyBEaWNlIGltcGxlbWVudHMgSURpY2Uge1xuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IGNvbnRhaW5pbmcgdGhlIHZhbHVlIGZvciBlYWNoIHNpZGUgb2YgdGhlIGRpY2VcbiAgICAgKi9cbiAgICBwcml2YXRlIF9mYWNlczogQXJyYXk8bnVtYmVyPiA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogdGhlIG51bWJlciBwb2ludGluZyB1cCBvbiB0aGUgc3VyZmFjZSBhZnRlciBhIHJvbGwuXG4gICAgICogQW4gdW5yb2xsZWQgZGljZSBoYXMgbm8gdmFsdWUuXG4gICAgICogdGhlIHZhbHVlIGlzIG5vdCB0aGUgdG90YWwgYXMgYSBkaWNlcyBmYWNlIHZhbHVlIG1heSBiZSBtb2RpZmllZCBieSBsdWNrIGFsZ29yaXRobVxuICAgICAqL1xuICAgIHByaXZhdGUgX3ZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgYWRkaXRpb25hbCBhbW91bnQgdG8gYmUgYWRkZWQgdG8gZGljZSB2YWx1ZSB3aGVuIGNvbXB1dGluZyB0b3RhbCBiYXNlZCBvbiBsdWNrXG4gICAgICovXG4gICAgcHJpdmF0ZSBfYm9udXM6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2YWx1ZTogbnVtYmVyIHwgQXJyYXk8bnVtYmVyPikge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdGhpcy5mYWNlcyA9IHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLmZhY2VzQXJyYXkgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9ib251cyA9IDA7XG4gICAgfVxuXG4gICAgcHVibGljIGFsbG9jYXRlQm9udXNlcyhhbW91bnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIGlmKHRoaXMuX3ZhbHVlID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgcmV0dXJuIGFtb3VudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBvdGVudGlhbCA9IHRoaXMubWF4IC0gdGhpcy5fdmFsdWU7XG4gICAgICAgIGlmKGFtb3VudCA+IHBvdGVudGlhbCl7XG4gICAgICAgICAgICB0aGlzLl9ib251cyA9IHBvdGVudGlhbDtcbiAgICAgICAgICAgIHJldHVybiBhbW91bnQgLSBwb3RlbnRpYWw7ICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fYm9udXMgPSBhbW91bnQ7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG1heGltdW0gdmFsdWUgdGhhdCB0aGUgZGljZSBjb3VsZCBwb3RlbnRpYWxseSByb2xsXG4gICAgICovXG4gICAgcHVibGljIGdldCBtYXgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsIHRoaXMuX2ZhY2VzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG1pbmltYWwgdmFsdWUgdGhhdCB0aGUgZGljZSBjb3VsZCBwb3RlbnRpYWxseSByb2xsXG4gICAgICovXG4gICAgcHVibGljIGdldCBtaW4oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWluLmFwcGx5KG51bGwsIHRoaXMuX2ZhY2VzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIGZhY2VzIG9mIHRoZSBkaWNlXG4gICAgICovXG4gICAgcHVibGljIGdldCBmYWNlc0FycmF5KCk6IEFycmF5PG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmFjZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBmYWNlcyBvZiB0aGUgZGljZSBtYW51YWxseSB1c2luZyBhbiBhcnJheS5cbiAgICAgKiBVc2UgdGhpcyB0byBzZXQgYWJub3JtYWwgZmFjZXMsIGUuZy4gYSBkaWNlIHdpdGggZXZlbiBmYWNlcyBbMiw0LDZdIG9yIGEgbG9hZGVkIGRpY2UgWzZdXG4gICAgICovXG4gICAgcHVibGljIHNldCBmYWNlc0FycmF5KGZhY2VzOiBBcnJheTxudW1iZXI+KSB7XG4gICAgICAgIHRoaXMuX2ZhY2VzID0gZmFjZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRvdGFsIG51bWJlciBvZiBmYWNlcyBvbiBkaWNlLiBGYWNlcyBpcyBub3QgdGhlIG1heC5cbiAgICAgKiBBIGRpY2UgbWF5IG9ubHkgaGF2ZSBhIGZhY2UgMSBhbmQgYW5vdGhlciBmYWNlIDMgd2hpY2ggd291bGQgcmV0dXJuIDIgZmFjZXMuXG4gICAgICovXG4gICAgcHVibGljIGdldCBmYWNlcygpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmFjZXMubGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBmYWNlcyBvbiBkaWNlIHVzaW5nIHJhbmdlIDEgdG8gdmFsdWUgcHJvdmlkZWQuXG4gICAgICovXG4gICAgcHVibGljIHNldCBmYWNlcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHZhbHVlOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX2ZhY2VzLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdmFsdWUsIHRoZSBhbW91bnQgcmVzdWx0aW5nIGZyb20gcm9sbGluZyBkaWNlXG4gICAgICovXG4gICAgcHVibGljIGdldCB2YWx1ZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHZhbHVlLCB0aGUgYW1vdW50IHJlc3VsdGluZyBmcm9tIHJvbGxpbmcgZGljZVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBib251c1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgYm9udXMoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvbnVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBib251c1xuICAgICAqL1xuICAgIHB1YmxpYyBzZXQgYm9udXMoYm9udXM6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9ib251cyA9IGJvbnVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJvbGwgdGhlIGRpY2UgdGhlcmVieSBzZXR0aW5nIHRoZSBkaWNlcyB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHJvbGwgb3V0Y29tZVxuICAgICAqL1xuICAgIHB1YmxpYyByb2xsKCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLl9mYWNlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRmFjZXMgdW5kZWZpbmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX2ZhY2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuX2ZhY2VzLmxlbmd0aCldO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICB9XG5cbiAgICAvKiogVGhlIGRpY2VzIHZhbHVlIHdpdGggYm9udXMgZnJvbSBsdWNrIGFwcGxpZWQgKi9cbiAgICBwdWJsaWMgZ2V0IHRvdGFsKCk6IG51bWJlciB7XG4gICAgICAgIGlmICh0aGlzLl92YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVmFsdWUgdW5kZWZpbmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYm9udXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlICsgdGhpcy5fYm9udXM7XG4gICAgfVxufVxuIl19