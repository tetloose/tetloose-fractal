import { AppendNode } from './append-node.utilities'

export function logger(error: string): void {
    const body = document.querySelector('body') as HTMLElement
    const element = `
        <div style="position: relative; z-index: 999; width: 100%; padding: 1rem; background-color: #ff69b4; color: #000; font-size: 1rem; text-align: center;">
            ${error ? error : ''}
        </div>
    `

    new AppendNode(
        body,
        element
    )
}
