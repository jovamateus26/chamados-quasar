<template>
  <q-page padding>
    <q-form class="q-gutter-y-md" @submit="registar">
      <q-card>
        <q-card-section>
          <div class="row justify-between">
            <q-btn to="/usuario" label="voltar" color="secondary" icon="keyboard_arrow_left"/>
            <div class="text-center text-h6">Usuário</div>
            <q-btn type="submit" label="salvar" color="primary" icon-right="check"/>
          </div>
        </q-card-section>
      </q-card>

      <q-card>
        <q-card-section>
          <q-input v-model="usuario.name" label="Nome completo"/>
          <q-input v-model="usuario.email" label="E-mail"/>
          <q-input v-model="usuario.password" label="Senha" type="password"/>
          <q-input v-model="usuario.password_confirmation" label="Repita a Senha" type="password"/>
        </q-card-section>
      </q-card>
    </q-form>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'RegistroUsuario',
  data () {
    return {
      usuario: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  methods: {
    ...mapActions({
      registrarUsuario: 'Usuario/registrarUsuario'
    }),
    registar () {
      this.registrarUsuario(this.usuario)
        .then(resp => {
          this.$q.notify({
            color: 'positive',
            message: 'Usuário adicionado com sucesso'
          })
          this.$router.push('/')
        })
        .catch(err => {
          this.$q.notify({
            color: 'negative',
            message: `${err.response.data[0].message}`
          })
        })
    }
  }
}
</script>
