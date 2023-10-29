import { src, dest } from 'gulp'
import { init, write } from 'gulp-sourcemaps'
import sass from 'gulp-dart-sass'
import autoprefixer from 'gulp-autoprefixer'
import filter from 'gulp-filter'
import cleanCss from 'gulp-clean-css'
import gulpStylelint from 'gulp-stylelint'
import gulpif from 'gulp-if'
import { styles as config } from '../config'

const stylesLintFunc = () => {
    return src([config.files])
        .pipe(gulpStylelint({
            fix: true,
            failAfterError: false,
            reporters: [
                {
                    formatter: 'string',
                    console: true
                },
            ],
            debug: true
        }))
}

const stylesFunc = () => {
    return src([config.appEntry])
        .pipe(gulpif(config.mode, init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulpif(config.mode, write('.')))
        .pipe(gulpif(!config.mode, cleanCss()))
        .pipe(dest(config.output))
        .pipe(gulpif(config.mode, filter(['**/*.css'])))
}

const printFunc = () => {
    return src([config.printEntry])
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulpif(!config.mode, cleanCss()))
        .pipe(dest(config.output))
        .pipe(gulpif(config.mode, filter(['**/*.css'])))
}

const fractalFunc = () => {
    return src([config.fractal])
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulpif(!config.mode, cleanCss()))
        .pipe(dest(config.output))
        .pipe(gulpif(config.mode, filter(['**/*.css'])))
}

export const stylesLint = (cb) => {
    stylesLintFunc()
    cb()
}

export const styles = (cb) => {
    stylesFunc()
    cb()
}

export const print = (cb) => {
    printFunc()
    cb()
}

export const fractal = (cb) => {
    fractalFunc()
    cb()
}
