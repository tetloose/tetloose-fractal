import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@styles': resolve(__dirname, 'src/styles'),
            '@patterns': resolve(__dirname, 'src/patterns'),
            '@atoms': resolve(__dirname, 'src/patterns/01-atoms'),
            '@partials': resolve(__dirname, 'src/patterns/02-partials'),
            '@components': resolve(__dirname, 'src/patterns/03-components'),
            '@containers': resolve(__dirname, 'src/patterns/04-containers'),
            '@layouts': resolve(__dirname, 'src/patterns/05-layouts'),
            '@elements': resolve(__dirname, 'src/elements'),
            '@utilities': resolve(__dirname, 'src/utilities'),
            '@config': resolve(__dirname, 'src/config')
        }
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './vitest.setup.ts',
        exclude: [
            'public',
            'build',
            'node_modules'
        ]
    }
})
