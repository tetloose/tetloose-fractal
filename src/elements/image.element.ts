import { ImageProps } from './element.types'

export function imageElement(options: ImageProps): HTMLElement {
    const {
        alt,
        mobile,
        tablet,
        desktop
    } = options
    const image = new Image()
    const srcset = `
        ${desktop ? `${desktop} 1024w,` : ''}
        ${tablet ? `${tablet} 768w,` : ''}
        ${mobile ? `${mobile} 480w` : ''}
    `

    image.classList.add('u-figure__img', 'is-loading')
    image.setAttribute('alt', alt ? alt : '')
    image.setAttribute('srcset', srcset)

    if (mobile) image.src = mobile

    return image
}
