# Loading

SVG loading animation utility, taken from [loading.io](https://loading.io/asset/693763).

Usage:

<pre>
    &lbrace;&lbrace;&gt; @loading loading&rbrace;&rbrace;
</pre>

## Context Partial

```
    "loading": {
        "src": "/images/loading/spinner.svg",
        "modifier": "",
        "styles": ""
    }
```

### loading.modifier

This is a class name or a utility class, generated via `src/styles/utils/loading.scss` and loaded globally.

### loading.styles

This relates to scss module styles. When this is shared to a partial / component you can attach SCSS module styles to it then style it within the partial / component.
