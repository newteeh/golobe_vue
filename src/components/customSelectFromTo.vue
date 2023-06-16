<template>
  <div style="display: flex; gap: 15px" class="custom-selectBox">
  <div style="width: 150px" class="custom-select">
    <label class="input-label" for="selectFrom">From</label>
    <select v-model="selectedFrom" class="main-input" name="" id="selectFrom" @change="updateSelectedFrom">
      <option v-for="item in options" :value="item.id">{{item.name}}</option>
    </select>
  </div>
    <div style="width: 150px" class="custom-select">
      <label class="input-label" for="selectTo">To</label>
      <select v-model="selectedTo" class="main-input" name="" id="selectTo" @change="updateSelectedTo">
        <option v-for="item in options" :value="item.id">{{item.name}}</option>
      </select>
    </div>
  </div>
</template>

<script>
import {useCityStore} from "@/store/cityStore.js";
export default {
  data() {
    return {
      isOpen: false,
      selectedFrom: '',
      selectedTo: '',
      options: [], // Замените на свои опции
      flights: [], // Замените на свои данные о полетах
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    // selectOption(option) {
    //   // if (!this.selectedFrom) {
    //   //   this.selectedFrom = option.name;
    //   // } else {
    //   //   this.selectedTo = option.name;
    //   //   this.isOpen = false;
    //    this.selectedFrom = option;
    //    this.$emit('option-selected', option)
    //   },
    updateSelectedFrom(){
      const cityStore = useCityStore();
      cityStore.setSelectedFrom(this.selectedFrom)
    },
    updateSelectedTo(){
      const cityStore = useCityStore();
      cityStore.setSelectedTo(this.selectedTo)
    },
    },

  computed: {
    // filteredFlights() {
    //   if (this.selectedFrom && this.selectedTo) {
    //     return this.flights.filter(
    //         flight =>
    //             flight.departure_city === this.selectedFrom &&
    //             flight.arrival_city === this.selectedTo
    //     );
    //   } else {
    //     return this.flights;
    //   }
    // }
  },
  watch: {
    // selectedOption(){
    //   fetch('http://golobeapi/routes/getFlights.php', {
    //     method: 'POST',
    //     body:JSON.stringify({
    //       id_trips:this.selectedOption,
    //       departure_city:this.selectedFrom,
    //       arrival_city:this.selectedTo,
    //     })
    //   })
    //       .then(response => response.json())
    //       .then(data => {
    //         if (data.success === true) {
    //           this.flights = data.flightData || [];
    //         }
    //       })
    //       .catch(error => console.error(error));
    // }
},
mounted() {
  fetch('http://golobeapi/routes/getCities.php', {
    method: 'GET',
  })
      .then(response => response.json())
      .then(data => {
        if (data.success === true) {
          this.options = data['cityData'].cityData;
        }
      })
      .catch(error => console.error(error));

  // fetch('http://golobeapi/routes/getFlightsFiltered.php', {
  //   method: 'GET',
  // })
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.success === true) {
  //         this.flights = data.flightData || [];
  //       }
  //     })
  //     .catch(error => console.error(error));
  }
}
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

