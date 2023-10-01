import { src } from 'gulp'
import shell from 'gulp-shell'
import { clean as config } from '../config'

const cleanAssetsFunc = () => {
    return src('.', {
            read: false
        })
        .pipe(shell(
            [`rm -rf ${config.assets} mkdir -p ${config.assets} ${config.css} ${config.images} ${config.fonts} ${config.icons} ${config.js} ${config.favicon}`]
        ))
}

const cleanFaviconFunc = () => {
    return src('.', {
            read: false
        })
        .pipe(shell(
            [`rm -rf ${config.favicon}; mkdir -p ${config.favicon};`]
        ))
}

const cleanImagesFunc = () => {
    return src('.', {
            read: false
        })
        .pipe(shell(
            [`rm -rf ${config.images}; mkdir -p ${config.images};`]
        ))
}

const cleanFontsFunc = () => {
    return src('.', {
            read: false
        })
        .pipe(shell(
            [`rm -rf ${config.fonts}; mkdir -p ${config.fonts};`]
        ))
}

export const clean = (cb) => {
    cleanAssetsFunc()
    cb()
}

export const cleanFavicon = (cb) => {
    cleanFaviconFunc()
    cb()
}

export const cleanImages = (cb) => {
    cleanImagesFunc()
    cb()
}

export const cleanFonts = (cb) => {
    cleanFontsFunc()
    cb()
}
