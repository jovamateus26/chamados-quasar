import Vue from 'vue'
import Vuex from 'vuex'
import usuario from './Usuario'
import secretaria from './Secretaria'
import departamento from './Departamento'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      Usuario: usuario,
      Secretaria: secretaria,
      Departamento: departamento
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
