import Vue from 'vue'

const login = ({ commit }, usuario) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.post('sessions', usuario)
      .then(resp => {
        localStorage.setItem('token', resp.data.type + ' ' + resp.data.token)
        resolve(resp)
        // console.log(resp.data)
      })
      .catch(fail => {
        reject(fail)
        // console.log(fail.response)
      })
  })
}

const registrarUsuario = ({ commit }, usuario) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.post('users', usuario)
      .then(resp => {
        localStorage.setItem('token', resp.data.type + ' ' + resp.data.token)
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const listarUsuarios = async ({ commit }, busca) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get('users', {
      params: {
        busca: busca
      }
    })
      .then(resp => {
        commit('SET_USUARIO_LISTA', resp)
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const deletarUsuario = ({ commit }, usuario) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.delete('users/' + usuario.id)
      .then(resp => {
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export {
  login,
  registrarUsuario,
  listarUsuarios,
  deletarUsuario
}
