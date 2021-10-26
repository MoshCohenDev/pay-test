import {LocalStorage, Loading} from "quasar";
import axios from "axios";

export default {

  async registerUser({commit}, payload) {
    Loading.show()
    const res = await axios.post("http://localhost:3004/users/register", payload);
    if (res) {
      Loading.hide()
      commit('setUserByLogin', res)
      LocalStorage.set('user', res)
      commit('setLoggedIn', true)
    }
  },
  loginUser({}, payload) {
    Loading.show()
    const req = axios.post('https://localhost:3004/users/login',payload)
  },
  logoutUser() {
  },

}
