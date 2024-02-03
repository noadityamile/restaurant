import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

export default function useItems() {
    const items = ref({})
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

    const storeItem = async (item) => {
        axios.post('/api/items', item)
            .then(response => {
                router.push({ name: 'items.index' })
                swal({
                    icon: 'success',
                    title: 'Post saved successfully'
                })
            })
            .catch(error => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors
                }
            })
    }

    return { items, getItems, storeItem, validationErrors }
}
