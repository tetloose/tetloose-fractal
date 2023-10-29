# Usage

<pre>
&lbrace;&lbrace;#> @form this.data &rbrace;&rbrace;
    &lbrace;&lbrace; render '@input' &rbrace;&rbrace;
    &lbrace;&lbrace; render '@input--email' &rbrace;&rbrace;
    &lbrace;&lbrace; render '@input--textarea' &rbrace;&rbrace;
&lbrace;&lbrace;/@form&rbrace;&rbrace;
</pre>

Form is a [Container Component](https://fractal.build/guide/components/including-sub-components.html#container-components-via-partial-block) used to apply layout and margins to input elements.

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
