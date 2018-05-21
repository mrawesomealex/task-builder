<template>
    <div class="form-block">
        <h1>Регистрация нового пользователя</h1>
        <input :class="(!this.validation.email && this.BLUR_FLAG_EMAIL) ? errorClass : ''" type="email" placeholder="Введите ваш email" v-model="email"  @blur.once="UnBlur('email')"/>
        <input type="text" placeholder="Ввведите Имя пользователя" v-model="username" />
        <input :class="(!this.validation.password && this.BLUR_FLAG_PASSWORD) ? errorClass : ''" type="password"  placeholder="Введите ваш пароль" v-model="password" @blur.once="UnBlur('password')"/>
        <button :disabled="!this.isValid" @click="SignUp">Зарегистрироваться</button>
        <router-link to="/enter">У меня уже есть аккаунт</router-link>
    </div>
</template>

<script>
import AuthentificationService from '@/services/AuthentificationService'
export default {
  name: 'signUp',
  data: function () {
    return {
      email: '',
      password: '',
      username: '',
      VALID_EMAIL_REG: /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      BLUR_FLAG_EMAIL: false,
      BLUR_FLAG_PASSWORD: false,
      errorClass: 'error',
      errorDB: ''
    }
  },
  methods: {
    async SignUp () {
      if (this.isValid) {
        await AuthentificationService.register({
          email: this.email,
          password: this.password,
          username: this.username
        }).then(
          res => {
            if (res.data.error) {
              this.errorDB = res.data.error
            } else {
              this.$router.replace('/enter')
            }
          },
          err => {
            console.log('Произошла ошибка: ' + err)
          }
        )
      } else {
        this.UnBlur('password')
      }
    },
    UnBlur: function (field) {
      if (field === 'email') {
        this.BLUR_FLAG_EMAIL = true
      } else {
        this.BLUR_FLAG_PASSWORD = true
      }
    }
  },
  computed: {
    validation: function () {
      return {
        email: this.VALID_EMAIL_REG.test(this.email),
        password: this.password.match(/[A-Za-z]/) && this.password.match(/\d/) && this.password.length >= 6
      }
    },
    isValid: function () {
      let status = this.validation.password && this.validation.email
      return status
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/common/styles.scss";

</style>