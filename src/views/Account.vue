<template>
  <div class="wrapper">
    <Header></Header>
    <div class="account__main-block">
      <div class="small-container">
        <div class="account__main-block__body">
          <div class="account__main-block__banner">
            <label class="main-button" for="upload_banner">
              <img src="@/assets/icons/Upload.png" alt="">
              <p>Upload new cover</p>
            </label>
            <input id="upload_banner" style="opacity: 0" type="file" class="account__main-block__banner__button-add main-button">
          </div>
          <div class="account__main-block__body_info">
            <div class="account__main-block__body_info__avatar-box">
              <div class="image-box">
                <img src="@/assets/img/Profile__avatar.png" alt="">
              </div>

              <label for="upload_avatar">
                <img src="@/assets/icons/Pen.png" alt="">
              </label>
              <input style="opacity: 0" id="upload_avatar" type="file">
            </div>
            <div class="account__main-block__body_info__text-box">
              <div class="account__main-block__body_info__name">
                John Doe.
              </div>
              <div class="account__main-block__body_info__email">
                john.doe@gmail.com
              </div>
            </div>
          </div>
          <div class="account__main-block__body_info__personal">
            <div class="account__main-block__body_info__personal__menu">
                <div class="account__main-block__body_info__personal__menu__account-box">
                  <label for="account">
                    <p>Account</p>
                  </label>
                  <input style="opacity:0;" type="radio" id="account" name="search__category">
                </div>
                <div class="account__main-block__body_info__personal__menu__line">
                  <img src="@/assets/icons/Line 1.png" alt="">
                </div>
                <div class="account__main-block__body_info__personal__menu__history-box">
                  <label for="history">
                    <p>History</p>
                  </label>
                  <input style="opacity: 0"  type="radio" id="history" name="search__category">
                </div>
                <div class="main-page__search-menu__body__form__up__line">
                  <img src="@/assets/icons/Line 1.png" alt="">
                </div>
                <div class="account__main-block__body_info__personal__menu__payment-methods-box">
                  <label for="payment-methods">
                    <p>Payment methods</p>
                  </label>
                  <input style="opacity: 0"  type="radio" id="payment-methods" name="search__category">
                </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "Account",
  components:{Header}
}
</script>

<style scoped>

</style>