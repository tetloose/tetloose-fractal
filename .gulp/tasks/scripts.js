import { src, lastRun } from 'gulp'
import webpack from 'webpack'
import webpackConfig from '../../webpack.config'
import plumber from 'gulp-plumber'
import gulpESLintNew, { fix, format, failAfterError } from 'gulp-eslint-new'
import { scripts as config } from '../config'

const scriptsLintFunc = () => {
    return src([config.files], {
            since: lastRun(scriptsLintFunc)
        })
        .pipe(plumber({ errorHandler: config.error }))
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
