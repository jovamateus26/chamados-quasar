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
            <q-btn to="/chamado/adicionar" icon-right="keyboard_arrow_right" label="adicionar" color="primary"/>
          </div>
        </q-card-section>
      </q-card>
      <q-table
        title="Chamados"
        :data="listaChamados.data"
        :columns="colunas"
      >
        <template v-slot:header="props">
          <q-tr :props="props">
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
                    <q-btn icon="print"/>
                    <q-btn icon="edit"/>
                    <q-btn icon="delete" @click="selecionarDelete(props.row)"/>
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
  name: 'listaChamado',
  data () {
    return {
      colunas: [
        {
          name: 'prioridade',
          label: 'Prioridade',
          align: 'left',
          field: row => row.assunto.prioridade
        },
        {
          name: 'titulo',
          label: 'Titulo',
          align: 'left',
          field: row => row.titulo
        }
      ]
    }
  },
  methods: {
    ...mapActions({
      listarChamados: 'Chamado/listarChamados'
    })
  },
  computed: {
    ...mapState('Chamado', ['listaChamados'])
  },
  mounted () {
    this.listarChamados()
  }
}
</script>
