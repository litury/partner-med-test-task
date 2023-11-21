<template>
  <div class="left-panel">
    <div v-for="list in lists" :key="list.id">

      <ListComponent :list="list" :collapsed="list.collapsed"/>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ListComponent from './ListComponent.vue';
import { useListStore } from '../stores/listsStore.js';

const store = useListStore();
const lists = computed(() => store.lists);

const collapsed = ref(true)

const toggleCollapsed = () => {
  collapsed.value = !collapsed.value

  console.log(collapsed.value);
}

</script>

<style scoped>
.left-panel {
  width: 350px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-radius: 8px;
}
</style>