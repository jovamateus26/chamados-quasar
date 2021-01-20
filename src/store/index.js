import Vue from 'vue'
import Vuex from 'vuex'
import usuario from './Usuario'
import secretaria from './Secretaria'
import departamento from './Departamento'
import assunto from './Assunto'
import chamado from './Chamado'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      Usuario: usuario,
      Secretaria: secretaria,
      Departamento: departamento,
      Assunto: assunto,
      Chamado: chamado
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
