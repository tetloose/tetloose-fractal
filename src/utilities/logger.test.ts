import { expect, test } from 'vitest'
import { logger } from '@utilities'

test('Logger appends error message to node', (): void => {
    const body = document.querySelector('body') as HTMLElement
    const element = (error: string): string => {
        return `
            <div style="position: relative; z-index: 999; width: 100%; padding: 1rem; background-color: #ff69b4; color: #000; font-size: 1rem; text-align: center;">
                ${error ? error : ''}
            </div>
        `
    }

    it('Error should match Errors!', () => {
        const error = 'Errors!'

        logger(error)

        expect(body.innerHTML).toBe(element(error))
    })

    it('Return empty string', () => {
        const error = ''

        logger(error)

        expect(body.innerHTML).toBe(element(error))
    })
})
