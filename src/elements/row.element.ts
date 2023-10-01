export function rowElement(column: string, classes?: string): string {
    return `<div class="l-row ${classes ? classes : ''}">${column}</div>`
}
