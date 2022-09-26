"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultLuckAdjustment = void 0;
const AbstractLuckAdjustment_1 = require("./AbstractLuckAdjustment");
class DefaultLuckAdjustment extends AbstractLuckAdjustment_1.AbstractLuckAdjustment {
    get phi() {
        return (1 + Math.sqrt(5)) / 2;
    }
    adjustment(rollPercent = 0.5) {
        const { phi } = this;
        if (rollPercent >= 1 / phi) {
            return 1;
        }
        if (rollPercent <= 1 - 1 / phi) {
            return -1;
        }
        return 0;
    }
}
exports.DefaultLuckAdjustment = DefaultLuckAdjustment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdEx1Y2tBZGp1c3RtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0x1Y2tBZGp1c3RtZW50L0RlZmF1bHRMdWNrQWRqdXN0bWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFBZ0U7QUFFaEUsTUFBYSxxQkFBc0IsU0FBUSwrQ0FBc0I7SUFDL0QsSUFBVyxHQUFHO1FBQ1osT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTSxVQUFVLENBQUMsY0FBc0IsR0FBRztRQUN6QyxNQUFNLEVBQUMsR0FBRyxFQUFDLEdBQUcsSUFBSSxDQUFDO1FBRW5CLElBQUksV0FBVyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUU7WUFDMUIsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUVELElBQUksV0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxFQUFFO1lBQzlCLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDWDtRQUVELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztDQUNGO0FBbEJELHNEQWtCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWJzdHJhY3RMdWNrQWRqdXN0bWVudH0gZnJvbSAnLi9BYnN0cmFjdEx1Y2tBZGp1c3RtZW50JztcblxuZXhwb3J0IGNsYXNzIERlZmF1bHRMdWNrQWRqdXN0bWVudCBleHRlbmRzIEFic3RyYWN0THVja0FkanVzdG1lbnQge1xuICBwdWJsaWMgZ2V0IHBoaSgpOiBudW1iZXIge1xuICAgIHJldHVybiAoMSArIE1hdGguc3FydCg1KSkgLyAyO1xuICB9XG5cbiAgcHVibGljIGFkanVzdG1lbnQocm9sbFBlcmNlbnQ6IG51bWJlciA9IDAuNSk6IG51bWJlciB7XG4gICAgY29uc3Qge3BoaX0gPSB0aGlzO1xuXG4gICAgaWYgKHJvbGxQZXJjZW50ID49IDEgLyBwaGkpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIGlmIChyb2xsUGVyY2VudCA8PSAxIC0gMSAvIHBoaSkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9XG59XG4iXX0=