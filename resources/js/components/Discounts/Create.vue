<template>
    <form @submit.prevent="storeDiscount(discount)">
        <base-input v-model="discount.name" label="Discount Name" type="text" :errors="validationErrors?.name" />
        <select-option v-model="discount.scheme" label="Discount Scheme" :errors="validationErrors?.scheme"
            :options="discountSchemeOption" :initial="'--Choose Scheme--'" @change="updateTarget" />

        <div class="mt-4" v-show="showTarget">
            <select-option multiple v-model="discount.targets" :label="labelTarget" :errors="validationErrors?.targets"
                :options="discountTargets" :initial="'Select discount targets'" />
        </div>

        <base-input v-model="discount.percentage" label="Percentage" type="number" :errors="validationErrors?.percentage"
            max="100" />

        <input type="submit" class="mt-2 btn btn-primary">
    </form>
</template>

<script setup>
import { ref, reactive } from 'vue';
import useDiscounts from '../../composables/discounts';
import useCategories from '../../composables/categories';
import useItems from '../../composables/items';
import BaseInput from '../templates/BaseInput.vue';
import SelectOption from '../templates/SelectOption.vue';

const showTarget = ref(false);
const labelTarget = ref(null);

const { storeDiscount, validationErrors } = useDiscounts()
const { categories, getCategories } = useCategories()
const { items, getItems } = useItems()

const discountTargets = ref([]);

const discountSchemeOption = [
    {
        id: "all-menu",
        name: "All Menu"
    },
    {
        id: "per-category",
        name: "Per Category"
    },
    {
        id: "per-item",
        name: "Per Item"
    }
];

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
