---
title: Generation
---

In the terminal run `yarn gen:component`, follow the prompts.

```
Enter component location:

[0] Atom
[1] Partial
[2] Component
[3] Container
[4] Layout
```

This will create the component files in one of the 5 locations.

```
Does this component require a Module:

[0] Yes
[1] No
```

**Yes**, will generate a component with a dynamic module, passed to the intersection observer. This generates these file types:

1. `*.html`
2. `*.config.json`
3. `*.component.ts`
4. `*.test.ts`
5. `*.module.scss`
6. `*.types.ts`

After the templates are generated, vs code will open `src/config/modules.config.ts` and the terminal will echo some code e.g.

`Header: () => import(/* webpackChunkName: 'header' */ '@/patterns/01-atoms/header/header.component')`

Add this to the bottom of the Modules Object.

```
export const modules = {
    Action: () => import(/* webpackChunkName: 'action' */ '@/patterns/04-containers/action/action.component'),
    Accordion: () => import(/* webpackChunkName: 'accordion' */ '@/patterns/03-components/accordion/accordion.component'),
    Button: () => import(/* webpackChunkName: 'button' */ '@/patterns/01-atoms/button/button.component'),
    Content: () => import(/* webpackChunkName: 'content' */ '@/patterns/04-containers/content/content.component'),
    Figure: () => import(/* webpackChunkName: 'figure' */ '@/patterns/02-partials/figure/figure.component'),
    Media: () => import(/* webpackChunkName: 'media' */ '@/patterns/04-containers/media/media.component'),
    Header: () => import(/* webpackChunkName: 'header' */ '@/patterns/01-atoms/header/header.component')
}

```

**No**, this will generate a static page that has global elements on it. This generates these file types:

1. `*.html`
2. `*.config.json`

[TESTING >>](/docs/testing)
