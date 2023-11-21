<template>
  <div>
    <div v-if="item.checked" class="item-squares">
      <div
          v-for="n in item.quantity"
          :key="n"
          class="square"
          :style="{ backgroundColor: item.color }"
          @click="removeItem(item.id)"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useListStore } from '../stores/listsStore.js';

const props = defineProps({
  item: Object,
  listId: Number,
});

const store = useListStore();

const removeItem = (itemId) => {
  store.removeItem(props.listId, itemId);
};


</script>

<style>
.item-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.item-squares {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  width: 100%;
}

.square {
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  cursor: pointer;
}
</style>