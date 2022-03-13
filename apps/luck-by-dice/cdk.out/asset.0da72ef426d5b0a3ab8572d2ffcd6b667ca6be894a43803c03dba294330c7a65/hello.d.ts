import { APIGatewayProxyEventV2, APIGatewayProxyResultV2, Handler } from 'aws-lambda';
declare type ProxyHandler = Handler<APIGatewayProxyEventV2, APIGatewayProxyResultV2>;
export declare const handler: ProxyHandler;
export {};
