import { expect, test, expectTypeOf } from 'vitest'
import { modules } from '@config'
import Logo from './logo.component'
import config from './logo.config.json'
import styles from './logo.module.scss'

test('SCSS Module returns an object and contains logo', (): void => {
    expect(styles).toBeTruthy()
    expect(styles).toBeTypeOf('object')
    expect(styles['logo']).toMatch(/(logo)/i)
})

test('Logo should exist and be a function', (): void => {
    expectTypeOf(Logo).toBeFunction()
    expectTypeOf(modules.Logo).toBeFunction()
})

test('Config exists and returns correct attributes', (): void => {
    const { modifier, styles } = config.context

    expect(modifier).toBeTypeOf('string')
    expect(styles).toBeTypeOf('string')
})
