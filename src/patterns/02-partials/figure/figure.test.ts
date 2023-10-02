import { expect, test, expectTypeOf } from 'vitest'
import { modules } from '@config'
import Figure from './figure.partial'
import config from './figure.config.json'
import styles from './figure.module.scss'

test('SCSS Module returns an object and contains figure', (): void => {
    expect(styles).toBeTruthy()
    expect(styles).toBeTypeOf('object')
    expect(styles.figure).toMatch(/(figure)/i)
})

test('Figure should exist and be a function', (): void => {
    expectTypeOf(Figure).toBeFunction()
    expectTypeOf(modules.Figure).toBeFunction()
})

test('A Config should exist and return default attributes', (): void => {
    const { name, context } = config
    const { module, animation, duration, modifier, styles } = context.component

    expect(config).toBeTypeOf('object')
    expect(name).toBe('Figure')
    expect(module).toBe('Figure')
    expect(styles).toBe('figure')
    expect(animation).toBeTypeOf('string')
    expect(duration).toBeTypeOf('number')
    expect(modifier).toBeTypeOf('string')
})
