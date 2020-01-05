<template>
  <header class="header container">
    <nav>
      <ul class="header__menu">
        <li><router-link to="/" class="header__title">KANEL</router-link></li>
        <li><router-link to="/week">Repas de la semaine</router-link></li>
        <li><router-link to="/synthesis">Recommandation</router-link></li>
      </ul>
    </nav>
    <button-action type="action" @action="generation">Générer une recommandation</button-action>
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
