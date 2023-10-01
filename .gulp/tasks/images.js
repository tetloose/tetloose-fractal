import { src, dest } from 'gulp'
import { images as config } from '../config'

const imagesFunc = () => {
    return src([config.files])
        .pipe(dest(config.output))
}

export const images = (cb) => {
    setTimeout(() => {
        imagesFunc()
    }, 200)

    cb()
}
