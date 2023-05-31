<template>
  <div class="wrapper">
    <div class="login-section">
      <div class="small-container">
        <div class="login-section__body">
          <div class="login-section__body__left">
            <div class="login-section__body__left__logo">
              <router-link to="/"><img src="@/assets/img/Logo__black.png" alt=""></router-link>
            </div>
            <div class="login-section__body__left__form-box">
              <div class="login-section__body__left__form-box__title-box">
                <div class="login-section__body__left__form-box__title">
                  Login
                </div>
                <div class="login-section__body__left__form-box__subtitle">
                  Login to access your Golobe account
                </div>
              </div>
              <div class="login-section__body__left__form-box__input-box">
                <div class="login-section__body__left__form-box__input-box__email">
                  <label class="input-label" for="email">Email</label>
                  <div>
                    <input v-model="formData.email" class="main-input" id="email" type="text" placeholder="Enter your email">
                  </div>
                </div>
                <div class="login-section__body__left__form-box__input-box__password">
                  <label class="input-label" for="password">Password</label>
                  <div>
                    <input v-model="formData.password" @change="isPasswordValidF" class="main-input" id="password" type="password" placeholder="Enter your password">
                  </div>
                  </div>
                <div class="login-section__body__left__form-box__input-box__remember">
                  <div class="login-section__body__left__form-box__input-box__remember__forget-pass">
                    <a class="forget-pass__link" href="">Forget password</a>
                  </div>
                </div>
              </div>
              <div class="login-section__body__left__form-box__button-box">
                <div class="login-section__body__left__form-box__button-box__login">
                  <input type="submit" value="Login" v-on:click="onsubmit">
                </div>
                <div class="login-section__body__left__form-box__button-box__signup">
                  <p>Don’t have an account? <span><router-link to="/signup">Sign up</router-link></span></p>
                </div>
              </div>
            </div>
          </div>
          <div class="login-section__body__right">
            <img src="@/assets/img/login__background.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      formData:{
        email:'',
        password:'',
        isPasswordValid:false,
      }
    }

  },
  computed:{
    isPasswordValidF() {
      const minLength = 8;
      const password = this.password;

      if (password.length >= minLength || password.length < 64) {
        this.isPasswordValid = true;
      } else {
        this.isPasswordValid = false;
      }
    }
  },
  methods:{
    onsubmit() {
      fetch('http://golobeapi/routes/login.php', {
        method: 'POST',
        body: JSON.stringify(this.formData),
      })

          .then((response) => response.json()) // парсим ответ от сервера в формате JSON
          .then((data) => {
            console.log(data)
            if (data.success === true) {
              alert(data.message)
              localStorage.setItem('user', JSON.stringify(data.userData))
              this.$router.push('/account');
            }

          })
          .catch((error) => console.error(error)); // ловим ошибки сети и выводим в консоль
    }
  }
}

</script>

<style scoped>

</style>