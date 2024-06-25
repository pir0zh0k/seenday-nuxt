<script lang="ts" setup>
import AdvancedButton from "~/components/UI/advanced-button.vue";
import { useBodyScrollLock } from "radix-vue";

defineComponent({
  name: "Default mobile header",
});

const isLocked = useBodyScrollLock(false);
const isShow = ref<boolean>(false);
const mobileNav = ref<HTMLElement | null>(null);

onClickOutside(mobileNav, () => hideMenu());

function showMenu() {
  isShow.value = true;
  isLocked.value = true;
}

function hideMenu() {
  isShow.value = false;
  isLocked.value = false;
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__left">
          <button @click="showMenu" class="header__hamburger">
            <div class="hamburger__inner">
              <span class="hamburger__line"></span>
            </div>
          </button>
          <NuxtLink
            to="https://seenday.com/ru/for-photographers"
            class="header__logo"
          >
            <NuxtImg
              src="/images/layouts/default/logo.svg"
              alt="Seenday логотип"
            />
          </NuxtLink>
        </div>
        <div class="header__control">
          <advanced-button variant="gray">Войти</advanced-button>
          <advanced-button variant="primary" icon>
            <svg
              width="18"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z"
              />
            </svg>
          </advanced-button>
        </div>
      </div>
    </div>
    <div
      ref="mobileNav"
      class="mobile-nav"
      :class="{
        'is-show': isShow,
      }"
    >
      <button
        @click="hideMenu"
        class="header-mobile__close header-mobile-close"
      >
        <div class="header-mobile-close__inner">
          <div class="header-mobile-close__line"></div>
        </div>
      </button>
      <div class="mobile-nav__inner">
        <NuxtLink class="mobile-nav__link">Работа с Seenday</NuxtLink>
        <NuxtLink class="mobile-nav__link">Автоматизация</NuxtLink>
        <NuxtLink class="mobile-nav__link">Весь функционал</NuxtLink>
        <NuxtLink class="mobile-nav__link">Тарифы</NuxtLink>
        <NuxtLink class="mobile-nav__link">Контакты</NuxtLink>
        <div class="mobile-nav__btn">
          <advanced-button variant="primary" size="big" full-width>
            Подключить
          </advanced-button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
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
    max-width: 140px;

    img {
      width: 100%;
    }
  }

  &__hamburger {
    display: block;
    width: 35px;
    height: 24px;
    cursor: pointer;
    margin-right: 20px;
    aspect-ratio: 1/1;
  }

  .hamburger {
    &__inner {
      width: 100%;
      height: 100%;
      position: relative;
    }

    &__line {
      display: block;
      width: 100%;
      height: 4px;
      border-radius: 3px;
      background: $blue-violet;

      &::before,
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 4px;
        border-radius: 3px;
        background: $blue-violet;
        position: absolute;
      }

      &::before {
        top: 50%;
        transform: translateY(-50%);
      }

      &::after {
        top: 100%;
        transform: translateY(-100%);
      }
    }
  }

  &__left {
    display: flex;
    align-items: center;
  }

  &__control {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .mobile-nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 75%;
    height: 100vh;
    z-index: 500;
    background: $signal-black;
    color: #fff;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ($media-mobile) {
      width: 100%;
    }

    &.is-show {
      transform: translateX(0);
    }

    .header-mobile-close {
      position: absolute;
      width: 36px;
      height: 36px;
      top: 30px;
      right: 30px;
      cursor: pointer;
      aspect-ratio: 1/1;

      &__inner {
        width: 100%;
        height: 100%;
        position: relative;
      }

      &__line {
        &::before,
        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 5px;
          border-radius: 3px;
          position: absolute;
          background: $blue-violet;
        }

        &::before {
          transform: rotate(45deg);
        }

        &::after {
          transform: rotate(-45deg);
        }
      }
    }

    &__inner {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__link {
      font-size: 24px;
      font-weight: 500;
      line-height: 29.26px;
      text-align: center;
      cursor: pointer;
      margin-bottom: 44px;

      &:nth-child(5) {
        margin-bottom: 93px;
      }
    }

    &__btn {
      width: 100%;
    }
  }
}
</style>
