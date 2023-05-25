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
                      <input class="main-input" id="firstname" type="text" placeholder="Enter your firstname">
                    </div>
                  </div>

                  <div class="signup-section__body__left__form-box__input-box_lastname">
                    <label class="input-label" for="lastname">Lastname</label>
                    <div>
                      <input class="main-input" id="lastname" type="text" placeholder="Enter your lastname">
                    </div>
                  </div>
                </div>
                <div class="signup-section__body__right__form-box__input-box__another">
                  <div class="signup-section__body__left__form-box__input-box__email">
                    <label class="input-label" for="email">Email</label>
                    <div>
                      <input class="main-input" id="email" type="text" placeholder="Enter your email">
                    </div>
                  </div>

                  <div class="signup-section__body__left__form-box__input-box__phone">
                    <label class="input-label" for="phone">Phone</label>
                    <div>
                      <input class="main-input" id="phone" type="text" placeholder="Enter your phone">
                    </div>
                  </div>
                </div>
                <div class="signup-section__body__left__form-box__input-box__password">
                  <label class="input-label" for="password">Password</label>
                  <div>
                    <input class="main-input" id="password" type="password" placeholder="Enter your password">
                  </div>
                </div>
                <div class="signup-section__body__left__form-box__input-box__password-confirm">
                  <label class="input-label" for="password-confirm">Password Confirm</label>
                  <div>
                    <input class="main-input" id="password-confirm" type="password" placeholder="Enter your again">
                  </div>
                </div>
                <div class="signup-section__body__left__form-box__input-box__terms">
                  <div class="signup-section__body__left__form-box__input-box__terms-box">
                    <label for="terms">I agree to all the <span><a href="">Terms</a></span> and <span><a href="">Privacy Policies</a></span> </label>
                    <input id="terms" type="checkbox">
                  </div>
                </div>
              </div>
              <div class="login-section__body__left__form-box__button-box">
                <div class="login-section__body__left__form-box__button-box__login">
                  <a href="">Sign Up</a>
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
  name: "signup"
}
</script>

<style scoped>

</style>