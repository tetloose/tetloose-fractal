# Media

Media is a [Container Component](https://fractal.build/guide/components/including-sub-components.html#container-components-via-partial-block) used for images / embeds to apply layout and margins.

## Usage

<pre>
&lbrace;&lbrace;#> @media this.data &rbrace;&rbrace;
    &lbrace;&lbrace; render '@figure' &rbrace;&rbrace;
    &lbrace;&lbrace; render '@figure' &rbrace;&rbrace;
&lbrace;&lbrace;/@media&rbrace;&rbrace;
</pre>

When passing a new context to the container you must prefix the data with `this` e.g. `this.data`.

## Context

```
"data": {
    "modifier": "",
    "styles": ""
}
```

### data.modifier

This is a class name or a utility class, generated via `src/styles/layout/media.scss` and loaded globally.

### data.styles

This allows you to pass SCSS Module styles to the container.
