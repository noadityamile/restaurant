<template>
    <form @submit.prevent="storeDiscount(discount)">
        <div>
            <label for="discount-name">
                Discount Name
            </label>
            <input id="discount-name" type="text" class="form-control" name="name" v-model="discount.name">
            <div class="text-danger" v-for="message in validationErrors?.name">
                {{ message }}
            </div>
        </div>

        <div class="mt-4">
            <label>
                Discount Scheme
            </label>
            <select class="form-select" name="scheme" v-model="discount.scheme" @change="updateTarget">
                <option value="" selected disabled>-- Choose Scheme --</option>
                <option value="all-menu">All Menu</option>
                <option value="per-category">Per Category</option>
                <option value="per-item">Per Item</option>
            </select>

            <div class="text-danger" v-for="message in validationErrors?.scheme">
                {{ message }}
            </div>
        </div>

        <div class="mt-4" v-show="showTarget">
            <label id="label-target">{{ labelTarget }}</label>
            <select name="targets" multiple class="form-select form-select-lg" v-model="discount.targets">
                <option v-for="target in discountTargets" :value="target.id">
                    {{ target.name }}
                </option>
            </select>

            <div class="text-danger" v-for="message in validationErrors?.targets">
                {{ message }}
            </div>
        </div>

        <div class="mt-4">
            <label for="discount-percentage">
                Percentage
            </label>
            <input name="percentage" v-model="discount.percentage" id="discount-percentage" type="number"
                class="form-control" max="100">

            <div class="text-danger" v-for="message in validationErrors?.percentage">
                {{ message }}
            </div>
        </div>

        <input type="submit" class="mt-2 btn btn-primary">
    </form>
</template>

<script setup>
import { ref, reactive } from 'vue';
import useDiscounts from '../../composables/discounts';
import useCategories from '../../composables/categories';
import useItems from '../../composables/items';

const showTarget = ref(false);
const labelTarget = ref(null);

const { storeDiscount, validationErrors } = useDiscounts()
const { categories, getCategories } = useCategories()
const { items, getItems } = useItems()

const discountTargets = ref([]);
const discount = reactive({
    name: '',
    scheme: '',
    percentage: 0,
    targets: []
})

const updateTarget = async () => {
    showTarget.value = true
    if (discount.scheme === 'per-category') {
        await getCategories()
        labelTarget.value = "Category"
        discountTargets.value = categories.value.data
    } else if (discount.scheme === 'per-item') {
        await getItems()
        labelTarget.value = "Item"
        discountTargets.value = items.value.data
    } else {
        showTarget.value = false
    }

}

</script>
