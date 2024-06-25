<script lang="ts" setup>
import AdvancedButton from "~/components/UI/advanced-button.vue";
import Factoid from "~/components/UI/factoid.vue";

defineComponent({
  name: "Head",
});
</script>

<template>
  <section class="head">
    <div class="container">
      <div class="head__inner">
        <h2 class="head__title">
          Сервис для продажи фотографий онлайн и&nbsp;работы с&nbsp;клиентами
        </h2>
        <div class="head__illustration">
          <NuxtImg
            src="/images/blocks/head/helper-main.png"
            alt="Seenday иллюстрация"
          />
        </div>
        <p class="head__description">
          <span>Seenday</span>&nbsp;&#8211; это готовое решение для
          автоматической продажи печатных или электронных фотографий
          и&nbsp;оптимизации работы с&nbsp;клиентами онлайн
        </p>
        <div class="head__control">
          <div class="head__button">
            <advanced-button size="big" variant="primary" full-width>
              Подключить
            </advanced-button>
          </div>
          <NuxtLink to="" class="head__question question">
            <NuxtImg
              class="question__icon"
              src="/images/blocks/head/chat-bubble.svg"
            />
            <span>Задать вопрос</span>
          </NuxtLink>
        </div>
        <div class="head__factoids factoids">
          <div class="factoids__item">
            <factoid
              digit="60000+"
              signature="заказов сделали<br/>пользователи"
            />
          </div>
          <div class="factoids__item">
            <factoid
              digit="50000+"
              signature="пользователей<br/>зарегистрировано"
            />
          </div>
          <div class="factoids__item">
            <factoid
              digit="БОЛЕЕ 10%"
              signature="повторных продаж<br/>фотографий"
            />
          </div>
          <div class="factoids__item">
            <factoid
              digit="1150+ руб"
              signature="средний чек в 2022 году<br/>с продажи фотографий"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.head {
  padding: 105px 0 175px;
  position: relative;
  background-image: url("/images/blocks/head/background-main.svg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  @media ($media-tablet) {
    background-position: center -100px;
  }

  @media ($media-mobile) {
    padding: 70px 0;
  }

  &__inner {
    position: relative;
    z-index: 3;
  }

  &__title {
    @include Title();
    max-width: 668px;
    margin-bottom: 5px;
    text-transform: uppercase;
    position: relative;
    z-index: 5;

    @media ($media-tablet) {
      margin-bottom: 4px;
      max-width: 67.339vw;
    }

    @media ($media-mobile) {
      @include Title-mob;
      width: 100%;
      max-width: 100%;
      margin-bottom: 23px;
    }
  }

  &__description {
    font-size: 1.146vw;
    font-weight: 500;
    line-height: 1.397vw;
    text-align: left;
    color: $signal-black;
    margin-bottom: 49px;
    max-width: 668px;
    position: relative;
    z-index: 5;

    @media ($media-desktop) {
      max-width: 536px;
    }

    @media ($media-tablet) {
      font-size: 1.714vw;
      font-weight: 500;
      line-height: 2.089vw;
      text-align: left;
      max-width: 54.032vw;
    }

    @media ($media-mobile) {
      font-size: 22px;
      font-weight: 500;
      line-height: 26.82px;
      text-align: center;
      width: 100%;
      max-width: 100%;
    }

    span {
      color: $blue-violet;
      font-weight: 700;
    }
  }

  &__control {
    position: relative;
    z-index: 5;
    display: flex;
    align-items: center;
    margin-bottom: 163px;

    @media ($media-tablet) {
      margin-bottom: 68px;
    }

    @media ($media-mobile) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  &__button {
    margin-right: 46px;
    max-width: 255px;

    @media ($media-mobile) {
      max-width: 335px;
      margin: 0 auto 27px;
    }
  }

  .question {
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 500;
    line-height: 18.29px;
    text-align: left;
    color: $signal-black;
    cursor: pointer;

    &__icon {
      width: 17px;
      margin-right: 11px;

      @media ($media-mobile) {
        width: 23px;
      }
    }

    @media ($media-mobile) {
      font-size: 19px;
      font-weight: 500;
      line-height: 23.16px;
      text-align: left;
    }
  }

  .factoids {
    display: flex;
    align-items: center;

    @media ($media-tablet) {
      flex-wrap: wrap;
    }

    @media ($media-mobile) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 10.381vw;
      grid-row-gap: 20px;
    }

    &__item {
      &:nth-child(2) {
        margin-left: 5.208vw;

        @media ($media-desktop-revert) {
          margin-left: 100px;
        }

        @media ($media-mobile) {
          margin: 0;
        }
      }

      &:nth-child(3) {
        margin-left: 3.646vw;

        @media ($media-desktop-revert) {
          margin-left: 70px;
        }

        @media ($media-mobile) {
          margin: 0;
        }
      }

      &:nth-child(4) {
        margin-left: 4.167vw;

        @media ($media-desktop-revert) {
          margin-left: 80px;
        }

        @media (max-width: 664px) {
          margin-left: 0;
          margin-top: 20px;
        }

        @media ($media-mobile) {
          margin: 0;
        }
      }
    }
  }

  &__illustration {
    position: absolute;
    z-index: 0;
    right: 0;
    top: -55px;
    width: 40.625vw;
    max-width: 780px;

    @media ($media-tablet) {
      right: 10px;
      max-width: 478px;
      width: 48.185vw;
    }

    @media ($media-mobile) {
      position: static;
      width: 100%;
      max-width: 100%;
      margin-bottom: 11px;
    }

    &::before {
      content: "";
      display: block;
      position: absolute;
      background-image: url("/images/blocks/head/helper-ellipse.svg");
      background-repeat: no-repeat;
      background-size: contain;
      top: 23%;
      left: -13%;
      max-width: 1150px;
      max-height: 565px;
      width: 59.896vw;
      height: 29.427vw;

      @media ($media-tablet) {
        width: 60.484vw;
        height: 60.484vw;
        max-width: 600px;
        max-height: 600px;
      }

      @media ($media-mobile) {
        display: none;
      }
    }

    img {
      width: 100%;
      object-fit: cover;
      object-position: center;
      position: relative;
    }
  }
}
</style>
