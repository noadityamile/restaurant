<template>
    <div>
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
                            Percentage
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(discount, index) in discounts.data">
                        <td>
                            {{ index +1 }}
                        </td>
                        <td>
                            {{ discount.discount_name }}
                        </td>
                        <td>
                            {{ discount.percentage }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import useDiscounts from "../../composables/discounts";

const { discounts, getDiscounts } = useDiscounts()
onMounted(() => {
    getDiscounts()
})
</script>
