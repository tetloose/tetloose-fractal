## Icons

Icons are handled via [Icomoon](https://icomoon.io/). Upload `src/icons/selection.json` to **Icomoon**, edit the font pack and **Generate** a new font pack.

## Generation

Generate will download a zip file containing the font pack. Rename font's to icons and move the below:

- icons.svg
- icons.ttf
- icons.woff
- selection.json

Into `src/icons/`. The icon task will run and update `src/styles/utils/icons.scss` with the new icon references.

Icon's are utilities and named `u-icon-{icon-name}`.

## Markup

The `<i></i>` tag is used to show the icons e.g.

`<i class="u-icon-news"></i>`

## Full list of icons

See `src/styles/utils/icons.scss` for full list.
