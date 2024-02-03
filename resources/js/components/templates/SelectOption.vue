<template>
    <div class="mt-4">
        <label>
            {{ label }}
        </label>
        <select v-bind="$attrs" class="form-select" v-model="selectedOption"
            @change=" $emit('update:modelValue', selectedOption)">
            <option :value="initial" disabled>{{ initial }}</option>
            <option v-for="option in options" :key="option.value" :value="option.id">
                {{ option.name }}
            </option>
        </select>
        <div class="text-danger" v-for="message in errors">
            {{ message }}
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const { label, options, modelValue, errors, initial } = defineProps(['label', 'options', 'modelValue', 'errors', 'initial']);

const selectedOption = ref(modelValue);

</script>
