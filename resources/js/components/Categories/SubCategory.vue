<template>
    <ul>
        <li v-for="subcategory in category" :key="subcategory.id">
            {{ subcategory.name }}
            <sub-category v-if="subcategory.children" :category="subcategory.children"/>
        </li>
    </ul>
</template>

<script setup>
import { defineProps } from 'vue';

const { category } = defineProps(['category']);

</script>
