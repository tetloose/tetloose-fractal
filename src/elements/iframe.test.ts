import { expect, test } from 'vitest'
import { iframeElement } from '@elements'
import { iframeProps } from '@/elements/element.types'

const iframeData: iframeProps = {
    src: 'https://www.youtube.com/embed/M4mM97qbva4',
    ratio: '16x9',
    rest: 'title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen'
}
const iframe = iframeElement(iframeData)

test('iFrame function exists and returns a string', (): void => {
    expect(iframe).toBeTruthy()
    expect(iframe).toBeTypeOf('string')
    expect(iframe).toMatch(/(M4mM97qbva4|16x9)/i)
})
