<template>
  <div class="wrapper">
    <Header></Header>
    <div class="admin-panel">
      <div class="small-container">
        <div class="admin-panel__body">
          <div class="admin-panel__menu">
            <label for="deleteUser">Удалить пользователя</label>
            <input v-model="selectedReturn" id="deleteUser" type="radio" name="selectConstructor" value="1">
          </div>
          <div class="admin-panel__block">
            <div style="display: flex; justify-content: space-between" class="admin-panel__search">
              <input  style="padding: 5px; width: 700px" class="main-input" v-model="searchPhone" type="text">
              <button @click="getByPhone" class="main-button">Найти</button>
            </div>
            <table v-if="buttonClicked">
              <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Password</th>
                <th>Birthdate</th>
                <th>Address</th>
                <th>Status</th>
                <th></th> <!-- Empty header for delete button column -->
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>{{ item.id }}</td>
                <td>{{ item.firstname }}</td>
                <td>{{ item.lastname }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.password }}</td>
                <td>{{ item.birthdate }}</td>
                <td>{{ item.address }}</td>
                <td>{{ item.status }}</td>
                <td>
                  <button @click="deleteItem()">Delete</button>
                </td>
              </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "adminPanel",
  components: {Header},
  data(){
    return{
      selectedReturn:null,
      searchPhone:null,
      buttonClicked:false,
      item:{

      },
    }
  },
  methods:{
    getByPhone(){
      this.buttonClicked = true
      fetch('http://golobeapi/routes/getByPhone.php',{
        method: 'POST',
        body:JSON.stringify({
          phone:this.searchPhone,
        }),
      })
          .then((response) => response.json()) // парсим ответ от сервера в формате JSON
          .then((data) => {
            if(data.success === true) {this.item = data.userData}

          })
          .catch((error) => console.error(error)); // ловим ошибки сети и выводим в консоль
    },
    deleteItem(){
      fetch("http://golobeapi/routes/deleteUser.php",{
        method: 'POST',
        body:JSON.stringify({
          id:this.item.id
        }),
      })
          .then((response) => response.json()) // парсим ответ от сервера в формате JSON
          .then((data) => {
            if(data.success === true){
              alert(data.message)
              window.location.reload()
            }

          })
          .catch((error) => console.error(error)); // ловим ошибки сети и выводим в консоль
    }
  }
}
</script>

<style scoped>
.admin-panel{
  padding: 150px 0 0 0;
}
.admin-panel__menu input{
  color: #1C1B1F;
}
</style>