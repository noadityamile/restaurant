import { ref } from 'vue'

export default function useItems() {
    const items = ref({})

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

    return { items, getItems }
}
