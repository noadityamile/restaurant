<template>
    <div id="createItem">
        <ItemCreate></ItemCreate>
    </div>
    <div id="updateItem"></div>
    <div id="listItem">
        <div class="container">
            <table class="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Under Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items.data" :key="item.id">
                        <td class="col px-4">
                            <div class="row">{{ item.name }}</div>
                            <div class="row text-muted">{{ item.description }}</div>
                        </td>
                        <td>{{ item.category }}</td>
                        <td>{{ item.price }}</td>
                    </tr>
                </tbody>

            </table>
            <Bootstrap5Pagination :data="items" @pagination-change-page="getItems" :limit="5" />
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import useItems from "../../composables/items";
import ItemCreate from "../Items/Create.vue";
import Tree from "../Categories/Tree.vue";
import { Bootstrap5Pagination } from 'laravel-vue-pagination';

const { items, getItems } = useItems()
onMounted(() => {
    getItems()
})
</script>
