export default {
  users: state => {
    return state.users
  },
  isAuthenticated: state => {
    return !!state.token
  },
  authStatus: state => {
    return state.status
  }
}
