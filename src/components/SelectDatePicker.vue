<template>
  <div class="date-picker">
    <div class="date-picker__depart">
      <label class="input-label" for="date-picker__depart">Depart</label>
      <input v-model="depart_date" class="main-input" id="date-picker__depart" type="date" @change="updateDepartDate">
    </div>
    <div class="date-picker__return">
      <label class="input-label" for="date-picker__return">Return</label>
      <input v-model="return_date" class="main-input" id="date-picker__return" type="date" @change="updateArrivalDate">
    </div>
  </div>
</template>

<script>
import {useDateStore} from "@/store/dateStore.js";

export default {
  name: "SelectDatePicker",
  data() {
    return {
      depart_date:null,
      return_date:null
    };
  },
  methods:{
    updateDepartDate(){
      const dateStore = useDateStore();
      dateStore.setDepartDate(this.depart_date)
    },
    updateArrivalDate(){
      const dateStore = useDateStore();
      dateStore.setReturnDate(this.return_date)
    }
  },
}
</script>

<style scoped>
  .date-picker{
    display: flex;
    width: 324px;
    justify-content: space-between;
  }
  .date-picker__depart{
    position: relative;
  }
  .date-picker__return{
    position: relative;
  }
</style>