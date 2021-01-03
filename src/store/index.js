import Vue from 'vue'
import Vuex from 'vuex'
import usuario from './Usuario'
import secretaria from './Secretaria'
// import example from './module-example'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      Usuario: usuario,
      Secretaria: secretaria
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
