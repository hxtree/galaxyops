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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdEx1Y2tBZGp1c3RtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTHVja0FkanVzdG1lbnQvRGVmYXVsdEx1Y2tBZGp1c3RtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUFrRTtBQUVsRSxNQUFhLHFCQUFzQixTQUFRLCtDQUFzQjtJQUU3RCxJQUFXLEdBQUc7UUFFVixPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVNLFVBQVUsQ0FBQyxjQUFzQixHQUFHO1FBRXZDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFFckIsSUFBSSxXQUFXLElBQUksQ0FBQyxDQUFDLEdBQUMsR0FBRyxDQUFDLEVBQUU7WUFDeEIsT0FBTyxDQUFDLENBQUM7U0FDWjtRQUVELElBQUksV0FBVyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDOUIsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNiO1FBRUQsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0NBQ0o7QUFyQkQsc0RBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RMdWNrQWRqdXN0bWVudCB9IGZyb20gJy4vQWJzdHJhY3RMdWNrQWRqdXN0bWVudCc7XG5cbmV4cG9ydCBjbGFzcyBEZWZhdWx0THVja0FkanVzdG1lbnQgZXh0ZW5kcyBBYnN0cmFjdEx1Y2tBZGp1c3RtZW50XG57XG4gICAgcHVibGljIGdldCBwaGkoKTogbnVtYmVyXG4gICAge1xuICAgICAgICByZXR1cm4gKDEgKyBNYXRoLnNxcnQoNSkpIC8gMjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRqdXN0bWVudChyb2xsUGVyY2VudDogbnVtYmVyID0gMC41KTogbnVtYmVyXG4gICAge1xuICAgICAgICBjb25zdCBwaGkgPSB0aGlzLnBoaTtcblxuICAgICAgICBpZiAocm9sbFBlcmNlbnQgPj0gKDEvcGhpKSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocm9sbFBlcmNlbnQgPD0gKDEgLSAoMS9waGkpKSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufSJdfQ==