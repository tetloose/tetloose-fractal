import styles from './form.module.scss'
import { ComponentClass } from '@utilities'

export class Form extends ComponentClass {
    constructor(module: HTMLElement) {
        super(module)

        this.css(module, styles)
    }
}

export default (module: HTMLElement) => new Form(module)
