import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2';

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

    const deleteDiscount = async (id) => {
        try {
            await axios.delete(`/api/discounts/${id}`);
            await getDiscounts();
            router.push({ name: 'discounts.index' });
            Swal.fire({
                icon: 'success',
                title: 'Discount deleted successfully'
            });
        } catch (error) {
            console.error('Error deleting discount:', error);
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong'
            });
        }
    };

    return { discounts, getDiscounts, storeDiscount, deleteDiscount, validationErrors }
}
