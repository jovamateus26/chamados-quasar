<template>
  <q-page padding>
    <q-form @submit="adicionar" class="q-gutter-y-md">
      <q-card>
        <q-card-section>
          <div class="row justify-between">
            <q-btn to="/chamado" label="voltar" color="secondary" icon="keyboard_arrow_left"/>
            <q-btn label="adicionar" color="primary" icon-right="check" type="submit"/>
          </div>
        </q-card-section>
      </q-card>
      <q-card>
        <q-card-section>
          <q-select
            v-model="chamado.dono"
            label="Usuário"
            use-input
            input-debounce="0"
            :options="listaUsuario.data"
            option-label="name"
            option-value="id"
            @filter="buscarNomeUsuario"
            emit-value
            map-options
          ></q-select>
          <q-select
            v-model="chamado.responsavel"
            label="Responsável"
            use-input
            input-debounce="0"
            :options="listaUsuario.data"
            option-label="name"
            option-value="id"
            @filter="buscarNomeUsuario"
            emit-value
            map-options
          ></q-select>

          <q-select
            :options="listaAssuntos.data"
            option-value="id"
            option-label="assunto"
            v-model="chamado.assunto_id"
            label="Assunto"
            emit-value
            map-options
          />
          <q-input
            v-model="chamado.titulo"
            label="Titulo"
          />
          <q-input
            v-model="chamado.texto"
            label="Descrição completa"
            type="textarea"
          />

        </q-card-section>
      </q-card>
    </q-form>
  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'AdicionarChamado',
  data () {
    return {
      chamado: {
        dono: '',
        responsavel: '',
        assunto_id: '',
        titulo: '',
        texto: ''
      }
    }
  },
  methods: {
    ...mapActions({
      listarAssuntos: 'Assunto/listarAssuntos',
      adicionarChamado: 'Chamado/adicionarChamado',
      listarUsuarios: 'Usuario/listarUsuarios'
    }),
    adicionar () {
      this.adicionarChamado(this.chamado)
        .then(() => {
          this.$q.notify({
            color: 'positive',
            message: 'Chamados registrado com sucesso'
          })
        })
        .catch(err => {
          this.$q.notify({
            color: 'negative',
            message: `${err.response.data[0].message}`
          })
        })
    },
    async buscarNomeUsuario (val, update) {
      if (val === '') {
        update(() => {
          this.listarUsuarios()
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.listarUsuarios(needle)
      })
    }
  },
  computed: {
    ...mapState('Assunto', ['listaAssuntos']),
    ...mapState('Usuario', ['listaUsuario'])
  },
  mounted () {
    this.listarAssuntos()
    this.listarUsuarios()
  }
}
</script>
