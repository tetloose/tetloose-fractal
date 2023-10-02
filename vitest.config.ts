import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@styles': resolve(__dirname, 'src/styles'),
            '@components': resolve(__dirname, 'src/components'),
            '@patterns': resolve(__dirname, 'src/patterns'),
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
