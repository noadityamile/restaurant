<template>
    <div>
        <ul>
            <li v-for="category in categories.data" :key="category.id">
                {{ category.category_name }}
                <span v-if="category.item != null" class="bg-success">
                    <ul>
                        <li>
                            <h4>{{ category.item.item_name }} <span class="px-4">${{ category.item.price }}</span></h4>
                        </li>
                    </ul>
                </span>
                <Tree :children="category.children" :indent="newIndent" />
            </li>
        </ul>

        <!-- <table class="table table-hover">
                <tr v-for="category in categories.data" :key="category.id">
                    <div v-if="category.parent_id == 0">
                        <div>
                            {{ category.name }}
                            <span v-if="category.item != null" class="bg-success">
                                <br />
                                {{ category.item.name }}
                                <span>${{
                                    category.item.price }}</span>

                            </span>
                        </div>
                        <Tree :subcategories="subcategory.children"></Tree>
                    </div>
                </tr>
            </table> -->
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import useCategories from "../../composables/categories";
import Tree from "../Categories/Tree.vue";

const { categories, getCategories } = useCategories()
onMounted(() => {
    getCategories()
})


const indent = ref(55)

const newIndent = computed(() => {
    return indent.value
})

const style = computed(() => {
    return {
        'margin-left': '25px'
    }
})
</script>
