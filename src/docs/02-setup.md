---
title: Setup
---

1. `git clone git@ssh.dev.azure.com:v3/HugoAndCat/SonyCorporate/tv-sound-bar-pdp`
2. Update `projectName` in `src/config/fractal.js`
3. `cmd shift p recommended` install recommended plugins
4. `yarn setup`
5. Web browser will open `http://localhost:3000/`

`yarn setup`

This will install everything with yarn, set up husky then spin up a dev server via `yarn dev`.

`yarn dev`

This runs the dev server.

`yarn serve`

If you have already run `yarn dev` and want to spin up the dev server without generating all the assets use `yarn serve`.

[STRUCTURE >>](/docs/structure)
