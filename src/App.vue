<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  {{ fields }}
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import FormFieldData from './types/FormFieldData';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  props: {
    fields: {
      type: Object as PropType<Record<string, FormFieldData>>,
    },
  },
});
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
