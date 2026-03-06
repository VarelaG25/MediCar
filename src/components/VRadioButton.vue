<template>
    <div class="flex flex-row gap-3 w-full">
        <div v-for="(option) in source" :key="option.id" class="flex items-center gap-2">
            <RadioButton v-model="model" :inputId="`${inputId}-${option.id}`" :name="name" :value="option.id" />

            <label :for="`${inputId}-${option.id}`">
                {{ option.value }}
            </label>
        </div>
    </div>
</template>

<script setup lang="ts">
import RadioButton from 'primevue/radiobutton'

interface RadioOption {
    id: string | number
    value: string
}

const model = defineModel<string | number>()

defineProps({
    source: {
        type: Array as () => RadioOption[],
        default: () => []
    },
    name: {
        type: String,
        default: 'radio-group'
    },
    inputId: {
        type: String,
        default: 'radio'
    }
})
</script>