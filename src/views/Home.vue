
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
            <router-link to="/login" class="login__link">Login</router-link>
            <router-link to="/signup"  class="signup__link">Sign up</router-link>
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
                <div class="select-box__date">
                  <select-date-picker></select-date-picker>
                </div>
                <div class="select-box__class">
                  <custom-select-passenegers-classes></custom-select-passenegers-classes>
                </div>
              </div>
              <div class="main-page__search-menu__body__form__bottom">
                <a href="" class="">+ Add Promo Code</a>
                <a class="main-button" href=""><img src="@/assets/icons/paper_plane.png"/>Show Flights</a>

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
                <a class="main-button" href=""><img src="@/assets/icons/paper_plane.png" alt="">Show Flights</a>
              </div>
            </div>
            <div class="main-page__categories__body__right">
              <div class="main-page__categories__body__left__title-box">
                <div class="main-page__categories__body__left__title">
                  Hotels
                </div>
                <div class="main-page__categories__body__left__subtitle">
                  Search hotels & Places Hire to our most popular destinations                </div>
              </div>
              <div class="main-page__categories__body__left__button">
                <a class="main-button" href=""><img src="@/assets/icons/paper_plane.png" alt="">Show Hotels</a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <footer class="main-page__footer">
        <div class="small-container">
          <div class="main-page__footer__body">
            <div class="main-page__footer__subscribe-box">
              <div class="main-page__footer__subscribe-box__body">
                <div class="main-page__footer__subscribe-box__body__left">
                  <div class="main-page__footer__subscribe-box__body__left__title-box">
                    <div class="main-page__footer__subscribe-box__body__left__title">
                      Subscribe Newsletter
                    </div>
                    <div class="main-page__footer__subscribe-box__body__left__subtitle">
                      <div class="main-page__footer__subscribe-box__body__left__subtitle__head">
                        The Travel
                      </div>
                      <div class="main-page__footer__subscribe-box__body__left__subtitle__bottom">
                        Get inspired! Receive travel discounts, tips and behind the scenes stories.
                      </div>
                    </div>
                  </div>
                  <div class="main-page__footer__subscribe-box__body__left__input-box">
                    <input placeholder="Your email address" name="email" type="text">
                    <a href="" class="main-button__black">Subscribe</a>
                  </div>
                </div>
                <div class="main-page__footer__subscribe-box__body__right">
                  <img src="@/assets/img/footer__img.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>


<script>
import customSelect from "@/components/customSelectFromTo.vue";
import customSelectTrip from "@/components/customSelectTrip.vue";
import SelectDatePicker from "@/components/SelectDatePicker.vue";
import customSelectPassenegersClasses from "@/components/customSelectPassenegersClasses.vue";
  export default {

    name:"Home",
    components:{
      customSelect, customSelectTrip,SelectDatePicker,customSelectPassenegersClasses
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
