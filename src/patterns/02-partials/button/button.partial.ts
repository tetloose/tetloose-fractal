import { ComponentClass } from '@utilities'

export class Btn extends ComponentClass {
    constructor(module: HTMLElement) {
        super(module)
    }
}

export default (module: HTMLElement) => new Btn(module)
