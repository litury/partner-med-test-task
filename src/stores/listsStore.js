import { ref, computed } from "vue";
import { defineStore } from "pinia";
import data from "../data.json";

const lists = data;

export const useListStore = defineStore("lists", {
  state: () => ({
    lists: lists,
    displayedSquares: {},
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
    },
    
    // Метод для обновления порядка элементов в ItemDisplay
    updateDisplayedSquares(listId, squares) {
      const list = this.lists.find((list) => list.id === listId);
      if (list) {
        list.displayedSquares = squares;
      }
    },
  

    // Обновляет цвет для item
    updateColor(listId, itemId, color) {
      const list = this.lists.find((list) => list.id === listId);

      const item = list.items.find((item) => item.id === itemId);

      if (item) {
        item.color = color;
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
    
    // Действие для сортировки элементов по имени
    sortItems(listId) {
      const list = this.lists.find((list) => list.id === listId);
      
      if (list) {
        // Сортируем элементы по имени в алфавитном порядке
        list.items.sort((a, b) => a.name.localeCompare(b.name));
      }
    },
    
  },
});
