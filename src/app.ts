import { components, observer } from '@utilities'

components?.forEach((component) => {
    observer.observe(component)
})
