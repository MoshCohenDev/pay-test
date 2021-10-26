<template>
  <q-layout view="hHh Lpr lff">
    <q-header bordered class="bg-white text-black ">
      <q-toolbar class="q-pa-sm ">
        <q-btn
          flat
          v-if="!loggedIn"
          to="/auth"
          icon-right="account_circle"
          label="Login"
          class="absolute-right"
        />
        <q-btn
          flat
          v-if="loggedIn"
          @click="logoutUser"
          icon-right="account_circle"
          label="Logout"
          class="absolute-right logout"
        />
        <q-btn flat @click="leftDrawerOpen = !leftDrawerOpen" round dense icon="menu"/>
        <q-toolbar-title class="text-weight-bold q-pa-sm">
          <q-img v-show="userId"
                 :src="img"
                 class="img1"
          />
          <span v-show="userId">{{ userId }}

          </span>

        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="500"
      show-if-above
      bordered
      v-if="loggedIn"
      :width="200"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item-label header class="text-h6 text-black">
            My-Rent
          </q-item-label>

          <q-item
            class="text-weight-bold icons"
            v-for="nav in navs"
            :key="nav.label"
            :to="nav.to"
            exact
            clickable>
            <q-item-section avatar>
              <q-icon :name="nav.icon"/>
            </q-item-section>
            <q-item-section>
              <q-item-label> {{ nav.label }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import {mapActions, mapState} from 'vuex'


export default {
  data() {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: 'בית',
          to: '/home',
          icon: 'home',
        },
      ],
      left: false,
      drawer: false,
      right: false,
    }
  },
  computed: {
    ...mapState('auth', ['loggedIn', 'userId', 'img'])
  },
  methods: {
    ...mapActions('auth', ['logoutUser'])
  },
  watch: {
    loggedIn() {
      console.log(this.loggedIn)
    }
  }
}
</script>
<style lang="scss">
.Header-icon {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.title {
  font-size: 18px;
}

.footer {
  background-color: white;
  opacity: 0.9;
}

.img1 {
  background: #bfc8d4;
  border-radius: 50%;
  border: 2px solid black;
  width: 40px;
  height: 40px;
  margin: 5px;
}
//.logout{
//  background: #1165d2;
//  border-radius: 50%;
//  border: 2px solid black;
//  vertical-align: middle;
//  width: 50px;
//  height: 50px;
//  margin: 13px;
//}
</style>
