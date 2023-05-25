<template>
  <div class="date-picker">
    <div class="date-picker__depart">
      <label class="input-label" for="date-picker__depart">Depart</label>
      <input class="main-input" id="date-picker__depart" type="date">
    </div>
    <div class="date-picker__return">
      <label class="input-label" for="date-picker__return">Return</label>
      <input class="main-input" id="date-picker__return" type="date">
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectDatePicker"
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