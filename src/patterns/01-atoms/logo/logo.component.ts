import styles from './logo.module.scss'
import { ComponentClass } from '@utilities'

export class Logo extends ComponentClass {
    constructor(module: HTMLElement) {
        super(module)

        this.css(module, styles)
    }
}

export default (module: HTMLElement) => new Logo(module)
