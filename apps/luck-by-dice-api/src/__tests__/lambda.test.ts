import {APIGatewayProxyEvent} from 'aws-lambda';
import {handler} from '../index';

test('Lambda returns success', async () => {
    const event = {} as APIGatewayProxyEvent;
    const result = await handler(event);
    expect(result.statusCode).toBe(200);
});
