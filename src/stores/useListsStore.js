import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import data from '../data.json'

const lists = data

export const useListStore = defineStore('lists', {
  state: () => ({
    lists: lists,
    selectedItems: [],
  }),
  
  getters: {
  
  },
  
  actions: {
  
  }
})
