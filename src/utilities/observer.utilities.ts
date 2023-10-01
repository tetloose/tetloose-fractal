import { loadComponent } from './load-component.utilities'

export const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        const { target } = entry

        if (target instanceof HTMLElement && entry.isIntersecting) {
            const { dataset } = target

            if (dataset.module) loadComponent(target, dataset.module)

            observer.unobserve(target)
        }
    })
}, {
    root: null,
    rootMargin: '300px 0px',
    threshold: 0.01
})
