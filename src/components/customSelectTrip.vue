
<template>
  <div  class="custom-select_trip">
    <label class="input-label" for="trips">Trips</label>
    <select class="main-input" v-model="selectedOption" name="" id="trips" @change="updateSelectedOption">
      <option v-for="item in options" :value="item.id">{{item.name}}</option>
    </select>
  </div>
</template>



<script>
import {useTripStore} from "@/store/tripStore.js";

export default {
  name: "customSelectTrip",
  data() {
    return {
      selectedOption: '',
      options: [], // Замените на свои опции
    };
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option.name;
    },
    updateSelectedOption(){
      const tripStore = useTripStore();
      tripStore.setSelectedOption(this.selectedOption)
    }
  },
  computed: {
    filteredData() {
      if (this.selectedOption) {
        return this.options.find(option =>
            option.name === this.selectedOption
        );
      } else {
        return null;
      }
    }
  },
  watch:{
  //   selectedOption(){
  //     fetch('http://golobeapi/routes/getFlights.php', {
  //       method: 'POST',
  //       body:JSON.stringify({
  //         id_trips:this.selectedOption
  //       })
  //     })
  //         .then(response => response.json())
  //         .then(data => {
  //           if (data.success === true) {
  //             this.flights = data.flightData || [];
  //           }
  //         })
  //         .catch(error => console.error(error));
  //   }
  },

  mounted() {
    fetch('http://golobeapi/routes/getTrips.php', {
      method: 'GET',
    })
        .then(response => response.json())
        .then(data => {
          if (data.success === true) {

            this.options = data['tripData'].tripData;

          }
        })
        .catch(error => console.error(error));
  }
}

</script>

<style scoped>
.custom-select_trip {
  position: relative;
  display: inline-block;
  z-index: 1;
  width: 200px;
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