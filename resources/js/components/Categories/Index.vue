<template>
    <div class="container">
        <table class="table table-striped table-hover table-bordered">
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Created At</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="category in categories.data" :key="category.id">
                    <td>{{ category.name }}</td>
                    <td>{{category.created_at}}</td>
                    </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: []
        }
    },
    mounted() {
        this.fetchCategories()
    },
    methods: {
        fetchCategories() {
            axios.get('/api/categories')
                .then(response => this.categories = response.data)
                .catch(error => console.log(error))
        }
    }
}
</script>
