import { expect, test } from 'vitest'
import { imageElement, iframeElement } from '@elements'
import { iframeProps, ImageProps } from '@/elements/element.types'

const imageData: ImageProps = {
    className: 'class-name',
    styles: 'style-name',
    alt: 'This is alt text',
    mobile: 'https://picsum.photos/200/200',
    tablet: 'https://picsum.photos/400/400',
    desktop: 'https://picsum.photos/600/600'
}
const iframeData: iframeProps = {
    src: 'https://www.youtube.com/embed/M4mM97qbva4',
    ratio: '16x9',
    rest: 'title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen'
}
const iframe = iframeElement(iframeData)

test('imageElement exists and return an HTMLImageElement', (): void => {
    expect(imageElement(imageData)).toBeTypeOf('object')
    expect(imageElement(imageData)).toBeInstanceOf(HTMLImageElement)
})

test('iFrame function exists and returns a string', (): void => {
    expect(iframe).toBeTruthy()
    expect(iframe).toBeTypeOf('string')
    expect(iframe).toMatch(/(M4mM97qbva4|16x9)/i)
})
