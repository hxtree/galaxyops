"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = async (event, context) => {
    return {
        "statusCode": 200,
        "body": JSON.stringify({
            message: `Hello2`
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBUU8sTUFBTSxPQUFPLEdBQWtCLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFDN0QsT0FBTztRQUNMLFlBQVksRUFBRSxHQUFHO1FBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3JCLE9BQU8sRUFBRSxRQUFRO1NBQ2xCLENBQUM7S0FDSCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBUFcsUUFBQSxPQUFPLFdBT2xCO0FBR0YsaURBQWlEO0FBQ2pELG9FQUFvRTtBQUNwRSxlQUFlO0FBQ2YseUJBQXlCO0FBQ3pCLHlEQUF5RDtBQUN6RCwrQkFBK0I7QUFDL0IsdUJBQXVCO0FBQ3ZCLFdBQVc7QUFDWCxTQUFTO0FBQ1QsS0FBSztBQUNMLHNEQUFzRDtBQUN0RCxvRUFBb0U7QUFDcEUsZUFBZTtBQUNmLHlCQUF5QjtBQUN6Qix5REFBeUQ7QUFDekQsK0JBQStCO0FBQy9CLHVCQUF1QjtBQUN2QixXQUFXO0FBQ1gsU0FBUztBQUNULEtBQUs7QUFDTCxXQUFXO0FBQ1gsMEJBQTBCO0FBQzFCLDJCQUEyQjtBQUMzQix1QkFBdUI7QUFFdkIsaUdBQWlHO0FBQ2pHLG9FQUFvRTtBQUNwRSxlQUFlO0FBQ2YsMkJBQTJCO0FBQzNCLHFCQUFxQjtBQUNyQixpREFBaUQ7QUFDakQsYUFBYTtBQUNiLGlDQUFpQztBQUNqQyxvREFBb0Q7QUFDcEQsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBRUwsZ0NBQWdDO0FBQ2hDLGdEQUFnRDtBQUNoRCxtQkFBbUI7QUFDbkIsK0JBQStCO0FBQy9CLHlCQUF5QjtBQUN6QixxREFBcUQ7QUFDckQsaUJBQWlCO0FBQ2pCLHFDQUFxQztBQUNyQyx3REFBd0Q7QUFDeEQsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixRQUFRO0FBRVIsc0VBQXNFO0FBQ3RFLG1FQUFtRTtBQUNuRSw2Q0FBNkM7QUFFN0MsZUFBZTtBQUNmLDJCQUEyQjtBQUMzQixxQkFBcUI7QUFDckIsaURBQWlEO0FBQ2pELGFBQWE7QUFDYixpQ0FBaUM7QUFDakMsa0NBQWtDO0FBQ2xDLGlDQUFpQztBQUNqQyx1Q0FBdUM7QUFDdkMsK0JBQStCO0FBQy9CLDZCQUE2QjtBQUM3QixvREFBb0Q7QUFDcEQsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBSUwseURBQXlEO0FBQ3pELEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBUElHYXRld2F5UHJveHlFdmVudFYyLFxuICBBUElHYXRld2F5UHJveHlSZXN1bHRWMixcbiAgSGFuZGxlcixcbn0gZnJvbSAnYXdzLWxhbWJkYSc7XG5cbmV4cG9ydCB0eXBlIFByb3h5SGFuZGxlciA9IEhhbmRsZXI8QVBJR2F0ZXdheVByb3h5RXZlbnRWMiwgQVBJR2F0ZXdheVByb3h5UmVzdWx0VjI+XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyIDogUHJveHlIYW5kbGVyID0gYXN5bmMgKGV2ZW50LCBjb250ZXh0KSA9PiB7XG4gIHJldHVybiB7XG4gICAgXCJzdGF0dXNDb2RlXCI6IDIwMCxcbiAgICBcImJvZHlcIjogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbWVzc2FnZTogYEhlbGxvMmBcbiAgICB9KVxuICB9O1xufTtcblxuXG4vLyBleHBvcnRzLmhhbmRsZXIgPSBhc3luYyBmdW5jdGlvbihldmVudDogYW55KSB7XG4vLyAgICAgY29uc29sZS5sb2coXCJyZXF1ZXN0OlwiLCBKU09OLnN0cmluZ2lmeShldmVudCwgdW5kZWZpbmVkLCAyKSk7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbi8vICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbi8vICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbi8vICAgICAgICAgbWVzc2FnZTogXCJzXCJcbi8vICAgICAgIH0pXG4vLyAgICAgfTtcbi8vIH07XG4vLyBleHBvcnQgY29uc3QgaGFuZGxlciA9IGFzeW5jIGZ1bmN0aW9uKGV2ZW50OiBhbnkpIHtcbi8vICAgICBjb25zb2xlLmxvZyhcInJlcXVlc3Q6XCIsIEpTT04uc3RyaW5naWZ5KGV2ZW50LCB1bmRlZmluZWQsIDIpKTtcbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgc3RhdHVzQ29kZTogMjAwLFxuLy8gICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuLy8gICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuLy8gICAgICAgICBtZXNzYWdlOiBcInNcIlxuLy8gICAgICAgfSlcbi8vICAgICB9O1xuLy8gfTtcbi8vIGltcG9ydCB7XG4vLyAgIEFQSUdhdGV3YXlQcm94eUV2ZW50LFxuLy8gICBBUElHYXRld2F5UHJveHlSZXN1bHQsXG4vLyB9IGZyb20gJ2F3cy1sYW1iZGEnO1xuXG4vLyBjb25zdCBMYW1iZGFIYW5kbGVyID0gYXN5bmMgKGV2ZW50OiBBUElHYXRld2F5UHJveHlFdmVudCk6IFByb21pc2U8QVBJR2F0ZXdheVByb3h5UmVzdWx0PiA9PiB7XG4vLyAgICAgY29uc29sZS5sb2coXCJyZXF1ZXN0OlwiLCBKU09OLnN0cmluZ2lmeShldmVudCwgdW5kZWZpbmVkLCAyKSk7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuLy8gICAgICAgICBoZWFkZXJzOiB7XG4vLyAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbi8vICAgICAgICAgICAgIG1lc3NhZ2U6ICdub3RhdGlvbiBhbmQgbHVjayByZXF1aXJlZCdcbi8vICAgICAgICAgfSlcbi8vICAgICB9O1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgTGFtYmRhSGFuZGxlcjtcbi8vICAgICBpZihldmVudC5xdWVyeVN0cmluZ1BhcmFtZXRlcnMgPT09IG51bGwpe1xuLy8gICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuLy8gICAgICAgICAgICAgaGVhZGVyczoge1xuLy8gICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbi8vICAgICAgICAgICAgIH0sXG4vLyAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4vLyAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ25vdGF0aW9uIGFuZCBsdWNrIHJlcXVpcmVkJ1xuLy8gICAgICAgICAgICAgfSlcbi8vICAgICAgICAgfTtcbi8vICAgICB9XG5cbi8vICAgICBjb25zdCBub3RhdGlvbiA9IGV2ZW50LnF1ZXJ5U3RyaW5nUGFyYW1ldGVycz8ubm90YXRpb24gPz8gJ2Q2Jztcbi8vICAgICBjb25zdCBsdWNrID0gTnVtYmVyKGV2ZW50LnF1ZXJ5U3RyaW5nUGFyYW1ldGVycz8ubHVjaykgPz8gMDtcbi8vICAgICBjb25zdCB0dXJuID0gbmV3IFR1cm4obm90YXRpb24sIGx1Y2spO1xuICAgIFxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbi8vICAgICAgICAgaGVhZGVyczoge1xuLy8gICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4vLyAgICAgICAgICAgICBtZXNzYWdlOiAnU3VjY2VzcycsXG4vLyAgICAgICAgICAgICByb2xsOiB0dXJuLnJvbGwoKSxcbi8vICAgICAgICAgICAgIG5vdGF0aW9uOiB0dXJuLm5vdGF0aW9uLFxuLy8gICAgICAgICAgICAgbHVjazogdHVybi5sdWNrLFxuLy8gICAgICAgICAgICAgY3VwOiB0dXJuLmN1cCxcbi8vICAgICAgICAgICAgIC8vIGlucHV0OiBldmVudC5xdWVyeVN0cmluZ1BhcmFtZXRlcnNcbi8vICAgICAgICAgfSlcbi8vICAgICB9O1xuLy8gfTtcblxuXG5cbi8vIGV4cG9ydCBjb25zdCBleHBvcnRzLmhhbmRsZXIgPSBhc3luYyBmdW5jdGlvbihldmVudCkge1xuLy8gfTsiXX0=