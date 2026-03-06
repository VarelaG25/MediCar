<template>
    <div class="card flex justify-center">
        <Textarea v-model="model" :rows="props.rows" :cols="props.cols" />
    </div>
</template>

<script setup lang="ts">
import { Textarea } from 'primevue';

const props = defineProps({
    rows: {
        type: Number,
        default: 5
    },
    cols: {
        type: Number,
        default: 30
    }
});

const model = defineModel<string>();
</script>
