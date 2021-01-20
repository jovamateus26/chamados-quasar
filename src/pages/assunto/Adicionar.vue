<template>
  <q-page padding>
    <q-form @submit="adicionar" class="q-gutter-y-md">
      <q-card>
        <q-card-section>
          <div class="row justify-between">
            <q-btn to="/assunto" label="voltar" color="secondary" icon="keyboard_arrow_left"/>
            <q-btn label="salvar" type="submit" color="primary" icon-right="check"/>
          </div>
        </q-card-section>
      </q-card>
      <q-card>
        <q-card-section>
          <q-input v-model="assunto.assunto" label="Assunto"/>
          <q-select
            v-model="assunto.prioridade"
            :options="prioridadeOpcoes"
            option-value="id"
            option-label="prioridade"
            emit-value
            map-options
          />
        </q-card-section>
      </q-card>
    </q-form>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AdicionarAssunto',
  data () {
    return {
      assunto: {
        assunto: '',
        prioridade: ''
      },
      prioridadeOpcoes: [
        {
          id: 1,
          prioridade: 'Crítica'
        },
        {
          id: 2,
          prioridade: 'Alta'
        },
        {
          id: 3,
          prioridade: 'Média'
        },
        {
          id: 4,
          prioridade: 'Baixa'
        }
      ]
    }
  },
  methods: {
    ...mapActions({
      adicionarAssunto: 'Assunto/adicionarAssunto'
    }),
    adicionar () {
      this.adicionarAssunto(this.assunto)
        .then(() => {
          this.$q.notify({
            color: 'positive',
            message: 'Assunto adicionado com sucesso'
          })
        })
        .catch(err => {
          console.log(err.response)
          this.$q.notify({
            color: 'negative',
            message: `${err.response.data[0].message}`
          })
        })
    }
  }
}
</script>
