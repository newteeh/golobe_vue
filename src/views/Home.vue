
<template>
  <div class="wrapper">
    <div class="main-container">
      <div class="main-page__header">
        <div class="main-page__header__body">
          <div class="main-page__header__body__left">
            <div>
              <img src="@/assets/icons/airplane.png"/>
              <a href="" class="">Find Flight</a>
            </div>
            <div>
              <img src="@/assets/icons/ion_bed.png"/>
              <a href="" class="">Find Stays</a>
            </div>
          </div>
          <div class="main-page__header__body__logo"><img src="@/assets/img/Logo.png"/></div>
          <div class="main-page__header__body__right">
            <a href="" class="login__link">Login</a>
            <a href="" class="signup__link">Sign up</a>
          </div>
        </div>
        <div class="main-page__title-box">
          <p class="main-page__title-box__headline">Helping Others</p>
          <h1 class="main-page__title-box__title">Live & Travel</h1>
          <p class="main-page__title-box__subtitle">Special offers to suit your plan</p>
        </div>

      </div>
      <div class="main-page__search-menu">
        <div class="small-container">
          <div class="main-page__search-menu__body">
            <div class="main-page__search-menu__body__form">
              <div class="main-page__search-menu__body__form__up">
                <div class="main-page__search-menu__body__form__up__flights-box">
                  <label for="flights">
                    <img src="@/assets/icons/airplane__black.png" alt="">
                    <p>Flights</p>
                  </label>
                  <input style="opacity: 0" type="radio" id="flights" name="search__category">
                </div>
                <div class="main-page__search-menu__body__form__up__line">
                  <img src="@/assets/icons/Line 1.png" alt="">
                </div>
                <div class="main-page__search-menu__body__form__up__stays-box">
                  <label for="stays">
                    <img src="@/assets/icons/ion_bed__black.png" alt="">
                    <p>Stays</p>
                  </label>
                  <input style="opacity: 0;" type="radio" id="stays" name="search__category">
                </div>
              </div>
              <div class="main-page__search-menu__body__form__middle">
                <div class="select-box__from-to">
                  <custom-select></custom-select>
                </div>
                <div class="select-box__trip">
                  <custom-select-trip></custom-select-trip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import customSelect from "@/components/customSelectFromTo.vue";
import customSelectTrip from "@/components/customSelectTrip.vue";
  export default {

    name:"Home",
    components:{
      customSelect, customSelectTrip
    },
    data(){
      return{
        options: ['Option 1', 'Option 2', 'Option 3'], // Замените на свои опции
        placeholder: 'Select place FROM', // Замените на свой заголовок по умолчанию
        labelFrom: 'From', // Замените на свой лейбл
        labelTo:'To',
      }
    }
  }
</script>



<style scoped>

</style>
