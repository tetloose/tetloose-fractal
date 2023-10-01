import { test, expect } from 'vitest'
import { objectToString } from './object-to-string.utilities'
import { AppendNode } from './append-node.utilities'
import { request } from './request.utilities'
import { ResponseProps, FetchParams } from './utilities.types'

const fetchTS = <FetchParams>fetch

test('Convert object key value into string used for class names returns is-key-value', () => {
    const object = {
        hello: 'world',
        class: 'name'
    }

    expect(objectToString(object)).toBe('is-hello-world is-class-name')
})

test('Appends string to node', (): void => {
    const div = document.createElement('div')
    const element = '<div class="element"></div>'

    new AppendNode(
        div,
        element
    )

    expect(div.innerHTML).toBe(element)
})

describe('testing api', (): void => {
    beforeEach((): void => {
        fetchTS.resetMocks()
    })

    it('calls google and returns data to me', async (): Promise<void> => {
        fetchTS.mockResponseOnce(JSON.stringify({ data: '12345' }))

        const res = await request<ResponseProps>('https://jsonplaceholder.typicode.com/todos/1')
        expect(res.data).toEqual('12345')
    })
})
