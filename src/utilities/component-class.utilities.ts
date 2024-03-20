import { LoadingProps, MotionOptionsProps, StateProps } from './utilities.types'

export class ComponentClass {
    module: HTMLElement
    state: {
        motionOptions: MotionOptionsProps;
        loading: LoadingProps
        [key: string]: StateProps;
    }

    constructor(module: HTMLElement) {
        const { dataset } = module
        const { animation, duration } = dataset

        this.module = module
        this.state = {
            motionOptions: {
                observed: false,
                scrollListener: () => this.handleMotion(),
                property: 'scroll'
            },
            loading: {
                animation: animation ?? undefined,
                duration: parseInt(duration ?? '0', 10)
            }
        }
    }

    load() {
        const { module, state } = this
        const { classList } = module
        const { loading } = state
        const { animation, duration } = loading

        module.style.opacity = ''

        setTimeout(() => {
            if (animation) classList.add(`u-load-${animation}`)

            setTimeout(() => {
                classList.forEach(className => className.includes('u-load-') && classList.remove(className))
            }, duration)
        }, duration)
    }

    updateState(key: string, value: StateProps) {
        const { state } = this

        if (state) {
            state[key] = value
        }
    }

    css<T>(element: HTMLElement, styles: T, loadDuration = 0) {
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

        setTimeout(() => {
            this.load()
        }, loadDuration)
    }

    motion(property = 'scroll') {
        const { module, state } = this
        const { motionOptions } = state

        this.updateState('motionOptions', {
            ...motionOptions,
            property: property
        })
        this.handleMotion()

        const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                const { state } = this
                const { motionOptions } = state
                const { isIntersecting } = entry
                const { scrollListener, observed } = motionOptions

                if (isIntersecting && !observed) {
                    window.addEventListener('scroll', scrollListener)
                    this.updateState('motionOptions', { ...motionOptions, observed: true })

                } else if (observed) {
                    window.removeEventListener('scroll', scrollListener)
                    this.updateState('motionOptions', { ...motionOptions, observed: false })
                }
            })
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0
        })

        observer.observe(module)
    }

    handleMotion() {
        const { module, state } = this
        const { property } = state.motionOptions
        const top = module.getBoundingClientRect().top
        const height = module.getBoundingClientRect().height
        const viewportHeight = window.innerHeight

        let scrollValue = Math.max(0, 1 - (top + height) / (viewportHeight + height))
        scrollValue = Math.min(1, scrollValue)

        module.style.setProperty(`--${property}`, `${scrollValue}`)
    }
}
