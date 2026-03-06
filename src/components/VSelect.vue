<template>
    <div class="card flex justify-center">
        <Select v-model="model" :options="props.source" :optionLabel="props.label" optionValue="id"
            :placeholder="props.placeholder" class="w-full" />
    </div>
</template>

<script setup lang="ts">
import Select from "primevue/select"

interface SelectOptions {
    id: string | number
    value: string
}

const model = defineModel<string | number>()

const props = defineProps({
    source: {
        type: Array as () => SelectOptions[],
        default: () => []
    },
    label: {
        type: String,
        default: 'value'
    },
    placeholder: {
        type: String,
        default: ''
    }
})
</script>