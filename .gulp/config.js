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
        output: `${base}/public/assets`
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
        assets: `${base}/public/assets`,
        css: `${base}/public/assets/css`,
        js: `${base}/public/assets/js`,
        images: `${base}/public/assets/images`,
        fonts: `${base}/public/assets/fonts`,
        icons: `${base}/public/assets/icons`,
        favicon: `${base}/public/assets/favicon`
    },
    styles: {
        mode: isDev,
        files: `${base}/src/styles/**/*.scss`,
        appEntry: `${base}/src/styles/app.scss`,
        printEntry: `${base}/src/styles/print.scss`,
        fractal: `${base}/src/styles/fractal.scss`,
        output: `${base}/public/assets/css`,
        error: () => notification('❌ STYLES ❌', 'Error', 'Check Terminal')
    },
    images: {
        files: `${base}/src/images/**/*`,
        output: `${base}/public/assets/images`
    },
    fonts: {
        files: `${base}/src/fonts/**/*`,
        output: `${base}/public/assets/fonts`
    },
    icons: {
        json: `${base}/src/icons/*.json`,
        template: `${base}/src/icons/template.mustache`,
        output: `${base}/src/styles/utils/icons.scss`,
        fonts: `${base}/src/icons/*.{svg,ttf,woff}`,
        fontOutput: `${base}/public/assets/icons`,
        error: () => notification('❌ ICONS ❌', 'Error', 'Check Terminal'),
        success: () => notification('💃 Icons 💃', 'Saved', 'scss/utils/icons.scss')
    },
    favicon: {
        entry: `${base}/src/favicon/favicon.png`,
        output: `${base}/public/assets/favicon/`,
        appColor: '#c2ad8d',
        jsonTemplate: `${base}/src/favicon/favicon-data.json`,
        success: () => notification('🦙 Favicon 🦙', 'Saved', 'src/patterns/head.html')
    }
}
