<template>
  <nav>
    <ul>
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
