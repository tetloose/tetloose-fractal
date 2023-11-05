import { ImageProps } from './element.types'

export function imageElement(options: ImageProps): HTMLElement {
    const { modifier, styles, alt, mobile, tablet, desktop } = options
    const image = new Image()
    const srcset = `
        ${desktop ? `${desktop} 1024w,` : ''}
        ${tablet ? `${tablet} 768w,` : ''}
        ${mobile ? `${mobile} 480w` : ''}
    `

    if (mobile) {
        image.src = mobile
    }

    if (modifier) {
        modifier
            .split(' ')
            .forEach(name => name && image.classList.add(name))
    }

    if (styles) {
        image.setAttribute('data-styles', styles)
    }

    image.setAttribute('alt', alt ? alt : '')
    image.setAttribute('srcset', srcset)

    return image
}
