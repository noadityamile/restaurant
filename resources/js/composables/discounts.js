import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default function useDiscounts() {
    const discounts = ref({})
    const router = useRouter()
    const validationErrors = ref({})

    const getDiscounts = async (page = 1) => {
        try {
            const response = await axios.get('/api/discounts?page=' + page);
            discounts.value = response.data;
        } catch (error) {
            console.error('Error fetching discounts:', error);
            throw error;
        }
    };

    const storeDiscount = async (discount) => {
        try {
            const response = await axios.post('/api/discounts', discount);
            router.push({ name: 'discounts.index' });
        } catch (error) {
            if (error.response?.data) {
                validationErrors.value = error.response.data.errors
            }
        }
    };

    return { discounts, getDiscounts, storeDiscount, validationErrors }
}
