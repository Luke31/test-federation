<template>
  <button @click="onClick">
    Click me version 2 {{ count }}
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

function onClick() {
  count.value++;
}
</script>