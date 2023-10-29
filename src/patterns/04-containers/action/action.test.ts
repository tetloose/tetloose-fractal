import { expect, test, expectTypeOf } from 'vitest'
import { modules } from '@config'
import Action from './action.component'
import config from './action.config.json'
import styles from './action.module.scss'

test('SCSS Module returns an object and contains action', (): void => {
    expect(styles).toBeTruthy()
    expect(styles).toBeTypeOf('object')
    expect(styles.action).toMatch(/(action)/i)
})

test('Action should exist and be a function', (): void => {
    expectTypeOf(Action).toBeFunction()
    expectTypeOf(modules.Action).toBeFunction()
})

test('Config exists and returns correct attributes', (): void => {
    const { animation, duration, modifier, styles } = config.context

    expect(animation).toBeTypeOf('string')
    expect(duration).toBeTypeOf('number')
    expect(modifier).toBeTypeOf('string')
    expect(styles).toBeTypeOf('string')
})
