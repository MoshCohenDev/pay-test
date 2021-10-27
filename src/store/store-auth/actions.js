import {LocalStorage, Loading, Notify} from "quasar";
import axios from "axios";

export default {
  async registerUser({commit, dispatch}, payload) {
    Loading.show
    try {
      const res = await axios.post("http://localhost:3004/users/register", payload);
      console.log(res.data)
      LocalStorage.set('user', res.data)
      Loading.hide()
      dispatch('setUser')
    } catch (e) {
      console.log(e)
      Loading.hide()
    }
  },
  async loginUser({commit, dispatch}, payload) {
    try {
      const req = await axios.post('http://localhost:3004/users/login', payload)
      if (req.data === null) {
        Notify.create({
          message: 'this user is not ',
          color: 'red'
        })
      } else {
        LocalStorage.set('user', req.data)
        dispatch('setUser',)
      }
    } catch (e) {
      Notify.create({
        message: 'this user is not ',
        color: 'red'
      })
    }
  },
  logOut({commit}) {
    commit('setLoggedIn')
    LocalStorage.clear()
  },
  async setUser({commit}) {
    commit('setLoggedIn')
    const usersData = await axios.get('http://localhost:3004/users/data')
    LocalStorage.set('data', usersData.data)
    await console.log(usersData.data)
    commit('setDataUsers', usersData.data)
  },

}
