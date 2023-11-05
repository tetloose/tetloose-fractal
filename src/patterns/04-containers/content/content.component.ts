import styles from './content.module.scss'
import { ComponentClass } from '@utilities'

export class Content extends ComponentClass {
    constructor(module: HTMLElement) {
        super(module)

        this.css(this.module, styles)
    }
}

export default (module: HTMLElement) => new Content(module)
