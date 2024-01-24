<template>
    <div class="container">
        <table class="table table-striped table-hover table-bordered">
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Created At</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="category in categories.data" :key="category.id">
                    <td>{{ category.name }}</td>
                    <td>{{ category.created_at }}</td>
                </tr>
            </tbody>

        </table>
        <Bootstrap5Pagination :data="categories" @pagination-change-page="getCategories" :limit="5"/>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import useCategories from "../../composables/categories";
import { Bootstrap5Pagination } from 'laravel-vue-pagination';

const { categories, getCategories } = useCategories()
onMounted(() => {
    getCategories()
})
</script>
