<template>
  <header class="header">
    <div class="small-container">
      <div class="header__body">
        <div class="header__body__left">
          <div>
            <img src="@/assets/icons/airplane__black.png"/>
            <router-link to="/search/flights" class="">Find Flight</router-link>
          </div>
          <div>
            <img src="@/assets/icons/ion_bed__black.png"/>
            <a href="" class="">Find Stays</a>
          </div>
        </div>
        <div class="header__body__logo"><router-link to="/"><img src="@/assets/img/Logo__black.png"/></router-link></div>
        <div class="header__body__right">
          <div v-if="inStorage"  style="display: flex" class="header__body__right__login">
            <router-link to="/account" class="header__favourites-link">
              <img src="@/assets/icons/heart__black.png" alt="">
              <p>Favourites</p>
            </router-link>
            <router-link to="/account"  class="header__profile-link">
              <p>{{userData.firstname}} {{userData.lastname.charAt(0)}}.</p>
            </router-link>
            <router-link v-if="userData.status ==='1'" to="/adminPanel" class="header__profile-link">
              <p>Админ.панель</p>
            </router-link>

          </div>
          <div v-if="!inStorage" style="display: flex; gap: 32px;align-items: center" class="header__body__right__logout">
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
  name: "Header",
  data(){
    return{
      inStorage:false,
      userData:{

      }

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