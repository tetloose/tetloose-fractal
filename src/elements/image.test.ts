import { expect, test } from 'vitest'
import { imageElement, ImageProps } from '@elements'

const imageData: ImageProps = {
    modifier: 'class-name',
    styles: 'style-name',
    alt: 'This is alt text',
    mobile: 'https://picsum.photos/200/200',
    tablet: 'https://picsum.photos/400/400',
    desktop: 'https://picsum.photos/600/600'
}

test('imageElement exists and return an HTMLImageElement', (): void => {
    expect(imageElement(imageData)).toBeTypeOf('object')
    expect(imageElement(imageData)).toBeInstanceOf(HTMLImageElement)
})

