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
        const adjustedLuck = currentLuck + adjustment;
        if (adjustedLuck < this._min) {
            // Return the amount of adjustment it would take for currentLuck
            // to equal min
            return this._min - currentLuck;
        }
        if (adjustedLuck > this.max) {
            // Return the amount of adjustment it would take for currentLuck
            // to equal max
            return this._max - currentLuck;
        }
        return adjustment;
    }
}
exports.AbstractLuckAdjustment = AbstractLuckAdjustment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RMdWNrQWRqdXN0bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9MdWNrQWRqdXN0bWVudC9BYnN0cmFjdEx1Y2tBZGp1c3RtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQVNBLE1BQXNCLHNCQUFzQjtJQUE1QztRQUNVLFNBQUksR0FBVyxDQUFDLENBQUM7UUFFakIsU0FBSSxHQUFXLFVBQVUsQ0FBQztJQXNDcEMsQ0FBQztJQXBDQyxJQUFXLEdBQUcsQ0FBQyxHQUFXO1FBQ3hCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxJQUFXLEdBQUc7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELElBQVcsR0FBRyxDQUFDLEdBQVc7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUVELElBQVcsR0FBRztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRU0sR0FBRyxDQUFDLFdBQW1CLEVBQUUsY0FBc0IsR0FBRztRQUN2RCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWhELE1BQU0sWUFBWSxHQUFHLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFFOUMsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRTtZQUM1QixnRUFBZ0U7WUFDaEUsZUFBZTtZQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7U0FDaEM7UUFDRCxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQzNCLGdFQUFnRTtZQUNoRSxlQUFlO1lBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztTQUNoQztRQUVELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7Q0FHRjtBQXpDRCx3REF5Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIElMdWNrQWRqdXN0bWVudCB7XG4gIHNldCBtYXgobWF4OiBudW1iZXIpO1xuICBnZXQgbWF4KCk6IG51bWJlcjtcbiAgc2V0IG1pbihtaW46IG51bWJlcik7XG4gIGdldCBtaW4oKTogbnVtYmVyO1xuICBydW4oY3VycmVudEx1Y2s6IG51bWJlciwgcm9sbFBlcmNlbnQ6IG51bWJlcik6IG51bWJlcjtcbiAgYWRqdXN0bWVudChyb2xsUGVyY2VudDogbnVtYmVyKTogbnVtYmVyO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RMdWNrQWRqdXN0bWVudCBpbXBsZW1lbnRzIElMdWNrQWRqdXN0bWVudCB7XG4gIHByaXZhdGUgX21pbjogbnVtYmVyID0gMDtcblxuICBwcml2YXRlIF9tYXg6IG51bWJlciA9IDIxNDc0ODM2NDc7XG5cbiAgcHVibGljIHNldCBtYXgobWF4OiBudW1iZXIpIHtcbiAgICB0aGlzLm1heCA9IG1heDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbWF4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX21heDtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgbWluKG1pbjogbnVtYmVyKSB7XG4gICAgdGhpcy5fbWluID0gbWluO1xuICB9XG5cbiAgcHVibGljIGdldCBtaW4oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbWluO1xuICB9XG5cbiAgcHVibGljIHJ1bihjdXJyZW50THVjazogbnVtYmVyLCByb2xsUGVyY2VudDogbnVtYmVyID0gMC41KTogbnVtYmVyIHtcbiAgICBjb25zdCBhZGp1c3RtZW50ID0gdGhpcy5hZGp1c3RtZW50KHJvbGxQZXJjZW50KTtcblxuICAgIGNvbnN0IGFkanVzdGVkTHVjayA9IGN1cnJlbnRMdWNrICsgYWRqdXN0bWVudDtcblxuICAgIGlmIChhZGp1c3RlZEx1Y2sgPCB0aGlzLl9taW4pIHtcbiAgICAgIC8vIFJldHVybiB0aGUgYW1vdW50IG9mIGFkanVzdG1lbnQgaXQgd291bGQgdGFrZSBmb3IgY3VycmVudEx1Y2tcbiAgICAgIC8vIHRvIGVxdWFsIG1pblxuICAgICAgcmV0dXJuIHRoaXMuX21pbiAtIGN1cnJlbnRMdWNrO1xuICAgIH1cbiAgICBpZiAoYWRqdXN0ZWRMdWNrID4gdGhpcy5tYXgpIHtcbiAgICAgIC8vIFJldHVybiB0aGUgYW1vdW50IG9mIGFkanVzdG1lbnQgaXQgd291bGQgdGFrZSBmb3IgY3VycmVudEx1Y2tcbiAgICAgIC8vIHRvIGVxdWFsIG1heFxuICAgICAgcmV0dXJuIHRoaXMuX21heCAtIGN1cnJlbnRMdWNrO1xuICAgIH1cblxuICAgIHJldHVybiBhZGp1c3RtZW50O1xuICB9XG5cbiAgcHVibGljIGFic3RyYWN0IGFkanVzdG1lbnQocm9sbFBlcmNlbnQ6IG51bWJlcik6IG51bWJlcjtcbn1cbiJdfQ==