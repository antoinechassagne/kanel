<template>
  <nav class="header container">
    <span class="header__title">KANEL</span>
    <ul class="header__menu">
      <li><router-link to="/">Accueil</router-link></li>
      <li><router-link to="/week">Menu de la semaine</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'BaseHeader'
};
</script>
