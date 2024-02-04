<template>
    <ul>
        <li v-for="subcategory in category" :key="subcategory.id">
            <router-link :to="{ name: 'categories.edit', params: { id: subcategory.id } }" >
                {{ subcategory.name }}
            </router-link>
            <sub-category v-if="subcategory.children" :category="subcategory.children"/>
        </li>
    </ul>
</template>

<script setup>
import { defineProps } from 'vue';

const { category } = defineProps(['category']);

</script>
