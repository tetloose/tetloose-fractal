import { src } from 'gulp'
import webpack from 'webpack'
import webpackConfig from '../../webpack.config'
import gulpESLintNew, { fix, format, failAfterError } from 'gulp-eslint-new'
import { scripts as config } from '../config.js'

const scriptsLintFunc = () => {
    return src([config.files])
        .pipe(gulpESLintNew({ fix: true }))
        .pipe(fix())
        .pipe(format())
        .pipe(failAfterError())
}

const scriptsBundleFunc = () => {
    return webpack(webpackConfig, (err, stats) => {
        if (err) console.log(err)
        console.log('[scripts]', stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false,
            assets: false,
            builtAt: false,
            cached: false,
            entrypoints: true,
            hash: false,
            performance: false,
            timings: false,
            version: false
        }))
    })
}

export const scriptsLint = (cb) => {
    scriptsLintFunc()
    cb()
}

export const scriptsBundle = (cb) => {
    scriptsBundleFunc()
    cb()
}
