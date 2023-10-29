# Usage

<pre>
&lbrace;&lbrace;#> @action this.data &rbrace;&rbrace;
    &lbrace;&lbrace; render '@button' &rbrace;&rbrace;
    &lbrace;&lbrace; render '@button' &rbrace;&rbrace;
&lbrace;&lbrace;/@action&rbrace;&rbrace;
</pre>

Action is a [Container Component](https://fractal.build/guide/components/including-sub-components.html#container-components-via-partial-block) used for buttons to apply layout and margins.

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
