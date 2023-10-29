import { expect, test, expectTypeOf } from 'vitest'
import { modules } from '@config'
import { Video } from './video.component'
import config from './video.config.json'
import styles from './video.module.scss'

test('SCSS Module returns an object and contains video', (): void => {
    expect(styles).toBeTruthy()
    expect(styles).toBeTypeOf('object')
    expect(styles['video']).toMatch(/(video)/i)
})

test('Video should exist and be a function', (): void => {
    expectTypeOf(modules.Video).toBeFunction()
})

test('Config exists and returns correct attributes', (): void => {
    const { modifier, styles, ratio, ariaLabels, video } = config.context
    const { play, pause } = ariaLabels
    const { youtube, vimeo, autoPlay, muted, controls, loop, poster, title, url } = video

    expect(modifier).toBeTypeOf('string')
    expect(styles).toBeTypeOf('string')
    expect(ratio).toBeTypeOf('string')
    expect(play).toBeTypeOf('string')
    expect(pause).toBeTypeOf('string')
    expect(video.modifier).toBeTypeOf('string')
    expect(video.styles).toBeTypeOf('string')

    expect(youtube).toBeTypeOf('boolean')
    expect(vimeo).toBeTypeOf('boolean')
    expect(autoPlay).toBeTypeOf('boolean')
    expect(muted).toBeTypeOf('boolean')
    expect(controls).toBeTypeOf('boolean')
    expect(loop).toBeTypeOf('boolean')
    expect(poster).toBeTypeOf('string')
    expect(title).toBeTypeOf('string')
    expect(url).toBeTypeOf('string')
})

test('Video Class', () => {
    let video: Video | null

    beforeEach(() => {
        const module: HTMLElement = document.createElement('div')
        module.dataset.autoPlay = 'true'
        module.dataset.muted = 'false'
        module.dataset.loop = 'false'
        module.dataset.ariaPlay = 'Play'
        module.dataset.ariaPause = 'Pause'
        video = new Video(module)
    })

    afterEach(() => {
        video = null
    })

    test('should initialize with autoPlay, not muted, and not looped', () => {
        expect(video?.autoPlay).toBe(true)
        expect(video?.muted).toBe(false)
        expect(video?.loop).toBe(false)
    })

    test('should have initialized aria labels', () => {
        const expectedAriaLabels = {
            play: 'Play',
            pause: 'Pause'
        }

        expect(video?.ariaLabels).toEqual(expectedAriaLabels)
    })

    test('should initialize as not paused', () => {
        expect(video?.paused).toBe(false)
    })
})
