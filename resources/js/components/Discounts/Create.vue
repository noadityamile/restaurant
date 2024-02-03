<template>
    <form @submit.prevent="submit">
        <div>
            <label for="discount-name">
                Discount Name
            </label>
            <input id="discount-name" type="text" class="form-control">
        </div>

        <div class="mt-4">
            <label>
                Discount Scheme
            </label>
            <select class="form-select" v-model="selectedScheme" @change="updateTarget">
                <option value="" selected disabled>-- Choose Scheme --</option>
                <option value="all-menu">All Menu</option>
                <option value="per-category">Per Category</option>
                <option value="per-item">Per Item</option>
            </select>
        </div>

        <div class="mt-4" v-show="showTarget">
            <label id="label-target">{{ labelTarget }}</label>
            <select multiple class="form-select form-select-lg" v-model="discountTarget">
                <option v-for="target in discountTargets">
                    {{ target.name }}
                </option>
            </select>
        </div>

        <div class="mt-4">
            <label for="discount-percentage">
                Percentage
            </label>
            <input id="discount-percentage" type="number" class="form-control" max="100">
        </div>

        <input type="submit" class="mt-2 btn btn-primary">
    </form>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import useDiscounts from '../../composables/discounts';
import useCategories from '../../composables/categories';
import useItems from '../../composables/items';


const selectedScheme = ref("");
const discountTarget = ref([]);
const showTarget = ref(false);
const labelTarget = ref(null);

const { discounts, getDiscounts } = useDiscounts()
const { categories, getCategories } = useCategories()
const { items, getItems } = useItems()


const discountTargets = ref([]);


const updateTarget = async () => {
    showTarget.value = true
    if (selectedScheme.value === 'per-category') {
        await getCategories()
        labelTarget.value = "Category"
        discountTargets.value = categories.value.data
    } else if (selectedScheme.value === 'per-item') {
        await getItems()
        labelTarget.value = "Item"
        discountTargets.value = items.value.data
    } else {
        showTarget.value = false
    }

}

</script>
