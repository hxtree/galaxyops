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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RMdWNrQWRqdXN0bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0x1Y2tBZGp1c3RtZW50L0Fic3RyYWN0THVja0FkanVzdG1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBU0EsTUFBc0Isc0JBQXNCO0lBQTVDO1FBRVksU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixTQUFJLEdBQVcsVUFBVSxDQUFDO0lBMkN0QyxDQUFDO0lBekNHLElBQVcsR0FBRyxDQUFDLEdBQVc7UUFFdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUVELElBQVcsR0FBRztRQUVWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBVyxHQUFHLENBQUMsR0FBVztRQUV0QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBVyxHQUFHO1FBRVYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxHQUFHLENBQUMsV0FBbUIsRUFBRSxjQUFzQixHQUFHO1FBRXJELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFaEQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFFaEQsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRTtZQUMxQixnRUFBZ0U7WUFDaEUsZUFBZTtZQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxDQUFDO1NBQ3BDO2FBQU0sSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNoQyxnRUFBZ0U7WUFDaEUsZUFBZTtZQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxDQUFDO1NBQ3BDO1FBRUQsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztDQUlKO0FBOUNELHdEQThDQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSUx1Y2tBZGp1c3RtZW50IHtcbiAgICBzZXQgbWF4KG1heDogbnVtYmVyKTtcbiAgICBnZXQgbWF4KCk6IG51bWJlcjtcbiAgICBzZXQgbWluKG1pbjogbnVtYmVyKTtcbiAgICBnZXQgbWluKCk6IG51bWJlcjtcbiAgICBydW4oY3VycmVudEx1Y2s6IG51bWJlciwgcm9sbFBlcmNlbnQ6IG51bWJlcik6IG51bWJlcjtcbiAgICBhZGp1c3RtZW50KHJvbGxQZXJjZW50OiBudW1iZXIpOiBudW1iZXI7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdEx1Y2tBZGp1c3RtZW50IGltcGxlbWVudHMgSUx1Y2tBZGp1c3RtZW50XG57XG4gICAgcHJpdmF0ZSBfbWluOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX21heDogbnVtYmVyID0gMjE0NzQ4MzY0NztcblxuICAgIHB1YmxpYyBzZXQgbWF4KG1heDogbnVtYmVyKVxuICAgIHtcbiAgICAgICAgdGhpcy5tYXggPSBtYXg7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBtYXgoKTogbnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWF4O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQgbWluKG1pbjogbnVtYmVyKVxuICAgIHtcbiAgICAgICAgdGhpcy5fbWluID0gbWluO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgbWluKCk6IG51bWJlclxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21pbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgcnVuKGN1cnJlbnRMdWNrOiBudW1iZXIsIHJvbGxQZXJjZW50OiBudW1iZXIgPSAwLjUpOiBudW1iZXJcbiAgICB7XG4gICAgICAgIGNvbnN0IGFkanVzdG1lbnQgPSB0aGlzLmFkanVzdG1lbnQocm9sbFBlcmNlbnQpO1xuXG4gICAgICAgIGNvbnN0IGFkanVzdGVkTHVjayA9IChjdXJyZW50THVjayArIGFkanVzdG1lbnQpO1xuXG4gICAgICAgIGlmIChhZGp1c3RlZEx1Y2sgPCB0aGlzLl9taW4pIHtcbiAgICAgICAgICAgIC8vIFJldHVybiB0aGUgYW1vdW50IG9mIGFkanVzdG1lbnQgaXQgd291bGQgdGFrZSBmb3IgY3VycmVudEx1Y2tcbiAgICAgICAgICAgIC8vIHRvIGVxdWFsIG1pblxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLl9taW4gLSBjdXJyZW50THVjayk7XG4gICAgICAgIH0gZWxzZSBpZiAoYWRqdXN0ZWRMdWNrID4gdGhpcy5tYXgpIHtcbiAgICAgICAgICAgIC8vIFJldHVybiB0aGUgYW1vdW50IG9mIGFkanVzdG1lbnQgaXQgd291bGQgdGFrZSBmb3IgY3VycmVudEx1Y2tcbiAgICAgICAgICAgIC8vIHRvIGVxdWFsIG1heFxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLl9tYXggLSBjdXJyZW50THVjayk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWRqdXN0bWVudDtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBhYnN0cmFjdCBhZGp1c3RtZW50KHJvbGxQZXJjZW50OiBudW1iZXIpOiBudW1iZXI7XG59Il19