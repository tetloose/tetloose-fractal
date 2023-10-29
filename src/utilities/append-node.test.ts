import { test, expect, it } from 'vitest'
import { AppendNode } from './append-node.utilities'

test('AppendNode', (): void => {
    const div = document.createElement('div')
    const element = '<div class="element"></div>'

    it('Should append the element to the node', () => {
        new AppendNode(
            div,
            element
        )

        expect(div.innerHTML).toBe(element)
    })
})
