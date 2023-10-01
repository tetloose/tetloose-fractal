export type ObjectToStringProps = {
    [key: string]: string
}

export function objectToString(classes: ObjectToStringProps): string {
    return Object.entries(classes)
        .map(([key, value]) => key && value && `is-${key}-${value}`)
        .filter(value => value)
        .join(' ')
}
