<script setup lang="ts">
import Header from "~/components/layouts/header.vue";
import Footer from "~/components/layouts/footer.vue";
import HeaderMob from "~/components/layouts/header-mob.vue";
</script>

<template>
  <Header class="desktop" />
  <HeaderMob class="mobile" />
  <main>
    <slot />
  </main>
  <Footer />
</template>

<style lang="scss">
.desktop {
  display: block;

  @media ($media-tablet) {
    display: none;
  }
}

.mobile {
  display: none;

  @media ($media-tablet) {
    display: block;
  }
}
</style>
