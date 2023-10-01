import { expect, test, expectTypeOf } from 'vitest'
import { modules } from '@config'
import ObjectName from './moduleName.component'
import config from './moduleName.config.json'
import styles from './moduleName.module.scss'

test('SCSS Module returns an object and contains moduleName', (): void => {
    expect(styles).toBeTruthy()
    expect(styles).toBeTypeOf('object')
    expect(styles.moduleName).toMatch(/(moduleName)/i)
})

test('ObjectName should exist and be a function', (): void => {
    expectTypeOf(ObjectName).toBeFunction()
    expectTypeOf(modules.ObjectName).toBeFunction()
})

test('A Config should exist and return default attributes', (): void => {
    const { name, context } = config
    const { module, animation, duration, utilities, styles } = context.component

    expect(config).toBeTypeOf('object')
    expect(name).toBe('ObjectName')
    expect(module).toBe('ObjectName')
    expect(styles).toBe('moduleName')
    expect(animation).toBeTypeOf('string')
    expect(duration).toBeTypeOf('number')
    expect(utilities).toBeTypeOf('string')
})
