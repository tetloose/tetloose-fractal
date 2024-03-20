import styles from './accordion.module.scss'
import { ComponentClass, HTMLProps, HTMLNodeProps } from '@utilities'

export class Accordion extends ComponentClass {
    items: HTMLNodeProps
    triggers: HTMLNodeProps
    accordionDuration: number
    prevent: boolean

    constructor(module: HTMLElement) {
        super(module)

        this.items = this.module.querySelectorAll('.js-item')
        this.triggers = this.module.querySelectorAll('.js-trigger')
        this.prevent = false
        this.accordionDuration = this.module.dataset.accordionDuration ? parseInt(`${this.module.dataset.accordionDuration}`) : 200
        this.css(module, styles)
        this.loadEventListeners()
    }

    loadEventListeners(): void {
        const { module } = this

        module.addEventListener('click', (e: MouseEvent): void => {
            const { target } = e

            if (target instanceof HTMLElement && target.classList.contains('js-trigger')) {
                const { index } = target.dataset

                this.updateState(
                    'accordionIndex',
                    index ? parseInt(index, 10) : 0
                )

                this.trigger()
            }
        })
    }

    trigger(): void {
        const { state, items, triggers, accordionDuration } = this
        const item = items ? items[typeof state?.accordionIndex === 'number' ? state.accordionIndex : 0] : null
        const trigger = triggers ? triggers[typeof state?.accordionIndex === 'number' ? state.accordionIndex : 0] : null
        const reveal = item?.querySelector('.js-reveal') as HTMLProps
        const height = reveal ? Accordion.getElementHeight(reveal) : '0px'

        if (!this.prevent && item && trigger && reveal && height) {
            this.prevent = true

            if (!item.classList.contains(styles['is-visible'])) {
                item.classList.add(styles['is-visible'])
                reveal.style.height = height

                setTimeout(() => {
                    reveal.style.height = ''
                    this.prevent = false
                    trigger.setAttribute('aria-expanded', 'true')
                    reveal.focus()
                }, accordionDuration)
            } else {
                reveal.style.height = reveal.scrollHeight + 'px'

                setTimeout(() => {
                    reveal.style.height = '0'
                }, 1)

                setTimeout(() => {
                    item.classList.remove(styles['is-visible'])
                    trigger.setAttribute('aria-expanded', 'false')
                    this.prevent = false
                }, accordionDuration)
            }
        }
    }

    static getElementHeight(elem: HTMLElement): string {
        elem.style.display = 'block'
        const height = `${elem.scrollHeight}px`
        elem.style.display = ''

        return height
    }
}

export default (module: HTMLElement) => new Accordion(module)
