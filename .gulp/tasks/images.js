import { src, dest } from 'gulp'
import { images as config } from '../config.js'

const imagesFunc = () => {
    return src([config.files])
        .pipe(dest(config.output))
}

export const images = (cb) => {
    setTimeout(() => {
        imagesFunc()
        cb()
    }, 400)

    cb()
}
