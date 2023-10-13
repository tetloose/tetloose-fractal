export const modules = {
    Accordion: () => import(/* webpackChunkName: "accordion" */ '@/patterns/03-components/accordion/accordion.component'),
    Figure: () => import(/* webpackChunkName: "figure" */ '@/patterns/02-partials/figure/figure.component')
}
