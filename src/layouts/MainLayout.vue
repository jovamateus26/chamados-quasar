<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          TI
        </q-toolbar-title>

        <div>Tibagi</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Inicio',
    caption: 'Pagina inicial',
    icon: 'home',
    link: '/inicio'
  },
  {
    title: 'Chamados',
    caption: 'Gerenciar chamados',
    icon: 'grading',
    link: '/chamado'
  },
  {
    title: 'Assuntos',
    caption: 'Adicionar, editar e excluir',
    icon: 'menu_book',
    link: '/assunto'
  },
  {
    title: 'Departamentos',
    caption: 'Adicionar, editar e excluir',
    icon: 'domain',
    link: '/departamento'
  },
  {
    title: 'Secretarias',
    caption: 'Adicionar, editar e excluir',
    icon: 'construction',
    link: '/secretaria'
  },
  {
    title: 'Usuarios',
    caption: 'Adicionar, editar e excluir',
    icon: 'face',
    link: '/usuario'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
