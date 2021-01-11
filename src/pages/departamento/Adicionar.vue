<template>
  <q-page padding>
    <q-form @submit="salvar" class="q-gutter-y-md">
      <q-card>
        <q-card-section>
          <div class="row justify-between">
            <q-btn to="/departamento" label="voltar" color="secondary" icon="keyboard_arrow_left"/>
            <q-btn type="submit" label="salvar" color="primary" icon-right="check"/>
          </div>
        </q-card-section>
      </q-card>
      <q-card>
        <q-card-section>
          <q-select
            v-model="form.secretaria_id"
            :options="secretaria_lista.data"
            option-value="id"
            option-label="secretaria"
            emit-value
            label="Secretaria"
            map-options
          />
          <q-input
            v-model="form.departamento"
            label="Departamento"/>
        </q-card-section>
      </q-card>
    </q-form>
  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'DepartamentoAdicionar',
  data () {
    return {
      form: {
        secretaria_id: '',
        departamento: ''
      }
    }
  },
  computed: {
    ...mapState('Secretaria', ['secretaria_lista'])
  },
  methods: {
    ...mapActions({
      listarSecretarias: 'Secretaria/listarSecretarias',
      salvarDepartamento: 'Departamento/salvarDepartamento'
    }),
    salvar () {
      this.salvarDepartamento(this.form)
        .then(() => {
          this.$q.notify({
            color: 'positive',
            message: 'Departamento salvo com sucesso'
          })
        })
        .catch(err => {
          const erro = err.response.data[0].message
          this.$q.notify({
            color: 'negative',
            message: `${erro}`
          })
        })
    }
  },
  mounted () {
    this.listarSecretarias()
  }
}
</script>
