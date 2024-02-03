<template>
    <div class="mt-4">
        <label>
            {{ label }}
        </label>
        <input v-bind="$attrs" class="form-control" :placeholder="label" :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)">
        <div class="text-danger" v-for="message in errors">
            {{ message }}
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    modelValue: {
        type: [String, Number],
        default: ''
    },
    errors: {
        type: Array,
        default: () => []
    }
})
</script>
