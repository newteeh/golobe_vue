<template>
  <div class="custom-select_trip">
    <label class="select-label">Trip</label>
    <div class="select-container">
      <div class="selected-item" @click="toggleDropdown">
        <span>{{ selectedOption || placeholder }}</span>
        <i class="arrow-down"></i>
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
  name: "customSelectTrip",
  data() {
    return {
      isOpen: false,
      selectedOption: '',
      options: ['Option 1', 'Option 2', 'Option 3'], // Замените на свои опции
      placeholder: 'Select' // Замените на свой заголовок по умолчанию
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isOpen = false;
    }
  }
}
</script>

<style scoped>
.custom-select_trip {
  position: relative;
  display: inline-block;
  z-index: 1;
  width: 140px;
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
  padding: 18px 16px 18px 16px;
  cursor: pointer;
  background: #FFFFFF;
  border: 1px solid #79747E;
  border-radius: 4px;
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