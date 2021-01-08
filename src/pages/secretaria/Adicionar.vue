<template>
  <q-page padding>
    <q-form class="q-gutter-y-md" @submit="salvar">
      <q-card>
        <q-card-section>
          <div class="row justify-between">
            <q-btn to="/secretaria" label="voltar" color="primary" icon="keyboard_arrow_left"/>
            <q-btn type="submit" label="salvar" color="green" icon-right="check"/>
          </div>
        </q-card-section>
      </q-card>
      <q-card>
        <q-card-section>

          <q-input
            label="Secretaria"
            v-model="form.secretaria"
          />

        </q-card-section>
      </q-card>
    </q-form>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  // name: 'PageName',
  data () {
    return {
      form: {
        secretaria: ''
      }
    }
  },
  methods: {
    ...mapActions({
      adicionarSecretaria: 'Secretaria/adicionarSecretaria'
    }),
    async salvar () {
      await this.adicionarSecretaria(this.form)
        .then(() => {
          this.$q.notify({
            color: 'green',
            message: 'Secretaria adicionada com sucesso.'
          })
        })
        .catch(err => {
          const erro = err.response.data[0].message
          this.$q.notify({
            color: 'red',
            message: `${erro}`
          })
        })
    }
  }
}
</script>
