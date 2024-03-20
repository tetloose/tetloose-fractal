import styles from './video.module.scss'
import { ComponentClass, ButtonProps, HTMLVideoProps } from '@utilities'
import { AriaLabelsProps } from './video.types'

export class Video extends ComponentClass {
    autoPlay: boolean
    muted: boolean
    loop: boolean
    ariaLabels: AriaLabelsProps
    paused: boolean
    playing: boolean
    video: HTMLVideoProps
    controls: ButtonProps

    constructor(module: HTMLElement) {
        super(module)

        this.css(module, styles)
        this.autoPlay = this.module.dataset.autoPlay === 'true'
        this.muted = this.module.dataset.muted === 'true'
        this.loop = this.module.dataset.loop === 'true'
        this.ariaLabels = {
            play: `${this.module.dataset.ariaPlay}`,
            pause: `${this.module.dataset.ariaPause}`
        }
        this.paused = false
        this.playing = false
        this.video = this.module.querySelector('.js-video')
        this.controls = this.module.querySelector('.js-videoTrigger')
        this.init()
    }

    init() {
        const { autoPlay, muted, loop } = this

        if (muted) {
            this.handleAction('mute')
        }

        if (autoPlay && this.isAutoplaySupported()) {
            this.handleAutoplay()
            this.handleAction('mute')
        }

        if (loop) {
            this.handleLoop()
        }

        this.loadEventListeners()
    }

    loadEventListeners() {
        const { video, controls } = this

        if (video && controls) {
            controls.addEventListener('click', (): void => video.paused || video.ended ? this.handleAction('play') : this.handleAction('pause'))
        }
    }

    handleAction(action = 'play') {
        const { video, controls } = this

        if (video && controls && action === 'play') {
            this.paused = false
            this.handleTransition('play')
            video.play()
        } else if (video && action === 'pause') {
            this.paused = true
            this.handleTransition('pause')
            video.pause()
        } else if (video && action === 'mute') {
            video.muted = true
        }
    }

    handleTransition(action = 'play') {
        const { controls, ariaLabels } = this
        const { play, pause } = ariaLabels

        if (controls && action === 'play') {
            controls.classList.add('is-paused')
            controls.setAttribute('aria-label', play)
        } else if (controls && action === 'pause') {
            controls.classList.remove('is-paused')
            controls.setAttribute('aria-label', pause)
        }
    }

    isAutoplaySupported(): boolean {
        const { video } = this

        if (!video) return false

        return video.autoplay !== false
    }

    handleAutoplay() {
        const { video } = this

        const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                const { intersectionRatio } = entry
                const { playing, paused } = this

                if (video && intersectionRatio >= 0.8 && !playing && !paused) {
                    this.handleTransition('play')
                    video.play()
                        .then(() => this.playing = true)
                } else if (video && playing) {
                    video.pause()
                    this.playing = false
                    this.handleTransition('pause')
                }
            })
        }, { threshold: 0.8 })

        if (video) observer.observe(video)
    }

    handleLoop() {
        const { video } = this

        if (video) video.loop = true
    }
}

export default (module: HTMLElement) => new Video(module)
