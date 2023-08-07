'use strict'

import { lambda_handler } from '../../index.mjs'

import { describe, it } from 'mocha'
import { expect } from 'chai'

import 'dotenv/config'

let event, context

describe('Index::Function', () => {
    it('Verifies successful response', async () => {
        const result = await lambda_handler(event, context)

        expect(result).to.be.an('object')
        expect(result.statusCode).to.equal(200)
        expect(result.body).to.be.an('string')

        const response = JSON.parse(result.body)

        expect(response).to.be.an('object')
        expect(response.message).to.be.equal('200 OK')
        expect(response.event).to.be.equal(undefined)
        expect(response.id).to.be.equal(process.env.AWS_ID)
        expect(response.context).to.be.equal(undefined)
    })
})
