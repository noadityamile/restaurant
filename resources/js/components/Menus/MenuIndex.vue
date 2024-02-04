<template>
    <div>
        <!-- <ul>
            <li v-for="category in categories.data" :key="category.id">
                {{ category.name }} <span v-if="category.discounts != null">{{ category.discounts.percentage }}
                </span>
                <span v-if="category.item != null" class="bg-success">
                    <ul>
                        <li>
                            <h4>{{ category.item.item_name }} <span class="px-4">${{ category.item.price }}</span></h4>
                        </li>
                    </ul>
                </span>
            </li>
        </ul> -->


        <table>
            <tr v-for="category in categories.data" :key="category.id">
                <td>

                    {{ category.name }}

                    <sub-category v-if="category.children" :category="category.children" :useLink="false" />
                    <span v-if="category.item != null" class="bg-success">
                        <ul>
                            <li>
                                <h4>{{ category.item.name }} <span class="px-4">${{ category.item.price }}</span></h4>
                            </li>
                        </ul>
                    </span>
                </td>
            </tr>
        </table>
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import useCategories from "../../composables/categories";
import SubCategory from "../Categories/SubCategory.vue";

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
