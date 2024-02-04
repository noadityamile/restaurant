<template>
    <div class="container">
        <router-link to="/categories/create" class="mb-2 btn btn-primary">+ Add Category</router-link>
        <table class="table table-striped table-hover table-bordered">
            <thead>
                <tr>
                    <th>Category & SubCategory</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="category in categories.data" :key="category.id">
                    <td>
                        <router-link :to="{ name: 'categories.edit', params: { id: category.id } }" >
                        {{ category.name }}
                        </router-link>
                        <!-- <ul v-if="category.children">
                            <li v-for="subcategory in category.children" :key="subcategory.id">
                                {{ subcategory.name }}
                            </li>
                        </ul> -->
                        <sub-category v-if="category.children" :category="category.children"/>
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import useCategories from "../../composables/categories";
import SubCategory from "./SubCategory.vue";


const { categories, getCategories } = useCategories()
onMounted(() => {
    getCategories()
})
</script>
