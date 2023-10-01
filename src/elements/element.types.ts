type SpacingGenerics =
    'sml' |
    'med' |
    'lrg' |
    'xlrg' |
    'xxlrg' |
    undefined

export type SpacingProps = {
    top?: SpacingGenerics
    bottom?: SpacingGenerics
}

type BreakPointGenerics =
    'half' |
    '1-third' |
    '2-third' |
    '1-forth' |
    '3-forth' |
    undefined

export type BreakPointProps = {
    sml?: BreakPointGenerics
    med?: BreakPointGenerics
    lrg?: BreakPointGenerics
    xlrg?: BreakPointGenerics
    xxlrg?: BreakPointGenerics
}

export type FigureProps = {
    className?: string
    sizing?: 'cover' | 'contain' | undefined
    alt?: string
    sizes: {
        mobile: string
        tablet: string
        desktop: string
    }
}

export type iframeProps = {
    className?: string,
    ratio: '21x9' | '16x9' | '4x6' | '4x3' | undefined
    src: string
    rest?: string
}

export type BtnTypeProps = 'button' | 'a'

export type BtnLinkProps = {
    href?: string
    target?: string
}
