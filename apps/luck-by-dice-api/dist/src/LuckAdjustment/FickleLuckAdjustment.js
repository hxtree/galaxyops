"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FickleLuckAdjustment = void 0;
const AbstractLuckAdjustment_1 = require("./AbstractLuckAdjustment");
class FickleLuckAdjustment extends AbstractLuckAdjustment_1.AbstractLuckAdjustment {
    adjustment(rollPercent = 0.5) {
        if (rollPercent <= .1) {
            return -2;
        }
        else if (rollPercent <= .2) {
            return -1;
        }
        else if (rollPercent >= .8) {
            return 1;
        }
        else if (rollPercent >= .9) {
            return 2;
        }
        return 0;
    }
}
exports.FickleLuckAdjustment = FickleLuckAdjustment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlja2xlTHVja0FkanVzdG1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvTHVja0FkanVzdG1lbnQvRmlja2xlTHVja0FkanVzdG1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQWtFO0FBRWxFLE1BQWEsb0JBQXFCLFNBQVEsK0NBQXNCO0lBRXJELFVBQVUsQ0FBQyxjQUFzQixHQUFHO1FBRXZDLElBQUksV0FBVyxJQUFHLEVBQUUsRUFBRTtZQUNsQixPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ2I7YUFBTSxJQUFJLFdBQVcsSUFBRyxFQUFFLEVBQUU7WUFDekIsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNiO2FBQU0sSUFBSSxXQUFXLElBQUcsRUFBRSxFQUFFO1lBQ3pCLE9BQU8sQ0FBQyxDQUFDO1NBQ1o7YUFBTSxJQUFJLFdBQVcsSUFBRyxFQUFFLEVBQUU7WUFDekIsT0FBTyxDQUFDLENBQUM7U0FDWjtRQUVELE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztDQUNKO0FBaEJELG9EQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0THVja0FkanVzdG1lbnQgfSBmcm9tICcuL0Fic3RyYWN0THVja0FkanVzdG1lbnQnO1xuXG5leHBvcnQgY2xhc3MgRmlja2xlTHVja0FkanVzdG1lbnQgZXh0ZW5kcyBBYnN0cmFjdEx1Y2tBZGp1c3RtZW50XG57XG4gICAgcHVibGljIGFkanVzdG1lbnQocm9sbFBlcmNlbnQ6IG51bWJlciA9IDAuNSk6IG51bWJlclxuICAgIHtcbiAgICAgICAgaWYgKHJvbGxQZXJjZW50IDw9LjEpIHtcbiAgICAgICAgICAgIHJldHVybiAtMjtcbiAgICAgICAgfSBlbHNlIGlmIChyb2xsUGVyY2VudCA8PS4yKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0gZWxzZSBpZiAocm9sbFBlcmNlbnQgPj0uOCkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSBpZiAocm9sbFBlcmNlbnQgPj0uOSkge1xuICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG59Il19