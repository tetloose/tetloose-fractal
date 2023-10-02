import styles from './figure.module.scss'
import { ComponentClass, AppendNode } from '@/utilities'
import { imageElement } from '@/elements'
import { ImageProps } from '@/elements/element.types'

export class Figure extends ComponentClass {
    constructor(module: HTMLElement) {
        super(module)

        this.init()
    }

    init() {
        const { module } = this
        const { dataset } = module
        const { imageClassName, imageStyles, imageAlt, imageMobile, imageTablet, imageDesktop } = dataset
        const imageData: ImageProps = {
            className: imageClassName ? imageClassName : '',
            styles: imageStyles ? imageStyles : '',
            alt: imageAlt ? imageAlt : '',
            sizes: {
                mobile: imageMobile ? imageMobile : '',
                tablet: imageTablet ? imageTablet : '',
                desktop: imageDesktop ? imageDesktop : ''
            }
        }
        const image = imageElement(imageData)

        new AppendNode(module, `${image}`)

        this.cssModule(this.module, styles)
        this.cleanUpComponent()
    }

    cleanUpComponent() {
        const { module } = this

        module.removeAttribute('data-image-class-name')
        module.removeAttribute('data-image-styles')
        module.removeAttribute('data-image-alt')
        module.removeAttribute('data-image-mobile')
        module.removeAttribute('data-image-tablet')
        module.removeAttribute('data-image-desktop')
    }
}

export default (module: HTMLElement) => new Figure(module)
