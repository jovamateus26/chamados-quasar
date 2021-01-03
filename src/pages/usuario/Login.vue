<template>
  <q-page padding>
    <q-form @submit="logar">
      <div class="row q-gutter-y-md justify-center text-center">
        <q-input
          class="col-all"
          v-model="usuario.email"
          label="E-mail"
        />
        <q-input
          type="password"
          class="col-all"
          v-model="usuario.password"
          label="Senha"
        />
        <q-btn
          type="submit"
          class="col-md-5 col-xs-12"
          color="primary"
          label="Entrar"/>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  // name: 'PageName',
  data () {
    return {
      usuario: {
        email: '',
        password: ''
      },
      erro: {}
    }
  },
  methods: {
    ...mapActions({
      login: 'Usuario/login'
    }),
    logar () {
      this.login(this.usuario)
        .then(resp => {
          this.$router.push('/inicio')
        })
        .catch(err => {
          this.erro = err.response.data[0].message
          this.$q.notify({
            color: 'red',
            textColor: 'white',
            icon: 'report',
            message: `${this.erro}`
          })
        })
    }
  }
}
</script>
