import { src, dest } from 'gulp'
import beautify from 'gulp-jsbeautifier';
import fractal from '@frctl/fractal'
import handlebars from '@frctl/handlebars'
import mandelbrot from '@frctl/mandelbrot'
import { fractal as config, beautify as bf, hbs } from '../config'

export const fractalDev = fractal.create()
export const logger = fractalDev.cli.console
export const fractalTheme = mandelbrot({
    skin: config.skin,
    favicon: config.favicon,
    styles: [
        'default',
        config.styles
    ],
    nav: ['docs', 'components']
})
export const fractalHbs = handlebars({...hbs})

const fractalServeFunc = () => {
    const server = fractalDev.web.server({
        sync: true,
        port: config.port,
        syncOptions: {
            open: true
        }
    })

    server.on('error', err => logger.error(err.message))

    server.start().then(() => {
        logger.success('Fractal server is now up and running!')
        logger.log(`Local: ${server.url}`)
        logger.log(`Network: ${server.urls.sync.external}`)
    })
}

const fractalBuildFunc = () => {
    const builder = fractalDev.web.builder()

    builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'))
    builder.on('error', err => logger.error(err.message))

    return builder.start().then(() => {
        logger.success('Fractal build completed!')
    })
}

const beautifyBuildFunc = () => {
    return src(bf.entry)
        .pipe(beautify({
            html: {
            indent_size: 2,
            max_preserve_newlines: 1
            }
        }))
        .pipe(dest(bf.output));
}

export const fractalServe = (cb) => {
    fractalServeFunc()
    cb()
}

export const fractalBuild = (cb) => {
    fractalBuildFunc()
    cb()
}

export const beautifyBuild = (cb) => {
    beautifyBuildFunc()
    cb()
}
