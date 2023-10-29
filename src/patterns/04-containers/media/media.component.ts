import styles from './media.module.scss'
import { ComponentClass } from '@/utilities'

export class Media extends ComponentClass {
    constructor(module: HTMLElement) {
        super(module)

        this.css(this.module, styles)
    }
}

export default (module: HTMLElement) => new Media(module)
