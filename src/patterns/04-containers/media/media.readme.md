# Usage

<pre>
&lbrace;&lbrace;#> @media this.data &rbrace;&rbrace;
    &lbrace;&lbrace; render '@figure' &rbrace;&rbrace;
    &lbrace;&lbrace; render '@figure' &rbrace;&rbrace;
    &lbrace;&lbrace; render '@figure' &rbrace;&rbrace;
    &lbrace;&lbrace; render '@video' &rbrace;&rbrace;
&lbrace;&lbrace;/@media&rbrace;&rbrace;
</pre>

Media is a [Container Component](https://fractal.build/guide/components/including-sub-components.html#container-components-via-partial-block) used to apply layout and margins to media elements.

When passing a new context to the container you must prefix the data with `this` e.g. `this.data`.

## Context

```
"data": {
    "animation": "fade-in",
    "duration": 200,
    "styles": "",
    "modifier": ""
}
```
