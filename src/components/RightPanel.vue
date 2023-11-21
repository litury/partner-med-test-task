<script setup>
import { computed } from 'vue';
import { useListStore } from '../stores/listsStore';
import ListDisplay from './ListDisplay.vue';

const listStore = useListStore();

const selectedLists = computed(() => {
  return listStore.lists.filter(list =>
      list.items.some(item => item.checked)
  );
});



</script>

<template>
  <div class="right-panel">
    <div v-for="list in selectedLists" :key="list.id" class="list-block">
      <ListDisplay :list="list" />
    </div>
  </div>
</template>

<style>


.list-block {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>