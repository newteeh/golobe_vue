<template>
  <div class="wrapper">
    <div class="signup-section">
      <div class="small-container">
        <div class="signup-section__body">
          <div class="signup-section__body__left">
            <img src="@/assets/img/login__background.png" alt="">
          </div>
          <div class="signup-section__body__right">
            <div class="signup-section__body__right__logo">
              <router-link to="/"><img src="@/assets/img/Logo__black.png" alt=""></router-link>
            </div>
            <div class="signup-section__body__right__form-box">
              <div class="signup-section__body__right__form-box__title-box">
                <div class="signup-section__body__right__form-box__title">
                  Sign Up
                </div>
                <div class="signup-section__body__right__form-box__subtitle">
                  Let’s get you all st up so you can access your personal account.
                </div>
              </div>
              <div class="signup-section__body__right__form-box__input-box">
                <div class="signup-section__body__right__form-box__input-box__personal">
                  <div class="signup-section__body__left__form-box__input-box__firstname">
                    <label class="input-label" for="firstname">Firstname</label>
                    <div>
                      <input v-model="firstname" class="main-input" id="firstname" type="text" placeholder="Enter your firstname">
                    </div>
                  </div>

                  <div class="signup-section__body__left__form-box__input-box_lastname">
                    <label class="input-label" for="lastname">Lastname</label>
                    <div>
                      <input v-model="lastname" class="main-input" id="lastname" type="text" placeholder="Enter your lastname">
                    </div>
                  </div>
                </div>
                <div class="signup-section__body__right__form-box__input-box__another">
                  <div class="signup-section__body__left__form-box__input-box__email">
                    <label class="input-label" for="email">Email</label>
                    <div>
                      <input v-model="email" class="main-input" id="email" type="text" placeholder="Enter your email">
                    </div>
                  </div>

                  <div class="signup-section__body__left__form-box__input-box__phone">
                    <label class="input-label" for="phone">Phone</label>
                    <div>
                      <input @change="isPhoneValidF" v-model="phone" class="main-input" id="phone" type="text" placeholder="Enter your phone">

                    </div>
                  </div>
                </div>
                <div class="signup-section__body__left__form-box__input-box__password">
                  <label class="input-label" for="password">Password</label>
                  <div>
                    <input @change="isPasswordValidF" v-model="password" class="main-input" id="password" type="password" placeholder="Enter your password">
                    <span v-if="!isPasswordValid" class="error">Длина пароля должна быть от 8 до 64 символов</span>
                  </div>
                </div>
                <div class="signup-section__body__left__form-box__input-box__password-confirm">
                  <label class="input-label" for="password-confirm">Password Confirm</label>
                  <div>
                    <input v-model="passwordConfirm" class="main-input" id="password-confirm" type="password" placeholder="Enter your again">
                  </div>
                </div>
                <div class="signup-section__body__left__form-box__input-box__terms">
                  <div class="signup-section__body__left__form-box__input-box__terms-box">
                    <label for="terms">I agree to all the <span><a href="">Terms</a></span> and <span><a href="">Privacy Policies</a></span> </label>
                    <input v-model="terms" id="terms" type="checkbox">
                  </div>
                </div>
              </div>
              <div class="login-section__body__left__form-box__button-box">
                <div class="login-section__body__left__form-box__button-box__login">
                  <input :disabled="password !== passwordConfirm" type="submit" v-on:click="onsubmit" value="Sign in">
                </div>
                <div class="login-section__body__left__form-box__button-box__signup">
                  <p>Already have an account? <span><router-link to="/login">Login</router-link></span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "signup",
  data() {
    return {
      firstname:'',
      lastname:'',
      email:'',
      phone:'',
      password:'',
      passwordConfirm:'',
      terms:'',
      isPhoneValid:false,
      isPasswordValid:false
    }
  },
  computed:{
    isPhoneValidF(){
      const phoneRegex = /^[+7|8]\d{10}$/;
      this.isPhoneValid = phoneRegex.test(this.phone);
    },
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
    onsubmit(){
      if (this.terms){
        fetch('http://golobeapi/routes/register.php',{
          method: 'POST',
          body:JSON.stringify({
            firstname:this.firstname,
            lastname:this.lastname,
            email:this.email,
            phone:this.phone,
            password:this.password,
            terms:this.terms,
          }),
        })
            .then((response) => response.json()) // парсим ответ от сервера в формате JSON
            .then((data) => {
              if(data.success === true){
                alert(data.message)
                this.$router.push("/login")
              }
              else{
                alert(data.message)
              }

            })
            .catch((error) => console.error(error)); // ловим ошибки сети и выводим в консоль
      }
      else{
        alert('Заполните согласие на обработку персональных данных')
      }

    }
  }
}
</script>

<style scoped>

</style>