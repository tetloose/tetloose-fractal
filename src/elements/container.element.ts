import { objectToString } from '@/utilities/object-to-string.utilities'
import { SpacingProps } from './element.types'

export function containerElement(content: string, spacing?: SpacingProps, classes?: string): string {
    return `<main class="u-container ${spacing ? objectToString(spacing) : ''} ${classes ? classes : ''}">${content}</main>`
}
