import { StateProps } from './utilities.types'

export class ComponentClass {
    module: HTMLElement
    animation?: string
    duration?: number
    type?: string
    state?: {
        [key: string]: StateProps
    }

    constructor(module: HTMLElement) {
        this.module = module
        this.animation = module.dataset.animation && module.dataset.animation
        this.duration = module.dataset.duration ? parseInt(module.dataset.duration) : 0
        this.type = module.dataset.type ? module.dataset.type : ''

        this.state = {}
    }

    animate() {
        const { module, animation, duration, type } = this

        module.removeAttribute('style')

        setTimeout(() => {
            if (animation) {
                module.classList.add(`u-animate-${animation}`)
            }

            setTimeout(() => {
                if (type === 'figure') {
                    setTimeout(() => {
                        module.classList.forEach(className => className.includes('u-animate-') && module.classList.remove(className))
                        module.querySelector('.js-figurePlaceholder')?.remove()
                        module.querySelector('.js-loading')?.remove()
                    }, duration)
                } else {
                    module.classList.forEach(className => className.includes('u-animate-') && module.classList.remove(className))
                }
            }, duration)
        }, duration)
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
}
