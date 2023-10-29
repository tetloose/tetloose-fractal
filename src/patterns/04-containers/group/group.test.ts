import { expect, test, expectTypeOf } from 'vitest'
import { modules } from '@config'
import Group from './group.component'
import config from './group.config.json'
import styles from './group.module.scss'

test('SCSS Module returns an object and contains group', (): void => {
    expect(styles).toBeTruthy()
    expect(styles).toBeTypeOf('object')
    expect(styles['group']).toMatch(/(group)/i)
})

test('Group should exist and be a function', (): void => {
    expectTypeOf(Group).toBeFunction()
    expectTypeOf(modules.Group).toBeFunction()
})

test('Config exists and returns correct attributes', (): void => {
    const { animation, duration, modifier, styles } = config.context

    expect(animation).toBeTypeOf('string')
    expect(duration).toBeTypeOf('number')
    expect(modifier).toBeTypeOf('string')
    expect(styles).toBeTypeOf('string')
})
