"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("@aws-cdk/assert");
const cdk = require("@aws-cdk/core");
const AppsyncCdkApp = require("../lib/appsync-cdk-app-stack");
test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new AppsyncCdkApp.AppsyncCdkAppStack(app, 'MyTestStack');
    // THEN
    (0, assert_1.expect)(stack).to((0, assert_1.matchTemplate)({
        "Resources": {}
    }, assert_1.MatchStyle.EXACT));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwc3luYy1jZGstYXBwLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHBzeW5jLWNkay1hcHAudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRDQUFpRjtBQUNqRixxQ0FBcUM7QUFDckMsOERBQThEO0FBRTlELElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO0lBQ3JCLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzFCLE9BQU87SUFDUCxNQUFNLEtBQUssR0FBRyxJQUFJLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDdkUsT0FBTztJQUNQLElBQUEsZUFBUyxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFBLHNCQUFhLEVBQUM7UUFDaEMsV0FBVyxFQUFFLEVBQUU7S0FDaEIsRUFBRSxtQkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7QUFDekIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleHBlY3QgYXMgZXhwZWN0Q0RLLCBtYXRjaFRlbXBsYXRlLCBNYXRjaFN0eWxlIH0gZnJvbSAnQGF3cy1jZGsvYXNzZXJ0JztcclxuaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBBcHBzeW5jQ2RrQXBwIGZyb20gJy4uL2xpYi9hcHBzeW5jLWNkay1hcHAtc3RhY2snO1xyXG5cclxudGVzdCgnRW1wdHkgU3RhY2snLCAoKSA9PiB7XHJcbiAgICBjb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xyXG4gICAgLy8gV0hFTlxyXG4gICAgY29uc3Qgc3RhY2sgPSBuZXcgQXBwc3luY0Nka0FwcC5BcHBzeW5jQ2RrQXBwU3RhY2soYXBwLCAnTXlUZXN0U3RhY2snKTtcclxuICAgIC8vIFRIRU5cclxuICAgIGV4cGVjdENESyhzdGFjaykudG8obWF0Y2hUZW1wbGF0ZSh7XHJcbiAgICAgIFwiUmVzb3VyY2VzXCI6IHt9XHJcbiAgICB9LCBNYXRjaFN0eWxlLkVYQUNUKSlcclxufSk7XHJcbiJdfQ==