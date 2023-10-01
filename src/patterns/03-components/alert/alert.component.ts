import styles from './alert.module.scss'
import { ComponentClass } from '@/utilities'

export class Alert extends ComponentClass {
    constructor(module: HTMLElement) {
        super(module)

        this.cssModule(this.module, styles)
    }
}

export default (module: HTMLElement) => new Alert(module)
