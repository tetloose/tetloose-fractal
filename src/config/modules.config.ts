export const modules = {
    Button: () => import(/* webpackChunkName: 'button' */ '@atoms/button/button.component'),
    Logo: () => import(/* webpackChunkName: 'logo' */ '@atoms/logo/logo.component'),
    Figure: () => import(/* webpackChunkName: 'figure' */ '@partials/figure/figure.component'),
    Video: () => import(/* webpackChunkName: 'video' */ '@partials/video/video.component'),
    Accordion: () => import(/* webpackChunkName: 'accordion' */ '@components/accordion/accordion.component'),
    Action: () => import(/* webpackChunkName: 'action' */ '@containers/action/action.component'),
    Content: () => import(/* webpackChunkName: 'content' */ '@containers/content/content.component'),
    Media: () => import(/* webpackChunkName: 'media' */ '@containers/media/media.component'),
    Form: () => import(/* webpackChunkName: 'form' */ '@containers/form/form.component'),
    Modal: () => import(/* webpackChunkName: 'modal' */ '@containers/modal/modal.component')
}
