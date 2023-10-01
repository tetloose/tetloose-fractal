import { expect, test, expectTypeOf } from 'vitest'
import { modules } from '@config'
import Alert from './alert.component'
import config from './alert.config.json'
import styles from './alert.module.scss'

test('SCSS Module returns an object and contains alert', (): void => {
    expect(styles).toBeTruthy()
    expect(styles).toBeTypeOf('object')
    expect(styles.alert).toMatch(/(alert)/i)
})

test('Alert should exist and be a function', (): void => {
    expectTypeOf(Alert).toBeFunction()
    expectTypeOf(modules.Alert).toBeFunction()
})

test('A Config should exist and return default attributes', (): void => {
    const { name, context } = config
    const { module, animation, duration, utilities, styles } = context.component

    expect(config).toBeTypeOf('object')
    expect(name).toBe('Alert')
    expect(module).toBe('Alert')
    expect(styles).toBe('alert')
    expect(animation).toBeTypeOf('string')
    expect(duration).toBeTypeOf('number')
    expect(utilities).toBeTypeOf('string')
})
