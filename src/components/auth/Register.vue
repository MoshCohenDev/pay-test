<!--<template>-->
<!--  <form @submit.prevent="submitForm">-->
<!--    <div class="row q-mb-md">-->
<!--      <q-banner class="bg-grey-3 col">-->
<!--        <template v-slot:avatar>-->
<!--          <q-icon name="account_circle" color="primary"/>-->
<!--        </template>-->
<!--      </q-banner>-->
<!--    </div>-->
<!--    <div class="row q-mb-md">-->
<!--      <q-input-->
<!--        filled-->
<!--        class="col"-->
<!--        v-show="tab==='register'"-->
<!--        label="Your first name *"-->
<!--        hint="Name and surname"-->
<!--        lazy-rules-->
<!--      />-->

<!--    </div>-->
<!--    <div class="row q-mb-md">-->
<!--      <q-input-->
<!--        v-show="tab==='register'"-->
<!--        v-model="formData.first_name"-->
<!--        class="col"-->
<!--        :rules="[ val => val && val.length > 0 || 'Please type something']"-->
<!--        label="first name"-->
<!--        outlined-->
<!--        stack-label-->
<!--      />-->
<!--    </div>-->
<!--    <div class="row q-mb-md">-->
<!--      <q-input-->
<!--        v-show="tab==='register'"-->
<!--        v-model="formData.last_name"-->
<!--        class="col"-->
<!--        :rules="[ val => val && val.length > 0 || 'Please type something']"-->
<!--        label="last name"-->
<!--        outlined-->
<!--        stack-label-->
<!--      />-->
<!--    </div>-->
<!--    <div class="row q-mb-sm">-->
<!--      <q-input-->
<!--        v-model="formData.userName"-->
<!--        :rules="[ val => val && val.length > 0 || 'Please type something']"-->
<!--        lazy-rules-->
<!--        class="col"-->
<!--        label="User name"-->
<!--        outlined-->
<!--        stack-label-->
<!--      />-->
<!--    </div>-->
<!--    <div class="row q-mb-md">-->
<!--      <q-input-->
<!--        v-model="formData.password"-->
<!--        :rules="[ val => val.length >= 6 || 'Please enter at least 6 characters.']"-->
<!--        lazy-rules-->
<!--        type="password"-->
<!--        class="col"-->
<!--        label="Password"-->
<!--        outlined-->
<!--        stack-label-->
<!--      />-->
<!--    </div>-->
<!--    <div class="text-center">-->
<!--      <q-space/>-->
<!--      <q-btn-->
<!--        color="primary"-->
<!--        :label="tab"-->
<!--        type="submit"-->
<!--      />-->
<!--    </div>-->
<!--  </form>-->
<!--</template>-->

<!--<script>-->
<!--import {mapActions} from "vuex";-->
<!--import {Notify} from "quasar";-->

<!--export default {-->
<!--  props: ['tab'],-->
<!--  data() {-->
<!--    return {-->
<!--      formData: {-->
<!--        id: '',-->
<!--        userName: '',-->
<!--        first_name: '',-->
<!--        last_name: '',-->
<!--        password: ''-->
<!--      }-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    ...mapActions('auth', ['registerUser', 'loginUser']),-->
<!--    submitForm() {-->
<!--      this.$refs.userName.validate()-->
<!--      this.$refs.id.validate()-->
<!--      this.$refs.firstName.validate()-->
<!--      this.$refs.lastName.validate()-->
<!--      this.$refs.password.validate()-->
<!--      if (!this.$refs.userName.hasError || !this.$refs.password.hasError ||-->
<!--        !this.$refs.id.hasError || !this.$refs.firstName.hasError ||-->
<!--        !this.$refs.lastName.hasError) {-->
<!--        return Notify.create({-->
<!--          message: 'yoe need to put something',-->
<!--          color: 'red'-->
<!--        })-->
<!--      } else {-->
<!--        if (this.tab === 'login') {-->
<!--          this.loginUser(this.formData)-->
<!--        } else {-->
<!--          this.registerUser(this.formData)-->
<!--        }-->
<!--      }-->

<!--    },-->
<!--  },-->

<!--}-->
<!--</script>-->

<!--<style>-->

<!--</style>-->
