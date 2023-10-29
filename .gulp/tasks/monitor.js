import { watch, series } from 'gulp'
import { favicon } from './favicon.js'
import { iconMoveFont, iconGenerate } from './icons.js'
import { scriptsLint, scriptsBundle } from './scripts.js'
import { stylesLint, styles, fractal, print} from './styles.js'
import { cleanImages, cleanFonts } from './clean.js'
import { images } from './images.js'
import { fonts } from './fonts.js'
import config from '../config'

const monitor = (cb) => {
    watch([config.scripts.files, config.scripts.modules],
        series(
            scriptsLint,
            scriptsBundle
        )
    )
    watch([config.styles.files],
        series(
            stylesLint,
            styles,
            print,
            fractal
        )
    )
    watch(config.images.files,
        series(
            cleanImages,
            images,
            fonts
        )
    )
    watch(config.fonts.files,
        series(
            cleanFonts,
            fonts
        )
    )
    watch([config.icons.fonts, config.icons.json],
        series(
            iconMoveFont,
            iconGenerate,
            stylesLint,
            styles
        )
    )
    watch(
        [config.favicon.entry],
        series(
            favicon
        )
    )
    cb()
}

export default monitor
