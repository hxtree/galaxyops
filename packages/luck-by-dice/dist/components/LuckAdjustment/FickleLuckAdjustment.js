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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlja2xlTHVja0FkanVzdG1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9MdWNrQWRqdXN0bWVudC9GaWNrbGVMdWNrQWRqdXN0bWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFBa0U7QUFFbEUsTUFBYSxvQkFBcUIsU0FBUSwrQ0FBc0I7SUFFckQsVUFBVSxDQUFDLGNBQXNCLEdBQUc7UUFFdkMsSUFBSSxXQUFXLElBQUcsRUFBRSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDYjthQUFNLElBQUksV0FBVyxJQUFHLEVBQUUsRUFBRTtZQUN6QixPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ2I7YUFBTSxJQUFJLFdBQVcsSUFBRyxFQUFFLEVBQUU7WUFDekIsT0FBTyxDQUFDLENBQUM7U0FDWjthQUFNLElBQUksV0FBVyxJQUFHLEVBQUUsRUFBRTtZQUN6QixPQUFPLENBQUMsQ0FBQztTQUNaO1FBRUQsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0NBQ0o7QUFoQkQsb0RBZ0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RMdWNrQWRqdXN0bWVudCB9IGZyb20gJy4vQWJzdHJhY3RMdWNrQWRqdXN0bWVudCc7XG5cbmV4cG9ydCBjbGFzcyBGaWNrbGVMdWNrQWRqdXN0bWVudCBleHRlbmRzIEFic3RyYWN0THVja0FkanVzdG1lbnRcbntcbiAgICBwdWJsaWMgYWRqdXN0bWVudChyb2xsUGVyY2VudDogbnVtYmVyID0gMC41KTogbnVtYmVyXG4gICAge1xuICAgICAgICBpZiAocm9sbFBlcmNlbnQgPD0uMSkge1xuICAgICAgICAgICAgcmV0dXJuIC0yO1xuICAgICAgICB9IGVsc2UgaWYgKHJvbGxQZXJjZW50IDw9LjIpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSBlbHNlIGlmIChyb2xsUGVyY2VudCA+PS44KSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIGlmIChyb2xsUGVyY2VudCA+PS45KSB7XG4gICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbn0iXX0=