import { expect, test, expectTypeOf } from 'vitest'
import { modules } from '@config'
import Button from './button.component'
import config from './button.config.json'
import styles from './button.module.scss'

test('SCSS Module returns an object and contains button', (): void => {
    expect(styles).toBeTruthy()
    expect(styles).toBeTypeOf('object')
    expect(styles.button).toMatch(/(button)/i)
})

test('Button should exist and be a function', (): void => {
    expectTypeOf(Button).toBeFunction()
    expectTypeOf(modules.Button).toBeFunction()
})

test('Config exists and returns correct attributes', (): void => {
    const { modifier, styles } = config.context

    expect(modifier).toBeTypeOf('string')
    expect(styles).toBeTypeOf('string')
})
