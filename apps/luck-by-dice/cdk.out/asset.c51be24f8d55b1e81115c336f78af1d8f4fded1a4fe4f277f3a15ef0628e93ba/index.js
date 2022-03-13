"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const Turn_1 = require("./components/Turn");
const handler = async (event, context) => {
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
// exports.handler = async function(event: any) {
//     console.log("request:", JSON.stringify(event, undefined, 2));
//     return {
//       statusCode: 200,
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         message: "s"
//       })
//     };
// };
// export const handler = async function(event: any) {
//     console.log("request:", JSON.stringify(event, undefined, 2));
//     return {
//       statusCode: 200,
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         message: "s"
//       })
//     };
// };
// import {
//   APIGatewayProxyEvent,
//   APIGatewayProxyResult,
// } from 'aws-lambda';
// const LambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
//     console.log("request:", JSON.stringify(event, undefined, 2));
//     return {
//         statusCode: 200,
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             message: 'notation and luck required'
//         })
//     };
// };
// export default LambdaHandler;
//     if(event.queryStringParameters === null){
//         return {
//             statusCode: 200,
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 message: 'notation and luck required'
//             })
//         };
//     }
//     const notation = event.queryStringParameters?.notation ?? 'd6';
//     const luck = Number(event.queryStringParameters?.luck) ?? 0;
//     const turn = new Turn(notation, luck);
//     return {
//         statusCode: 200,
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             message: 'Success',
//             roll: turn.roll(),
//             notation: turn.notation,
//             luck: turn.luck,
//             cup: turn.cup,
//             // input: event.queryStringParameters
//         })
//     };
// };
// export const exports.handler = async function(event) {
// };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBTUEsNENBQXVDO0FBSWhDLE1BQU0sT0FBTyxHQUFrQixLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFO0lBQzNELElBQUcsS0FBSyxDQUFDLHFCQUFxQixLQUFLLElBQUksRUFBQztRQUNwQyxPQUFPO1lBQ0gsVUFBVSxFQUFFLEdBQUc7WUFDZixPQUFPLEVBQUU7Z0JBQ0wsY0FBYyxFQUFFLGtCQUFrQjthQUNyQztZQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNqQixPQUFPLEVBQUUsNEJBQTRCO2FBQ3hDLENBQUM7U0FDTCxDQUFDO0tBQ0w7SUFFRCxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMscUJBQXFCLEVBQUUsUUFBUSxJQUFJLElBQUksQ0FBQztJQUMvRCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1RCxNQUFNLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFdEMsT0FBTztRQUNILFVBQVUsRUFBRSxHQUFHO1FBQ2YsT0FBTyxFQUFFO1lBQ0wsY0FBYyxFQUFFLGtCQUFrQjtTQUNyQztRQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2pCLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixxQ0FBcUM7U0FDeEMsQ0FBQztLQUNMLENBQUM7QUFDTixDQUFDLENBQUM7QUEvQlcsUUFBQSxPQUFPLFdBK0JsQjtBQUdGLGlEQUFpRDtBQUNqRCxvRUFBb0U7QUFDcEUsZUFBZTtBQUNmLHlCQUF5QjtBQUN6Qix5REFBeUQ7QUFDekQsK0JBQStCO0FBQy9CLHVCQUF1QjtBQUN2QixXQUFXO0FBQ1gsU0FBUztBQUNULEtBQUs7QUFDTCxzREFBc0Q7QUFDdEQsb0VBQW9FO0FBQ3BFLGVBQWU7QUFDZix5QkFBeUI7QUFDekIseURBQXlEO0FBQ3pELCtCQUErQjtBQUMvQix1QkFBdUI7QUFDdkIsV0FBVztBQUNYLFNBQVM7QUFDVCxLQUFLO0FBQ0wsV0FBVztBQUNYLDBCQUEwQjtBQUMxQiwyQkFBMkI7QUFDM0IsdUJBQXVCO0FBRXZCLGlHQUFpRztBQUNqRyxvRUFBb0U7QUFDcEUsZUFBZTtBQUNmLDJCQUEyQjtBQUMzQixxQkFBcUI7QUFDckIsaURBQWlEO0FBQ2pELGFBQWE7QUFDYixpQ0FBaUM7QUFDakMsb0RBQW9EO0FBQ3BELGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUVMLGdDQUFnQztBQUNoQyxnREFBZ0Q7QUFDaEQsbUJBQW1CO0FBQ25CLCtCQUErQjtBQUMvQix5QkFBeUI7QUFDekIscURBQXFEO0FBQ3JELGlCQUFpQjtBQUNqQixxQ0FBcUM7QUFDckMsd0RBQXdEO0FBQ3hELGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsUUFBUTtBQUVSLHNFQUFzRTtBQUN0RSxtRUFBbUU7QUFDbkUsNkNBQTZDO0FBRTdDLGVBQWU7QUFDZiwyQkFBMkI7QUFDM0IscUJBQXFCO0FBQ3JCLGlEQUFpRDtBQUNqRCxhQUFhO0FBQ2IsaUNBQWlDO0FBQ2pDLGtDQUFrQztBQUNsQyxpQ0FBaUM7QUFDakMsdUNBQXVDO0FBQ3ZDLCtCQUErQjtBQUMvQiw2QkFBNkI7QUFDN0Isb0RBQW9EO0FBQ3BELGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUlMLHlEQUF5RDtBQUN6RCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQVBJR2F0ZXdheVByb3h5RXZlbnRWMixcbiAgQVBJR2F0ZXdheVByb3h5UmVzdWx0VjIsXG4gIEhhbmRsZXIsXG59IGZyb20gJ2F3cy1sYW1iZGEnO1xuXG5pbXBvcnQge1R1cm59IGZyb20gJy4vY29tcG9uZW50cy9UdXJuJztcblxuZXhwb3J0IHR5cGUgUHJveHlIYW5kbGVyID0gSGFuZGxlcjxBUElHYXRld2F5UHJveHlFdmVudFYyLCBBUElHYXRld2F5UHJveHlSZXN1bHRWMj5cblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgOiBQcm94eUhhbmRsZXIgPSBhc3luYyAoZXZlbnQsIGNvbnRleHQpID0+IHtcbiAgICBpZihldmVudC5xdWVyeVN0cmluZ1BhcmFtZXRlcnMgPT09IG51bGwpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ25vdGF0aW9uIGFuZCBsdWNrIHJlcXVpcmVkJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBub3RhdGlvbiA9IGV2ZW50LnF1ZXJ5U3RyaW5nUGFyYW1ldGVycz8ubm90YXRpb24gPz8gJ2Q2JztcbiAgICBjb25zdCBsdWNrID0gTnVtYmVyKGV2ZW50LnF1ZXJ5U3RyaW5nUGFyYW1ldGVycz8ubHVjaykgPz8gMDtcbiAgICBjb25zdCB0dXJuID0gbmV3IFR1cm4obm90YXRpb24sIGx1Y2spO1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBtZXNzYWdlOiAnU3VjY2VzcycsXG4gICAgICAgICAgICByb2xsOiB0dXJuLnJvbGwoKSxcbiAgICAgICAgICAgIG5vdGF0aW9uOiB0dXJuLm5vdGF0aW9uLFxuICAgICAgICAgICAgbHVjazogdHVybi5sdWNrLFxuICAgICAgICAgICAgY3VwOiB0dXJuLmN1cCxcbiAgICAgICAgICAgIC8vIGlucHV0OiBldmVudC5xdWVyeVN0cmluZ1BhcmFtZXRlcnNcbiAgICAgICAgfSlcbiAgICB9O1xufTtcblxuXG4vLyBleHBvcnRzLmhhbmRsZXIgPSBhc3luYyBmdW5jdGlvbihldmVudDogYW55KSB7XG4vLyAgICAgY29uc29sZS5sb2coXCJyZXF1ZXN0OlwiLCBKU09OLnN0cmluZ2lmeShldmVudCwgdW5kZWZpbmVkLCAyKSk7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbi8vICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbi8vICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbi8vICAgICAgICAgbWVzc2FnZTogXCJzXCJcbi8vICAgICAgIH0pXG4vLyAgICAgfTtcbi8vIH07XG4vLyBleHBvcnQgY29uc3QgaGFuZGxlciA9IGFzeW5jIGZ1bmN0aW9uKGV2ZW50OiBhbnkpIHtcbi8vICAgICBjb25zb2xlLmxvZyhcInJlcXVlc3Q6XCIsIEpTT04uc3RyaW5naWZ5KGV2ZW50LCB1bmRlZmluZWQsIDIpKTtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgc3RhdHVzQ29kZTogMjAwLFxuLy8gICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuLy8gICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuLy8gICAgICAgICBtZXNzYWdlOiBcInNcIlxuLy8gICAgICAgfSlcbi8vICAgICB9O1xuLy8gfTtcbi8vIGltcG9ydCB7XG4vLyAgIEFQSUdhdGV3YXlQcm94eUV2ZW50LFxuLy8gICBBUElHYXRld2F5UHJveHlSZXN1bHQsXG4vLyB9IGZyb20gJ2F3cy1sYW1iZGEnO1xuXG4vLyBjb25zdCBMYW1iZGFIYW5kbGVyID0gYXN5bmMgKGV2ZW50OiBBUElHYXRld2F5UHJveHlFdmVudCk6IFByb21pc2U8QVBJR2F0ZXdheVByb3h5UmVzdWx0PiA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coXCJyZXF1ZXN0OlwiLCBKU09OLnN0cmluZ2lmeShldmVudCwgdW5kZWZpbmVkLCAyKSk7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuLy8gICAgICAgICBoZWFkZXJzOiB7XG4vLyAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbi8vICAgICAgICAgICAgIG1lc3NhZ2U6ICdub3RhdGlvbiBhbmQgbHVjayByZXF1aXJlZCdcbi8vICAgICAgICAgfSlcbi8vICAgICB9O1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgTGFtYmRhSGFuZGxlcjtcbi8vICAgICBpZihldmVudC5xdWVyeVN0cmluZ1BhcmFtZXRlcnMgPT09IG51bGwpe1xuLy8gICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuLy8gICAgICAgICAgICAgaGVhZGVyczoge1xuLy8gICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbi8vICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4vLyAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ25vdGF0aW9uIGFuZCBsdWNrIHJlcXVpcmVkJ1xuLy8gICAgICAgICAgICAgfSlcbi8vICAgICAgICAgfTtcbi8vICAgICB9XG5cbi8vICAgICBjb25zdCBub3RhdGlvbiA9IGV2ZW50LnF1ZXJ5U3RyaW5nUGFyYW1ldGVycz8ubm90YXRpb24gPz8gJ2Q2Jztcbi8vICAgICBjb25zdCBsdWNrID0gTnVtYmVyKGV2ZW50LnF1ZXJ5U3RyaW5nUGFyYW1ldGVycz8ubHVjaykgPz8gMDtcbi8vICAgICBjb25zdCB0dXJuID0gbmV3IFR1cm4obm90YXRpb24sIGx1Y2spO1xuICAgIFxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbi8vICAgICAgICAgaGVhZGVyczoge1xuLy8gICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4vLyAgICAgICAgICAgICBtZXNzYWdlOiAnU3VjY2VzcycsXG4vLyAgICAgICAgICAgICByb2xsOiB0dXJuLnJvbGwoKSxcbi8vICAgICAgICAgICAgIG5vdGF0aW9uOiB0dXJuLm5vdGF0aW9uLFxuLy8gICAgICAgICAgICAgbHVjazogdHVybi5sdWNrLFxuLy8gICAgICAgICAgICAgY3VwOiB0dXJuLmN1cCxcbi8vICAgICAgICAgICAgIC8vIGlucHV0OiBldmVudC5xdWVyeVN0cmluZ1BhcmFtZXRlcnNcbi8vICAgICAgICAgfSlcbi8vICAgICB9O1xuLy8gfTtcblxuXG5cbi8vIGV4cG9ydCBjb25zdCBleHBvcnRzLmhhbmRsZXIgPSBhc3luYyBmdW5jdGlvbihldmVudCkge1xuLy8gfTsiXX0=