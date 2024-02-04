<template>
    <div id="createItem" v-if="formMode == 'create'">
        <ItemCreate></ItemCreate>
    </div>
    <div id="updateItem" v-if="formMode == 'edit'">
        <ItemUpdate :editItem="editItem"></ItemUpdate>
    </div>
    <div id="listItem">
        <div class="container">
            <router-link to="/items/create" class="mb-2 btn btn-primary">+ Add Item</router-link>
            <table class="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th></th>
                        <th>Item</th>
                        <th>Under Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items.data" :key="item.id">
                        <td class="text-center"><router-link :to="{ name: 'items.edit', params: { id: item.id } }"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path
                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fill-rule="evenodd"
                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                </svg></router-link>

                            <a href="#" @click.prevent="deleteItem(item.id)" class="ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-trash" viewBox="0 0 16 16">
                                    <path
                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                    <path
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                </svg>
                            </a>
                        </td>
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
import { onMounted, ref } from "vue";
import useItems from "../../composables/items";
import ItemCreate from "../Items/Create.vue";
import ItemUpdate from "../Items/Update.vue";
import Tree from "../Categories/Tree.vue";
import { Bootstrap5Pagination } from 'laravel-vue-pagination';

const { items, getItems, deleteItem } = useItems()
let formMode = ref("")
let editItem = ref({})


function setEditForm(item) {
    formMode = 'edit'
    editItem = item
}

function setCreateForm() {
    formMode = 'create'
}

onMounted(() => {
    getItems()
})
</script>
