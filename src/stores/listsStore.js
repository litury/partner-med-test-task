import { ref, computed } from "vue";
import { defineStore } from "pinia";
import data from "../data.json";

const lists = data;

export const useListStore = defineStore("lists", {
  state: () => ({
    lists: lists,
    selectedItems: [],
  }),

  getters: {

    // Геттер для получения списка листов с выбранными элементами
    getSelectedLists: (state) => {
      return state.lists.filter((list) =>
        list.items.some((item) => item.checked)
      );
    },
  },


 

  actions: {

    //  Обновляет количество для item
    updateQuantity(listId, itemId, quantity) {
      const list = this.lists.find((list) => list.id === listId);
      const item = list.items.find((item) => item.id === itemId);

      if (item && quantity >= 0) {
        item.quantity = quantity;
      }
      
      if (item.quantity <= 0) {
        item.checked = false;
      }
      
      console.log(listId, itemId, quantity);
    },

    // Обновляет цвет для item
    updateColor(listId, itemId, color) {
      const list = this.lists.find((list) => list.id === listId);
      
      const item = list.items.find((item) => item.id === itemId);

      if (item) {
        item.color = color;
      }
    },

    // Добавленные действия для перемешивания и сортировки
    shuffleList(listId) {
      const list = this.lists.find((list) => list.id === listId);
      if (list) {
        for (let i = list.items.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [list.items[i], list.items[j]] = [list.items[j], list.items[i]];
        }
      }
    },

    // Сортировка по алфавиту
    sortList(listId) {
      const list = this.lists.find((list) => list.id === listId);
      if (list) {
        list.items.sort((a, b) => a.name.localeCompare(b.id));
      }
    },
    
    // Действие для удаления элемента по клику на квадратик
    removeItem(listId, itemId) {
      const list = this.lists.find((list) => list.id === listId);
      const item = list.items.find((item) => item.id === itemId);
      
      if (item && item.quantity > 0) {
        // Уменьшаем количество элемента на 1
        item.quantity--;
        
        // Если количество элемента стало 0, то снимаем с него выбор
        if (item.quantity <= 0) {
          item.checked = false;
        }
      }
    },
  },
});
