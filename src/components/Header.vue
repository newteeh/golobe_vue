<template>
  <header class="header">
    <div class="small-container">
      <div class="header__body">
        <div class="header__body__left">
          <div>
            <img src="@/assets/icons/airplane__black.png"/>
            <a href="" class="">Find Flight</a>
          </div>
          <div>
            <img src="@/assets/icons/ion_bed__black.png"/>
            <a href="" class="">Find Stays</a>
          </div>
        </div>
        <div class="header__body__logo"><img src="@/assets/img/Logo__black.png"/></div>
        <div class="header__body__right">
          <div style="display: none" class="header__body__right__login">
            <router-link to="/login" class="header__favourites-link">
              <img src="@/assets/icons/heart__black.png" alt="">
              <p>Favourites</p>
            </router-link>
            <router-link to="/signup"  class="header__profile-link">
              <img src="@/assets/icons/Profile__icon.png" alt="">
              <p>John D.</p>
            </router-link>
          </div>
          <div style="display: flex; gap: 32px;align-items: center" class="header__body__right__logout">
            <router-link to="/login" class="login__link__black">Login</router-link>
            <router-link to="/signup"  class="signup__link__black">Sign up</router-link>
          </div>

        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>