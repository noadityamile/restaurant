import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default function useItems() {
    const items = ref({})
    const router = useRouter()

    const getItems = async (
        page = 1,
        order_column = 'created_at',
        order_direction = 'desc'
        ) => {
        axios.get('/api/items?page=' + page +
            '&order_column=' + order_column +
            '&order_direction=' + order_direction
        )
            .then(response => {
                items.value = response.data;
            })
    }

    const storeItem = async (item) => {
        axios.post('/api/items', item)
            .then(response => {
                router.push({ name: 'items.index' })
            })
    }

    return { items, getItems, storeItem }
}
