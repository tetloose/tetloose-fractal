import { src, dest } from 'gulp'
import { fonts as config } from '../config.js'

const fontsFunc = () => {
    return src([config.files])
        .pipe(dest(config.output))
}

export const fonts = (cb) => {
    setTimeout(() => {
        fontsFunc()
        cb()
    }, 400)

    cb()
}
