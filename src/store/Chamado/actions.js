import Vue from 'vue'
const listarChamados = async ({ commit }) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get('chamado/')
      .then(resp => {
        commit('SET_CHAMADO_LISTA', resp)
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const adicionarChamado = async ({ commit }, chamado) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.post('chamado', chamado)
      .then(resp => {
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export {
  listarChamados,
  adicionarChamado
}
