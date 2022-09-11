<script>
import TheNavbar from '@/components/Navegation/TheNavbar.vue'

export default {
  name: 'App',
  components: {
    TheNavbar,
  },
}
</script>

<template>
  <div>
    <TheNavbar />
    <router-view />
  </div>
</template>

<style>
@import '~bulma/css/bulma.css';

body {
  background-color: hsl(0, 0%, 96%);
}
</style>
