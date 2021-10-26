<template>
  <router-view/>
</template>
<script>
import {defineComponent} from 'vue';
import {LocalStorage} from "quasar";
import {mapActions, mapState} from "vuex";

export default {
  name: 'App',
  computed: {
    ...mapState('auth', ['loggedIn', 'users'])
  },
  methods:{
    ...mapActions('auth',['setUser'])
  },
  mounted() {
    if (LocalStorage.getItem('user')) {
      this.setUser()
    }
  }
}

</script>
