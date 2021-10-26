<template>
  <form @submit.prevent="submitForm">
    <div class="row q-mb-md">
      <q-banner class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary"/>
        </template>
        {{ tab | titleCase }}
      </q-banner>
    </div>
    <div class="row q-mb-md">
      <q-input
        v-show="tab==='register'"
        v-model="formData.id"
        class="col"
        :rules="[ val => val && val.length > 0 || 'Please type something']"
        label="id"
        outlined
        stack-label
      />
    </div>
      <div class="row q-mb-md">
    <q-input
        v-show="tab==='register'"
        v-model="formData.first_name"
        class="col"
        :rules="[ val => val && val.length > 0 || 'Please type something']"
        label="first name"
        outlined
        stack-label
      />
      </div>
      <div class="row q-mb-md">
        <q-input
          v-show="tab==='register'"
          v-model="formData.last_name"
          class="col"
          :rules="[ val => val && val.length > 0 || 'Please type something']"
          label="last name"
          outlined
          stack-label
        />
    </div>
    <div class="row q-mb-sm">
      <q-input
        v-model="formData.userName"
        :rules="[ val => val && val.length > 0 || 'Please type something']"
        ref="userName"
        lazy-rules
        class="col"
        label="User name"
        outlined
        stack-label
      />
    </div>
    <div class="row q-mb-md">
      <q-input
        v-model="formData.password"
        :rules="[ val => val.length >= 6 || 'Please enter at least 6 characters.']"
        ref="password"
        lazy-rules
        type="password"
        class="col"
        label="Password"
        outlined
        stack-label
      />
    </div>
    <div class="text-center">
      <q-space/>
      <q-btn
        color="primary"
        :label="tab"
        type="submit"
      />
    </div>
  </form>
</template>

<script>
import {mapActions} from "vuex";

export default {
  props: ['tab'],
  data() {
    return {
      formData: {
        id: '',
        userName: '',
        first_name: '',
        last_name: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['registerUser', 'loginUser']),
    submitForm() {
      this.$refs.email.validate()
      this.$refs.password.validate()
      if (!this.$refs.email.hasError &&
        !this.$refs.password.hasError) {
        if (this.tab === 'login') {
          this.loginUser(this.formData)
        } else {
          debugger
          this.registerUser(this.formData)
        }
      }
    },
  },
  filters: {
    titleCase(value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },

}
</script>

<style>

</style>
