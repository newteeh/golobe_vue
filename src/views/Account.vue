<template>
  <div class="wrapper">
    <Header></Header>
    <div class="account__main-block">
      <div class="small-container">
        <div class="account__main-block__body">
<!--          <div class="account__main-block__banner">-->
<!--            <label class="main-button" for="upload_banner">-->
<!--              <img src="@/assets/icons/Upload.png" alt="">-->
<!--              <p>Upload new cover</p>-->
<!--            </label>-->
<!--            <input id="upload_banner" style="opacity: 0" type="file" class="account__main-block__banner__button-add main-button">-->
<!--          </div>-->
<!--          <div class="account__main-block__body_info">-->
<!--            <div class="account__main-block__body_info__avatar-box">-->
<!--              <div class="image-box">-->
<!--                <img src="@/assets/img/Profile__avatar.png" alt="">-->
<!--              </div>-->

<!--              <label for="upload_avatar">-->
<!--                <img src="@/assets/icons/Pen.png" alt="">-->
<!--              </label>-->
<!--              <input style="opacity: 0" id="upload_avatar" type="file">-->
<!--            </div>-->
<!--            <div class="account__main-block__body_info__text-box">-->
<!--              <div class="account__main-block__body_info__name">-->
<!--                John Doe.-->
<!--              </div>-->
<!--              <div class="account__main-block__body_info__email">-->
<!--                john.doe@gmail.com-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
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
              <div style="display: flex; justify-content: space-between" class="account__main-block__body_info__personal__information-title">
                <p>Account</p>
                <button @click="logout" style="background: #ff8686" class="main-button">Выйти</button>
              </div>
              <div class="account__main-block__body_info__personal__information-block">
                <div class="account__main-block__body_info__personal__information-block__body">
                  <div class="account__main-block__body_info__personal__information-block__field">
                    <div class="account__main-block__body_info__personal__information-block__text-box">
                      <label for="name">Name</label>
                      <p v-if="!editingName">{{userData.firstname}} {{userData.lastname}}</p>
                      <input style="padding: 5px" class="main-input" v-model="newFullname" v-else type="text" id="name">
                    </div>
                    <div class="account__main-block__body_info__personal__information-block__btn">
                      <button v-on:click="toggleEdit(1)" href="" class="main-button-bordered"><img src="@/assets/icons/edit.png" alt="">Change</button>
                    </div>
                  </div>

                  <div class="account__main-block__body_info__personal__information-block__field">
                    <div class="account__main-block__body_info__personal__information-block__text-box">
                      <label for="email">Email</label>
                      <p v-if="!editingEmail">{{userData.email}}</p>
                      <input style="padding: 5px" class="main-input" v-model="newEmail" v-else type="text" id="email">
                    </div>
                    <div class="account__main-block__body_info__personal__information-block__btn">
                      <button v-on:click="toggleEdit(2)" class="main-button-bordered"><img src="@/assets/icons/edit.png" alt="">Change</button>
                    </div>
                  </div>

                  <div class="account__main-block__body_info__personal__information-block__field">
                    <div class="account__main-block__body_info__personal__information-block__text-box">
                      <label for="password">Password</label>
                      <p v-if="!editingPassword">{{userData.password}}</p>
                      <input style="padding: 5px" class="main-input" v-model="newPassword" v-else type="text" id="password">
                    </div>
                    <div class="account__main-block__body_info__personal__information-block__btn">
                      <button v-on:click="toggleEdit(3)" class="main-button-bordered"><img src="@/assets/icons/edit.png" alt="">Change</button>
                    </div>
                  </div>

                  <div class="account__main-block__body_info__personal__information-block__field">
                    <div class="account__main-block__body_info__personal__information-block__text-box">
                      <label for="phone">Phone number</label>
                      <p v-if="!editingPhone">{{userData.phone}}</p>
                      <input style="padding: 5px" class="main-input" v-model="newPhone" v-else type="text" id="phone">
                    </div>
                    <div class="account__main-block__body_info__personal__information-block__btn">
                      <button @click="toggleEdit(4)" class="main-button-bordered"><img src="@/assets/icons/edit.png" alt="">Change</button>
                    </div>
                  </div>

                  <div class="account__main-block__body_info__personal__information-block__field">
                    <div class="account__main-block__body_info__personal__information-block__text-box">
                      <label for="address">Address</label>
                      <p v-if="!editingAddress">{{userData.address ?? "Укажите адрес"}}</p>
                      <input style="padding: 5px" class="main-input" v-model="newAddress" v-else type="text" id="address">
                    </div>
                    <div class="account__main-block__body_info__personal__information-block__btn">
                      <button @click="toggleEdit(5)" class="main-button-bordered"><img src="@/assets/icons/edit.png" alt="">Change</button>
                    </div>
                  </div>

                  <div class="account__main-block__body_info__personal__information-block__field">
                    <div class="account__main-block__body_info__personal__information-block__text-box">
                      <label for="date-of-birth">Date of birth</label>
                      <p v-if="!editingBirthdate">{{userData.birthdate ?? "Укажите дату рождения"}}</p>
                      <input style="padding: 5px" class="main-input" v-model="newBirthdate" v-else type="date" id="date-of-birth">
                    </div>
                    <div class="account__main-block__body_info__personal__information-block__btn">
                      <button @click="toggleEdit(6)" class="main-button-bordered"><img src="@/assets/icons/edit.png" alt="">Change</button>
                    </div>
                  </div>
                  <div v-if="isFormValid" style="margin: 0 auto;" class="account__main-block__body_info__personal__information-saveEdit">
                    <button style="background: #8DD3BB" @click="SaveUpdate" class="main-button-bordered">Save edit</button>
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
  components:{Footer, Header},
  data(){
    return{
      updatedInfo: '',
      editingName: false,
      editingEmail:false,
      editingPassword:false,
      editingPhone:false,
      editingAddress:false,
      editingBirthdate:false,
      userData:{

      },
      newFullname:null,
      newEmail:null,
      newPassword:null,
      newPhone:null,
      newAddress:null,
      newBirthdate:null


    }
  },
  methods:{
    toggleEdit(type) {
      switch (type) {
        case 1:
          this.editingName = !this.editingName;
          return
        case 2:
          this.editingEmail = !this.editingEmail;
          return;
        case 3:
          this.editingPassword = !this.editingPassword;
          return;
        case 4:
          this.editingPhone = !this.editingPhone;
          return;
        case 5:
          this.editingAddress = !this.editingAddress;
          return;
        case 6:
          this.editingBirthdate = !this.editingBirthdate;
          return;
      }

      this.editingName = !this.editingName;
    },
    logout(){
      localStorage.removeItem('user')
      this.$router.push('/')
    },
    SaveUpdate(){
      fetch('http://golobeapi/routes/updateInfo.php',{
        method: 'POST',
        body:JSON.stringify({
          id: this.userData.id,
          firstname: this.newFullname.split(' ')[0] ?? this.userData.firstname,
          lastname:this.newFullname.split(' ')[1] ? this.newFullname.split(' ')[1] : this.userData.lastname,
          email:this.newEmail ?? this.userData.email,
          password:this.newPassword ?? this.userData.password,
          phone:this.newPhone ?? this.userData.phone,
          address:this.newAddress ?? this.userData.address,
          birthdate:this.newBirthdate ?? this.userData.birthdate,
        }),
      })
          .then((response) => response.json()) // парсим ответ от сервера в формате JSON
          .then((data) => {
            if(data.success === true) {
              this.logout()
            }

          })
          .catch((error) => console.error(error)); // ловим ошибки сети и выводим в консоль
    }
  },
  computed:{
    isFormValid() {
      return this.editingName || this.editingEmail || this.editingPassword || this.editingPhone || this.editingAddress || this.editingBirthdate;
    },
  },
  mounted() {
    this.userData = JSON.parse(localStorage.getItem('user'))
    if(!localStorage.getItem('user')){
      this.$router.push("/")
    }
    console.log(this.userData)
  }
}
</script>

<style scoped>

</style>