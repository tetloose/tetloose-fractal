import { ImageProps } from './element.types'

export function imageElement(options: ImageProps): string {
    const { className, styles, sizes, alt } = options
    const { mobile, tablet, desktop } = sizes
    return `
        <img
            class="${className ? `${className}` : ''}"
            data-styles="${styles ? styles : ''}"
            alt="${alt ? alt : ''}"
            src="${mobile}"
            srcset="
                ${desktop ? `${desktop} 1024w,` : ''}
                ${tablet ? `${tablet} 768w,` : ''}
                ${mobile ? `${mobile} 480w` : ''}
            ">
    `
}
