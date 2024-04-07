<template>
  <transition>
    <div class="pp-auth">
      <div class="pp-auth__container">
        <routerLink class="pp-auth__btn-close" to="/">
          <SvgX class="pp-auth__svg-cls" />
        </routerLink>
        <form action="" class="pp-auth__form form" @submit.prevent="createPost()" ref="form">
          <h2 class="pp-auth__title">Авторизация</h2>
          <input type="text" class="pp-auth__input" placeholder="логин" v-model="formData.login">

          <input type="text" class="pp-auth__input" placeholder="пароль" v-model="formData.password">

          <button type="submit" class="pp-auth__btn" >
            Войти
          </button>
          <routerLink type="submit" class="pp-auth__btn-bottom" to="/registration">
            Нет аккаунта? Зарегистрироваться
          </routerLink>
          <p class="pp-auth__error"s
            v-if="v$.formData.login.$dirty && (v$.formData.login.required.$invalid || v$.formData.password.required.$invalid )">
            Поля не должны быть пустыми
          </p>
        </form>
      </div>

    </div>
  </transition>

</template>

<script>
import { useUserStore } from '@/main';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import axios from 'axios';
import SvgX from '../svg/SvgX.vue';


export default {
  setup() {
    return {
      v$: useVuelidate(),
      store: useUserStore()
    }
  },
  components: {
    SvgX
  },
  data() {
    return {
      success: true,
      formData: {
        login: '',
        password: ''
      }
    }
  },
  methods: {
    closeRegistration() {
      if (this.success) {
        this.$router.push('/')
        this.v$.formData.password.$dirty = false
      }
    },
    async createPost() {
      this.v$.formData.$touch()
      await axios
        .post('http://localhost:7335/api/login', this.formData)
        .then((res) => {
          console.log(res)
          this.store.hasUser = true
          this.store.login = res.data.login
          this.store.username = res.data.username
          this.store.id = res.data.id
          this.success = true
          this.closeRegistration()
        })
    },
  },
  validations: {
    formData: {
      login: { required },
      password: { required }
    }
  }
}
</script>

<style lang="less"></style>