"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultLuckAdjustment = void 0;
const AbstractLuckAdjustment_1 = require("./AbstractLuckAdjustment");
class DefaultLuckAdjustment extends AbstractLuckAdjustment_1.AbstractLuckAdjustment {
    get phi() {
        return (1 + Math.sqrt(5)) / 2;
    }
    adjustment(rollPercent = 0.5) {
        const phi = this.phi;
        if (rollPercent >= (1 / phi)) {
            return 1;
        }
        if (rollPercent <= (1 - (1 / phi))) {
            return -1;
        }
        return 0;
    }
}
exports.DefaultLuckAdjustment = DefaultLuckAdjustment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdEx1Y2tBZGp1c3RtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0x1Y2tBZGp1c3RtZW50L0RlZmF1bHRMdWNrQWRqdXN0bWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFBa0U7QUFFbEUsTUFBYSxxQkFBc0IsU0FBUSwrQ0FBc0I7SUFFN0QsSUFBVyxHQUFHO1FBRVYsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxVQUFVLENBQUMsY0FBc0IsR0FBRztRQUV2QyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBRXJCLElBQUksV0FBVyxJQUFJLENBQUMsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sQ0FBQyxDQUFDO1NBQ1o7UUFFRCxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQzlCLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDYjtRQUVELE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztDQUNKO0FBckJELHNEQXFCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0THVja0FkanVzdG1lbnQgfSBmcm9tICcuL0Fic3RyYWN0THVja0FkanVzdG1lbnQnO1xuXG5leHBvcnQgY2xhc3MgRGVmYXVsdEx1Y2tBZGp1c3RtZW50IGV4dGVuZHMgQWJzdHJhY3RMdWNrQWRqdXN0bWVudFxue1xuICAgIHB1YmxpYyBnZXQgcGhpKCk6IG51bWJlclxuICAgIHtcbiAgICAgICAgcmV0dXJuICgxICsgTWF0aC5zcXJ0KDUpKSAvIDI7XG4gICAgfVxuXG4gICAgcHVibGljIGFkanVzdG1lbnQocm9sbFBlcmNlbnQ6IG51bWJlciA9IDAuNSk6IG51bWJlclxuICAgIHtcbiAgICAgICAgY29uc3QgcGhpID0gdGhpcy5waGk7XG5cbiAgICAgICAgaWYgKHJvbGxQZXJjZW50ID49ICgxL3BoaSkpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvbGxQZXJjZW50IDw9ICgxIC0gKDEvcGhpKSkpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn0iXX0=