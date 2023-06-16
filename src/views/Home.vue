
<template>
  <div class="wrapper">
    <div class="main-container">
      <div class="main-page__header">
        <div class="main-page__header__body">
          <div class="main-page__header__body__left">
            <div>
              <img src="@/assets/icons/airplane.png"/>
              <router-link to="/search/flights" class="">Find Flight</router-link>
            </div>
            <div>
              <img src="@/assets/icons/ion_bed.png"/>
              <a href="" class="">Find Stays</a>
            </div>
          </div>
          <div class="main-page__header__body__logo"><img src="@/assets/img/Logo.png"/></div>
          <div class="main-page__header__body__right">
            <div v-if="inStorage"  style="display: flex" class="header__body__right__login">
              <router-link to="/account" class="header__favourites-link__white">
                <img src="@/assets/icons/heart__black.png" alt="">
                <p>Favourites</p>
              </router-link>
              <router-link to="/account"  class="header__profile-link__white">
                <p>{{userData.firstname}} {{userData.lastname.charAt(0)}}.</p>
              </router-link>
            </div>
            <div v-if="!inStorage" style="display: flex; gap: 32px;align-items: center" class="header__body__right__logout">
              <router-link to="/login" class="login__link__white">Login</router-link>
              <router-link to="/signup"  class="signup__link__white">Sign up</router-link>
            </div>
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
                <div class="main-button" @click="search" ><img src="@/assets/icons/paper_plane.png"/>Show Flights</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-page__list-of-places">
        <div class="small-container">
          <div class="main-page__list-of-places__head">
            <div class="main-page__list-of-places__title-box">
              <div class="main-page__list-of-places__title">
                Plan your perfect trip
              </div>
              <div class="main-page__list-of-places__subtitle">
                Search Flights & Places Hire to our most popular destinations
              </div>
            </div>
            <div class="main-page__list-of-places__button">
              <a href="" class="main-button-bordered">See more places</a>
            </div>
          </div>
          <div class="main-page__list-of-places__box">

              <div class="main-page__list-of-places__card">
                <div class="main-page__list-of-places__card__body">
                  <img src="@/assets/img/place_img.png" alt="">
                  <div class="main-page__list-of-places__card__text-box">
                    <div class="main-page__list-of-places__card__text-box__title">Istanbul, Turkey</div>
                    <div class="main-page__list-of-places__card__text-box__subtitle">
                      <p>Flights</p>
                      <p>.</p>
                      <p>Hotels</p>
                      <p>.</p>
                      <p>Resorts</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="main-page__list-of-places__card">
                <div class="main-page__list-of-places__card__body">
                  <img src="@/assets/img/place_img.png" alt="">
                  <div class="main-page__list-of-places__card__text-box">
                    <div class="main-page__list-of-places__card__text-box__title">Istanbul, Turkey</div>
                    <div class="main-page__list-of-places__card__text-box__subtitle">
                      <p>Flights</p>
                      <p>.</p>
                      <p>Hotels</p>
                      <p>.</p>
                      <p>Resorts</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="main-page__list-of-places__card">
                <div class="main-page__list-of-places__card__body">
                  <img src="@/assets/img/place_img.png" alt="">
                  <div class="main-page__list-of-places__card__text-box">
                    <div class="main-page__list-of-places__card__text-box__title">Istanbul, Turkey</div>
                    <div class="main-page__list-of-places__card__text-box__subtitle">
                      <p>Flights</p>
                      <p>.</p>
                      <p>Hotels</p>
                      <p>.</p>
                      <p>Resorts</p>
                    </div>
                  </div>
                </div>
              </div>


              <div class="main-page__list-of-places__card">
                <div class="main-page__list-of-places__card__body">
                  <img src="@/assets/img/place_img.png" alt="">
                  <div class="main-page__list-of-places__card__text-box">
                    <div class="main-page__list-of-places__card__text-box__title">Istanbul, Turkey</div>
                    <div class="main-page__list-of-places__card__text-box__subtitle">
                      <p>Flights</p>
                      <p>.</p>
                      <p>Hotels</p>
                      <p>.</p>
                      <p>Resorts</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="main-page__list-of-places__card">
                <div class="main-page__list-of-places__card__body">
                  <img src="@/assets/img/place_img.png" alt="">
                  <div class="main-page__list-of-places__card__text-box">
                    <div class="main-page__list-of-places__card__text-box__title">Istanbul, Turkey</div>
                    <div class="main-page__list-of-places__card__text-box__subtitle">
                      <p>Flights</p>
                      <p>.</p>
                      <p>Hotels</p>
                      <p>.</p>
                      <p>Resorts</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="main-page__list-of-places__card">
                <div class="main-page__list-of-places__card__body">
                  <img src="@/assets/img/place_img.png" alt="">
                  <div class="main-page__list-of-places__card__text-box">
                    <div class="main-page__list-of-places__card__text-box__title">Istanbul, Turkey</div>
                    <div class="main-page__list-of-places__card__text-box__subtitle">
                      <p>Flights</p>
                      <p>.</p>
                      <p>Hotels</p>
                      <p>.</p>
                      <p>Resorts</p>
                    </div>
                  </div>
                </div>
              </div>


              <div class="main-page__list-of-places__card">
                <div class="main-page__list-of-places__card__body">
                  <img src="@/assets/img/place_img.png" alt="">
                  <div class="main-page__list-of-places__card__text-box">
                    <div class="main-page__list-of-places__card__text-box__title">Istanbul, Turkey</div>
                    <div class="main-page__list-of-places__card__text-box__subtitle">
                      <p>Flights</p>
                      <p>.</p>
                      <p>Hotels</p>
                      <p>.</p>
                      <p>Resorts</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="main-page__list-of-places__card">
                <div class="main-page__list-of-places__card__body">
                  <img src="@/assets/img/place_img.png" alt="">
                  <div class="main-page__list-of-places__card__text-box">
                    <div class="main-page__list-of-places__card__text-box__title">Istanbul, Turkey</div>
                    <div class="main-page__list-of-places__card__text-box__subtitle">
                      <p>Flights</p>
                      <p>.</p>
                      <p>Hotels</p>
                      <p>.</p>
                      <p>Resorts</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="main-page__list-of-places__card">
                <div class="main-page__list-of-places__card__body">
                  <img src="@/assets/img/place_img.png" alt="">
                  <div class="main-page__list-of-places__card__text-box">
                    <div class="main-page__list-of-places__card__text-box__title">Istanbul, Turkey</div>
                    <div class="main-page__list-of-places__card__text-box__subtitle">
                      <p>Flights</p>
                      <p>.</p>
                      <p>Hotels</p>
                      <p>.</p>
                      <p>Resorts</p>
                    </div>
                  </div>
                </div>
              </div>

          </div>
        </div>
      </div>
      <div class="main-page__categories">
        <div class="small-container">
          <div class="main-page__categories__body">
            <div class="main-page__categories__body__left">
              <div class="main-page__categories__body__left__title-box">
                <div class="main-page__categories__body__left__title">
                  Flights
                </div>
                <div class="main-page__categories__body__left__subtitle">
                  Search Flights & Places Hire to our most popular destinations
                </div>
              </div>
              <div class="main-page__categories__body__left__button">
                <router-link to="/flightListing" class="main-button" href=""><img src="@/assets/icons/paper_plane.png" alt="">Show Flights</router-link>
              </div>
            </div>
            <div class="main-page__categories__body__right">
              <div class="main-page__categories__body__left__title-box">
                <div class="main-page__categories__body__left__title">
                  Hotels
                </div>
                <div class="main-page__categories__body__left__subtitle">
                  Search hotels & Places Hire to our most popular destinations
                </div>
              </div>
              <div class="main-page__categories__body__left__button">
                <a class="main-button" href=""><img src="@/assets/icons/paper_plane.png" alt="">Show Hotels</a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>


<script>
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

    name:"Home",
    components:{
      customSelect, customSelectTrip,SelectDatePicker,customSelectPassenegersClasses,Footer
    },
    data(){
      return{
        options: ['Option 1', 'Option 2', 'Option 3'], // Замените на свои опции
        placeholder: 'Select place FROM', // Замените на свой заголовок по умолчанию
        inStorage:false,
        userData:{

        },
        flights:[

        ],
        formData:{
          selectedFrom:null,
          selectedTo:null,
          selectedOption:null,
          depart_date:null,
          return_date:null,
        },
        flightStore:useFlightStore(),

      }
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
        // console.log(this.formData.selectedFrom)
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
    watch:{
      selectedFrom(){

      }
    },
    mounted() {
      if (localStorage.getItem('user')){
        this.inStorage = true
        this.userData = JSON.parse(localStorage.getItem('user'))
      }
      else this.inStorage = false
    }
  }
</script>



<style scoped>

</style>
