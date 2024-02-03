import { ref } from 'vue'

export default function useDiscounts() {
    const discounts = ref({})

    const getDiscounts = async (page = 1) => {
        axios.get('/api/discounts?page=' + page)
            .then(response => {
                discounts.value = response.data;
            })
    }


    return { discounts, getDiscounts }
}
