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
            <q-btn color="primary" label="adicionar" to="/registrar"/>
          </div>
        </q-card-section>
      </q-card>
      <q-table
        title="Usuários"
        :data="listaUsuario.data"
        :columns="colunas"
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
              <div class="row">
                <div>Email: {{ props.row.email }}</div>
              </div>
              <div class="row">
                <div>Celular: {{ props.row.celular }}</div>
              </div>
              <div class="row">
                <div>Departamento: {{ props.row.departamento }}</div>
              </div>
              <div class="row" v-if="props.row.tipo ===1">
                <div>Admin</div>
              </div>
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
      <q-dialog v-model="confirmDeletarUsuario" persistent transition-show="scale" transition-hide="scale">
        <q-card style="width: 300px">
          <q-card-section class="bg-negative text-white">
            Deseja deletar o usuário
          </q-card-section>
          <q-card-section>
            <div class="text-center">
              {{ usuario.name }}
            </div>
            <div class="text-center">
              {{ usuario.email }}
            </div>
          </q-card-section>
          <q-card-actions>
            <q-card-actions align="right" class="bg-white">
              <q-btn label="Não" flat v-close-popup color="primary"/>
              <q-btn label="sim" flat color="negative" @click="deletar"/>
            </q-card-actions>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'UsuarioLista',
  data () {
    return {
      busca: '',
      colunas: [
        {
          name: 'name',
          align: 'left',
          field: row => row.name
        }
      ],
      confirmDeletarUsuario: false,
      usuario: {}
    }
  },
  methods: {
    ...mapActions({
      listarUsuarios: 'Usuario/listarUsuarios',
      deletarUsuario: 'Usuario/deletarUsuario'
    }),
    selecionarDelete (usuario) {
      this.confirmDeletarUsuario = !this.confirmDeletarUsuario
      this.usuario = usuario
    },
    async deletar () {
      this.deletarUsuario(this.usuario)
        .then(() => {
          this.$q.notify({
            color: 'positive',
            message: 'Usuário deletado com sucesso.'
          })
          this.confirmDeletarUsuario = false
          this.listarUsuarios()
        })
        .catch(err => {
          this.$q.notify({
            color: 'negative',
            message: `${err.response.data[0].message}`
          })
        })
    }
  },
  async mounted () {
    await this.listarUsuarios()
  },
  computed: {
    ...mapState('Usuario', ['listaUsuario'])
  }
}
</script>
