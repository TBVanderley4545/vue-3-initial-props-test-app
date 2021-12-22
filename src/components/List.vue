<template>
  <h3>Array Items: {{ list }}</h3>

  <input
    v-model="currentItem"
    @keypress.enter="addItemToList"
    placeholder="Please enter something to add to the list."
  />

  <button @click="addItemToList">Add Item.</button>

  <h4>My special prop is: {{ mySpecialProp }}</h4>
</template>

<script lang="ts" setup>
  import { defineEmits, defineProps, Ref, ref } from 'vue';

  defineProps({
    mySpecialProp: {
      type: String,
      required: true,
    },
  });

  const emit = defineEmits(['itemAdded']);

  const list: Ref<Array<string>> = ref([]);
  const currentItem = ref('');

  const addItemToList = () => {
    if (!currentItem.value) {
      return;
    }

    emit('itemAdded', 'An item was added.');

    list.value.push(currentItem.value);

    currentItem.value = '';
  };
</script>
