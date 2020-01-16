<template>
  <header class="header container grid">
    <nav class="col-start-1 col-end-6 flex flex--align-center">
      <ul class="header__menu ">
        <li>
          <router-link to="/" class="header__title column-start-1 column-end-6">KANEL</router-link>
        </li>
        <li><router-link to="/week">Repas de la semaine</router-link></li>
        <li><router-link to="/synthesis">Recommandation</router-link></li>
      </ul>
    </nav>
    <button-action
      class="col-start-7 col-end-12 col-start-9-desktop col-end-12-desktop"
      type="action"
      @action="generation"
      >Générer une recommandation</button-action
    >
  </header>
</template>

<script>
import ButtonAction from '@/components/buttons/ButtonAction';

export default {
  name: 'BaseHeader',
  components: {
    ButtonAction
  },
  props: {
    generation: {
      type: Function
    }
  }
};
</script>
