import { describe, it, expect } from 'vitest'
import { ComponentClass } from './component-class.utilities'
import { StateProps } from './utilities.types'

describe('ComponentClass', () => {
    const { document } = window
    const module = document.createElement('div')
    const component = new ComponentClass(module)
    const val: StateProps = 'new value'

    module.style.height = '100px'
    module.style.top = '0px'

    it('Should update state with a new value', () => {
        component.updateState('key', val)

        expect(component.state.key).toBe(val)
    })

    it('Should set motionOptions property when calling motion', () => {
        component.motion('scroll')

        expect(component.state.motionOptions.property).toBe('scroll')
    })

    it('Should set the correct scrollValue when the module is at the top', () => {
        component.handleMotion()

        expect(module.style.getPropertyValue('--scroll')).toBe('1')
    })
})
