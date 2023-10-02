export const modules = {
    Alert: () => import(/* webpackChunkName: "alert" */ '@patterns/03-components/alert/alert.component'),
    Figure: () => import(/* webpackChunkName: "figure" */ '@patterns/02-partials/figure/figure.partial')
}
