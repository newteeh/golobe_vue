<template>
  <Header></Header>
  <div class="flights-search__main">
    <div class="small-container">
      <div class="flights-search__main__body">
        <div class="flights-search__main__body__title-box">
          <div class="flights-search__main__body__title">
            Make your travel wishlist, we’ll do the rest
          </div>
          <div class="flights-search__main__body__subtitle">
            Special offers to suit your plan
          </div>
        </div>
      </div>
      <div class="main-page__search-menu">
        <div class="small-container">
          <div class="main-page__search-menu__body">
            <div class="main-page__search-menu__body__form">
              <div class="main-page__search-menu__body__form__up">
                <div class="main-page__search-menu__body__form__title">
                  Where are you flying?
                </div>
              </div>
              <div class="main-page__search-menu__body__form__middle">
                <div class="select-box__from-to">
                  <custom-select></custom-select>
                  <p style="display: none">{{selectedFrom}}</p>
                  <p style="display: none">{{selectedTo}}</p>
                </div>
                <div class="select-box__trip">
                  <custom-select-trip></custom-select-trip>
                  <p style="display: none">{{selectedOption}}</p>
                </div>
                <div class="select-box__date">
                  <select-date-picker></select-date-picker>
                  <p style="display: none">{{departDate}}</p>
                  <p style="display: none">{{arrivalDate}}</p>
                </div>
                <div class="select-box__class">
                  <custom-select-passenegers-classes></custom-select-passenegers-classes>
                </div>
              </div>
              <div class="main-page__search-menu__body__form__bottom">
                <a href="" class="">+ Add Promo Code</a>
                <router-link to="/flightListing" class="main-button" href=""><img src="@/assets/icons/paper_plane.png"/>Show Flights</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flights-search__offers">
    <div class="small-container">
      <div class="flights-search__offers__body">
        <div class="flights-search__offers__header">
          <div class="flights-search__offers__header__text-box">
            <div class="flights-search__offers__header__title">
              Fall into travel
            </div>
            <div class="flights-search__offers__header__subtitle">
              Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.
            </div>
          </div>
          <div class="flights-search__offers__header__btn">
            <a class="main-button-bordered" href="">See All</a>
          </div>
        </div>
        <div class="flights-search__offers__cards-box">
          <div class="flights-search__offers__card">
            <div class="flights-search__offers__card__body">
              <div class="flights-search__offers__card__text-box">
                <div class="flights-search__offers__card__title-box">
                  <div class="flights-search__offers__card__title">Melbourne</div>
                  <div class="flights-search__offers__card__subtitle">An amazing journey</div>
                </div>
                <div class="flights-search__offers__card__price">
                  $ 700
                </div>
              </div>
              <div class="flights-search__offers__card__btn">
                <a href="" class="main-button">Book Flight</a>
              </div>
            </div>
          </div>
          <div class="flights-search__offers__card">
            <div class="flights-search__offers__card__body">
              <div class="flights-search__offers__card__text-box">
                <div class="flights-search__offers__card__title-box">
                  <div class="flights-search__offers__card__title">Melbourne</div>
                  <div class="flights-search__offers__card__subtitle">An amazing journey</div>
                </div>
                <div class="flights-search__offers__card__price">
                  $ 700
                </div>
              </div>
              <div class="flights-search__offers__card__btn">
                <a href="" class="main-button">Book Flight</a>
              </div>
            </div>
          </div>
          <div class="flights-search__offers__card">
            <div class="flights-search__offers__card__body">
              <div class="flights-search__offers__card__text-box">
                <div class="flights-search__offers__card__title-box">
                  <div class="flights-search__offers__card__title">Melbourne</div>
                  <div class="flights-search__offers__card__subtitle">An amazing journey</div>
                </div>
                <div class="flights-search__offers__card__price">
                  $ 700
                </div>
              </div>
              <div class="flights-search__offers__card__btn">
                <a href="" class="main-button">Book Flight</a>
              </div>
            </div>
          </div>
          <div class="flights-search__offers__card">
            <div class="flights-search__offers__card__body">
              <div class="flights-search__offers__card__text-box">
                <div class="flights-search__offers__card__title-box">
                  <div class="flights-search__offers__card__title">Melbourne</div>
                  <div class="flights-search__offers__card__subtitle">An amazing journey</div>
                </div>
                <div class="flights-search__offers__card__price">
                  $ 700
                </div>
              </div>
              <div class="flights-search__offers__card__btn">
                <a href="" class="main-button">Book Flight</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flights-search__other-offer">
    <div class="small-container">
      <div class="flights-search__other-offer__body">
        <div class="flights-search__offers__header">
          <div class="flights-search__offers__header__text-box">
            <div class="flights-search__offers__header__title">
              Fall into travel
            </div>
            <div class="flights-search__offers__header__subtitle">
              Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.
            </div>
          </div>
          <div class="flights-search__offers__header__btn">
            <a class="main-button-bordered" href="">See All</a>
          </div>
        </div>
        <div class="flights-search__other-offer__main-box">
          <div class="flights-search__other-offer__main-box__left">
            <div class="flights-search__other-offer__main-box__left__body">
              <div class="flights-search__other-offer__main-box__left__text-box">
                <div class="flights-search__other-offer__main-box__left__text-box__up">
                  <div class="flights-search__other-offer__main-box__left__title">
                    Backpacking Sri Lanka
                  </div>
                  <div class="flights-search__other-offer__main-box__left__price">
                    <span>From</span><p>$700</p>
                  </div>
                </div>
                <div class="flights-search__other-offer__main-box__left__text-box__bottom">
                  Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.
                </div>
              </div>
              <div class="flights-search__other-offer__main-box__left__btn">
                <a href="" class="main-button__white">Book Flight</a>
              </div>
            </div>
          </div>
          <div class="flights-search__other-offer__main-box__right">
            <div class="flights-search__other-offer__main-box__right__up">
              <div class="flights-search__other-offer__main-box__right__img">
                <img src="@/assets/img/offers_img.png" alt="">
              </div>
              <div class="flights-search__other-offer__main-box__right__img">
                <img src="@/assets/img/offers_img.png" alt="">
              </div>
            </div>
            <div class="flights-search__other-offer__main-box__right__bottom">
              <div class="flights-search__other-offer__main-box__right__img">
                <img src="@/assets/img/offers_img.png" alt="">
              </div>
              <div class="flights-search__other-offer__main-box__right__img">
                <img src="@/assets/img/offers_img.png" alt="">
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Header from "@/components/Header.vue";
import customSelect from "@/components/customSelectFromTo.vue";
import customSelectTrip from "@/components/customSelectTrip.vue";
import SelectDatePicker from "@/components/SelectDatePicker.vue";
import customSelectPassenegersClasses from "@/components/customSelectPassenegersClasses.vue";
import Footer from "@/components/Footer.vue";
import {useCityStore} from "@/store/cityStore.js";
import {useTripStore} from "@/store/tripStore.js";
import {useDateStore} from "@/store/dateStore.js";
import {useFlightStore} from "@/store/flightStore.js";
export default {
  name: "flightsSearch",
  components: {Footer, Header,customSelect,customSelectTrip,SelectDatePicker,customSelectPassenegersClasses},
  data(){
    return{
      flightStore:useFlightStore(),
      formData:{
        selectedFrom:null,
        selectedTo:null,
        selectedOption:null,
        depart_date:null,
        return_date:null,
      },
    }
  },
  methods:{
    search(){
      fetch('http://golobeapi/routes/getFlights.php',{
        method:'POST',
        body:JSON.stringify(this.formData)})
          .then((response) => response.json()) // парсим ответ от сервера в формате JSON
          .then((data) => {
            if(data.response === 'success'){
              this.flightStore.searchFlights = data.flightData
              this.$router.push('/flightListing')
            }
          })
          .catch((error) => console.error(error)); // ловим ошибки сети и выводим в консоль
    },

  },
  computed:{
    selectedFrom(){
      const cityStore = useCityStore();
      this.formData.selectedFrom = cityStore.selectedFrom
      return this.formData.selectedFrom
    },
    selectedTo(){
      const cityStore = useCityStore();
      this.formData.selectedTo = cityStore.selectedTo
      return this.formData.selectedTo
    },
    selectedOption(){
      const tripStore = useTripStore();
      this.formData.selectedOption = tripStore.selectedOption
      return this.formData.selectedOption
    },
    departDate(){
      const dateStore = useDateStore();
      this.formData.depart_date = dateStore.depart_date
      return this.formData.depart_date
    },
    arrivalDate(){
      const dateStore = useDateStore();
      this.formData.return_date = dateStore.return_date
      return this.formData.return_date
    }
  },

}
</script>

<style scoped>

</style>