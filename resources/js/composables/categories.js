import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2';

export default function useCategories() {
    const categories = ref({})
    const category = ref({})
    const router = useRouter()
    const validationErrors = ref({})

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

    const storeCategory = async (category) => {
        try {
            const response = await axios.post('/api/categories', category);
            router.push({ name: 'categories.index' });
        } catch (error) {
            if (error.response?.data) {
                validationErrors.value = error.response.data.errors
            }
        }
    };

    const updateCategory = async (category) => {
        try {
            const response = await axios.put(`/api/categories/${category.id}`, category);
            router.push({ name: 'categories.index' });
        } catch (error) {
            if (error.response?.data) {
                validationErrors.value = error.response.data.errors;
            }
        }
    };

    const deleteCategory = async (id) => {
        try {
            await axios.delete(`/api/categories/${id}`);
            await getCategories();
            router.push({ name: 'categories.index' });
            Swal.fire({
                icon: 'success',
                title: 'Category deleted successfully'
            });
        } catch (error) {
            console.error('Error deleting category:', error);
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong'
            });
        }
    };

    return { categories,category, getCategory, getCategories, storeCategory, updateCategory, deleteCategory, validationErrors }
}
