import { expect, test, expectTypeOf } from 'vitest'
import { modules } from '@config'
import Gallery from './gallery.component'
import config from './gallery.config.json'
import styles from './gallery.module.scss'

test('SCSS Module returns an object and contains gallery', (): void => {
    expect(styles).toBeTruthy()
    expect(styles).toBeTypeOf('object')
    expect(styles['gallery']).toMatch(/(gallery)/i)
})

test('Gallery should exist and be a function', (): void => {
    expectTypeOf(Gallery).toBeFunction()
    expectTypeOf(modules.Gallery).toBeFunction()
})

test('Config exists and returns correct attributes', (): void => {
    const { animation, duration, modifier, styles } = config.context

    expect(animation).toBeTypeOf('string')
    expect(duration).toBeTypeOf('number')
    expect(modifier).toBeTypeOf('string')
    expect(styles).toBeTypeOf('string')
})
