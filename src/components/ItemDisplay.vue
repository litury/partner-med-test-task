<script setup>

const props = defineProps({
  item: Object
});
</script>

<template>
  <div class="item-display">
    <span>{{ item.name }}</span>

    <div class="squares">
      <div v-for="n in item.quantity" :key="n" class="square" :style="{ backgroundColor: item.color }"></div>
    </div>
  </div>
</template>


<style>
.item-display {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.squares {
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
}

.square {
  width: 20px;
  height: 20px;
  margin: 2px;
}
</style>