import styles from './button.module.scss'

import { ComponentClass } from '@/utilities'

export class Button extends ComponentClass {
    constructor(module: HTMLElement) {
        super(module)

        this.css(this.module, styles)
    }
}

export default (module: HTMLElement) => new Button(module)
