<template>
    <div class="container card mb-4">
        <h5 class="text mt-3">Add New Item</h5>
        <hr>
        <form class="form mb-4" @submit.prevent="storeItem(item)">
            <div class="row my-2">
                <div class="col-5">
                    <input type="text" v-model="item.name" class="form-control mx-2" placeholder="Item name...">
                </div>
                <div class="col-3">
                    <select id="item-category" v-model="item.category_id" class="form-control mx-2">
                        <option value="" selected disabled>-- Choose category --</option>
                        <option v-for="category in categories.data" :value="category.id">
                            {{ category.name }}
                        </option>
                    </select>
                </div>
                <div class="col-3">
                    <input type="number" v-model="item.price" class="form-control mx-2" placeholder="Price... ($)">
                </div>

            </div>
            <div class="row">
                <div class="col-11">
                    <input type="text" v-model="item.description" class="form-control mx-2" placeholder="Description...">
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


const { categories, getCategories } = useCategories()
const { storeItem } = useItems()

onMounted(() => {
    getCategories()
})

</script>
