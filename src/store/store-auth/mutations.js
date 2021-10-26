export default {
  setLoggedIn(state) {
    state.loggedIn = !state.loggedIn
  },
  setUserByLogin(state, val) {
    state.users=val
  },
  setDataUsers(state, data) {
    state.users = data
  }

}
