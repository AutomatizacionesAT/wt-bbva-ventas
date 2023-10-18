import Home from './home.controllers.js'
import Checklist from './checklist.controller.js'
import Direcciones from './direccion.controllers.js'
import Excel from './localBase.controller.js'
import NotFound from './notFound.controller.js'

const views = {
    home: Home,
    checklist: Checklist,
    direcciones: Direcciones,
    excel: Excel,
    notFound: NotFound
}

export { views }