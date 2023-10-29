import styles from './figure.module.scss'
import { ComponentClass } from '@/utilities'
import { imageElement } from '@/elements'

export class Figure extends ComponentClass {
    constructor(module: HTMLElement) {
        super(module)

        this.createFigure()
    }

    createFigure() {
        const { module } = this
        const { imageClassName, imageStyles, imageAlt, imageMobile, imageTablet, imageDesktop } = module.dataset
        const imageData = {
            className: imageClassName ? imageClassName : '',
            styles: imageStyles ? imageStyles : '',
            alt: imageAlt ? imageAlt : '',
            mobile: imageMobile ? imageMobile : '',
            tablet: imageTablet ? imageTablet : '',
            desktop: imageDesktop ? imageDesktop : ''
        }
        const image = imageElement(imageData)

        image.onload = () => {
            module.appendChild(image)

            this.css(module, styles)
        }
    }
}

export default (module: HTMLElement) => new Figure(module)
