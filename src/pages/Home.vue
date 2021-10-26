<template>
  <q-page padding>
    <q-card class="auth-tabs" v-if="!loggedIn">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="login" label="Login"/>
        <q-tab name="register" label="Register"/>
      </q-tabs>

      <q-separator/>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <login-register :tab="tab"/>
        </q-tab-panel>
        <q-tab-panel name="register">
          <login-register :tab="tab"/>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
    <h4 class="text-center" v-if="loggedIn">users</h4>
    <q-table
      class="q-pa-md text-weight-bold"
      v-if="loggedIn"
      :rows="users"
      :columns="columns"
      row-key="name">
    </q-table>
  </q-page>
</template>
<script>
import RegisterLogin from "components/auth/Register";
import {mapState} from "vuex";
import LoginRegister from "components/auth/login-register";
import {LocalStorage} from "quasar";
const columns = [
  {
    name: 'name',
    required: true,
    label: 'ID',
    align: 'left',
    field: row => row.firstName,
    sortable: true
  },
  {name: 'first name', align: 'center', label: 'first name', field: row => row.firstName, sortable: true},
  {name: 'lastName', align: 'center', label: 'lastName', field: row => row.lastName, },
  {name: 'Price', align: 'center', label: 'user name', field: row => row.userName},
  {name: 'id', align: 'center', label: 'id', field: row => row.id},
]
export default {
  name: 'Login',
  data() {
    return {
      tab: "login",
      columns,
    };
  },
  components: {LoginRegister, RegisterLogin},
  methods: {},
  computed: {
    ...mapState('auth', ['loggedIn', 'users'])
  },

};
</script>

<style scoped lang="scss">
.auth-tabs {
  max-width: 900px;
  margin: 0 auto;
}


.password {
  color: #111010;
  display: block;
  padding: 32px;
  font-size: 16px;
}
</style>
