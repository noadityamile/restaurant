<template>
    <form @submit.prevent="storeItem(item)">
        <base-input v-model="item.name" label="Item Name" type="text" :errors="validationErrors?.name" />

        <base-input v-model="item.description" label="Food Description" type="text"
            :errors="validationErrors?.description" />

            <base-input v-model="item.price" label="Price" type="number" :errors="validationErrors?.price" />

        <select-option v-model="item.category" label="Under Category" :errors="validationErrors?.scheme"
            :options="categoryOption" :initial="'--Choose Category--'" />

        <input type="submit" class="mt-2 btn btn-primary">
    </form>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import useItems from '../../composables/items';
import useCategories from '../../composables/categories';
import BaseInput from '../templates/BaseInput.vue';
import SelectOption from '../templates/SelectOption.vue';

const { storeItem, validationErrors } = useItems()
const { categories, getCategories } = useCategories()

const item = reactive({
    name: '',
    description: '',
    category: '',
    price:0
})

const categoryOption = ref([]);

onMounted(async () => {
    await getCategories()
    categoryOption.value = categories.value.data
})

</script>
