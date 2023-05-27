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
            <div class="account__main-block__body_info__personal__information">
              <div class="account__main-block__body_info__personal__information-title">
                Account
              </div>
              <div class="account__main-block__body_info__personal__information-block">
                <div class="account__main-block__body_info__personal__information-block__body">
                  <div class="account__main-block__body_info__personal__information-block__field">
                    <div class="account__main-block__body_info__personal__information-block__text-box">
                      <label for="name">Name</label>
                      <p>John Doe.</p>
                      <input style="display: none" type="text" id="name">
                    </div>
                    <div class="account__main-block__body_info__personal__information-block__btn">
                      <a href="" class="main-button-bordered"><img src="@/assets/icons/edit.png" alt="">Change</a>
                    </div>
                  </div>

                  <div class="account__main-block__body_info__personal__information-block__field">
                    <div class="account__main-block__body_info__personal__information-block__text-box">
                      <label for="email">Email</label>
                      <p>john.doe@gmail.com</p>
                      <input style="display: none" type="text" id="email">
                    </div>
                    <div class="account__main-block__body_info__personal__information-block__btn">
                      <a href="" class="main-button-bordered"><img src="@/assets/icons/edit.png" alt="">Change</a>
                    </div>
                  </div>

                  <div class="account__main-block__body_info__personal__information-block__field">
                    <div class="account__main-block__body_info__personal__information-block__text-box">
                      <label for="password">Password</label>
                      <p>************</p>
                      <input style="display: none" type="text" id="password">
                    </div>
                    <div class="account__main-block__body_info__personal__information-block__btn">
                      <a href="" class="main-button-bordered"><img src="@/assets/icons/edit.png" alt="">Change</a>
                    </div>
                  </div>

                  <div class="account__main-block__body_info__personal__information-block__field">
                    <div class="account__main-block__body_info__personal__information-block__text-box">
                      <label for="phone">Phone number</label>
                      <p>+1 000-000-0000</p>
                      <input style="display: none" type="text" id="phone">
                    </div>
                    <div class="account__main-block__body_info__personal__information-block__btn">
                      <a href="" class="main-button-bordered"><img src="@/assets/icons/edit.png" alt="">Change</a>
                    </div>
                  </div>

                  <div class="account__main-block__body_info__personal__information-block__field">
                    <div class="account__main-block__body_info__personal__information-block__text-box">
                      <label for="address">Address</label>
                      <p>St 32 main downtown, Los Angeles, California, USA</p>
                      <input style="display: none" type="text" id="address">
                    </div>
                    <div class="account__main-block__body_info__personal__information-block__btn">
                      <a href="" class="main-button-bordered"><img src="@/assets/icons/edit.png" alt="">Change</a>
                    </div>
                  </div>

                  <div class="account__main-block__body_info__personal__information-block__field">
                    <div class="account__main-block__body_info__personal__information-block__text-box">
                      <label for="date-of-birth">Date of birth</label>
                      <p>01-01-1992</p>
                      <input style="display: none" type="text" id="date-of-birth">
                    </div>
                    <div class="account__main-block__body_info__personal__information-block__btn">
                      <a href="" class="main-button-bordered"><img src="@/assets/icons/edit.png" alt="">Change</a>
                    </div>
                  </div>










                </div>
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
import Footer from "@/components/Footer.vue";
export default {
  name: "Account",
  components:{Footer, Header}
}
</script>

<style scoped>

</style>