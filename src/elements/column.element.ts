import { objectToString } from '@/utilities/object-to-string.utilities'
import { BreakPointProps } from './element.types'

export function columnElement(content: string, breakPoint?: BreakPointProps, classes?: string): string {
    return `<div class="l-row__col ${breakPoint ? objectToString(breakPoint) : ''} ${classes ? classes : ''}">${content}</div>`
}
