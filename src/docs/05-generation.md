---
title: Generation
---

In the terminal run `yarn gen:component`, follow the prompts.

Enter 0 - 4 for component type

```
[0] Atom
[1] Partial
[2] Component
[3] Container
[4] Layout
```

**0, 3 and 4** are global components, their styles relate to `src/styles/app.scss` and don't contain any dynamic loading. These are intended to be shared globally. After generating these components, you only need to update `ObjectName` and `{UPDATE-ME}` within the `*.config.json`.

**1 and 2** are dynamic modules, they will be passed to the intersection observer.

After generating these modules, you need to update `ObjectName`, `moduleName` and `{UPDATE-ME}` within:

1. `*.config.json`
2. `*.component.ts`
3. `*.test.ts`
4. `*.module.scss`
5. `*.test.ts`

You will then need to pass the `ObjectName` into the module loader `src/config/modules.config.ts`.

- [TESTING >>](/docs/testing)
