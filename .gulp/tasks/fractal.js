import fractal from '@frctl/fractal'
import mandelbrot from '@frctl/mandelbrot'
import { fractal as config } from '../config'

export const fractalDev = fractal.create()
export const logger = fractalDev.cli.console
export const tetlooseTheme = mandelbrot({
    skin: config.skin,
    favicon: '/favicon/favicon.ico',
    styles: [
        'default',
        '/css/fractal.css'
    ]
})

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

    return builder.build().then(() => {
        logger.success('Fractal build completed!')
    })
}

export const fractalServe = (cb) => {
    fractalServeFunc()
    cb()
}

export const fractalBuild = (cb) => {
    fractalBuildFunc()
    cb()
}
