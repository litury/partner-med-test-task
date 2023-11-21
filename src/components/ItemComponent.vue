<script setup>
import { ref, watch } from "vue";
import { useListStore } from "../stores/listsStore";

const props = defineProps({
  item: Object,
  listId: Number,
});

const listStore = useListStore();

const updateQuantity = () => {
  listStore.updateQuantity(props.listId, props.item.id, props.item.quantity);
  console.log("updateQuantity");
};

const updateColor = () => {
  listStore.updateColor(props.listId, props.item.id, props.item.color);
  console.log("updateColor");
};
</script>

<template>
  <div class="item">
    <input type="checkbox" v-model="item.checked" @change="toggleItem" />
    <span>{{ item.name }}</span>
    <input
      type="number"
      v-model.number="item.quantity"
      @change="updateQuantity"
    />
    <input type="color" v-model="item.color" @change="updateColor" />
  </div>
</template>

<style scoped>
.item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.item input[type="checkbox"] {
  accent-color: #007bff;
}

.item input[type="number"],
.item input[type="color"] {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
}

.item input[type="color"] {
  width: 40px;
  height: 40px;
  border: none;
}
</style>
