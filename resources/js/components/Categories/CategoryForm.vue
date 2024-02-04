<template>
    <form @submit.prevent="handleSubmit(category)">
        <base-input v-model="category.name" label="Category Name" type="text" :errors="validationErrors?.name" />

        <select-option v-model="category.category_id" label="Under Category" :errors="validationErrors?.scheme"
            :options="categoryOption" :initial="'--Choose Category--'" />
        <input type="submit" class="mt-2 btn btn-primary">
    </form>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from "vue-router";
import useCategories from '../../composables/categories';
import BaseInput from '../templates/BaseInput.vue';
import SelectOption from '../templates/SelectOption.vue';

const { category, getCategory, categories, getCategories, storeCategory, validationErrors } = useCategories()
const route = useRoute()

const categoryOption = ref([]);

const { action } = defineProps(['action']);

onMounted(async () => {
    if (action == "edit") {
        await getCategory(route.params.id)
    }
    await getCategories()
    categoryOption.value = categories.value.data
})

const handleSubmit = (category) => {
    category.parent_id = category.category_id
    if (action == "edit") {
        updateCategory(category)
    } else {
        storeCategory(category)
    }
}

</script>
