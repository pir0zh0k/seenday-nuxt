<script lang="ts" setup>
import AdvancedButton from "~/components/UI/advanced-button.vue";

defineComponent({
  name: "Default header",
});
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <NuxtLink to="https://seenday.com/ru/for-photographers">
          <NuxtImg
            class="header__logo"
            src="/images/layouts/default/logo.svg"
            alt="Seenday логотип"
          />
        </NuxtLink>
        <nav class="header__nav nav">
          <NuxtLink class="nav__item">Для фотографов</NuxtLink>
          <NuxtLink class="nav__item">В школах</NuxtLink>
          <NuxtLink class="nav__item">В детских садах</NuxtLink>
          <NuxtLink class="nav__item">Контакты</NuxtLink>
        </nav>
        <div class="header__control header-control">
          <div class="header-control__item">
            <advanced-button variant="gray">Войти</advanced-button>
          </div>
          <div class="header-control__item">
            <advanced-button variant="primary">Создать аккаунт</advanced-button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background: white;
  padding: 20px 0;
  box-shadow: 0 4px 24px 0 #dbf6fd69;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 200;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    max-width: 264px;
    width: 13.75vw;
  }

  .nav {
    &__item {
      font-size: 15px;
      font-weight: 500;
      margin: 0 12px;
      cursor: pointer;
      color: $signal-black;
      transition: opacity 0.1s ease;

      &:hover {
        opacity: 0.6;
      }
    }
  }

  .header-control {
    display: flex;
    align-items: center;

    &__item {
      margin: 0 5px;
    }
  }
}
</style>
