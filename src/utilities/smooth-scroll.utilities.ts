export function smoothScroll(targetElement: HTMLElement, duration: number): void {
    if (!targetElement) return

    const targetPosition = targetElement.offsetTop
    const startPosition = window.scrollY
    const distance = targetPosition - startPosition
    const startTime = performance.now()

    function easeOutQuad(time: number, beginning: number, change: number, duration: number): number {
        time /= duration
        return -change * time * (time - 2) + beginning
    }

    function scroll(): void {
        const currentTime = performance.now()
        const timeElapsed = currentTime - startTime

        window.scrollTo(0, easeOutQuad(timeElapsed, startPosition, distance, duration))

        if (timeElapsed < duration) {
            requestAnimationFrame(scroll)
        }
    }

    requestAnimationFrame(scroll)
}
