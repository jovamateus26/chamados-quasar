import Vue from 'vue'

const listarDepartamentos = ({ commit }) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get('/departamento')
      .then(resp => {
        commit('SET_DEPARTAMENTO_LISTA', resp.data)
        resolve()
      })
      .catch(err => {
        reject(err)
      })
  })
}

const salvarDepartamento = ({ commit }, departamento) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.post('/departamento', departamento)
      .then(resp => {
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export {
  listarDepartamentos,
  salvarDepartamento
}
