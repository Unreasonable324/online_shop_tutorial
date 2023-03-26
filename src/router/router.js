import Vue from 'vue'
import Router from 'vue-router'

import tgMenu from '../pages/tgMenu'

Vue.use(Router);

let router =  new Router({
    routes:[
        {
            path: '/',
            name: 'home',
            component: tgMenu
        },
    ]
})

export default router;