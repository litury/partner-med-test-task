<script setup>
import {useListStore} from '../stores/listsStore.js'

const listsStore = useListStore()

const lists = listsStore.lists

console.log(listsStore.getLists)
console.log(listsStore.getListTest)

</script>

<template>
  <p>
    TEST
  </p>


</template>

<style scoped>

</style>