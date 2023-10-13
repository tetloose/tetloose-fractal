import { expect, test, expectTypeOf } from 'vitest'
import { modules } from '@config'
import ObjectName from './moduleName.component'
import config from './moduleName.config.json'
import styles from './moduleName.module.scss'

test('SCSS Module returns an object and contains moduleName', (): void => {
    expect(styles).toBeTruthy()
    expect(styles).toBeTypeOf('object')
    expect(styles.figure).toMatch(/(moduleName)/i)
})

test('ObjectName should exist and be a function', (): void => {
    expectTypeOf(ObjectName).toBeFunction()
    expectTypeOf(modules.ObjectName).toBeFunction()
})

test('Component config exists and returns correct attributes', (): void => {
    const { animation, duration, modifier, styles } = config.context.component

    expect(animation).toBeTypeOf('string')
    expect(duration).toBeTypeOf('number')
    expect(modifier).toBeTypeOf('string')
    expect(styles).toBeTypeOf('string')
})
