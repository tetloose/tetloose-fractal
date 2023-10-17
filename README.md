# Tetloose Fractal

Tetloose Fractal is a custom [fractal.build](https://fractal.build/) component library.

## Recommended VSCode Extensions

`cmd shift p` then type recommended.

The sidebar will open with a list of recommended extensions to be installed.

'Workspaces' is a great plugin that allows you to show hide files.

See [Workspaces](https://marketplace.visualstudio.com/items?itemName=Fooxly.workspace) docs.

## Features

- Typescript
- Vitest
- SCSS modules
- SCSS
- Favicon generation
- Icon generation from [icomoon](https://icomoon.io/)
- Performance optimized with dynamic Module loading
- WCAG2AAA reports via [AccessSniff](https://github.com/yargalot/AccessSniff)

## Commands

- `yarn setup` - Setup the project
- `yarn dev` - Start dev server with asset generation
- `yarn serve` - Start dev server without asset generation
- `yarn build` - Build application
- `yarn lint` - Lint js
- `yarn test` - Start Vitest testing suite
- `yarn coverage` - Get Vitest coverage stats
- `yarn favicon` - Generate favicon
- `yarn git:commit` - Commit changes
- `yarn gen:component` - Generate components
- `yarn accessibility` - Generate accessibility reports

## Setup

1. `git clone git@github.com:tetloose/tetloose-fractal.git`
2. Update `PROJECT_NAME` in `src/config/fractal.js`
3. `cmd shift p recommended` install recommended plugins
4. `yarn setup`
5. Web browser will open `http://localhost:3000/`

## Docs

Once the project is running you can view the docs here: `http://localhost:3000/`.
