import { expect, test, expectTypeOf } from 'vitest'
import { modules } from '@config'
import Figure from './figure.component'
import config from './figure.config.json'
import styles from './figure.module.scss'
import { imageElement, ImageProps } from '@elements'

const imageData: ImageProps = {
    modifier: config.context.image.modifier,
    styles: config.context.image.styles,
    alt: config.context.image.alt,
    mobile: config.context.image.desktop,
    tablet: config.context.image.tablet,
    desktop: config.context.image.mobile
}

test('SCSS Module returns an object and contains figure', (): void => {
    expect(styles).toBeTruthy()
    expect(styles).toBeTypeOf('object')
    expect(styles.figure).toMatch(/(figure)/i)
})

test('Figure should exist and be a function', (): void => {
    expectTypeOf(Figure).toBeFunction()
    expectTypeOf(modules.Figure).toBeFunction()
})

test('Config exists and returns correct attributes', (): void => {
    const { duration, animation, modifier, styles } = config.context

    expect(duration).toBeTypeOf('number')
    expect(animation).toBeTypeOf('string')
    expect(modifier).toBeTypeOf('string')
    expect(styles).toBeTypeOf('string')
})

test('Image config exists and returns correct attributes', (): void => {
    const { modifier, styles, alt, placeholder, mobile, tablet, desktop } = config.context.image

    expect(modifier).toBeTypeOf('string')
    expect(styles).toBeTypeOf('string')
    expect(alt).toBeTypeOf('string')
    expect(placeholder).toBeTypeOf('string')
    expect(mobile).toBeTypeOf('string')
    expect(tablet).toBeTypeOf('string')
    expect(desktop).toBeTypeOf('string')
})

test('imageElement returns HTMLImageElement', (): void => {
    expect(imageElement(imageData)).toBeInstanceOf(HTMLImageElement)
})
