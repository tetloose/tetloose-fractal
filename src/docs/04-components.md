---
title: Components
---

# *.html

<pre>
&lt;div
    style="&lbrace;&lbrace;> initialStyle&rbrace;&rbrace;"
    data-module="ObjectName"
    data-animation="&lbrace;&lbrace;#if animation&rbrace;&rbrace;&lbrace;&lbrace;animation&rbrace;&rbrace;&lbrace;&lbrace;/if&rbrace;&rbrace;"
    data-duration="&lbrace;&lbrace;#if duration&rbrace;&rbrace;&lbrace;&lbrace;duration&rbrace;&rbrace;&lbrace;&lbrace;else&rbrace;&rbrace;400&lbrace;&lbrace;/if&rbrace;&rbrace;"
    data-styles="moduleName&lbrace;&lbrace;#if styles&rbrace;&rbrace; &lbrace;&lbrace;styles&rbrace;&rbrace;&lbrace;&lbrace;/if&rbrace;&rbrace;"
    class="&lbrace;&lbrace;> initialAnimation&rbrace;&rbrace;&lbrace;&lbrace;#if modifier&rbrace;&rbrace; &lbrace;&lbrace;modifier&rbrace;&rbrace;&lbrace;&lbrace;/if&rbrace;&rbrace;">
&lt;/div&gt;
</pre>

## &lbrace;&lbrace;> initialStyle&rbrace;&rbrace;

The initial style of the component is `opacity: 0`, this is handlebar Partial. See `src/config/handlebars.js` for more info, if you add Helpers / Partials, you will need to restart the application.

## data-module="ObjectName"

This is the Module name for the Component. this is passed to `src/config/modules.config.ts`. The intersection observer will dynamically import scripts and styles once a Component hits the intersection.

## data-animation

This is the animation when the Component is loaded. Refer to `src/styles/utils/animate.scss` for animation values or to add new ones.

## data-duration

This is the animation duration default is 400.

## data-styles

This relates to the scss module `*.module.scss` within the Component. Types are auto generated `*.module.scss.d.ts`, refer to this file for extra style attributes.

## class="&lbrace;&lbrace;> initialAnimation&rbrace;&rbrace;

The initial animation of the component `u-animate-hide`, this is handlebar Partial. See `src/config/handlebars.js` for more info.

## Context

`*.config.json`

```
"context": {
    "animation": "fade-in",
    "duration": 400,
    "styles": "",
    "modifier": ""
}
```

This is the default settings for a component, these will be made available to associated html template.

## Functionality

`*.component.ts`

You can write either js or ts, it's up to you. Basic Component setup:

### TS

```
import styles from './moduleName.module.scss'
import { ComponentClass } from '@/utilities'

export class ObjectName extends ComponentClass {
    constructor(module: HTMLElement) {
        super(module)

        this.css(this.module, styles)
    }
}

export default (module: HTMLElement) => new ObjectName(module)
```

### JS

```
import styles from './moduleName.module.scss'
import { ComponentClass } from '@/utilities'

export class ObjectName extends ComponentClass {
    constructor(module) {
        super(module)

        this.css(this.module, styles)
    }
}

export default (module) => new ObjectName(module)

```

Import the scss module, namespace has to be `moduleName.module.scss` for Webpack to pick it up. The `ComponentClass` utility `src/utilities/component-class.utilities.ts` and the exported class named the same as `data-module="ObjectName"`.

This `ObjectName` is then passed to `src/config/modules.config.ts` e.g.

`ObjectName: () => import(/* webpackChunkName: "object-name" */ '@/patterns/02-partials/object-name/object-name.component')`.

## Styling Component

### Global styles

Write styles in `src/styles/app.scss`, these are loaded globally and attach them via the `"modifier": "",` or directly into the markup.

### SCSS Modules

To add SCSS module styles to a Component you need to add the data attribute `data-styles="style-name"`, the function `css` will run and add the Module classes. e.g.

`*.html`

<pre>
&lt;div
    data-styles=&quot;moduleName&quot;
    class=&quot;&quot;&gt;
    &lt;div
        data-styles=&quot;moduleName__classname&quot;
        class=&quot;&quot;&gt;
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    &lt;/div&gt;
&lt;/div&gt;
</pre>

`*.module.scss`

```
.moduleName {
    background-color: hotpink;

    &__classname {
        background-color: orange;
    }
}
```

Once you save, Webpack will auto generate a `*.module.scss.d.ts` with the css types.

[GENERATION >>](/docs/generation)
