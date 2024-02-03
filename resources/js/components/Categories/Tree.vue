<template>
    <ul>
        <li v-for="subcategory in children" :key="subcategory.id">
            {{ subcategory.category_name }}
            <span v-if="subcategory.item != null" class="bg-success">
                <ul>
                    <li><h4>{{subcategory.item.item_name }} <span class="px-4">${{ subcategory.item.price }}</span></h4></li>
                </ul>
            </span>
            <Tree :children="subcategory.children" :indent="newIndent" :item="subcategory.item"></Tree>
        </li>
    </ul>
</template>

<script setup>

import { ref, computed } from 'vue'

const props = defineProps({
    indent: {
        type: Number
    },
    item: {
        type: Object
    },
    children: {
        type: Object
    },
})

const indent = ref(105)

const newIndent = computed(() => {
    return indent.value
})

const style = computed(() => {
    return {
        'margin-left': '55px'
    }
})
</script>
