import { createRouter, createWebHistory } from 'vue-router';

import ItemsIndex from '../components/Items/Index.vue'
import CategoriesIndex from '../components/Categories/Index.vue'
// import ItemsCreate from './components/Items/Create.vue'

const routes = [
    {
        path: '/items',
        component: ItemsIndex,
        meta: { title: 'Items Menu' }
    },
    {
        path: '/categories',
        component: CategoriesIndex,
        meta: { title: 'Categories Menu' }
    },

]

export default createRouter({
    history: createWebHistory(),
    routes
})
