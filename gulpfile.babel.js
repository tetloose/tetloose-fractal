import { series } from 'gulp'
import { fractalDev, tetlooseTheme, fractalServe, fractalBuild } from './.gulp/tasks/fractal.js'
import { clean, cleanFavicon } from './.gulp/tasks/clean'
import { favicon } from './.gulp/tasks/favicon.js'
import { iconMoveFont, iconGenerate } from './.gulp/tasks/icons.js'
import { scriptsLint, scriptsBundle } from './.gulp/tasks/scripts.js'
import { stylesLint, styles, print, fractal } from './.gulp/tasks/styles.js'
import { images } from './.gulp/tasks/images.js'
import { fonts } from './.gulp/tasks/fonts.js'
import monitor from './.gulp/tasks/monitor.js'
import config from './.gulp/config'

fractalDev.set('project.title', config.fractal.projectName)
fractalDev.components.set('path', `${__dirname}/src/patterns`)
fractalDev.components.set('ext', '.html')
fractalDev.docs.set('path', `${__dirname}/src/docs`)
fractalDev.web.set('static.path', `${__dirname}/dist/assets`)
fractalDev.web.set('builder.dest', `${__dirname}/dist`)

tetlooseTheme.addStatic(`${__dirname}/dist`)
fractalDev.web.theme(tetlooseTheme)

exports.clean = clean
exports.cleanFavicon = cleanFavicon
exports.fractalServe = series(
    fractalServe,
    monitor
)
exports.fractalBuild = fractalBuild
exports.favicon = favicon
exports.default = series(
    iconMoveFont,
    iconGenerate,
    scriptsLint,
    scriptsBundle,
    stylesLint,
    styles,
    print,
    fractal,
    images,
    fonts,
    favicon
)
exports.build = series(
    iconMoveFont,
    iconGenerate,
    scriptsLint,
    scriptsBundle,
    stylesLint,
    styles,
    print,
    fractal,
    images,
    fonts,
    favicon
)
