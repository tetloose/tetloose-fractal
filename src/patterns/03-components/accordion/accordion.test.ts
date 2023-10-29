import { expect, test, expectTypeOf } from 'vitest'
import { modules } from '@config'
import Accordion from './accordion.component'
import config from './accordion.config.json'
import styles from './accordion.module.scss'

test('SCSS Module returns an object and contains accordion', (): void => {
    expect(styles).toBeTruthy()
    expect(styles).toBeTypeOf('object')
    expect(styles.accordion).toMatch(/(accordion)/i)
})

test('Accordion should exist and be a function', (): void => {
    expectTypeOf(Accordion).toBeFunction()
    expectTypeOf(modules.Accordion).toBeFunction()
})

test('Config exists and returns correct attributes', (): void => {
    const { animation, duration, modifier, styles } = config.context

    expect(animation).toBeTypeOf('string')
    expect(duration).toBeTypeOf('number')
    expect(modifier).toBeTypeOf('string')
    expect(styles).toBeTypeOf('string')
})

test('Accordion config should return correct attributes', (): void => {
    const { accordionDuration, ariaLabelledBy, items } = config.context

    expect(accordionDuration).toBeTypeOf('number')
    expect(ariaLabelledBy).toBeTypeOf('string')
    expect(items).toBeTypeOf('object')
})
