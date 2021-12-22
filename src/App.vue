<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <h1>Welcome to Your Vue.js + TypeScript App</h1>

  {{ fields }}

  <Counter />

  <List my-special-prop="Great prop." @item-added="respondToItemAdded" />
</template>

<script lang="ts" setup>
  import { defineProps, PropType } from 'vue';
  import List from './components/List.vue';
  import FormFieldData from './types/FormFieldData';
  import Counter from './components/Counter.vue';

  document.title = 'Main Page';

  defineProps({
    fields: {
      type: Object as PropType<Record<string, FormFieldData>>,
    },
  });

  const respondToItemAdded = (message: string) => {
    alert(message);
  };
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
