<template>
  <q-page padding>
    <div class="q-gutter-y-md">
      <q-card>
        <q-card-section>
          <div class="row justify-between">
            <q-input class="col-md-4" dense color="primary" placeholder="Buscar">
              <template v-slot:append>
                <q-icon name="search"/>
              </template>
            </q-input>
            <q-btn to="/assunto/adicionar" icon-right="keyboard_arrow_right" label="adicionar" color="primary"/>
          </div>
        </q-card-section>
      </q-card>
      <q-table
        :data="listaAssuntos.data"
        :columns="colunas"
        title="Assuntos"
      >
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th auto-width/>
            <q-th
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
            >
              {{ col.label }}
            </q-th>
            <q-th auto-width/>
          </q-tr>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props" @click="props.expand = !props.expand">
            <q-td auto-width>
              <q-btn size="sm" color="primary" round dense
                     :icon="props.expand ? 'remove' : 'add'"/>
            </q-td>
            <q-td
              v-for="col in props.cols"
              :key="col.name"
              :props="props"
            >
              <div v-if="col.name === 'prioridade'" class="truncate-chip-labels">
                <q-chip v-if="col.value === 1" color="negative" text-color="white">Crítica</q-chip>
                <q-chip v-if="col.value === 2" color="warning" text-color="white">Alta</q-chip>
                <q-chip v-if="col.value === 3" color="info" text-color="white">Média</q-chip>
                <q-chip v-if="col.value === 4" color="positive" text-color="white">Baixa</q-chip>
              </div>
              <div v-else>{{ col.value }}</div>
            </q-td>
          </q-tr>
          <q-tr v-show="props.expand" :props="props">
            <q-td colspan="100%">
              <div class="text-left">
                <div>
                  <q-btn-group rounded>
                    <q-btn icon="delete" @click="selecionarDelete(props.row)"/>
                    <q-btn icon="edit"/>
                  </q-btn-group>
                </div>
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
      <q-dialog persistent v-model="deleteDialog">
        <q-card>
          <q-card-section>
            Confirma a exclusão do assunto
          </q-card-section>
          <q-card-actions>
            <q-btn flat color="primary" label="não" v-close-popup/>
            <q-btn flat color="negative" label="sim" @click="deletar" v-close-popup/>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'listaAssunto',
  data () {
    return {
      colunas: [
        {
          name: 'assunto',
          label: 'Assunto',
          align: 'left',
          field: row => row.assunto,
          format: val => `${val}`
        },
        {
          name: 'prioridade',
          label: 'Prioridade',
          field: row => row.prioridade
        }
      ],
      deleteDialog: false,
      assunto: {}
    }
  },
  methods: {
    ...mapActions({
      listarAssunto: 'Assunto/listarAssuntos',
      deletarAssunto: 'Assunto/deletarAssunto'
    }),
    async selecionarDelete (assunto) {
      this.deleteDialog = !this.deleteDialog
      this.assunto = assunto
    },
    async listar () {
      await this.listarAssunto()
    },
    async deletar () {
      this.deletarAssunto(this.assunto)
        .then(() => {
          this.$q.notify({
            color: 'positive',
            message: 'Assunto deletado com sucesso'
          })
          this.listar()
        })
        .catch(err => {
          this.$q.notify({
            color: 'negative',
            message: `${err.response.data[0].message}`
          })
        })
    }
  },
  computed: {
    ...mapState('Assunto', ['listaAssuntos'])
  },
  mounted () {
    this.listarAssunto()
  }
}
</script>
