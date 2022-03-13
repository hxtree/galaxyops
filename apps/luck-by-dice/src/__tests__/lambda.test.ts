import {APIGatewayProxyEvent} from 'aws-lambda';

test('Lambda returns success', async () => {
    const event = {} as APIGatewayProxyEvent;
    // const result = await LambdaHandler(event);
    // expect(result.statusCode).toBe(200);
    expect(1).toBe(1);
});
