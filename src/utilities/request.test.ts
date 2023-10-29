import { describe, expect, it } from 'vitest'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { request } from './request.utilities'

const server = setupServer(
    rest.get('/sample-api', (_req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({ message: 'Mocked Response' })
        )
    })
)

describe('testing api', (): void => {
    beforeEach(() => {
        server.listen()
    })

    afterEach(() => {
        server.close()
    })

    it('should fetch data from a mock API', async () => {
        const url = '/sample-api'
        const response = await request<{ message: string }>(url)

        expect(response.message).toBe('Mocked Response')
    })
})
