import { createRouter, createWebHistory } from 'vue-router';

import ItemsIndex from '../components/Items/Index.vue'
import ItemsCreate from '../components/Items/Create.vue'
import ItemsEdit from '../components/Items/Edit.vue'

import CategoriesIndex from '../components/Categories/Index.vue'
import CategoriesCreate from '../components/Categories/Create.vue'
import MenusIndex from '../components/Menus/MenuIndex.vue'

import DiscountsIndex from '../components/Discounts/Index.vue'
import DiscountsCreate from '../components/Discounts/Create.vue'


const routes = [
    {
        path: '/items',
        name: 'items.index',
        component: ItemsIndex,
        meta: { title: 'Build Your Own Menu' }
    },
    {
        path: '/items/create',
        name: 'items.create',
        component: ItemsCreate,
        meta: { title: 'Add Item' }
    },
    {
        path: '/items/edit/:id',
        name: 'items.edit',
        component: ItemsEdit,
        meta: { title: 'Edit Item' }
    },

    {
        path: '/categories',
        name: 'categories.index',
        component: CategoriesIndex,
        meta: { title: 'Categories Menu' }
    },
    {
        path: '/categories/create',
        name: 'categories.create',
        component: CategoriesCreate,
        meta: { title: 'Add Category/SubCategory' }
    },

    {
        path: '/menu',
        name: 'menu.index',
        component: MenusIndex,
        meta: { title: 'Main Menu' }
    },
    //discounts
    {
        path: '/discounts',
        component: DiscountsIndex,
        name: 'discounts.index',
        meta: { title: 'Discount List' }
    },
    {
        path: '/discounts/create',
        component: DiscountsCreate,
        name: 'discounts.create',
        meta: { title: 'Create Discount' }
    },

]

export default createRouter({
    history: createWebHistory(),
    routes
})
