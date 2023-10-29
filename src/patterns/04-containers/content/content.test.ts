import { expect, test, expectTypeOf } from 'vitest'
import { modules } from '@config'
import Content from './content.component'
import config from './content.config.json'
import styles from './content.module.scss'

test('SCSS Module returns an object and contains content', (): void => {
    expect(styles).toBeTruthy()
    expect(styles).toBeTypeOf('object')
    expect(styles.content).toMatch(/(content)/i)
})

test('Content should exist and be a function', (): void => {
    expectTypeOf(Content).toBeFunction()
    expectTypeOf(modules.Content).toBeFunction()
})

test('Config exists and returns correct attributes', (): void => {
    const { animation, duration, modifier, styles } = config.context

    expect(animation).toBeTypeOf('string')
    expect(duration).toBeTypeOf('number')
    expect(modifier).toBeTypeOf('string')
    expect(styles).toBeTypeOf('string')
})
