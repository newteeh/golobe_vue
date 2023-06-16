<template>
  <div class="wrapper">
    <Header></Header>
    <div class="flightListing">
      <div class="small-container">
        <div class="flightListing__body">
          <div class="flightListing__search-menu">
            <div class="small-container">
              <div class="flightListing__search-menu__body">
                <div class="flightListing__search-menu__body__form">
                  <div class="flightListing__search-menu__body__form__middle">
                    <div class="select-box__from-to">
                      <customSelectFromTo/>
                      <p style="display: none">{{selectedFrom}}</p>
                      <p style="display: none">{{selectedTo}}</p>
                    </div>
                    <div class="select-box__trip">
                      <custom-select-trip @option-selected="handleOptionSelected"></custom-select-trip>
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
                    <div class="select-box__button">
                      <button class="main-button" @click="search"><img src="@/assets/icons/Search.png"/></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flightListing__main">
            <div class="flightListing__main__filters">
              <div class="flightListing__main__filters__body">
                <div class="flightListing__main__filters__title">
                  Filters
                </div>
                <div class="flightListing__main__filters__price">
                  <div class="flightListing__main__filters__price__title">
                    Price
                  </div>
                  <input id="priceRange" type="range" min="50" max="1200" step="50" value="50" style="background: #112211; -webkit-appearance: none; width: 100%; height: 2px; outline: none;">
                  <label style="display: flex; justify-content: space-between" for="priceRange">
                    <p>
                      50$
                    </p>
                    <p>
                      1200$
                    </p>
                  </label>
                </div>
                <div class="flightListing__main__filters__airlines">
                  <div class="flightListing__main__filters__airlines__title">
                    Airlines
                  </div>
                  <div class="flightListing__main__filters__airlines__list">
                    <ul v-if="airlines" v-for="item in airlines" :key="item.id">
                      <li style="padding: 0 0 8px 0; display: flex; gap: 5px">
                        <input type="checkbox" :id="item.name" :name="item.name">
                        <label :for="item.name">{{item.name}}</label>
                      </li>
                    </ul>
                    <div v-else>Загрузка...</div>
                  </div>
                </div>
                <div class="flightListing__main__filters__trips">
                  <div class="flightListing__main__filters__trips__title">
                    Trips
                  </div>
                  <div class="flightListing__main__filters__trips__list">
                    <ul v-if="trips" v-for="item in trips" :key="item.id">
                      <li style="padding: 0 0 8px 0; display: flex; gap: 5px">
                        <input type="checkbox" :id="item.name" :name="item.name">
                        <label :for="item.name">{{item.name}}</label>
                      </li>
                    </ul>
                    <div v-else>Загрузка...</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flightListing__main__list">
              <div v-for="item in flightStore.searchFlights[0]" class="flightListing__main__card">
                <div class="flightListing__main__card__body">
                  <div class="flightListing__main__card__body__left">
                    <img src="@/assets/img/emirates.png" alt="">
                  </div>
                  <div class="flightListing__main__card__body__right">
                    <div class="flightListing__main__card__body__price">
                      ${{item.price}}
                    </div>
                    <div class="flightListing__main__card__body__infobox">
                      <div class="flightListing__main__card__body__info">
                        <div class="input-box">
                          <input type="checkbox" id="flightTime">
                          <label for="flightTime">
                            <div class="times">
                              <span class="arrivalTime">{{truncatedTime(item.arrival_time)}}</span>
                              -
                              <span class="departmentTime">{{truncatedTime(item.departure_time)}}</span>
                            </div>
                            <div style="opacity: 0.33;" class="cities">
                              <span class="arrivalCity">{{item.departure_city}}</span>
                              -
                              <span class="departmentCity">{{ item.arrival_city }}</span>
                            </div>
                          </label>
                        </div>

                        <div style="font-family: 'Montserrat',sans-serif;font-style: normal;font-weight: 600;font-size: 16px;line-height: 20px;color: #112211;opacity: 0.78;" class="departure_date">
                          {{item.departure_date}}
                        </div>

                        <div class="timeandcode">
                          <div class="flight-time">{{truncatedTime(item.time_in_flight)}}</div>
                          <div class="flight-code">{{item.code}}</div>
                        </div>

                      </div>
                      <div class="flightListing__main__card__body__info">
                        <div class="input-box">
                          <input type="checkbox" id="flightTime">
                          <label for="flightTime">
                            <div class="times">
                              <span class="arrivalTime">{{truncatedTime(item.arrival_time)}}</span>
                              -
                              <span class="departmentTime">{{truncatedTime(item.departure_time)}}</span>
                            </div>
                            <div style="opacity: 0.33;" class="cities">
                              <span class="arrivalCity">{{item.departure_city}}</span>
                              -
                              <span class="departmentCity">{{ item.arrival_city }}</span>
                            </div>
                          </label>
                        </div>
                        <div style="font-family: 'Montserrat',sans-serif;font-style: normal;font-weight: 600;font-size: 16px;line-height: 20px;color: #112211;opacity: 0.78;" class="arrival_date">
                          {{item.arrival_date}}
                        </div>
                        <div class="timeandcode">
                          <div class="flight-time">{{truncatedTime(item.time_in_flight)}}</div>
                          <div class="flight-code">{{item.code}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="flightListing__main__card__body__button">
                      <button style="width: 100%;" class="main-button">View Deals</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flightListing__main__button">
                <button class="main-button" style="background:#112211; color: white; width: 100%;">Show more results</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import CustomSelectTrip from "@/components/customSelectTrip.vue";
import SelectDatePicker from "@/components/SelectDatePicker.vue";
import CustomSelectPassenegersClasses from "@/components/customSelectPassenegersClasses.vue";
import customSelectFromTo from "@/components/customSelectFromTo.vue"
import Footer from "@/components/Footer.vue";
import {useCityStore} from "@/store/cityStore.js";
import {useTripStore} from "@/store/tripStore.js";
import {useDateStore} from "@/store/dateStore.js";
import {useFlightStore} from "@/store/flightStore.js";
export default {
  name: "flightListing",
  components: {Footer, CustomSelectPassenegersClasses, SelectDatePicker, CustomSelectTrip, Header, customSelectFromTo},
  data(){
    return{
      airlines:[],
      trips:[],
      flights:[],
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
  mounted() {
    fetch('http://golobeapi/routes/getAirlines.php',{
      method:'GET',
    })
        .then((response) => response.json()) // парсим ответ от сервера в формате JSON
        .then((data) => {
          if(data.success === true){
            this.airlines = data['airlinesData'].airlineData
          }

        })
        .catch((error) => console.error(error)); // ловим ошибки сети и выводим в консоль
    fetch('http://golobeapi/routes/getTrips.php',{
      method:'GET',
    })
        .then((response) => response.json()) // парсим ответ от сервера в формате JSON
        .then((data) => {
          if(data.success === true){
            this.trips = data['tripData'].tripData
          }

        })
        .catch((error) => console.error(error)); // ловим ошибки сети и выводим в консоль
    fetch('http://golobeapi/routes/getAllFlights.php',{
      method:'GET',
    })
        .then((response) => response.json()) // парсим ответ от сервера в формате JSON
        .then((data) => {
          if(data.response === 'success'){
            this.flights = data.flightData
          }

        })
        .catch((error) => console.error(error)); // ловим ошибки сети и выводим в консоль
    console.log(this.flightStore.searchFlights)
  },
  methods:{
    truncatedTime(time) {
      const length = 5; // Желаемая длина
      if (time.length > length) {
        return time.slice(0, length);
      }
      return time;
    },
    search(){
      fetch('http://golobeapi/routes/getFlights.php',{
        method:'POST',
        body:JSON.stringify(this.formData)})
          .then((response) => response.json()) // парсим ответ от сервера в формате JSON
          .then((data) => {
            if(data.response === 'success'){
              this.flightStore.searchFlights = data.flightData
              this.$router.push("/flightListing")
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