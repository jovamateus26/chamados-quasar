<template>
  <q-page padding>
    <div class="q-gutter-y-md">
      <q-card>
        <q-card-section>
          <div class="row justify-between">
            <q-input v-model="busca" class="col-md-4" dense color="primary" placeholder="Buscar">
              <template v-slot:append>
                <q-icon name="search"/>
              </template>
            </q-input>
            <q-btn to="secretaria/adicionar" icon-right="keyboard_arrow_right" color="primary" label="Adicionar"/>
          </div>
        </q-card-section>
      </q-card>

      <q-table
        title="Secretarias"
        :data="secretaria_lista.data"
        :columns="colunas"
        row-key="id"
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
              {{ col.value }}
            </q-td>
          </q-tr>
          <q-tr v-show="props.expand" :props="props">
            <q-td colspan="100%">
              <div class="text-left">
                <div>
                  <q-btn-group rounded>
                    <q-btn
                      icon="edit"
                      @click="dialogEditar = !dialogEditar;
                      secretariaEditar.secretaria = props.row.secretaria; secretariaEditar.id = props.row.id"
                    />
                    <q-btn icon="delete" @click="selecionarDelete(props.row)"/>
                  </q-btn-group>
                </div>
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
      <q-dialog v-model="confirmDelete" persistent transition-show="scale" transition-hide="scale">
        <q-card class="bg-negative text-white" style="width: 310px">
          <q-card-section>
            <div class="text-h6">Confirma a exclusão do item?</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ secretariaDelete.secretaria }}
          </q-card-section>

          <q-card-actions align="right" class="bg-white">
            <q-btn color="primary" flat label="Não" v-close-popup/>
            <q-btn @click="deletar(secretariaDelete)" text-color="negative" flat label="Sim" v-close-popup/>
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="dialogEditar">
        <q-card style="width: 300px">
          <q-card-section class="text-center text-white bg-primary">
            Alterar
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-y-md text-center">
              <q-input v-model="secretariaEditar.secretaria" label="Departamento" class="col-12"/>
              <q-btn color="primary" label="alterar" class="col-12" @click="editar"/>
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'SecretariaLista',
  data () {
    return {
      busca: '',
      colunas: [
        {
          name: 'desc',
          required: true,
          label: 'Secretaria',
          align: 'left',
          field: row => row.secretaria,
          format: val => `${val}`,
          sortable: true
        }
      ],
      confirmDelete: false,
      secretariaDelete: [],
      dialogEditar: false,
      secretariaEditar: {
        id: '',
        secretaria: ''
      }
    }
  },
  computed: {
    ...mapState('Secretaria', ['secretaria_lista'])
  },
  methods: {
    ...mapActions({
      listarSecretarias: 'Secretaria/listarSecretarias',
      deletarSecretaria: 'Secretaria/deletarSecretaria',
      editarSecretaria: 'Secretaria/editarSecretaria'
    }),
    async listar () {
      await this.listarSecretarias()
    },
    selecionarDelete (secretaria) {
      this.confirmDelete = !this.confirmDelete
      this.secretariaDelete = secretaria
    },
    deletar (secretaria) {
      this.deletarSecretaria(secretaria)
        .then(() => {
          this.$q.notify({
            color: 'positive',
            message: 'Secretaria deletada com sucesso.'
          })
          this.listar()
        })
        .catch(err => {
          this.$q.notify({
            color: 'negative',
            message: `${err.response.data[0].message}`
          })
        })
    },
    editar () {
      this.editarSecretaria(this.secretariaEditar)
        .then(() => {
          this.$q.notify({
            color: 'positive',
            message: 'Secretaria editada com sucesso.'
          })
          this.listar()
          this.dialogEditar = false
        })
        .catch(err => {
          this.$q.notify({
            color: 'negative',
            message: `${err.response.data[0].message}`
          })
        })
    }
  },
  mounted () {
    this.listar()
  }
}
</script>
