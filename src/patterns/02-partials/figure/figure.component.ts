import { ComponentClass } from '@utilities'
import { imageElement } from '@elements'

export class Figure extends ComponentClass {
    constructor(module: HTMLElement) {
        super(module)

        this.createFigure()
    }

    createFigure() {
        const { module, state } = this
        const { loading } = state
        const { duration } = loading
        const {
            alt,
            mobile,
            tablet,
            desktop
        } = module.dataset
        const imageData = {
            alt: alt ? alt : '',
            mobile: mobile ? mobile : '',
            tablet: tablet ? tablet : '',
            desktop: desktop ? desktop : ''
        }
        const placeholder = module.querySelector('[data-placeholder]') as HTMLImageElement
        const spinner = module.querySelector('.js-loading') as HTMLImageElement
        const image = imageElement(imageData)

        image.onload = () => {
            module.appendChild(image)

            this.load()

            setTimeout(() => {
                if (placeholder) placeholder.remove()
                if (spinner) spinner.classList.add('u-load-hide')
                image.classList.remove('is-loading')
            }, duration)
        }
    }
}

export default (module: HTMLElement) => new Figure(module)
