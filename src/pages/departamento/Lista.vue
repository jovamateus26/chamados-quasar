<template>
  <q-page padding>
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
    {{departamentoLista}}
  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {}
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
