export default {
  setLoggedIn(state, value) {
    state.loggedIn = value
  },
  setUserByLogin(state, val) {
    state.users.push(val)
  },

}
