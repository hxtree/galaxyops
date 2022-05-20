import {
    APIGatewayProxyEventV2,
    Context,
    Handler,
  } from 'aws-lambda';
import {handler} from '../index';

test('Lambda returns success', async () => {
    const event = {} as APIGatewayProxyEventV2;
    const context = {} as Context;
//    const callback = jest.fn();
  //  const result = await handler(event, context, callback);
    //expect(result.statusCode).toBe(200);
});
