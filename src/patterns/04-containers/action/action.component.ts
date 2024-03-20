import styles from './action.module.scss'
import { ComponentClass } from '@utilities'

export class Action extends ComponentClass {
    constructor(module: HTMLElement) {
        super(module)

        this.css(module, styles)
    }
}

export default (module: HTMLElement) => new Action(module)
