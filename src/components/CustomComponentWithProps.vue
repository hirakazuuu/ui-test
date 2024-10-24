<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
    msg: string
}>()
</script>

<template>
    <div>
        props: {{ msg }}
    </div>
</template>