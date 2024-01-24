require('./bootstrap');

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './layouts/App.vue'
import ItemsIndex from './components/Items/Index.vue'
import CategoriesIndex from './components/Categories/Index.vue'
// import ItemsCreate from './components/Items/Create.vue'

const routes = [
    { path: '/items', component: ItemsIndex },
    { path: '/categories', component: CategoriesIndex },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App)
    .use(router)
    .mount('#app')
