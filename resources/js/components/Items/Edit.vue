<template>
    <form @submit.prevent="updateItem(item)">
        <base-input v-model="item.name" label="Item Name" type="text" :errors="validationErrors?.name" />

        <base-input v-model="item.description" label="Food Description" type="text"
            :errors="validationErrors?.description" />

        <base-input v-model="item.price" label="Price" type="number" :errors="validationErrors?.price" />
        <select-option v-model="item.category_id" label="Under Category" :errors="validationErrors?.scheme"
            :options="categoryOption" :initial="'--Choose Category--'" />
        <input type="submit" class="mt-2 btn btn-primary">
    </form>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from "vue-router";
import useItems from '../../composables/items';
import useCategories from '../../composables/categories';
import BaseInput from '../templates/BaseInput.vue';
import SelectOption from '../templates/SelectOption.vue';

const { item, getItem, updateItem, validationErrors } = useItems()
const { categories, getCategories } = useCategories()
const route = useRoute()

const categoryOption = ref([]);

onMounted(async () => {
    await getItem(route.params.id)
    await getCategories()
    categoryOption.value = categories.value.data

})

</script>
