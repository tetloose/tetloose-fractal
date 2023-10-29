import { expect, test, expectTypeOf } from 'vitest'
import { modules } from '@config'
import Form from './form.component'
import config from './form.config.json'
import styles from './form.module.scss'

test('SCSS Module returns an object and contains form', (): void => {
    expect(styles).toBeTruthy()
    expect(styles).toBeTypeOf('object')
    expect(styles.form).toMatch(/(form)/i)
})

test('Form should exist and be a function', (): void => {
    expectTypeOf(Form).toBeFunction()
    expectTypeOf(modules.Form).toBeFunction()
})

test('Config exists and returns correct attributes', (): void => {
    const { animation, duration, modifier, styles } = config.context

    expect(animation).toBeTypeOf('string')
    expect(duration).toBeTypeOf('number')
    expect(modifier).toBeTypeOf('string')
    expect(styles).toBeTypeOf('string')
})
