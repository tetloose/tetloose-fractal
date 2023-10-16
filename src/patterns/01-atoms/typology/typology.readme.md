# Typology

## Import fonts globally

Add fonts to `src/fonts`. These will be moved to the public folder. Font's are imported globally: `src/styles/global/fonts.scss`.

## Font Face Mixin

The font-face mixin takes several augments:

- font-family: Font name
- file-path: Font location relative the generated css `./public/assets/css/app.css`
- weight: Font weight
- exts: Font extensions 'eot woff2 woff ttf svg'
- display: Change the font display

`src/styles/mixins/font-face.scss`

### Example usage:

```
@include font-face('icons', '../icons/icons', normal, svg woff ttf);
@include font-face('Heading', '../fonts/Oswald-Light', 300, ttf);
```

## Font settings

Font family's, weights, style, utilities and sizes are extended from here: `src/styles/settings/typography.scss`

## Font Sizes

Font sizes are stored within a deep map object called vars here: `src/styles/settings/variables.scss`

```
type: (
    xxxxxlrg: 52px,
    xxxxlrg: 40px,
    xxxlrg: 32px,
    xxlrg: 28px,
    xlrg: 24px,
    lrg: 20px,
    med: 16px,
    sml: 14px
)
```

Usage: `vars(type, med)`.

## Utilities

When typography elements are added to a container, `u-content` they will be automatically styled depending on element type, they will also be given margins and padding.

For content styles see: `src/styles/utils/content.scss`.

Each element has it's own utility, `u-{element-name}`, this way we can style a paragraph as a heading 1 e.g. `<p class="u-h1">I'm a paragraph with h1 styles</p>`. These will only use the font style they won't have any padding or margin. To apply margins either style them within the component or wrap them in the content container.

<pre>
&lbrace;&lbrace;#> @content &rbrace;&rbrace;
    &lt;h1&gt;This is a title&lt;/h1&gt;
    &lt;p&gt;This is a paragraph&lt;h1&gt;
&lbrace;&lbrace;/@content&rbrace;&rbrace;
</pre>

- `src/styles/utils/elem/blockquote`
- `src/styles/utils/elem/em`
- `src/styles/utils/elem/embed`
- `src/styles/utils/elem/h1`
- `src/styles/utils/elem/h2`
- `src/styles/utils/elem/h3`
- `src/styles/utils/elem/h4`
- `src/styles/utils/elem/h5`
- `src/styles/utils/elem/h6`
- `src/styles/utils/elem/hr`
- `src/styles/utils/elem/link`
- `src/styles/utils/elem/ol`
- `src/styles/utils/elem/p`
- `src/styles/utils/elem/pre`
- `src/styles/utils/elem/small`
- `src/styles/utils/elem/strong`
- `src/styles/utils/elem/sub`
- `src/styles/utils/elem/sup`
- `src/styles/utils/elem/table`
- `src/styles/utils/elem/ul`
