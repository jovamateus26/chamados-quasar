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

export {
  login
}
