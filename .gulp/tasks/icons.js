import { src, dest } from 'gulp'
import icomoonBuilder from 'gulp-icomoon-builder'
import { icons as config } from '../config.js'

const iconMoveFontFunc = () => {
    return src([config.fonts])
        .pipe(dest(config.fontOutput))
}

const iconGenerateFunc = () => {
    return src([config.json])
        .pipe(icomoonBuilder({
            templateType: 'map',
            externalTemplare: config.template,
            filename: '.scss'
        }))
        .on('error', (error) => {
            console.error(error)
        })
        .pipe(dest(config.output))
        .on('error', (error) => {
            console.error(error)
        })
}

export const iconMoveFont = (cb) => {
    iconMoveFontFunc()
    cb()
}

export const iconGenerate = (cb) => {
    iconGenerateFunc()
    cb()
}
