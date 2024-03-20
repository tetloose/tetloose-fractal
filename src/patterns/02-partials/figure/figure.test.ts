import { expect, test, expectTypeOf } from 'vitest'
import { modules } from '@config'
import Figure from './figure.component'
import config from './figure.config.json'
import { imageElement, ImageProps } from '@elements'

const imageData: ImageProps = {
    alt: config.context.alt,
    mobile: config.context.desktop,
    tablet: config.context.tablet,
    desktop: config.context.mobile
}

test('Figure should exist and be a function', (): void => {
    expectTypeOf(Figure).toBeFunction()
    expectTypeOf(modules.Figure).toBeFunction()
})

test('Image config exists and returns correct attributes', (): void => {
    const { alt, placeholder, mobile, tablet, desktop } = config.context

    expect(alt).toBeTypeOf('string')
    expect(placeholder).toBeTypeOf('string')
    expect(mobile).toBeTypeOf('string')
    expect(tablet).toBeTypeOf('string')
    expect(desktop).toBeTypeOf('string')
})

test('imageElement returns HTMLImageElement', (): void => {
    expect(imageElement(imageData)).toBeInstanceOf(HTMLImageElement)
})
