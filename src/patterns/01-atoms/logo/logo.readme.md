# Logo

Usage:

<pre>
    &lbrace;&lbrace;&gt; @logo logo&rbrace;&rbrace;
</pre>

## Context Partial

```
    "logo": {
        "src": "/images/logos/logo-1.svg",
        "alt": "Logo 1",
        "modifier": "is-primary",
        "styles": ""
    }
```

### logo.src

location of image.

### logo.src

Alt text.

### logo.modifier

This is a class name or a utility class, generated via `src/styles/utils/logo.scss` and loaded globally.

### logo.styles

This relates to scss module styles. When this is shared to a partial / component you can attach SCSS module styles to it then style it within the partial / component.
