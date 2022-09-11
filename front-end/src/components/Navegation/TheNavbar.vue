<template>
  <nav
    class="navbar is-info mb-6"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <a
          class="navbar-item"
          target="_blank"
          href="https://github.com/BrCroner/portfolio"
        >
          <img class="logo" src="@/assets/croner-logo--white.svg" />
        </a>

        <a
          @click.prevent="showMobileNav = !showMobileNav"
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': showMobileNav }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileNav }"
      >
        <div class="navbar-start"></div>

        <div class="navbar-end">
          <RouterLink
            to="/"
            class="navbar-item is-uppercase"
            active-class="is-active"
          >
            Página Inicial
          </RouterLink>
          <RouterLink
            to="/formulario"
            class="navbar-item is-uppercase"
            active-class="is-active"
          >
            Formulário
          </RouterLink>
          <RouterLink
            to="/tabela-fipe"
            class="navbar-item is-uppercase"
            active-class="is-active"
          >
            FIPE
          </RouterLink>
          <RouterLink
            to="/sobre"
            class="navbar-item is-uppercase"
            active-class="is-active"
          >
            Sobre
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
// MOBILE NAV
const showMobileNav = ref(false)
</script>

<style scoped>
.logo {
  height: 50px;
}
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
