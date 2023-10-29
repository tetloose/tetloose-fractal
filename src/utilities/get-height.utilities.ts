export function getHeight(elem: HTMLElement): number {
    elem.style.display = 'block'
    const height = elem.scrollHeight
    elem.style.display = ''

    return height
}
