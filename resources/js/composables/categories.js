import { ref } from 'vue'

export default function useCategories() {
    const categories = ref({})

    const getCategories = (page = 1) => {
        return axios.get('/api/categories?page=' + page)
            .then(response => {
                categories.value = response.data;
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
                throw error;
            });
    };

    return { categories, getCategories }
}
