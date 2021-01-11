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
            <q-btn to="departamento/adicionar" icon-right="keyboard_arrow_right" color="primary" label="Adicionar"/>
          </div>
        </q-card-section>
      </q-card>
      <q-table
        title="Departamento"
        :data="departamentoLista"
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
    </div>
  </q-page>

</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      colunas: [
        {
          name: 'departamento',
          required: true,
          label: 'Departamento',
          align: 'left',
          field: row => row.departamento,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'secretaria',
          required: true,
          label: 'Secretaria',
          align: 'left',
          field: row => row.secretaria.secretaria,
          format: val => `${val}`,
          sortable: true
        }
      ]
    }
  },
  methods: {
    ...mapActions({
      listarDepartamentos: 'Departamento/listarDepartamentos'
    })
  },
  computed: {
    ...mapState(
      'Departamento', ['departamentoLista']
    )
  },
  mounted () {
    this.listarDepartamentos()
  }
}
</script>
