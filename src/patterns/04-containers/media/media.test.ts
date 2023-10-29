import { expect, test, expectTypeOf } from 'vitest'
import { modules } from '@config'
import Media from './media.component'
import config from './media.config.json'
import styles from './media.module.scss'

test('SCSS Module returns an object and contains media', (): void => {
    expect(styles).toBeTruthy()
    expect(styles).toBeTypeOf('object')
    expect(styles.media).toMatch(/(media)/i)
})

test('Media should exist and be a function', (): void => {
    expectTypeOf(Media).toBeFunction()
    expectTypeOf(modules.Media).toBeFunction()
})

test('Config exists and returns correct attributes', (): void => {
    const { animation, duration, modifier, styles } = config.context

    expect(animation).toBeTypeOf('string')
    expect(duration).toBeTypeOf('number')
    expect(modifier).toBeTypeOf('string')
    expect(styles).toBeTypeOf('string')
})
