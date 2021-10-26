<template>
  <q-page padding>
    <q-card class="auth-tabs">
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
          <RegisterLogin :tab="tab"/>
        </q-tab-panel>
        <q-tab-panel name="register">
          <RegisterLogin :tab="tab"/>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
      <q-list v-if="loggedIn" separator padding class="rounded-borders" style="display: grid">
        <q-item
          v-if="users"
          clickable active focused
          class="btn text-bold"
          style="pointer-events:auto"
          size="md"
          v-for="(item) of users"
          :key="item">
          <q-item-section>
            {{ item.name }}
          </q-item-section>
        </q-item>
      </q-list>
  </q-page>
</template>
<script>
import RegisterLogin from "components/auth/Register";
import {mapState} from "vuex";

export default {
  name: 'Login',
  data() {
    return {
      tab: "login",
    };
  },
  components: {RegisterLogin},
  methods: {},
  computed: {
    ...mapState('auth', ['loggedIn','users'])
  }
};
</script>

<style scoped lang="scss">
.auth-tabs {
  max-width: 900px;
  margin: 0 auto;
}

.google {
  margin: 30px;
  padding: 30px;
}

.password {
  color: #111010;
  display: block;
  padding: 32px;
  font-size: 16px;
}

.title {
  text-align: center;
  background: #79a4e0;
  border: 2px solid;
  color: white;
  padding: 6px;
  margin: 20px 100px;
  border-radius: 20px;
  font-size: medium;
  font-weight: bold;
}
</style>
