import styles from './gallery.module.scss'
import { ComponentClass, HTMLProps, HTMLNodeProps } from '@utilities'
import { imageElement, ImageProps } from '@elements'

export class Gallery extends ComponentClass {
    navTriggers: HTMLNodeProps
    galleryFigure: HTMLProps
    carouselRail: HTMLProps
    carouselTriggers: HTMLNodeProps
    carouselAltElement: HTMLProps
    carouselNumberElement: HTMLProps
    carouselTotalElement: HTMLProps
    carouselTotal: string
    carouselLength: number
    carouselPosition: number
    touchStartX: number
    touchEndX: number

    constructor(module: HTMLElement) {
        super(module)

        this.navTriggers = this.module.querySelectorAll('.js-galleryTrigger')
        this.galleryFigure = this.module.querySelector('.js-galleryFigure')
        this.carouselRail = this.module.querySelector('.js-carouselRail')
        this.carouselTriggers = this.module.querySelectorAll('.js-carouselTrigger')
        this.carouselAltElement = this.module.querySelector('.js-carouselAlt')
        this.carouselNumberElement = this.module.querySelector('.js-carouselNumber')
        this.carouselTotalElement = this.module.querySelector('.js-carouselTotal')
        this.carouselTotal = this.carouselTriggers.length < 9 ? `0${this.carouselTriggers.length}` : `${this.carouselTriggers.length}`
        this.carouselLength = this.carouselTriggers ? this.carouselTriggers.length : 0
        this.carouselPosition = 0
        this.touchStartX = 0
        this.touchEndX = 0
        this.css(this.module, styles)
        this.init()
    }

    init() {
        const { navTriggers, carouselTriggers, carouselLength } = this

        if (navTriggers && carouselLength <= 1) {
            navTriggers.forEach((trigger: HTMLElement) => trigger.remove())
        }

        if (carouselTriggers && carouselLength > 0) {
            const trigger = carouselTriggers[0]
            const triggerDataset = trigger.dataset
            const imageData: ImageProps = this.getImageData(triggerDataset)

            this.loadRailSlider()
            this.setHeader(trigger)
            this.setActiveState(0)
            this.createImage(imageData)
            this.loadEventListeners()
        }
    }

    loadRailSlider() {
        const { carouselRail } = this

        let isDown = false
        let startX = 0
        let scrollLeft = 0

        if (carouselRail) {
            carouselRail.addEventListener('mousedown', (e: MouseEvent) => {
                isDown = true
                startX = e.pageX - carouselRail.offsetLeft
                scrollLeft = carouselRail.scrollLeft
            })

            carouselRail.addEventListener('mouseleave', () => isDown = false)

            carouselRail.addEventListener('mouseup', () => isDown = false)

            carouselRail.addEventListener('mousemove', (e: MouseEvent) => {
                if (!isDown) return

                const x = e.pageX - carouselRail.offsetLeft
                const walk = (x - startX)

                carouselRail.scrollLeft = scrollLeft - walk
            })
        }
    }

    setHeader(image: HTMLElement) {
        const { carouselAltElement, carouselNumberElement, carouselTotalElement, carouselTotal } = this

        const imageDataset = image.dataset
        const imageAlt = imageDataset.alt
        const imageIndex = imageDataset.index ? +imageDataset.index + 1 : 1

        if (carouselAltElement) carouselAltElement.innerHTML = imageAlt ? imageAlt : ''
        if (carouselNumberElement) carouselNumberElement.innerHTML = imageIndex < 9 ? `0${imageIndex}` : `${imageIndex}`
        if (carouselTotalElement) carouselTotalElement.innerHTML = `${carouselTotal}`
    }

    loadEventListeners() {
        const { navTriggers, carouselTriggers } = this

        navTriggers?.forEach((trigger: HTMLElement): void => {
            trigger.addEventListener('click', (e: Event) =>
                e.target instanceof HTMLElement && this.handleNav(e.target.dataset.direction))

            trigger.addEventListener('touchstart', (e: TouchEvent) =>
                this.touchStartX = e.touches[0].clientX)

            trigger.addEventListener('touchend', (e: TouchEvent) => {
                this.touchEndX = e.changedTouches[0].clientX
                this.handleSwipe()
            })
        })

        carouselTriggers?.forEach((trigger: HTMLElement): void =>
            trigger.addEventListener('click', (e: MouseEvent) =>
                e.target instanceof HTMLElement && this.handleCarousel(e.target)))

        document.addEventListener('keydown', (e: KeyboardEvent) => e.key === 'ArrowLeft' && this.handleNav('left'))
        document.addEventListener('keydown', (e: KeyboardEvent) => e.key === 'ArrowRight' && this.handleNav('right'))
    }

    handleCarousel(target: HTMLElement) {
        const { carouselTriggers } = this
        const { dataset } = target
        const { index } = dataset
        const imageData: ImageProps = this.getImageData(dataset)

        if (carouselTriggers && index && !carouselTriggers[+index].classList.contains(styles['is-active'])) {
            this.setHeader(target)
            this.createImage(imageData)
            this.setActiveState(index ? +index : 0)
            this.carouselPosition = +index

            target.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }

    handleNav(direction?: string) {
        const { carouselTriggers, carouselLength } = this

        if (carouselTriggers) {
            const { carouselPosition } = this
            let index = carouselPosition

            if (direction === 'left' && carouselPosition <= 0) {
                index = carouselLength - 1
            } else if (direction === 'left') {
                index--
            } else if (direction === 'right' && carouselPosition >= carouselLength - 1) {
                index = 0
            } else {
                index++
            }

            this.carouselPosition = index

            const triggerElement = carouselTriggers[this.carouselPosition]
            const { dataset } = triggerElement
            const imageData: ImageProps = this.getImageData(dataset)

            this.setHeader(triggerElement)
            this.createImage(imageData)
            this.setActiveState(this.carouselPosition)

            triggerElement.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }

    handleSwipe() {
        const { touchEndX, touchStartX } = this
        const swipeThreshold = 50
        const swipeDistance = touchEndX - touchStartX

        if (swipeDistance > swipeThreshold) {
            this.handleNav('left')
        } else if (swipeDistance < -swipeThreshold) {
            this.handleNav('right')
        }
    }

    setActiveState(index: number) {
        const { carouselTriggers } = this

        if (carouselTriggers) {
            carouselTriggers.forEach((trigger: HTMLElement): void => trigger.classList.remove(styles['is-active']))

            carouselTriggers[index].classList.add(styles['is-active'])
        }
    }

    getImageData(dataset: DOMStringMap): ImageProps {
        const { alt, mobile, tablet, desktop } = dataset

        return {
            modifier: `${styles['gallery__figure-img']} u-ratio-21x9 u-animate-hide`,
            styles: '',
            alt: alt ? alt : '',
            mobile: mobile ? mobile : '',
            tablet: tablet ? tablet : '',
            desktop: desktop ? desktop : ''
        }
    }

    createImage(imageData: ImageProps) {
        const { galleryFigure } = this

        if (galleryFigure && imageData) {
            const prevImage = galleryFigure.querySelector(`.${styles['gallery__figure-img']}`)
            const image = imageElement(imageData)

            image.classList.add(styles['gallery__figure-img'])
            galleryFigure.classList.add(styles['is-loading'])

            image.onload = () => {
                this.appendImage(image, prevImage && prevImage instanceof HTMLElement ? prevImage : undefined)
            }
        }
    }

    appendImage(next: HTMLElement, prev?: HTMLElement) {
        const { galleryFigure } = this

        if (galleryFigure) {
            next?.classList.add('u-animate-fade-in')
            prev?.classList.add('u-animate-fade-out')

            if (next) galleryFigure.appendChild(next)

            setTimeout(() => {
                next?.classList.remove('u-animate-fade-in', 'u-animate-hide')
                prev?.remove()
                galleryFigure.classList.remove(styles['is-loading'])
            }, 400)
        }
    }
}

export default (module: HTMLElement) => new Gallery(module)
