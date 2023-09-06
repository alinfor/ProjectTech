<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
    <h1 className="text-3xl font-bold underline">
      Hello world{{ msg }}!
    </h1>
</template>
