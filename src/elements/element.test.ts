import { expect, test } from 'vitest'
import { containerElement, sectionElement, rowElement, columnElement, contentElement, btnElement, imageElement, iframeElement } from '@/elements'
import { ImageProps, iframeProps } from './element.types'

const contentData = {
    content: 'this is content',
    classList: 'test-class'
}
const btn = btnElement(
    'button',
    'Click me',
    'Tracking Title',
    'js-trackingBtn'
)
const imageData: ImageProps = {
    className: 'class-name',
    styles: 'style-name',
    alt: 'This is alt text',
    sizes: {
        mobile: 'https://picsum.photos/200/200',
        tablet: 'https://picsum.photos/400/400',
        desktop: 'https://picsum.photos/600/600'
    }
}
const iframeData: iframeProps = {
    src: 'https://www.youtube.com/embed/M4mM97qbva4',
    ratio: '16x9',
    rest: 'title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen'
}
const image = imageElement(imageData)
const iframe = iframeElement(iframeData)
const content = contentElement(
    contentData.content,
    contentData.classList
)
const column = columnElement(
    content,
    {
        med: '2-third',
        lrg: 'half'
    },
    contentData.classList
)
const row = rowElement(column)
const section = sectionElement(row)
const container = containerElement(
    section,
    {
        top: 'lrg',
        bottom: 'xxlrg'
    },
    'test-class'
)

test('Image function exists and returns a string', (): void => {
    expect(image).toBeTruthy()
    expect(image).toBeTypeOf('string')
    expect(image).toMatch(/(class-name|style-name|This is alt text)/i)
})

test('iFrame function exists and returns a string', (): void => {
    expect(iframe).toBeTruthy()
    expect(iframe).toBeTypeOf('string')
    expect(iframe).toMatch(/(M4mM97qbva4|16x9)/i)
})

test('Content function exists and returns a string', (): void => {
    expect(content).toBeTruthy()
    expect(content).toBeTypeOf('string')
    expect(content).toBe('<div class="u-content test-class">this is content</div>')
})

test('Column function exists and returns a string', (): void => {
    expect(column).toBeTruthy()
    expect(column).toBeTypeOf('string')
    expect(column).toMatch(/(l-row__col)/i)
})

test('Row function exists and returns a string', (): void => {
    expect(row).toBeTruthy()
    expect(row).toBeTypeOf('string')
    expect(row).toMatch(/(l-row)/i)
})

test('Section function exists and returns a string', (): void => {
    expect(section).toBeTruthy()
    expect(section).toBeTypeOf('string')
    expect(section).toMatch(/(u-container__block)/i)
})

test('Container function exists and returns a string', (): void => {
    expect(container).toBeTruthy()
    expect(container).toBeTypeOf('string')
    expect(container).toMatch(/(u-container)/i)
})

test('Button function exists and returns a string', (): void => {
    expect(btn).toBeTruthy()
    expect(btn).toBeTypeOf('string')
    expect(btn).toMatch(/(button)/i)
    expect(btn).toMatch(/(js-trackingBtn)/i)
    expect(btn).toMatch(/(data-tracking-title="Tracking Title")/i)
    expect(btn).toMatch(/(Click me)/i)
})
