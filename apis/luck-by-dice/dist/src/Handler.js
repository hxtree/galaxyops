"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const Turn_1 = require("./Turn");
const handler = async (event, context) => {
    console.log('request:', JSON.stringify(event, undefined, 2));
    console.log('context:', JSON.stringify(context, undefined, 2));
    if (event.queryStringParameters === null) {
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
            },
            body: JSON.stringify({
                message: 'notation and luck required',
            }),
        };
    }
    const notation = event.queryStringParameters?.notation ?? 'd6';
    const luck = Number(event.queryStringParameters?.luck) ?? 0;
    const turn = new Turn_1.Turn(notation, luck);
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
        },
        body: JSON.stringify({
            message: 'Success',
            data: {
                total: turn.roll(),
                luck: turn.luck.value,
                min: turn.minPotential(),
                max: turn.maxPotential(),
                bonus: turn.extraBonus,
            },
        }),
    };
};
exports.handler = handler;
exports.default = exports.handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQU1BLGlDQUE0QjtBQU9yQixNQUFNLE9BQU8sR0FBaUIsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRTtJQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRCxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsS0FBSyxJQUFJLEVBQUU7UUFDeEMsT0FBTztZQUNMLFVBQVUsRUFBRSxHQUFHO1lBQ2YsT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLDZCQUE2QixFQUFFLEdBQUc7Z0JBQ2xDLGtDQUFrQyxFQUFFLE1BQU07YUFDM0M7WUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFDbkIsT0FBTyxFQUFFLDRCQUE0QjthQUN0QyxDQUFDO1NBQ0gsQ0FBQztLQUNIO0lBRUQsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLHFCQUFxQixFQUFFLFFBQVEsSUFBSSxJQUFJLENBQUM7SUFDL0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRXRDLE9BQU87UUFDTCxVQUFVLEVBQUUsR0FBRztRQUNmLE9BQU8sRUFBRTtZQUNQLGNBQWMsRUFBRSxrQkFBa0I7WUFDbEMsNkJBQTZCLEVBQUUsR0FBRztZQUNsQyxrQ0FBa0MsRUFBRSxNQUFNO1NBQzNDO1FBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbkIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNsQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO2dCQUNyQixHQUFHLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDeEIsR0FBRyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3hCLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVTthQUN2QjtTQUNGLENBQUM7S0FDSCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBdkNXLFFBQUEsT0FBTyxXQXVDbEI7QUFFRixrQkFBZSxlQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBUElHYXRld2F5UHJveHlFdmVudFYyLFxuICBBUElHYXRld2F5UHJveHlSZXN1bHRWMixcbiAgSGFuZGxlcixcbn0gZnJvbSAnYXdzLWxhbWJkYSc7XG5cbmltcG9ydCB7VHVybn0gZnJvbSAnLi9UdXJuJztcblxuZXhwb3J0IHR5cGUgUHJveHlIYW5kbGVyID0gSGFuZGxlcjxcbiAgQVBJR2F0ZXdheVByb3h5RXZlbnRWMixcbiAgQVBJR2F0ZXdheVByb3h5UmVzdWx0VjJcbj47XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyOiBQcm94eUhhbmRsZXIgPSBhc3luYyAoZXZlbnQsIGNvbnRleHQpID0+IHtcbiAgY29uc29sZS5sb2coJ3JlcXVlc3Q6JywgSlNPTi5zdHJpbmdpZnkoZXZlbnQsIHVuZGVmaW5lZCwgMikpO1xuICBjb25zb2xlLmxvZygnY29udGV4dDonLCBKU09OLnN0cmluZ2lmeShjb250ZXh0LCB1bmRlZmluZWQsIDIpKTtcbiAgaWYgKGV2ZW50LnF1ZXJ5U3RyaW5nUGFyYW1ldGVycyA9PT0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXG4gICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFscyc6ICd0cnVlJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG1lc3NhZ2U6ICdub3RhdGlvbiBhbmQgbHVjayByZXF1aXJlZCcsXG4gICAgICB9KSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3Qgbm90YXRpb24gPSBldmVudC5xdWVyeVN0cmluZ1BhcmFtZXRlcnM/Lm5vdGF0aW9uID8/ICdkNic7XG4gIGNvbnN0IGx1Y2sgPSBOdW1iZXIoZXZlbnQucXVlcnlTdHJpbmdQYXJhbWV0ZXJzPy5sdWNrKSA/PyAwO1xuICBjb25zdCB0dXJuID0gbmV3IFR1cm4obm90YXRpb24sIGx1Y2spO1xuXG4gIHJldHVybiB7XG4gICAgc3RhdHVzQ29kZTogMjAwLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzJzogJ3RydWUnLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbWVzc2FnZTogJ1N1Y2Nlc3MnLFxuICAgICAgZGF0YToge1xuICAgICAgICB0b3RhbDogdHVybi5yb2xsKCksXG4gICAgICAgIGx1Y2s6IHR1cm4ubHVjay52YWx1ZSxcbiAgICAgICAgbWluOiB0dXJuLm1pblBvdGVudGlhbCgpLFxuICAgICAgICBtYXg6IHR1cm4ubWF4UG90ZW50aWFsKCksXG4gICAgICAgIGJvbnVzOiB0dXJuLmV4dHJhQm9udXMsXG4gICAgICB9LFxuICAgIH0pLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdfQ==