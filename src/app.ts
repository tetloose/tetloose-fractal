import { components, loadComponent, observer } from '@utilities'

components?.forEach((component) => {
    const { dataset } = component
    const { module, preload } = dataset

    if (preload && module) {
        loadComponent(component, module)
    } else {
        observer.observe(component)
    }
})
