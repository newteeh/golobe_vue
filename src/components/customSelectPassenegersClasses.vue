<template>
    <div  class="passengersAndFlightType">
    <label class="input-label" for="passengersAndFlightType">Passengers - Class:</label>
    <select class="main-input" id="passengersAndFlightType" v-model="selectedOption">
      <option v-for="option in selectOptions" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    </div>
</template>

<script>
export default {
  name: "customSelectPassenegersClasses",
  data() {
    return {
      selectedOption: null,
      selectOptions: [
        { value: '1economy', label: '1 Passenger - Economy' },
        { value: '1business', label: '1 Passenger - Business' },
        { value: '2economy', label: '2 Passengers - Economy' },
        { value: '2business', label: '2 Passengers - Business' },
        { value: '3economy', label: '3 Passengers - Economy' },
        { value: '3business', label: '3 Passengers - Business' }
      ]
    };
  }
}
</script>

<style scoped>
  .passengersAndFlightType{
    position: relative;
  }
</style>