<template>
    <div class="form-block">
        <h1>Вход</h1>
        <p class="errorMessage col-xl-8 col-lg-8 col-md-8 col-sm-11 col-11 mx-auto text-left px-0" v-if="errorMessage">{{'Не найдено данной кобинации логина и пароля '}}</p>
        <input type="email" placeholder="Введите ваш email" v-model="email"/>
        <input type="password" placeholder="Введите ваш пароль" v-model="password"/>
        <button @click="Enter">Войти</button>
        <router-link to="/register">Новый пользователь</router-link>
    </div>
</template>

<script>
import AuthentificationService from '@/services/AuthentificationService'
export default {
  name: 'login',
  data: function () {
    return {
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    async Enter () {
      await AuthentificationService.enter({
        email: this.email,
        password: this.password,
        dateCreated: new Date()
      }).then(res => {
        if (!res.data.error) {
          this.errorMessage = ''
          for (const key in res.data) {
            localStorage.setItem(key, res.data[key])
          }
          this.$router.replace('/profile/projects?email='+ res.data.email +'&username=' + res.data.username)
        } else {
          this.errorMessage = res.data.error
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/common/styles.scss";
.errorMessage{
    color: red;
}

</style>