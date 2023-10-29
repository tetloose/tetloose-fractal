import { series } from 'gulp'
import { fractalDev, fractalHbs, fractalTheme, fractalServe, fractalBuild, beautifyBuild } from './.gulp/tasks/fractal.js'
import { cleanAssets, cleanFavicon } from './.gulp/tasks/clean.js'
import { favicon } from './.gulp/tasks/favicon.js'
import { iconMoveFont, iconGenerate } from './.gulp/tasks/icons.js'
import { scriptsLint, scriptsBundle } from './.gulp/tasks/scripts.js'
import { stylesLint, styles, print, fractal } from './.gulp/tasks/styles.js'
import { images } from './.gulp/tasks/images.js'
import { fonts } from './.gulp/tasks/fonts.js'
import monitor from './.gulp/tasks/monitor.js'
import { accessibility } from './.gulp/tasks/accessibility.js'
import config from './.gulp/config.js'

fractalDev.set('project.title', config.fractal.projectName)
fractalDev.components.engine(fractalHbs)
fractalDev.docs.engine(fractalHbs)
fractalDev.components.set('path', `${__dirname}/src/patterns`)
fractalDev.components.set('ext', '.html')
fractalDev.docs.set('path', `${__dirname}/src/docs`)
fractalDev.web.set('static.path', `${__dirname}/public/assets`)
fractalDev.web.set('builder.dest', `${__dirname}/build`)
fractalDev.web.theme(fractalTheme)

exports.clean = cleanAssets
exports.cleanFavicon = cleanFavicon
exports.fractalServe = series(
    fractalServe,
    monitor
)
exports.fractalBuild = fractalBuild
exports.favicon = favicon
exports.default = series(
    favicon,
    iconMoveFont,
    iconGenerate,
    scriptsLint,
    scriptsBundle,
    stylesLint,
    styles,
    print,
    fractal,
    images,
    fonts
)
exports.build = series(
    favicon,
    iconMoveFont,
    iconGenerate,
    scriptsLint,
    scriptsBundle,
    stylesLint,
    styles,
    print,
    fractal,
    images,
    fonts
)
exports.accessibility = accessibility
exports.beautify = beautifyBuild
