export type ImageProps = {
    modifier?: string
    styles?: string
    alt?: string
    mobile: string
    tablet: string
    desktop: string
}

export type iframeProps = {
    className?: string,
    ratio: '21x9' | '16x9' | '4x6' | '4x3' | undefined
    src: string
    rest?: string
}
