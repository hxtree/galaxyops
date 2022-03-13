"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const Turn_1 = require("./Turn");
const handler = async (event, context) => {
    console.log("request:", JSON.stringify(event, undefined, 2));
    if (event.queryStringParameters === null) {
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'notation and luck required'
            })
        };
    }
    const notation = event.queryStringParameters?.notation ?? 'd6';
    const luck = Number(event.queryStringParameters?.luck) ?? 0;
    const turn = new Turn_1.Turn(notation, luck);
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: 'Success',
            roll: turn.roll(),
            notation: turn.notation,
            luck: turn.luck,
            cup: turn.cup,
            // input: event.queryStringParameters
        })
    };
};
exports.handler = handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBTUEsaUNBQTRCO0FBSXJCLE1BQU0sT0FBTyxHQUFrQixLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdELElBQUcsS0FBSyxDQUFDLHFCQUFxQixLQUFLLElBQUksRUFBQztRQUNsQyxPQUFPO1lBQ0gsVUFBVSxFQUFFLEdBQUc7WUFDZixPQUFPLEVBQUU7Z0JBQ0wsY0FBYyxFQUFFLGtCQUFrQjthQUNyQztZQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNqQixPQUFPLEVBQUUsNEJBQTRCO2FBQ3hDLENBQUM7U0FDTCxDQUFDO0tBQ0w7SUFFRCxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMscUJBQXFCLEVBQUUsUUFBUSxJQUFJLElBQUksQ0FBQztJQUMvRCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1RCxNQUFNLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFdEMsT0FBTztRQUNILFVBQVUsRUFBRSxHQUFHO1FBQ2YsT0FBTyxFQUFFO1lBQ0wsY0FBYyxFQUFFLGtCQUFrQjtTQUNyQztRQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2pCLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixxQ0FBcUM7U0FDeEMsQ0FBQztLQUNMLENBQUM7QUFDTixDQUFDLENBQUM7QUFoQ1csUUFBQSxPQUFPLFdBZ0NsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFQSUdhdGV3YXlQcm94eUV2ZW50VjIsXG4gIEFQSUdhdGV3YXlQcm94eVJlc3VsdFYyLFxuICBIYW5kbGVyLFxufSBmcm9tICdhd3MtbGFtYmRhJztcblxuaW1wb3J0IHtUdXJufSBmcm9tICcuL1R1cm4nO1xuXG5leHBvcnQgdHlwZSBQcm94eUhhbmRsZXIgPSBIYW5kbGVyPEFQSUdhdGV3YXlQcm94eUV2ZW50VjIsIEFQSUdhdGV3YXlQcm94eVJlc3VsdFYyPlxuXG5leHBvcnQgY29uc3QgaGFuZGxlciA6IFByb3h5SGFuZGxlciA9IGFzeW5jIChldmVudCwgY29udGV4dCkgPT4ge1xuICBjb25zb2xlLmxvZyhcInJlcXVlc3Q6XCIsIEpTT04uc3RyaW5naWZ5KGV2ZW50LCB1bmRlZmluZWQsIDIpKTtcbiAgaWYoZXZlbnQucXVlcnlTdHJpbmdQYXJhbWV0ZXJzID09PSBudWxsKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdub3RhdGlvbiBhbmQgbHVjayByZXF1aXJlZCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3Qgbm90YXRpb24gPSBldmVudC5xdWVyeVN0cmluZ1BhcmFtZXRlcnM/Lm5vdGF0aW9uID8/ICdkNic7XG4gICAgY29uc3QgbHVjayA9IE51bWJlcihldmVudC5xdWVyeVN0cmluZ1BhcmFtZXRlcnM/Lmx1Y2spID8/IDA7XG4gICAgY29uc3QgdHVybiA9IG5ldyBUdXJuKG5vdGF0aW9uLCBsdWNrKTtcbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgbWVzc2FnZTogJ1N1Y2Nlc3MnLFxuICAgICAgICAgICAgcm9sbDogdHVybi5yb2xsKCksXG4gICAgICAgICAgICBub3RhdGlvbjogdHVybi5ub3RhdGlvbixcbiAgICAgICAgICAgIGx1Y2s6IHR1cm4ubHVjayxcbiAgICAgICAgICAgIGN1cDogdHVybi5jdXAsXG4gICAgICAgICAgICAvLyBpbnB1dDogZXZlbnQucXVlcnlTdHJpbmdQYXJhbWV0ZXJzXG4gICAgICAgIH0pXG4gICAgfTtcbn07Il19