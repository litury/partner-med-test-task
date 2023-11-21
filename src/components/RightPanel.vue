<template>
  <div class="right-panel">
    <div class="list" v-for="list in selectedLists" :key="list.id">
      <h1>{{ list.name }}</h1>

      <button class="button" @click="shuffle">Перемешать</button>

      <div class="items">
        <div v-for="item in list.items" :key="item.id">

          <!-- Блок отображения элемента -->
          <ItemDisplay :item="item" :listId="list.id"/>

        </div>
      </div>
    </div>


  </div>
</template>

<script setup>
import ItemDisplay from './ItemDisplay.vue';
import { ref, computed } from 'vue';
import { useListStore } from '../stores/listsStore.js';


const store = useListStore();
const selectedLists = computed(() => store.getSelectedLists);

const shuffled = ref(false); // создаем переменную для состояния перемешивания

// определяем функцию shuffle, которая перемешивает все массивы item.quantity
const shuffle = () => {
  if (shuffled.value) { // если уже перемешано, то возвращаем к исходному порядку
    selectedLists.value.forEach(list => {
      list.items.forEach(item => {
        item.quantity = item.originalQuantity; // восстанавливаем исходное значение
      });
    });
    shuffled.value = false;
  } else { // иначе перемешиваем случайным образом
    selectedLists.value.forEach(list => {
      list.items.forEach(item => {
        item.originalQuantity = item.quantity; // сохраняем исходное значение
        shuffleVueArray(item.quantity); // перемешиваем массив на месте
      });
    });
    shuffled.value = true;
  }
};

// функция для перемешивания массива на месте, совместимая с реактивностью Vue
function shuffleVueArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    Vue.set(array, i, array[j]);
    Vue.set(array, j, temp);
  }
}

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

.button {
  margin-bottom: 20px;
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

</style>
