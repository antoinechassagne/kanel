<template>
  <header class="header container">
    <span class="header__title">KANEL</span>
    <nav>
      <ul class="header__menu">
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/week">Menu de la semaine</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'BaseHeader'
};
</script>
