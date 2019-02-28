
export default {
  SET_USERS (state, { info }) {
    state.users = info
  },
  ADD_USER (state, { user }) {
    state.users.push(user)
  },
  SET_USER (state, { info }) {
    state.currentUser = info
  },
  DELETE_USER (state, id) {
    let index = state.users.findIndex(user => user.id === id)
    state.users.splice(index, 1)
  },
  AUTH_REQUEST (state) {
    state.status = 'loading'
  },
  AUTH_SUCCESS (state, token) {
    state.status = 'success'
    state.token = token
  },
  AUTH_ERROR (state) {
    state.status = 'error'
  }
}
