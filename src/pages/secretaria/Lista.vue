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
            <q-btn to="secretaria/adicionar" icon-right="send" color="primary" label="Adicionar"/>
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
          <q-tr :props="props">
            <q-td auto-width>
              <q-btn size="sm" color="primary" round dense @click="props.expand = !props.expand"
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
                    <q-btn icon="delete" @click="selecionarDelete(props.row)"/>
                    <q-btn icon="edit"/>
                  </q-btn-group>
                </div>
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
      <q-dialog v-model="confirmDelete" persistent transition-show="scale" transition-hide="scale">
        <q-card class="bg-red text-white" style="width: 300px">
          <q-card-section>
            <div class="text-h6">Confirma a exclusão do item?</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ secretariaDelete.secretaria }}
          </q-card-section>

          <q-card-actions align="right" class="bg-white">
            <q-btn color="primary" flat label="Não" v-close-popup/>
            <q-btn text-color="red" flat label="Sim" v-close-popup/>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  // name: 'PageName',
  data () {
    return {
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
      secretariaDelete: []
    }
  },
  computed: {
    ...mapState('Secretaria', ['secretaria_lista'])
  },
  methods: {
    ...mapActions({
      listarSecretarias: 'Secretaria/listarSecretarias'
    }),
    async listar () {
      await this.listarSecretarias()
    },
    selecionarDelete (secretaria) {
      this.confirmDelete = !this.confirmDelete
      this.secretariaDelete = secretaria
    }
  },
  mounted () {
    this.listar()
  }
}
</script>
