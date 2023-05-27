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
export default {
  name: "flightsSearch",
  components: {Footer, Header,customSelect,customSelectTrip,SelectDatePicker,customSelectPassenegersClasses}
}
</script>

<style scoped>

</style>