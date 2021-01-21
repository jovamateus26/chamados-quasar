<template>
  <div>
    <q-item
      clickable
      tag="a"
      to="/inicio"
      exact-active-class="IS-ACTIVATED"
    >
      <q-item-section avatar>
        <q-icon name="home"/>
      </q-item-section>

      <q-item-section>
        <q-item-label>Inicio</q-item-label>
      </q-item-section>
    </q-item>
    <q-item
      clickable
      tag="a"
      to="/chamado"
      exact-active-class="IS-ACTIVATED"
    >
      <q-item-section avatar>
        <q-icon name="grading"/>
      </q-item-section>

      <q-item-section>
        <q-item-label>Chamados</q-item-label>
      </q-item-section>
    </q-item>
    <q-expansion-item
      expand-separator
      icon="settings"
      label="Configurações"
      caption="Configurações do sistema"
    >
      <q-item
        :inset-level="1"
        clickable
        tag="a"
        to="/assunto"
        exact-active-class="IS-ACTIVATED"
      >
        <q-item-section avatar>
          <q-icon name="menu_book"/>
        </q-item-section>

        <q-item-section>
          <q-item-label>Assunto</q-item-label>
        </q-item-section>
      </q-item>
      <q-item
        :inset-level="1"
        clickable
        tag="a"
        to="/departamento"
        exact-active-class="IS-ACTIVATED"
      >
        <q-item-section avatar>
          <q-icon name="domain"/>
        </q-item-section>

        <q-item-section>
          <q-item-label>Departamentos</q-item-label>
        </q-item-section>
      </q-item>
      <q-item
        :inset-level="1"
        clickable
        tag="a"
        to="/secretaria"
        exact-active-class="IS-ACTIVATED"
      >
        <q-item-section avatar>
          <q-icon name="construction"/>
        </q-item-section>

        <q-item-section>
          <q-item-label>Secretarias</q-item-label>
        </q-item-section>
      </q-item>
      <q-item
        :inset-level="1"
        clickable
        tag="a"
        to="/usuario"
        exact-active-class="IS-ACTIVATED"
      >
        <q-item-section avatar>
          <q-icon name="face"/>
        </q-item-section>

        <q-item-section>
          <q-item-label>Usuários</q-item-label>
        </q-item-section>
      </q-item>
    </q-expansion-item>
    <q-item
      clickable
      tag="a"
      to="/sair"
      exact-active-class="IS-ACTIVATED"
    >
      <q-item-section avatar>
        <q-icon name="report"/>
      </q-item-section>

      <q-item-section>
        <q-item-label>Relatorios</q-item-label>
      </q-item-section>
    </q-item>
    <q-item
      clickable
      tag="a"
      to="/sair"
      exact-active-class="IS-ACTIVATED"
    >
      <q-item-section avatar>
        <q-icon name="logout"/>
      </q-item-section>

      <q-item-section>
        <q-item-label>Sair</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  name: 'EssentialLink'
}
</script>
