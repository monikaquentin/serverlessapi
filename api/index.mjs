'use strict'

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

import 'dotenv/config'

import HelperClass from './classes/HelperClass.mjs'

export const lambda_handler = async (event, context) => {
    const message = new HelperClass('200 OK')

    try {
        return {
            statusCode: 200,
            body: JSON.stringify({
                id: process.env.AWS_ID,
                message: message.call(),
                event: event,
                context: context
            })
        }
    } catch (error) {
        return {
            body: JSON.stringify({
                message: error.message
            })
        }
    }
}
