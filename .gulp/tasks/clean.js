import { src } from 'gulp'
import clean from 'gulp-clean';
import { mkdirp } from 'mkdirp'
import { clean as config } from '../config.js'

const cleanAssetsFunc = () => {
    return src(config.assets, {
        read: false,
        allowEmpty: true
    }).pipe(clean())
}

const cleanImagesFunc = () => {
    return src(config.images, {
        read: false,
        allowEmpty: true
    }).pipe(clean())
}

const cleanFontsFunc = () => {
    return src(config.fonts, {
        read: false,
        allowEmpty: true
    }).pipe(clean())
}

const cleanFaviconFunc = () => {
    return src(config.favicon, {
        read: false,
        allowEmpty: true
    }).pipe(clean())
}

const generateAssetsFunc = () => {
    return mkdirp(config.assets)
}

const generateCssFunc = () => {
    return mkdirp(config.css)
}

const generateJsFunc = () => {
    return mkdirp(config.js)
}

const generateImagesFunc = () => {
    return mkdirp(config.images)
}

const generateFontsFunc = () => {
    return mkdirp(config.fonts)
}

const generateIconsFunc = () => {
    return mkdirp(config.icons)
}

const generateFaviconFunc = () => {
    return mkdirp(config.favicon)
}

export const cleanAssets = (cb) => {
    cleanAssetsFunc()

    setTimeout(() => {
        generateAssetsFunc()
        generateCssFunc()
        generateJsFunc()
        generateImagesFunc()
        generateFontsFunc()
        generateIconsFunc()
        generateFaviconFunc()
        cb()
    }, 400);

    cb()
}

export const cleanFavicon = (cb) => {
    cleanFaviconFunc()

    setTimeout(() => {
        generateFaviconFunc()
        cb()
    }, 400);

    cb()
}

export const cleanImages = (cb) => {
    cleanImagesFunc()

    setTimeout(() => {
        generateImagesFunc()
        cb()
    }, 400);

    cb()
}

export const cleanFonts = (cb) => {
    cleanFontsFunc()

    setTimeout(() => {
        generateFontsFunc()
        cb()
    }, 400);

    cb()
}
