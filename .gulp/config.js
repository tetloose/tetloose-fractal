import { resolve } from 'path'
import notification from './tasks/notification'
import * as dotenv from 'dotenv'

dotenv.config()
const isDev = process.env.ENV === 'dev'
const base = resolve(__dirname, '../')

module.exports = {
    webpack: {
        mode: isDev,
        entry: `${base}/src/app.ts`,
        output: `${base}/dist/assets`
    },
    fractal: {
        port: process.env.PROXY,
        skin: process.env.SKIN,
        projectName: process.env.PROJECT_NAME
    },
    scripts: {
        files: `${base}/src/**/*.{ts,js}`,
        modules: `${base}/src/**/*.scss`,
        error: () => notification('❌ SCRIPTS ❌', 'Error', 'Check Terminal')
    },
    clean: {
        assets: `${base}/dist/assets`,
        css: `${base}/dist/assets/css`,
        js: `${base}/dist/assets/js`,
        images: `${base}/dist/assets/images`,
        fonts: `${base}/dist/assets/fonts`,
        icons: `${base}/dist/assets/icons`,
        favicon: `${base}/dist/assets/favicon`
    },
    styles: {
        mode: isDev,
        files: `${base}/src/styles/**/*.scss`,
        appEntry: `${base}/src/styles/app.scss`,
        printEntry: `${base}/src/styles/print.scss`,
        fractal: `${base}/src/styles/fractal.scss`,
        output: `${base}/dist/assets/css`,
        error: () => notification('❌ STYLES ❌', 'Error', 'Check Terminal')
    },
    images: {
        files: `${base}/src/images/**/*`,
        output: `${base}/dist/assets/images`
    },
    fonts: {
        files: `${base}/src/fonts/**/*`,
        output: `${base}/dist/assets/fonts`
    },
    icons: {
        json: `${base}/src/icons/*.json`,
        template: `${base}/src/icons/template.mustache`,
        output: `${base}/src/styles/utils/icons.scss`,
        fonts: `${base}/src/icons/*.{svg,ttf,woff}`,
        fontOutput: `${base}/dist/assets/icons`,
        error: () => notification('❌ ICONS ❌', 'Error', 'Check Terminal'),
        success: () => notification('💃 Icons 💃', 'Saved', 'scss/utils/icons.scss')
    },
    favicon: {
        entry: `${base}/src/favicon/favicon.png`,
        output: `${base}/dist/assets/favicon/`,
        appColor: '#c2ad8d',
        jsonTemplate: `${base}/src/favicon/favicon-data.json`,
        success: () => notification('🦙 Favicon 🦙', 'Saved', 'src/patterns/head.html')
    }
}
