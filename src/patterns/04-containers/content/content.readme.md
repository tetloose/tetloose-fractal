# Usage

<pre>
&lbrace;&lbrace;#> @content this.data &rbrace;&rbrace;
    &lbrace;&lbrace; render '@figure' &rbrace;&rbrace;
    &lbrace;&lbrace; title &rbrace;&rbrace;
    &lbrace;&lbrace; content &rbrace;&rbrace;
&lbrace;&lbrace;/@content&rbrace;&rbrace;
</pre>

Content is a [Container Component](https://fractal.build/guide/components/including-sub-components.html#container-components-via-partial-block) used to apply layout and margins to typography elements.

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
