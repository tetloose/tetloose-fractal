import styles from './moduleName.module.scss'
import { ComponentClass } from '@utilities'

export class ObjectName extends ComponentClass {
    constructor(module: HTMLElement) {
        super(module)

        this.css(this.module, styles)
    }
}

export default (module: HTMLElement) => new ObjectName(module)
