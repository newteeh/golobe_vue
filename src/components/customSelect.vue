<template>
  <div class="custom-select">
    <div class="selected-item" @click="toggleDropdown">
      {{ selectedItem || placeholder }}
      <i class="arrow-down"></i>
    </div>
    <ul v-if="isOpen" class="dropdown-list">
      <li v-for="option in options" :key="option" @click="selectOption(option)">
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "customSelect",
  data() {
    return {
      isOpen: false,
      selectedItem: '',
      options: ['Option 1', 'Option 2', 'Option 3'], // Замените на свои опции
      placeholder: 'Select an option', // Замените на свой заголовок по умолчанию
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedItem = option;
      this.isOpen = false;
    },
  },
}
</script>

<style scoped>
.custom-select {
  position: relative;
  display: inline-block;
}

.selected-item {
  padding: 8px 16px;
  border: 1px solid #ccc;
  cursor: pointer;
}

.arrow-down {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}

.dropdown-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  border-top: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
}

.dropdown-list li {
  padding: 8px 16px;
  cursor: pointer;
}

.dropdown-list li:hover {
  background-color: #f2f2f2;
}
</style>