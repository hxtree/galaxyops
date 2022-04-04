"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractLuckAdjustment = void 0;
class AbstractLuckAdjustment {
    constructor() {
        this._min = 0;
        this._max = 2147483647;
    }
    set max(max) {
        this.max = max;
    }
    get max() {
        return this._max;
    }
    set min(min) {
        this._min = min;
    }
    get min() {
        return this._min;
    }
    run(currentLuck, rollPercent = 0.5) {
        const adjustment = this.adjustment(rollPercent);
        const adjustedLuck = (currentLuck + adjustment);
        if (adjustedLuck < this._min) {
            // Return the amount of adjustment it would take for currentLuck
            // to equal min
            return (this._min - currentLuck);
        }
        else if (adjustedLuck > this.max) {
            // Return the amount of adjustment it would take for currentLuck
            // to equal max
            return (this._max - currentLuck);
        }
        return adjustment;
    }
}
exports.AbstractLuckAdjustment = AbstractLuckAdjustment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RMdWNrQWRqdXN0bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9MdWNrQWRqdXN0bWVudC9BYnN0cmFjdEx1Y2tBZGp1c3RtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQVNBLE1BQXNCLHNCQUFzQjtJQUE1QztRQUVZLFNBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsU0FBSSxHQUFXLFVBQVUsQ0FBQztJQTJDdEMsQ0FBQztJQXpDRyxJQUFXLEdBQUcsQ0FBQyxHQUFXO1FBRXRCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7SUFFRCxJQUFXLEdBQUc7UUFFVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELElBQVcsR0FBRyxDQUFDLEdBQVc7UUFFdEIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQVcsR0FBRztRQUVWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sR0FBRyxDQUFDLFdBQW1CLEVBQUUsY0FBc0IsR0FBRztRQUVyRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWhELE1BQU0sWUFBWSxHQUFHLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBRWhELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDMUIsZ0VBQWdFO1lBQ2hFLGVBQWU7WUFDZixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsQ0FBQztTQUNwQzthQUFNLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDaEMsZ0VBQWdFO1lBQ2hFLGVBQWU7WUFDZixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsQ0FBQztTQUNwQztRQUVELE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7Q0FJSjtBQTlDRCx3REE4Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElMdWNrQWRqdXN0bWVudCB7XHJcbiAgICBzZXQgbWF4KG1heDogbnVtYmVyKTtcclxuICAgIGdldCBtYXgoKTogbnVtYmVyO1xyXG4gICAgc2V0IG1pbihtaW46IG51bWJlcik7XHJcbiAgICBnZXQgbWluKCk6IG51bWJlcjtcclxuICAgIHJ1bihjdXJyZW50THVjazogbnVtYmVyLCByb2xsUGVyY2VudDogbnVtYmVyKTogbnVtYmVyO1xyXG4gICAgYWRqdXN0bWVudChyb2xsUGVyY2VudDogbnVtYmVyKTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RMdWNrQWRqdXN0bWVudCBpbXBsZW1lbnRzIElMdWNrQWRqdXN0bWVudFxyXG57XHJcbiAgICBwcml2YXRlIF9taW46IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9tYXg6IG51bWJlciA9IDIxNDc0ODM2NDc7XHJcblxyXG4gICAgcHVibGljIHNldCBtYXgobWF4OiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tYXggPSBtYXg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBtYXgoKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IG1pbihtaW46IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLl9taW4gPSBtaW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBtaW4oKTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21pbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcnVuKGN1cnJlbnRMdWNrOiBudW1iZXIsIHJvbGxQZXJjZW50OiBudW1iZXIgPSAwLjUpOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICBjb25zdCBhZGp1c3RtZW50ID0gdGhpcy5hZGp1c3RtZW50KHJvbGxQZXJjZW50KTtcclxuXHJcbiAgICAgICAgY29uc3QgYWRqdXN0ZWRMdWNrID0gKGN1cnJlbnRMdWNrICsgYWRqdXN0bWVudCk7XHJcblxyXG4gICAgICAgIGlmIChhZGp1c3RlZEx1Y2sgPCB0aGlzLl9taW4pIHtcclxuICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBhbW91bnQgb2YgYWRqdXN0bWVudCBpdCB3b3VsZCB0YWtlIGZvciBjdXJyZW50THVja1xyXG4gICAgICAgICAgICAvLyB0byBlcXVhbCBtaW5cclxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLl9taW4gLSBjdXJyZW50THVjayk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhZGp1c3RlZEx1Y2sgPiB0aGlzLm1heCkge1xyXG4gICAgICAgICAgICAvLyBSZXR1cm4gdGhlIGFtb3VudCBvZiBhZGp1c3RtZW50IGl0IHdvdWxkIHRha2UgZm9yIGN1cnJlbnRMdWNrXHJcbiAgICAgICAgICAgIC8vIHRvIGVxdWFsIG1heFxyXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuX21heCAtIGN1cnJlbnRMdWNrKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhZGp1c3RtZW50O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgYWRqdXN0bWVudChyb2xsUGVyY2VudDogbnVtYmVyKTogbnVtYmVyO1xyXG59Il19