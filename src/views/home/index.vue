<template>
  <div class="home">
    <img alt="Vue logo" :src="Logo" />
    <HelloWorld
      msg="Welcome to Your Vue.js + TypeScript App"
      :count="useCounter.state.count"
      @increment="increment"
    />
  </div>
</template>

<script setup lang="ts">
import {Logo} from '@assets';
import {HelloWorld} from '@component'; // @component is an alias to /src/components/index.ts
import {useCounter} from '@store/counter';

const increment = () => {
  useCounter.dispatch('increment');
};
</script>

<style>
img {
  @apply m-auto;
}
</style>
