import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2';

export default function useItems() {
    const items = ref({})
    const item = ref({})
    const router = useRouter()
    const validationErrors = ref({})
    const swal = inject('$swal')

    const getItems = (
        page = 1,
        order_column = 'created_at',
        order_direction = 'desc'
    ) => {
        return axios.get('/api/items?page=' + page +
            '&order_column=' + order_column +
            '&order_direction=' + order_direction
        )
            .then(response => {
                items.value = response.data;
            })
            .catch(error => {
                console.error('Error fetching items:', error);
                throw error;
            });
    };

    const getItem = async (id) => {
        try {
            const response = await axios.get('/api/items/' + id);
            item.value = response.data.data;
        } catch (error) {
            console.error('Error fetching item:', error);
            throw error;
        }
    }

    const storeItem = async (item) => {
        try {
            const response = await axios.post('/api/items', item);
            router.push({ name: 'items.index' });
        } catch (error) {
            if (error.response?.data) {
                validationErrors.value = error.response.data.errors
            }
        }
    };

    const updateItem = async (item) => {
        try {
            const response = await axios.put(`/api/items/${item.id}`, item);
            router.push({ name: 'items.index' });
        } catch (error) {
            if (error.response?.data) {
                validationErrors.value = error.response.data.errors;
            }
        }
    };

    const deleteItem = async (id) => {
        try {
            await axios.delete(`/api/items/${id}`);
            await getItems();
            router.push({ name: 'items.index' });
            Swal.fire({
                icon: 'success',
                title: 'Item deleted successfully'
            });
        } catch (error) {
            console.error('Error deleting item:', error);
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong'
            });
        }
    };

    return { items, item, getItems, getItem, storeItem, updateItem, deleteItem, validationErrors }
}
