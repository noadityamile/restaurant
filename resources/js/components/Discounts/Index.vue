<template>
    <router-link to="/discounts/create" class="mb-2 btn btn-primary">+ Add Discount</router-link>

    <div>
        <table class="table table-striped table-hover table-bordered">
            <thead>
                <tr>
                    <th>
                        No
                    </th>
                    <th>
                        Discount Name
                    </th>
                    <th>
                        Scheme
                    </th>
                    <th>
                        Applied Item/Category
                    </th>
                    <th>
                        Percentage
                    </th>
                    <th>
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(discount, index) in discounts.data">
                    <td>
                        {{ index + 1 }}
                    </td>
                    <td>
                        {{ discount.discount_name }}
                    </td>
                    <td>
                        {{ discount.scheme }}
                    </td>
                    <td>
                        {{ discount.target }}
                    </td>
                    <td>
                        {{ discount.percentage }}
                    </td>
                    <td>
                        <a href="#" @click.prevent="deleteDiscount(discount.id)" class="ml-2">Delete</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import useDiscounts from "../../composables/discounts";

const { discounts, getDiscounts, deleteDiscount } = useDiscounts()
onMounted(() => {
    getDiscounts()
})
</script>
