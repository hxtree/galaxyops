"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FickleLuckAdjustment = void 0;
const AbstractLuckAdjustment_1 = require("./AbstractLuckAdjustment");
class FickleLuckAdjustment extends AbstractLuckAdjustment_1.AbstractLuckAdjustment {
    adjustment(rollPercent = 0.5) {
        if (rollPercent <= 0.1) {
            return -2;
        }
        if (rollPercent <= 0.2) {
            return -1;
        }
        if (rollPercent >= 0.8) {
            return 1;
        }
        if (rollPercent >= 0.9) {
            return 2;
        }
        return 0;
    }
}
exports.FickleLuckAdjustment = FickleLuckAdjustment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlja2xlTHVja0FkanVzdG1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvTHVja0FkanVzdG1lbnQvRmlja2xlTHVja0FkanVzdG1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQWdFO0FBRWhFLE1BQWEsb0JBQXFCLFNBQVEsK0NBQXNCO0lBQ3ZELFVBQVUsQ0FBQyxjQUFzQixHQUFHO1FBQ3pDLElBQUksV0FBVyxJQUFJLEdBQUcsRUFBRTtZQUN0QixPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ1g7UUFDRCxJQUFJLFdBQVcsSUFBSSxHQUFHLEVBQUU7WUFDdEIsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNYO1FBQ0QsSUFBSSxXQUFXLElBQUksR0FBRyxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7UUFDRCxJQUFJLFdBQVcsSUFBSSxHQUFHLEVBQUU7WUFDdEIsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUVELE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztDQUNGO0FBakJELG9EQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWJzdHJhY3RMdWNrQWRqdXN0bWVudH0gZnJvbSAnLi9BYnN0cmFjdEx1Y2tBZGp1c3RtZW50JztcblxuZXhwb3J0IGNsYXNzIEZpY2tsZUx1Y2tBZGp1c3RtZW50IGV4dGVuZHMgQWJzdHJhY3RMdWNrQWRqdXN0bWVudCB7XG4gIHB1YmxpYyBhZGp1c3RtZW50KHJvbGxQZXJjZW50OiBudW1iZXIgPSAwLjUpOiBudW1iZXIge1xuICAgIGlmIChyb2xsUGVyY2VudCA8PSAwLjEpIHtcbiAgICAgIHJldHVybiAtMjtcbiAgICB9XG4gICAgaWYgKHJvbGxQZXJjZW50IDw9IDAuMikge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAocm9sbFBlcmNlbnQgPj0gMC44KSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKHJvbGxQZXJjZW50ID49IDAuOSkge1xuICAgICAgcmV0dXJuIDI7XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cbiJdfQ==