import styles from './modal.module.scss'
import { ComponentClass, HTMLProps, ButtonProps } from '@utilities'

export class Modal extends ComponentClass {
    modalOpen: ButtonProps
    modalClose: ButtonProps
    modalWindow: HTMLProps

    constructor(module: HTMLElement) {
        super(module)

        this.modalOpen = this.module.querySelector('.js-modalOpen')
        this.modalClose = this.module.querySelector('.js-modalClose')
        this.modalWindow = this.module.querySelector('.js-modalWindow')
        this.css(module, styles)
        this.loadEventListeners()
    }

    loadEventListeners() {
        const { modalOpen, modalClose } = this

        modalOpen?.addEventListener('click', () => this.openModal())
        modalClose?.addEventListener('click', () => this.closeModal())
        document.addEventListener('keydown', (e: KeyboardEvent) => e.key === 'Escape' && this.closeModal())
    }

    openModal() {
        const { modalWindow } = this

        modalWindow?.classList.add(styles['is-active'])
    }

    closeModal() {
        const { modalWindow } = this

        modalWindow?.classList.remove(styles['is-active'])
    }
}

export default (module: HTMLElement) => new Modal(module)
