<template>
    <div class="container card mb-4">
        <h5 class="text mt-3">Update Item</h5>
        <hr>
        <form class="form mb-4" @submit.prevent="updateItem(editItem)">
            <div class="row my-2">
                <div class="col-5 mx-2">
                    <input type="text" v-model="editItem.name" class="form-control" placeholder="Item name...">
                    <div v-for="message in validationErrors?.name" class="text-danger">
                        {{ message }}
                    </div>
                </div>
                <div class="col-3">
                    <select id="item-category" v-model="editItem.category_id" class="form-control mx-2">
                        <option value="" disabled>-- Choose category --</option>
                        <option v-for="category in categories.data" :value="category.id">
                            {{ category.name }}
                        </option>
                    </select>
                    <div v-for="message in validationErrors?.category_id" class="text-danger">
                        {{ message }}
                    </div>
                </div>
                <div class="col-3">
                    <input type="number" v-model="editItem.price" class="form-control mx-2" placeholder="Price... ($)">
                    <div v-for="message in validationErrors?.price" class="text-danger">
                        {{ message }}
                    </div>
                </div>

            </div>
            <div class="row">
                <div class="col-11">
                    <input type="text" v-model="editItem.description" class="form-control mx-2" placeholder="Description...">
                    <div v-for="message in validationErrors?.description" class="text-danger">
                        {{ message }}
                    </div>
                </div>
            </div>
            <div class="row justify-content-end mt-2">
                <div class="col-2">
                    <input type="submit" class="btn btn-primary">
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import useCategories from '../../composables/categories';
import useItems from '../../composables/items';

const item = reactive({
    name: '',
    description: '',
    category_id: '',
    price: 0
})

const props = defineProps({
    editItem: {
        type: Object
    }
})

const { categories, getCategories } = useCategories()
const { storeItem, validationErrors } = useItems()

onMounted(() => {
    getCategories()
})

</script>
