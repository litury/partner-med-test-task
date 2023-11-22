<template>
  <div>
    <button class="button" @click="shuffleSquares">Перемешать</button>
  </div>

  <div class="item-squares">
    <div
      v-for="(square, index) in computedSquares"
      :key="`${square.itemId}-${index}+${key}`"
      class="square"
      :style="{ backgroundColor: square.color }"
      @click="removeItem(square.itemId)"
    ></div>
  </div>
</template>

<script setup>
import { computed, ref, reactive, watch } from "vue";
import { useListStore } from "../stores/listsStore.js";

const props = defineProps({
  squares: Array,
  listId: Number,
});

const store = useListStore();

const key = ref(0);

const removeItem = (itemId) => {
  store.removeItem(props.listId, itemId);

  console.log(itemId);
};

// const displayedSquares = ref(props.squares);

const computedSquares = computed(() => {
  return props.squares;
});

// const react = reactive(props.squares)
//
// watch(() => props.squares, (newVal, oldVal) => {
//   console.log("props.squares changed");
//   console.log(newVal);
//   console.log(oldVal);
//
//   console.log(computedSquares.value);
// });

const originalSquares = ref({});

const shuffleSquares = () => {
  originalSquares.value = [...computedSquares.value];

  // перемешиваем массив с помощью функции Math.random()
  for (let i = computedSquares.value.length - 1; i > 0; i--) {
    // генерируем случайный индекс
    const j = Math.floor(Math.random() * (i + 1));

    // меняем местами элементы с индексами i и j
    [computedSquares.value[i], computedSquares.value[j]] = [
      computedSquares.value[j],
      computedSquares.value[i],
    ];

    key.value++;
  }

  console.log(computedSquares.value);
};
</script>

<style>

.button {
  margin-bottom: 20px ;
}
.item-squares {
  display: flex;
  flex-wrap: wrap;
}

.square {
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  cursor: pointer;
}
</style>
