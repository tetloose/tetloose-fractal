import { expect, test, expectTypeOf } from 'vitest'
import { modules } from '@config'
import Modal from './modal.component'
import config from './modal.config.json'
import styles from './modal.module.scss'

test('SCSS Module returns an object and contains modal', (): void => {
    expect(styles).toBeTruthy()
    expect(styles).toBeTypeOf('object')
    expect(styles['modal']).toMatch(/(modal)/i)
})

test('Modal should exist and be a function', (): void => {
    expectTypeOf(Modal).toBeFunction()
    expectTypeOf(modules.Modal).toBeFunction()
})

test('Config exists and returns correct attributes', (): void => {
    const { animation, duration, modifier, styles } = config.context

    expect(animation).toBeTypeOf('string')
    expect(duration).toBeTypeOf('number')
    expect(modifier).toBeTypeOf('string')
    expect(styles).toBeTypeOf('string')
})
