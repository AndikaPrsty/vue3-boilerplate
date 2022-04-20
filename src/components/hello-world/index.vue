<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    |
    <a href="https://vuex.vuejs.org/" target="_blank"> Vuex Docs </a>
  </p>

  <button type="button" @click="$emit('increment')">
    count is: {{ count }}
  </button>
  <p>
    Edit
    <code>components/views/home/index.vue</code> to test hot module replacement.
  </p>
</template>

<script setup lang="ts">
interface Props {
  msg: string;
  count: number;
}

defineEmits(['increment']);

defineProps<Props>();
</script>

<style scoped>
a {
  @apply text-green-400;
}

label {
  @apply mx-2 font-bold;
}

code {
  @apply bg-gray-100 px-1 py-0.5 rounded-sm text-blue-900;
}
button {
  @apply bg-gray-400 p-1 rounded-sm;
}
</style>
