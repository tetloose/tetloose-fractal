import { BtnTypeProps, BtnLinkProps } from './element.types'

export function btnElement(type: BtnTypeProps, title: string, trackingTitle?: string, classes?: string, link?: BtnLinkProps): string {
    return `
        <${type}
            class="u-btn ${classes ? classes : ''}"
            ${trackingTitle ? `data-tracking-title="${trackingTitle}"` : ''}
            ${link?.href ? `href="${link.href}"` : ''}
            ${link?.target ? `target="${link.target}"` : ''}>
            ${title}
        </${type}>
    `
}
