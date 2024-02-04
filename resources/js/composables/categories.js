import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default function useCategories() {
    const categories = ref({})
    const category = ref({})
    const router = useRouter()

    const getCategories = async () => {
        try {
            const response = await axios.get('/api/categories');
            categories.value = response.data;
        } catch (error) {
            console.error('Error fetching categories:', error);
            throw error;
        }
    };

    const getCategory = async (id) => {
        try {
            const response = await axios.get('/api/categories/' + id);
            category.value = response.data.data;
        } catch (error) {
            console.error('Error fetching category:', error);
            throw error;
        }
    }

    return { categories,category, getCategory, getCategories }
}
