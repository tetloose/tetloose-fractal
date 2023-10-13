import { src, dest, lastRun } from 'gulp'
import icomoonBuilder from 'gulp-icomoon-builder'
import plumber from 'gulp-plumber'
import { icons as config } from '../config'

const iconMoveFontFunc = () => {
    return src([config.fonts], {
            since: lastRun(iconMoveFontFunc)
        })
        .pipe(plumber({ errorHandler: config.error }))
        .pipe(dest(config.fontOutput))
}

const iconGenerateFunc = () => {
    return src([config.json], {
            since: lastRun(iconGenerateFunc)
        })
        .pipe(plumber({ errorHandler: config.error }))
        .pipe(icomoonBuilder({
            templateType: 'map',
            externalTemplare: config.template,
            filename: '.scss'
        }))
        .on('error', (error) => {
            handleIconError
            console.error(error)
        })
        .pipe(dest(config.output))
        .on('error', (error) => {
            handleIconError
            console.error(error)
        })
}

export const iconMoveFont = (cb) => {
    setTimeout(() => {
        iconMoveFontFunc()
    }, 200)

    cb()
}

export const iconGenerate = (cb) => {
    iconGenerateFunc()
    cb()
}
