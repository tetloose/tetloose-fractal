import { test, expect } from 'vitest'

test('querySelectorAll Test', () => {
    const container = document.createElement('div')

    container.innerHTML = `
      <div data-module="module1"></div>
      <div data-module="module2"></div>
    `
    document.body.appendChild(container)

    const components = container.querySelectorAll('[data-module]')

    expect(components.length === 2)

    document.body.removeChild(container)
})
