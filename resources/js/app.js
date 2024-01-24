require('./bootstrap');

import { createApp } from 'vue'
import CategoriesIndex from './components/Categories/Index.vue'

createApp({})
    .component('CategoriesIndex', CategoriesIndex)
    .mount('#app')
