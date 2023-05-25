<template>
  <div class="custom-select">
    <label class="select-label">From - To</label>
    <div class="select-container">
      <div class="selected-item" @click="toggleDropdown">
        <span>{{ selectedFrom ? selectedFrom + ' - ' : '' }}{{ selectedTo || placeholderTo }}</span>
        <i style="margin: 0 20px 0 0 " class="arrow-down"></i>
      </div>
      <ul v-if="isOpen" class="dropdown-list">
        <li v-for="option in options" :key="option" @click="selectOption(option)">
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      selectedFrom: '',
      selectedTo: '',
      options: ['New York', 'London', 'Paris', 'Tokyo', 'Sydney'], // Замените на свои опции
      placeholderTo: 'Select place TO', // Замените на свой заголовок по умолчанию
      placeholderFrom: 'Select place FROM'
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      if (!this.selectedFrom) {
        this.selectedFrom = option;
      } else {
        this.selectedTo = option;
        this.isOpen = false;
      }
    }
  }
};
</script>

<style>
.custom-select {
  position: relative;
  display: inline-block;
  z-index: 1;
  width: 324px;
}

.select-label {
  position: absolute;
  background: white;
  bottom: 50px;
  padding: 0 4px;
  left: 12px;
  z-index: 2;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
}

.select-container {
  position: relative;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #1C1B1F;
}

.selected-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0 18px 16px;
  cursor: pointer;
  background: #FFFFFF;
  border: 1px solid #79747E;
  border-radius: 4px;
  width: 100%;
}

.selected-item span {
  flex-grow: 1;
}

.arrow-down {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 5px 0 5px;
  border-color: #888 transparent transparent transparent;
  margin-left: 20px;
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

