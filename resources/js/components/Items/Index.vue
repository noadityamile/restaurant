<template>
    <div id="createItem" v-if="formMode == 'create'">
        <ItemCreate></ItemCreate>
    </div>
    <div id="updateItem" v-if="formMode == 'edit'">
        <ItemUpdate :editItem="editItem"></ItemUpdate>
    </div>
    <div id="listItem">
        <div class="container">
            <button class="btn btn-primary m-2" @click="setCreateForm()">Add new Item</button>
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
                        <td><a @click="setEditForm(item)" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                    height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path
                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fill-rule="evenodd"
                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                </svg></a></td>
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

const { items, getItems } = useItems()
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
