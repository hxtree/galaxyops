import {
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
  Handler,
} from 'aws-lambda';

export type ProxyHandler = Handler<APIGatewayProxyEventV2, APIGatewayProxyResultV2>

export const handler : ProxyHandler = async (event, context) => {
  return {
    "statusCode": 200,
    "body": JSON.stringify({
      message: `Hello2`
    })
  };
};


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