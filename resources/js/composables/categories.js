import { ref } from 'vue'

export default function useCategories() {
    const categories = ref({})

    const getCategories = async () => {
        try {
            const response = await axios.get('/api/categories');
            categories.value = response.data;
        } catch (error) {
            console.error('Error fetching discounts:', error);
            throw error;
        }
    };

    return { categories, getCategories }
}
