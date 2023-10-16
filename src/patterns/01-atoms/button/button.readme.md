# Button

This principle can be shared to any component &lbrace;&lbrace;> @button button &rbrace;&rbrace;

Styles for buttons are loaded globally and can be found `src/styles/utils/btn.scss`.

## Context

```
    "button": {
        "modifier": "is-inline is-light",
        "styles": "",
        "text": "Light Inline Button"
    }
```

### button.modifier

This is a class name or a utility class, generated via `src/styles/utils/btn.scss` and loaded globally.

### button.styles

This relates to scss module styles. When this is shared to a partial / component you can attach SCSS module styles to it then style it within the partial / component.

### button.text

The button text.
