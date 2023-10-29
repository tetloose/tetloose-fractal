# Usage

<pre>&lbrace;&lbrace;> @button button &rbrace;&rbrace;</pre>

## Context

```
"button": {
    "styles": "is-primary is-inline",
    "modifier": "",
    "disabled": false,
    "label": false,
    "text": "View Image Gallery",
    "icon": "gallery"
}
```

### button.styles

SCSS Modules styles `./button.module.scss`. You can pass extra SCSS Modules styles when this is added to a component.

### button.modifier

This is a class name or a utility class, generated via `src/styles/app.scss` and loaded globally.

### button.disabled

Disables the button if set to `true`.

### button.label

Aria label text for buttons without a text field.

### button.text

Button text.

### button.icon

Pass an icon to the button, set to false for no icon. See `src/styles/utils/icons.scss` for full list of icon. Only pass the name, `u-icon-` is auto prefixed.
