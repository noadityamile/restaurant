import { createRouter, createWebHistory } from 'vue-router';

import ItemsIndex from '../components/Items/Index.vue'
import CategoriesIndex from '../components/Categories/Index.vue'
import MenusIndex from '../components/Menus/MenuIndex.vue'
// import ItemsCreate from './components/Items/Create.vue'

const routes = [
    {
        path: '/items',
        component: ItemsIndex,
        meta: { title: 'Build Your Own Menu' }
    },
    {
        path: '/categories',
        component: CategoriesIndex,
        meta: { title: 'Categories Menu' }
    },
    {
        path: '/menu',
        component: MenusIndex,
        meta: { title: 'Main Menu' }
    },

]

export default createRouter({
    history: createWebHistory(),
    routes
})
