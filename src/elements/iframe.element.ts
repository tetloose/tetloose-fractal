import { iframeProps } from './element.types'

export function iframeElement(options: iframeProps): string {
    const { className, ratio, src, rest } = options

    return `
        <div class="u-media ${className ? className : ''} ratio-${ratio}">
            <iframe
                class="u-media__iframe"
                src="${src}"
                ${rest ? rest : ''}
            </iframe>
        </div>
    `
}
