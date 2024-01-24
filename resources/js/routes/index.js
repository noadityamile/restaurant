import { createRouter, createWebHistory } from 'vue-router';

import ItemsIndex from '../components/Items/Index.vue'
import CategoriesIndex from '../components/Categories/Index.vue'
import MenusIndex from '../components/Menus/MenuIndex.vue'
// import ItemsCreate from './components/Items/Create.vue'

const routes = [
    {
        path: '/items',
        name: 'items.index',
        component: ItemsIndex,
        meta: { title: 'Build Your Own Menu' }
    },
    {
        path: '/categories',
        name: 'categories.index',
        component: CategoriesIndex,
        meta: { title: 'Categories Menu' }
    },
    {
        path: '/menu',
        name: 'menu.index',
        component: MenusIndex,
        meta: { title: 'Main Menu' }
    },

]

export default createRouter({
    history: createWebHistory(),
    routes
})
