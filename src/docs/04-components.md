---
title: Components / Partials
---

`moduleName.html`

```
<div
    style="{{> initialStyle}}"
    data-module="ObjectName"
    data-animation="{{#if component.animation}}{{component.animation}}{{/if}}"
    data-duration="{{#if component.duration}}{{component.duration}}{{else}}400{{/if}}"
    data-styles="moduleName{{#if component.styles}} {{component.styles}}{{/if}}"
    class="{{> initialAnimation}}{{#if component.modifier}} {{component.modifier}}{{/if}}">
</div>
```

## {{> initialStyle}}

The initial style of the component is `opacity: 0`, this is handlebar Partial. See `src/config/handlebars.js` for more info, if you add Helpers / Partials, you will need to restart the application.

## data-module="ObjectName"

This is the Module name for the Component / Partial. this is passed to `src/config/modules.config.ts`. The intersection observer will dynamically import scripts and styles once a Component / Partial hits the intersection.

### data-animation

This is the animation when the Component / Partial is loaded. Refer to `src/styles/utils/animate.scss` for animation values or to add new ones.

### data-duration

This is the animation duration default is 400.

### data-styles

This relates to the scss module `*.module.scss` within the Component / Partial. Types are auto generated `*.module.scss.d.ts`, refer to this file for extra style attributes.

### data-modifier

This is a class name or a utility class, generated via `src/styles/app.scss` and loaded globally, usually prefixed with `u-`.

## Context

`moduleName.config.json`

```
"component": {
    "animation": "fade-in",
    "duration": 400,
    "styles": "",
    "modifier": ""
}
```

This is the default settings for a component, these will be made available to associated html template.

## Functionality

`moduleName.component.ts`

You can write either js or ts, it's up to you. Basic Component / Partial setup:

```
import styles from './moduleName.module.scss'
import { ComponentClass } from '@/utilities'

export class ObjectName extends ComponentClass {
    constructor(module: HTMLElement) {
        super(module)

        this.cssModule(this.module, styles)
    }
}

export default (module: HTMLElement) => new ObjectName(module)

```

Import the scss module, namespace has to be `moduleName.module.scss` for Webpack to pick it up. The `ComponentClass` utility `src/utilities/component-class.utilities.ts` and the exported class named the same as `data-module="ObjectName"`.

This `ObjectName` is then passed to `src/config/modules.config.ts` e.g.

`ObjectName: () => import(/* webpackChunkName: "object-name" */ '@/patterns/02-partials/object-name/object-name.component')`.

## Styling Component

### Global styles

Write styles in `src/styles/app.scss`, these are loaded globally and attach them via the `"modifier": "",` or directly into the markup.

### SCSS Modules

To add SCSS module styles to a Component / Partial you need to add the data attribute `data-styles="style-name"`, the function `cssModule` will run and add the Module classes. e.g.

`moduleName.html`

```
<div
    style="{{> initialStyle}}"
    data-module="ObjectName"
    data-animation="{{#if component.animation}}{{component.animation}}{{/if}}"
    data-duration="{{#if component.duration}}{{component.duration}}{{else}}400{{/if}}"
    data-styles="moduleName{{#if component.styles}} {{component.styles}}{{/if}}"
    class="{{> initialAnimation}}{{#if component.modifier}} {{component.modifier}}{{/if}}">
    <div
        data-styles="moduleName__classname"
        class="u-utility-class">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </div>
</div>
```

`moduleName.module.scss`

```
.ObjectName {
    background-color: hotpink;

    &__classname {
        background-color: orange;
    }
}
```

Once you save, Webpack will auto generate a `moduleName.module.scss.d.ts` with the css types.

- [GENERATION >>](/docs/generation)
