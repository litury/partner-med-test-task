<script setup>
import ItemComponent from './ItemComponent.vue'

const props = defineProps({
  list: Object,
  collapsed: Boolean
});

const toggleCollapsed = () => {
  props.list.collapsed = !props.list.collapsed
}
</script>

<template>
  <div class="list">
    <div class="list-header">
      <h1>{{ list.name }}</h1>
      <font-awesome-icon icon="chevron-down" @click="toggleCollapsed" />
    </div>


    <div v-show="!collapsed" v-for="item in list.items" :key="item.id">
      <ItemComponent :item="item" :listId="list.id" />
    </div>
  </div>
</template>

<style scoped>
.list {
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.list-header i {
  cursor: pointer;
  transition: transform 0.3s;
}

.list-header i:hover {
  color: #007bff;
}

.list-header i[aria-expanded="true"] {
  transform: rotate(180deg);
}
</style>