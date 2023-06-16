<template>
  <div class="wrapper">
    <Header></Header>
    <div class="admin-panel">
      <div class="small-container">
        <div style="display: flex; flex-direction: column; gap: 20px" class="admin-panel__body">
          <div class="admin-panel__menu">

          </div>
          <div class="admin-panel__block">
            <p style="font-size: 20px;padding: 0 0 5px 0;">Удалить пользователя</p>
            <div style="display: flex; justify-content: space-between" class="admin-panel__search">
              <input   style="padding: 5px; width: 700px;" class="main-input" placeholder="Enter phone number" v-model="searchPhone" type="text">
              <button  @click="getByPhone" class="main-button">Найти</button>
            </div>
            <table v-if="buttonUserClicked">
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
                  <button class="main-button" style="background: #ff8686" @click="deleteItem()">Delete</button>
                </td>
              </tr>
              </tbody>
            </table>

          </div>
          <div class="admin-panel__block">
            <p style="font-size: 20px;padding: 0 0 5px 0;">Удалить полет</p>
            <div style="display: flex; justify-content: space-between" class="admin-panel__search">
              <input  style="padding: 5px; width: 700px" class="main-input" placeholder="Enter flight id" v-model="searchFlightId" type="text">
              <button @click="getById" class="main-button">Найти</button>
            </div>
            <table v-if="buttonClicked">
              <thead>
              <tr>
                <th>ID</th>
                <th>Код</th>
                <th>ID самолета</th>
                <th>ID поездки</th>
                <th>Город отправления</th>
                <th>Город прибытия</th>
                <th>Дата отправления</th>
                <th>Дата прибытия</th>
                <th>Время отправления</th>
                <th>Время прибытия</th>
                <th>Время полета</th>
                <th>Цена</th>
                <th>Действия</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>{{ flight.id }}</td>
                <td>{{ flight.code }}</td>
                <td>{{ flight.id_airplane }}</td>
                <td>{{ flight.id_trips }}</td>
                <td>{{ flight.departure_city }}</td>
                <td>{{ flight.arrival_city }}</td>
                <td>{{ flight.departure_date }}</td>
                <td>{{ flight.arrival_date }}</td>
                <td>{{ flight.departure_time }}</td>
                <td>{{ flight.arrival_time }}</td>
                <td>{{ flight.time_in_flight }}</td>
                <td>{{ flight.price }}</td>
                <td>
                  <button class="main-button" style="background: #ff8686" @click="deleteFlight()">Delete</button>
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
      buttonUserClicked:false,
      searchFlightId:null,

      item:{

      },
      flight:{

      },
    }
  },
  methods:{
    getByPhone(){
      this.buttonUserClicked = true
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
    getById(){
      this.buttonClicked = true
      fetch('http://golobeapi/routes/getById.php',{
        method: 'POST',
        body:JSON.stringify({
          id:this.searchFlightId,
        }),
      })
          .then((response) => response.json()) // парсим ответ от сервера в формате JSON
          .then((data) => {
            if(data.response === 'success'){
              this.flight = data.flightData[0]
              // window.location.reload()
            }

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
    },
    deleteFlight(){
      fetch("http://golobeapi/routes/deleteFlight.php",{
        method: 'POST',
        body:JSON.stringify({
          id:this.flight.id
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
  },
  mounted(){
    // if (localStorage.getItem('user')){
    //   if ((localStorage.getItem('user').status) === 0){
    //     this.$router.push('/')
    //   }
    // }
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
table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}
</style>