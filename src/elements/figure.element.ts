import { FigureProps } from './element.types'

export function figureElement(options: FigureProps): string {
    const { className, sizing, sizes, alt } = options
    const { mobile, tablet, desktop } = sizes
    return `
        <figure class="u-figure ${className ? className : ''}">
            <img
                class="u-object-fit ${sizing ? `is-${sizing}` : ''}"
                alt="${alt ? alt : ''}"
                src="${mobile}"
                srcset="
                    ${desktop} 1024w,
                    ${tablet} 768w,
                    ${mobile} 480w
                ">
        </figure>
    `
}
