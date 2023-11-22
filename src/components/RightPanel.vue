<template>
  <div class="right-panel">
    <div class="list" v-for="list in selectedLists" :key="list.id">
      <h1>{{ list.name }}</h1>


      <!-- Блок отображения элемента -->

        <ItemDisplay
          :key="list.id"
          :squares="getListItems(list)"
          :listId="list.id"
        />
    </div>
  </div>
</template>

<script setup>
import ItemDisplay from "./ItemDisplay.vue";
import { ref, computed, watch } from "vue";
import { useListStore } from "../stores/listsStore.js";

const store = useListStore();
const selectedLists = computed(() => store.getSelectedLists);

const originalSquares = ref({});
const isShuffled = ref(false);

const getListItems = (list) => {
  const listItems = [];

  list.items.forEach((item) => {
    if (item.checked) {
      for (let i = 0; i < item.quantity; i++) {
        listItems.push({
          color: item.color,
          itemId: item.id,
          checked: item.checked,
        });
      }
    }
  });
  return listItems;
};


</script>

<style scoped>
.list {
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.right-panel {
  width: 350px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

</style>
