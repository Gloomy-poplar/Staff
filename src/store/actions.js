import axios from 'axios'

export default {
  loadUsers ({ commit }) {
    axios
      .get('http://localhost:3000/users')
      .then(response => {
        commit('SET_USERS', { info: response.data })
      })
  },
  addUsers ({ commit }) {
    axios
      .post('http://localhost:3000/users')
      .then(response => {
        commit('ADD_USER', { user: response.data })
      })
  },
  currentUser ({ commit }, id) {
    axios.get('http://localhost:3000/users/' + id)
      .then((response) => {
        commit('SET_USER', { info: response.data })
      }, (err) => {
        console.log(err)
      })
  },
  deleteUser ({ commit }, id) {
    axios.delete('http://localhost:3000/users/' + id)
      .then(() => {
        commit('DELETE_USER', id)
      }, (err) => {
        console.log(err)
      })
  }
}
