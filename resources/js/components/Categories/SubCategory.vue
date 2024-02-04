<template>
    <ul>
        <li v-for="subcategory in category" :key="subcategory.id">
            <router-link v-if="useLink" :to="{ name: 'categories.edit', params: { id: subcategory.id } }" >
                {{ subcategory.name }}
            </router-link>
            <span v-else>
                {{ subcategory.name }}
            </span>
            <sub-category v-if="subcategory.children" :category="subcategory.children" :useLink="useLink"/>
        </li>
    </ul>
</template>

<script setup>
import { defineProps } from 'vue';

const { category, useLink } = defineProps(['category', 'useLink']);

</script>
