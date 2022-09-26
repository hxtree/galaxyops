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
        this._bonus = amount;
        return 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EaWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQWdCQTs7R0FFRztBQUNILE1BQWEsSUFBSTtJQWtCZixZQUFtQixLQUE2QjtRQWpCaEQ7O1dBRUc7UUFDSyxXQUFNLEdBQWtCLEVBQUUsQ0FBQztRQWVqQyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNwQjthQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFTSxlQUFlLENBQUMsTUFBYztRQUNuQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQzdCLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFFRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekMsSUFBSSxNQUFNLEdBQUcsU0FBUyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1lBQ3hCLE9BQU8sTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFXLFVBQVUsQ0FBQyxLQUFvQjtRQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM1QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLEtBQUssQ0FBQyxLQUFhO1FBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxLQUFLLENBQUMsS0FBeUI7UUFDeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxLQUFLO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVcsS0FBSyxDQUFDLEtBQXlCO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxJQUFJO1FBQ1QsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUM3QixNQUFNLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDekM7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRTFFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQsbURBQW1EO0lBQ25ELElBQVcsS0FBSztRQUNkLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDN0IsTUFBTSxJQUFJLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUM3QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDcEI7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNuQyxDQUFDO0NBQ0Y7QUE3SUQsb0JBNklDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBJRGljZSB7XG4gIGdldCBtYXgoKTogbnVtYmVyO1xuICBnZXQgbWluKCk6IG51bWJlcjtcbiAgZ2V0IGZhY2VzQXJyYXkoKTogQXJyYXk8bnVtYmVyPjtcbiAgc2V0IGZhY2VzQXJyYXkoZmFjZXM6IEFycmF5PG51bWJlcj4pO1xuICBnZXQgZmFjZXMoKTogbnVtYmVyO1xuICBzZXQgZmFjZXModmFsdWU6IG51bWJlcik7XG4gIGdldCB2YWx1ZSgpOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKTtcbiAgZ2V0IGJvbnVzKCk6IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgc2V0IGJvbnVzKGJvbnVzOiBudW1iZXIgfCB1bmRlZmluZWQpO1xuICByb2xsKCk6IG51bWJlcjtcbiAgYWxsb2NhdGVCb251c2VzKGFtb3VudDogbnVtYmVyKTogbnVtYmVyO1xuICBnZXQgdG90YWwoKTogbnVtYmVyO1xufVxuXG4vKipcbiAqIEEgZGljZSBoYXMgb25lIG9yIG1vcmUgZmFjZXMsIGNhbiBiZSByb2xsLCBmZWF0dXJlcyBhIHZhbHVlIGFmdGVyIHJvbGxpbmcsIGFuZCBtYXkgYWxzbyBoYXZlIGEgYm9udXNcbiAqL1xuZXhwb3J0IGNsYXNzIERpY2UgaW1wbGVtZW50cyBJRGljZSB7XG4gIC8qKlxuICAgKiBBbiBhcnJheSBjb250YWluaW5nIHRoZSB2YWx1ZSBmb3IgZWFjaCBzaWRlIG9mIHRoZSBkaWNlXG4gICAqL1xuICBwcml2YXRlIF9mYWNlczogQXJyYXk8bnVtYmVyPiA9IFtdO1xuXG4gIC8qKlxuICAgKiB0aGUgbnVtYmVyIHBvaW50aW5nIHVwIG9uIHRoZSBzdXJmYWNlIGFmdGVyIGEgcm9sbC5cbiAgICogQW4gdW5yb2xsZWQgZGljZSBoYXMgbm8gdmFsdWUuXG4gICAqIHRoZSB2YWx1ZSBpcyBub3QgdGhlIHRvdGFsIGFzIGEgZGljZXMgZmFjZSB2YWx1ZSBtYXkgYmUgbW9kaWZpZWQgYnkgbHVjayBhbGdvcml0aG1cbiAgICovXG4gIHByaXZhdGUgX3ZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIFRoZSBhZGRpdGlvbmFsIGFtb3VudCB0byBiZSBhZGRlZCB0byBkaWNlIHZhbHVlIHdoZW4gY29tcHV0aW5nIHRvdGFsIGJhc2VkIG9uIGx1Y2tcbiAgICovXG4gIHByaXZhdGUgX2JvbnVzOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHZhbHVlOiBudW1iZXIgfCBBcnJheTxudW1iZXI+KSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRoaXMuZmFjZXMgPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB0aGlzLmZhY2VzQXJyYXkgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5fYm9udXMgPSAwO1xuICB9XG5cbiAgcHVibGljIGFsbG9jYXRlQm9udXNlcyhhbW91bnQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuX3ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBhbW91bnQ7XG4gICAgfVxuXG4gICAgY29uc3QgcG90ZW50aWFsID0gdGhpcy5tYXggLSB0aGlzLl92YWx1ZTtcbiAgICBpZiAoYW1vdW50ID4gcG90ZW50aWFsKSB7XG4gICAgICB0aGlzLl9ib251cyA9IHBvdGVudGlhbDtcbiAgICAgIHJldHVybiBhbW91bnQgLSBwb3RlbnRpYWw7XG4gICAgfVxuICAgIHRoaXMuX2JvbnVzID0gYW1vdW50O1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbWF4aW11bSB2YWx1ZSB0aGF0IHRoZSBkaWNlIGNvdWxkIHBvdGVudGlhbGx5IHJvbGxcbiAgICovXG4gIHB1YmxpYyBnZXQgbWF4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsIHRoaXMuX2ZhY2VzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG1pbmltYWwgdmFsdWUgdGhhdCB0aGUgZGljZSBjb3VsZCBwb3RlbnRpYWxseSByb2xsXG4gICAqL1xuICBwdWJsaWMgZ2V0IG1pbigpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLm1pbi5hcHBseShudWxsLCB0aGlzLl9mYWNlcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBmYWNlcyBvZiB0aGUgZGljZVxuICAgKi9cbiAgcHVibGljIGdldCBmYWNlc0FycmF5KCk6IEFycmF5PG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLl9mYWNlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGZhY2VzIG9mIHRoZSBkaWNlIG1hbnVhbGx5IHVzaW5nIGFuIGFycmF5LlxuICAgKiBVc2UgdGhpcyB0byBzZXQgYWJub3JtYWwgZmFjZXMsIGUuZy4gYSBkaWNlIHdpdGggZXZlbiBmYWNlcyBbMiw0LDZdIG9yIGEgbG9hZGVkIGRpY2UgWzZdXG4gICAqL1xuICBwdWJsaWMgc2V0IGZhY2VzQXJyYXkoZmFjZXM6IEFycmF5PG51bWJlcj4pIHtcbiAgICB0aGlzLl9mYWNlcyA9IGZhY2VzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0b3RhbCBudW1iZXIgb2YgZmFjZXMgb24gZGljZS4gRmFjZXMgaXMgbm90IHRoZSBtYXguXG4gICAqIEEgZGljZSBtYXkgb25seSBoYXZlIGEgZmFjZSAxIGFuZCBhbm90aGVyIGZhY2UgMyB3aGljaCB3b3VsZCByZXR1cm4gMiBmYWNlcy5cbiAgICovXG4gIHB1YmxpYyBnZXQgZmFjZXMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZmFjZXMubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBmYWNlcyBvbiBkaWNlIHVzaW5nIHJhbmdlIDEgdG8gdmFsdWUgcHJvdmlkZWQuXG4gICAqL1xuICBwdWJsaWMgc2V0IGZhY2VzKHZhbHVlOiBudW1iZXIpIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB2YWx1ZTsgaSsrKSB7XG4gICAgICB0aGlzLl9mYWNlcy5wdXNoKGkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdmFsdWUsIHRoZSBhbW91bnQgcmVzdWx0aW5nIGZyb20gcm9sbGluZyBkaWNlXG4gICAqL1xuICBwdWJsaWMgZ2V0IHZhbHVlKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB2YWx1ZSwgdGhlIGFtb3VudCByZXN1bHRpbmcgZnJvbSByb2xsaW5nIGRpY2VcbiAgICovXG4gIHB1YmxpYyBzZXQgdmFsdWUodmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGJvbnVzXG4gICAqL1xuICBwdWJsaWMgZ2V0IGJvbnVzKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX2JvbnVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBib251c1xuICAgKi9cbiAgcHVibGljIHNldCBib251cyhib251czogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5fYm9udXMgPSBib251cztcbiAgfVxuXG4gIC8qKlxuICAgKiBSb2xsIHRoZSBkaWNlIHRoZXJlYnkgc2V0dGluZyB0aGUgZGljZXMgdmFsdWVcbiAgICogQHJldHVybnMgcm9sbCBvdXRjb21lXG4gICAqL1xuICBwdWJsaWMgcm9sbCgpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLl9mYWNlcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRmFjZXMgdW5kZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9mYWNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLl9mYWNlcy5sZW5ndGgpXTtcblxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIC8qKiBUaGUgZGljZXMgdmFsdWUgd2l0aCBib251cyBmcm9tIGx1Y2sgYXBwbGllZCAqL1xuICBwdWJsaWMgZ2V0IHRvdGFsKCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuX3ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdWYWx1ZSB1bmRlZmluZWQnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fYm9udXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl92YWx1ZSArIHRoaXMuX2JvbnVzO1xuICB9XG59XG4iXX0=