# Usage

<pre>
&lbrace;&lbrace;#> @group this.data &rbrace;&rbrace;
    &lbrace;&lbrace; render '@logo' &rbrace;&rbrace;
    &lbrace;&lbrace; render '@logo--google-tv' &rbrace;&rbrace;
    &lbrace;&lbrace; render '@logo--4k-hdr' &rbrace;&rbrace;
    &lbrace;&lbrace; render '@logo--netflix' &rbrace;&rbrace;
&lbrace;&lbrace;/@group&rbrace;&rbrace;
</pre>

Group is a [Container Component](https://fractal.build/guide/components/including-sub-components.html#container-components-via-partial-block) used to apply layout and margins to logos.

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
