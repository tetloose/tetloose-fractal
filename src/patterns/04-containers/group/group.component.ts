import styles from './group.module.scss'
import { ComponentClass } from '@utilities'

export class Group extends ComponentClass {
    constructor(module: HTMLElement) {
        super(module)

        this.css(this.module, styles)
    }
}

export default (module: HTMLElement) => new Group(module)
