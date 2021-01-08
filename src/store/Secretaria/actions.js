import Vue from 'vue'

const listarSecretarias = async ({ commit }) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get('/secretaria')
      .then(resp => {
        commit('SET_SECRETARIA_LISTA', resp)
        resolve(resp)
      })
      .catch(fail => {
        reject(fail)
      })
  })
}

const adicionarSecretaria = ({ commit }, secretaria) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.post('/secretaria', secretaria)
      .then(resp => {
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const deletarSecretaria = ({ commit }, secretaria) => {
  console.log(secretaria)
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.delete('/secretaria/' + secretaria.id)
      .then(resp => {
        console.log(resp)
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export {
  listarSecretarias,
  adicionarSecretaria,
  deletarSecretaria
}
