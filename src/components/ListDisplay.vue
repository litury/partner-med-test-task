<template>
  <div class="right-panel">
    <div class="list" v-for="list in selectedLists" :key="list.id">
      <h1>{{ list.name }}</h1>

      <!-- Добавляем кнопки или иконки для сортировки и перемешивания -->
      <button @click="sortList(list.id)">СОРТИРОВКА</button>
      <button @click="shuffleList(list.id)">ПЕРЕМЕШАТЬ</button>

      <div class="items">
        <div v-for="item in list.items" :key="`${list.id}-${item.id}`">

          <!-- Добавляем блок для отображения названия и количества элемента -->
          <div class="item-info">
            <span v-if="item.checked">{{ item.name }}</span>
          </div>

          <!-- Добавляем блок для отображения цветных квадратиков в указанном количестве -->
          <div v-if="item.checked" class="item-squares">
            <div
                v-for="n in item.quantity"
                :key="list.id"
                class="square"
                :style="{ backgroundColor: item.color }"
                @click="removeItem(list.id, item.id)"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useListStore } from '../stores/listsStore.js';

const store = useListStore();

// Вычисляем список выбранных листов и элементов
const selectedLists = computed(() => store.getSelectedLists);

// Создаем функции для сортировки и перемешивания листов
const sortList = (listId) => {
  store.sortList(listId);
};

const shuffleList = (listId) => {
  store.shuffleList(listId);
};

// Создаем функцию для удаления элемента по клику на квадратик
const removeItem = (listId, itemId) => {
  store.removeItem(listId, itemId);
};
</script>

<style scoped>

.list {
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.right-panel {
  width: 350px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border-radius: 8px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.items i {
  cursor: pointer;
  transition: color 0.3s;
}

.items i:hover {
  color: #007bff;
}

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
