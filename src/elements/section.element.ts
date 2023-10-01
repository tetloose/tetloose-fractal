import { objectToString } from '@/utilities/object-to-string.utilities'
import { SpacingProps } from './element.types'

export function sectionElement(content: string, spacing?: SpacingProps, classes?: string): string {
    return `<section class="u-container__block ${spacing ? objectToString(spacing) : ''} ${classes ? classes : ''}">${content}</section>`
}
