import Vue from 'vue'

const listarAssuntos = async ({ commit }) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.get('assunto')
      .then(resp => {
        commit('SET_ASSUNTO_LISTA', resp)
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const adicionarAssunto = ({ commit }, assunto) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.post('assunto', assunto)
      .then(resp => {
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const deletarAssunto = ({ commit }, assunto) => {
  return new Promise((resolve, reject) => {
    Vue.prototype.$axios.delete('assunto/' + assunto.id)
      .then(resp => {
        resolve()
      })
      .catch(err => {
        reject(err)
      })
  })
}

export {
  listarAssuntos,
  adicionarAssunto,
  deletarAssunto
}
