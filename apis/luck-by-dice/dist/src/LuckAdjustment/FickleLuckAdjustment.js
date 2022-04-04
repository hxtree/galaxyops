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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlja2xlTHVja0FkanVzdG1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvTHVja0FkanVzdG1lbnQvRmlja2xlTHVja0FkanVzdG1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQWtFO0FBRWxFLE1BQWEsb0JBQXFCLFNBQVEsK0NBQXNCO0lBRXJELFVBQVUsQ0FBQyxjQUFzQixHQUFHO1FBRXZDLElBQUksV0FBVyxJQUFHLEVBQUUsRUFBRTtZQUNsQixPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ2I7YUFBTSxJQUFJLFdBQVcsSUFBRyxFQUFFLEVBQUU7WUFDekIsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNiO2FBQU0sSUFBSSxXQUFXLElBQUcsRUFBRSxFQUFFO1lBQ3pCLE9BQU8sQ0FBQyxDQUFDO1NBQ1o7YUFBTSxJQUFJLFdBQVcsSUFBRyxFQUFFLEVBQUU7WUFDekIsT0FBTyxDQUFDLENBQUM7U0FDWjtRQUVELE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQztDQUNKO0FBaEJELG9EQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0THVja0FkanVzdG1lbnQgfSBmcm9tICcuL0Fic3RyYWN0THVja0FkanVzdG1lbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpY2tsZUx1Y2tBZGp1c3RtZW50IGV4dGVuZHMgQWJzdHJhY3RMdWNrQWRqdXN0bWVudFxyXG57XHJcbiAgICBwdWJsaWMgYWRqdXN0bWVudChyb2xsUGVyY2VudDogbnVtYmVyID0gMC41KTogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHJvbGxQZXJjZW50IDw9LjEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0yO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocm9sbFBlcmNlbnQgPD0uMikge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyb2xsUGVyY2VudCA+PS44KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocm9sbFBlcmNlbnQgPj0uOSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG59Il19