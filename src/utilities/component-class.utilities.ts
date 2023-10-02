import { StateProps } from './utilities.types'

export class ComponentClass {
    module: HTMLElement
    animation?: string
    duration?: string
    state?: {
        [key: string]: StateProps
    }

    constructor(module: HTMLElement) {
        this.module = module
        this.animation = module.dataset.animation && module.dataset.animation
        this.duration = module.dataset.duration && module.dataset.duration

        this.state = {}
    }

    animate() {
        const { module, animation, duration } = this
        module.removeAttribute('style')

        if (module && animation && duration) {
            setTimeout(() => {
                module.classList.add(`u-animate-${this.animation}`)

                setTimeout(() => {
                    module.classList.remove('u-animate-hide', `u-animate-${this.animation}`)
                    this.cleanUp()
                }, parseInt(duration))
            }, parseInt(duration))
        }
    }

    updateState(key: string, value: StateProps) {
        const { state } = this

        if (state) {
            state[key] = value
        }
    }

    cssModule(element: HTMLElement, styles: unknown) {
        if (styles && element && typeof styles === 'object') {
            const { dataset, classList } = element

            Object
                .entries(styles)
                .forEach(([key, value]) => dataset.styles?.split(' ').includes(key) &&
                    `${classList.add(value)}`
                )

            element.querySelectorAll('[data-styles]')
                .forEach(elem => {
                    if (elem instanceof HTMLElement) {
                        const { dataset, classList } = elem

                        Object
                            .entries(styles)
                            .forEach(([key, value]) => dataset.styles?.split(' ').includes(key) &&
                                `${classList.add(value)}`
                            )
                    }
                })
        }

        this.animate()
    }

    cleanUp() {
        const { module } = this

        module.removeAttribute('data-styles')
        module.querySelectorAll('[data-styles]')
            .forEach(attr => attr.removeAttribute('data-styles'))
        module.removeAttribute('data-animation')
        module.removeAttribute('data-duration')
        module.removeAttribute('data-module')
    }
}
