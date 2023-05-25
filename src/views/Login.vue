<template>
  <div class="wrapper">
    <div class="login-section">
      <div class="small-container">
        <div class="login-section__body">
          <div class="login-section__body__left">
            <div class="login-section__body__left__logo">
              <img src="@/assets/img/Logo__black.png" alt="">
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
                    <input class="main-input" id="email" type="text" placeholder="Enter your email">
                  </div>
                </div>
                <div class="login-section__body__left__form-box__input-box__password">
                  <label class="input-label" for="password">Password</label>
                  <div>
                    <input class="main-input" id="password" type="password" placeholder="Enter your password">
                  </div>
                  </div>
                <div class="login-section__body__left__form-box__input-box__remember">
                  <div class="login-section__body__left__form-box__input-box__remember-box">
                    <label for="remember-me">Remember me</label>
                    <input id="remember-me" type="checkbox">
                  </div>
                  <div class="login-section__body__left__form-box__input-box__remember__forget-pass">
                    <a class="forget-pass__link" href="">Forget password</a>
                  </div>
                </div>
              </div>
              <div class="login-section__body__left__form-box__button-box">
                <div class="login-section__body__left__form-box__button-box__login">
                  <a href="">Login</a>
                </div>
                <div class="login-section__body__left__form-box__button-box__signup">
                  <p>Don’t have an account? <span><a href="">Sign up</a></span></p>
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
  name: "Login"
}
</script>

<style scoped>

</style>