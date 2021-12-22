<template>
  <h2 :class="{ positive: isPositive, negative: isNegative }">Current count is: {{ count }}</h2>

  <h4>Count doubled is: {{ doubledCount }}</h4>

  <button @click="decrementCount">Decrement Count</button>
  <button @click="incrementCount">Increment Count</button>
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue';

  const count = ref(0);

  const doubledCount = computed(() => count.value * 2);

  const isNegative = computed(() => count.value < 0);
  const isPositive = computed(() => count.value > 0);

  const incrementCount = () => {
    count.value += 1;
  };

  const decrementCount = () => {
    count.value -= 1;
  };
</script>

<style lang="scss" scoped>
  .negative {
    color: #ff3e00;
  }

  .positive {
    color: #3fb27f;
  }
</style>
