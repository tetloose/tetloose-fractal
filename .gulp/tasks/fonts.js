import { src, dest } from 'gulp'
import { fonts as config } from '../config'

const fontsFunc = () => {
    return src([config.files])
        .pipe(dest(config.output))
}

export const fonts = (cb) => {
    setTimeout(() => {
        fontsFunc()
    }, 200)

    cb()
}
