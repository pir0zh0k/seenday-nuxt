<script lang="ts" setup>
import AdvancedButton from "~/components/UI/advanced-button.vue";

defineComponent({
  name: "Default footer",
});
</script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__top">
        <div class="container">
          <div class="top__inner">
            <div class="footer__partner-card partners">
              <div class="partners__illustration">
                <NuxtImg
                  src="/images/blocks/footer/footer-coins.png"
                  alt="Seenday монеты"
                />
              </div>
              <h3 class="partners__title">Станьте партнером Seenday</h3>
              <p class="partners__subtitle">
                Обеспечьте себе дополнительный доход
              </p>
            </div>
            <div class="footer__photographer photographer">
              <div class="photographer__illustration">
                <NuxtImg
                  src="/images/blocks/footer/robot.png"
                  alt="Seenday робот"
                />
              </div>
              <div class="photographer__inner">
                <div class="photographer__content">
                  <h2 class="photographer__title">Вы - фотограф?</h2>
                  <p class="photographer__subtitle">
                    Подключайтесь к Seenday и автоматизируйте свою работу
                  </p>
                </div>
                <div class="photographer__button">
                  <advanced-button variant="sun" full-width>
                    Подключиться
                  </advanced-button>
                </div>
              </div>
            </div>
            <div class="phooter__reqs reqs">
              <div class="reqs__illustration">
                <NuxtImg
                  src="/images/blocks/footer/email.png"
                  alt="Seenday реквизиты"
                />
              </div>
              <h3 class="reqs__title">Реквизиты</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__middle">
        <div class="container">
          <div class="footer-middle__inner">
            <div class="footer__payments payments">
              <h3 class="payments__title">Способы оплаты:</h3>
              <div class="payments__list payments-list">
                <div class="payments-list__item">
                  <NuxtImg
                    class="payments-list__img_hover"
                    src="https://seenday.com/marbery/projects/seenday/images/footer/tinkoff-black-hover.svg"
                    alt=""
                  />
                  <NuxtImg
                    class="payments-list__img"
                    src="https://seenday.com/marbery/projects/seenday/images/footer/tinkoff-black.svg"
                    alt=""
                  />
                </div>
                <div class="payments-list__item">
                  <NuxtImg
                    class="payments-list__img_hover"
                    src="https://seenday.com/marbery/projects/seenday/images/footer/sbp-hover.svg"
                    alt=""
                  />
                  <NuxtImg
                    class="payments-list__img"
                    src="https://seenday.com/marbery/projects/seenday/images/footer/sbp.svg"
                    alt=""
                  />
                </div>
                <div class="payments-list__item">
                  <NuxtImg
                    class="payments-list__img_hover"
                    src="https://seenday.com/marbery/projects/seenday/images/footer/visa-hover.svg"
                    alt=""
                  />
                  <NuxtImg
                    class="payments-list__img"
                    src="https://seenday.com/marbery/projects/seenday/images/footer/visa.svg"
                    alt=""
                  />
                </div>
                <div class="payments-list__item">
                  <NuxtImg
                    class="payments-list__img_hover"
                    src="https://seenday.com/marbery/projects/seenday/images/footer/mastercard-hover.svg"
                    alt=""
                  />
                  <NuxtImg
                    class="payments-list__img"
                    src="https://seenday.com/marbery/projects/seenday/images/footer/mastercard.svg"
                    alt=""
                  />
                </div>
                <div class="payments-list__item">
                  <NuxtImg
                    class="payments-list__img_hover"
                    src="https://seenday.com/marbery/projects/seenday/images/footer/mir-hover.svg"
                    alt=""
                  />
                  <NuxtImg
                    class="payments-list__img"
                    src="https://seenday.com/marbery/projects/seenday/images/footer/mir.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="footer__socials socials">
              <h3 class="socials__title">Мы в социальных сетях:</h3>
              <div class="socials__list socials-list">
                <div class="socials-list__item">
                  <NuxtImg
                    class="socials-list__img"
                    src="https://seenday.com/marbery/projects/seenday/images/footer/tg.svg"
                  />
                </div>
                <div class="socials-list__item">
                  <NuxtImg
                    class="socials-list__img"
                    src="https://seenday.com/marbery/projects/seenday/images/footer/vk.svg"
                  />
                </div>
              </div>
            </div>
            <div class="footer__lang lang">
              <div class="lang__inner">
                <h3 class="lang__title">Сменить язык:</h3>
                <div class="lang__wrap">
                  <div class="lang__illustration">
                    <NuxtImg
                      src="https://seenday.com/marbery/projects/seenday/images/footer/ru.svg"
                    />
                  </div>
                  <span>Rus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="container">
          <div class="bottom__inner">
            <div class="for-photographers">
              <h3 class="bottom-title">Для фотографов</h3>
            </div>
            <div class="pay-photos">
              <h3 class="bottom-title pay-photos__title">Продажа фотографий</h3>
              <a href="" class="pay-photos__link">В школах</a
              ><a href="" class="pay-photos__link">В детских садах</a>
            </div>
            <div class="contacts">
              <div class="contacts__left">
                <h3 class="bottom-title contacts__title">Контакты</h3>
              </div>
              <div class="contacts__right">
                <NuxtImg
                  src="https://seenday.com/marbery/projects/seenday/images/footer/logo-white.svg"
                  width="200"
                />
                <a
                  class="contacts__link"
                  href="https://www1.fips.ru/registers-doc-view/fips_servlet?DB=RUTM&DocNumber=865111"
                >
                  <span>
                    ® Товарный знак №
                    <span class="text__underline">865111</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__rules rules">
        <div class="container">
          <div class="rules__inner">
            <div class="rules__item">
              <span>&copy; Seenday, 2021-2024</span>
            </div>
            <div class="rules__item">
              <a href="">Пользовательское соглашение</a>
            </div>
            <div class="rules__item">
              <a href=""> Политика конфиденциальности</a>
            </div>
            <div class="rules__item">
              <a href=""> Cookie</a>
            </div>
            <div class="rules__item">
              <span>Проект компании Marbery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: $signal-black;
  color: #fff;

  &__top {
    padding: 66px 0 40px;
    border-bottom: 1px solid #553d67;
  }

  &__middle {
    padding: 16px 0 24px;
    border-bottom: 1px solid #553d67;
    color: #beaccb;

    .footer-middle {
      &__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
      }
    }

    .payments {
      margin-bottom: 10px;
      &__title {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 5px;
      }

      .payments-list {
        display: flex;
        align-items: center;
        gap: 5px;
        flex-wrap: wrap;

        &__item {
          cursor: pointer;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          background: #553d67;
          border-radius: 5px;

          &:hover {
            .payments-list__img {
              display: none;

              &_hover {
                display: block;
              }
            }
          }
        }

        &__img {
          min-height: 15px;
          &_hover {
            min-height: 15px;
            display: none;
          }
        }
      }
    }

    .socials {
      margin-bottom: 10px;
      &__title {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 5px;
      }

      .socials-list {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 10px;

        &__item {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          padding: 10px;
          border-radius: 5px;
          background: #553d67;

          &:hover {
            .socials-list__img {
              filter: invert(100%) sepia(53%) saturate(1167%) hue-rotate(262deg)
                brightness(121%) contrast(109%);
            }
          }
        }
        &__img {
          min-height: 15px;
        }
      }
    }

    .lang {
      margin-bottom: 10px;
      &__title {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 5px;
      }

      &__wrap {
        display: flex;
        align-items: center;
        gap: 5px;
      }

      &__illustration {
        width: 35px;
        height: auto;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #b09ebc;
        border-radius: 8px;
        cursor: pointer;

        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }

  &__bottom {
    padding: 40px 0;
    border-bottom: 1px solid #553d67;
  }

  &__rules {
    padding: 8px 0 11px;
  }

  .top {
    &__inner {
      display: grid;
      grid-template-columns: 1fr 4fr;
      grid-template-rows: repeat(2, auto);
      grid-gap: 27px 19px;

      @media ($media-tablet) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
      }
    }
  }

  .bottom {
    &__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .bottom-title {
    font-size: 15px;
    line-height: 18px;
  }

  .pay-photos {
    display: flex;
    flex-direction: column;

    &__link {
      font-size: 16px;
      font-weight: 500;
      margin-top: 10px;
      color: #beaccb;
    }
  }

  .partners {
    padding: 26px 18px 36px 114px;
    width: 100%;
    height: 100%;
    background: #543c66;
    position: relative;
    z-index: 3;
    border-radius: 13px;
    cursor: pointer;

    &:hover {
      .partners__illustration {
        overflow: inherit;
      }

      &::before {
        opacity: 0.5;
      }
    }

    &::before {
      content: "";
      position: absolute;
      border-radius: 13px;
      display: block;
      width: 100%;
      height: 100%;
      box-shadow: 0 0 7px 5px #ffa401;
      top: 0;
      left: 0;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &__illustration {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      overflow: hidden;

      img {
        width: auto;
        height: 130%;
        margin-top: -20px;
        margin-left: -10px;
      }
    }

    &__title {
      font-size: 14px;
      font-weight: 600;
      color: #ffa500;
      margin-bottom: 6px;
    }

    &__subtitle {
      font-size: 13px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: -0.02em;
    }
  }

  .photographer {
    width: 100%;
    height: 100%;
    background-image: url("/images/blocks/footer/banner-photographer-bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 13px;
    position: relative;
    z-index: 3;
    cursor: pointer;
    min-height: 154px;

    @media ($media-tablet) {
      grid-row: 1;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }

    &:hover {
      &::before {
        opacity: 0.5;
      }
    }

    &::before {
      content: "";
      position: absolute;
      border-radius: 13px;
      display: block;
      width: 100%;
      height: 100%;
      box-shadow: 0 0 7px 5px #ffa401;
      top: 0;
      left: 0;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &__inner {
      width: 100%;
      height: 100%;
      padding: 20px 90px 20px 336px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      z-index: 3;

      @media ($media-tablet) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 20px 0 0 0;
        margin-bottom: 20px;
      }
    }

    &__button {
      max-width: 240px;
      width: 240px;
      pointer-events: all;
      transition: box-shadow 0.3s ease;

      &:hover {
        box-shadow: 11px 16px 30px rgba(202, 154, 119, 0.37);
      }
    }

    &__title {
      font-size: 25px;
      line-height: 30px;
      margin-bottom: 5px;
    }

    &__subtitle {
      font-size: 20px;
      max-width: 336px;

      @media ($media-tablet) {
        margin-bottom: 20px;
      }
    }

    &__illustration {
      position: absolute;
      bottom: 30px;
      height: 100%;

      @media ($media-tablet) {
        position: static;
        max-width: 320px;
      }

      img {
        height: 130%;
        width: auto;

        @media ($media-tablet) {
          width: 100%;
          height: auto;
          margin-bottom: -22px;
        }
      }
    }
  }

  .contacts {
    display: flex;
    align-items: center;

    &__title {
      margin-right: 120px;
    }

    &__right {
      display: flex;
      flex-direction: column;

      img {
        margin-bottom: 20px;
      }

      .text__underline {
        text-decoration: underline;
      }
    }

    &__link {
      font-size: 13px;
      line-height: 16px;
      color: #b09ebc;
    }
  }

  .reqs {
    width: 100%;
    height: 100%;
    background-color: #543c66;
    position: relative;
    padding: 16px 10px 18px 130px;
    z-index: 3;
    border-radius: 13px;
    cursor: pointer;

    &:hover {
      .reqs__illustration {
        overflow: visible;
      }

      &::before {
        opacity: 0.5;
      }
    }

    &::before {
      content: "";
      position: absolute;
      border-radius: 13px;
      display: block;
      width: 100%;
      height: 100%;
      box-shadow: 0 0 7px 5px #ffa401;
      top: 0;
      left: 0;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &__illustration {
      position: absolute;
      left: 20px;
      top: 0;
      overflow: hidden;
      height: 100%;

      img {
        margin-top: -15px;
        height: 150%;
        width: auto;
      }
    }

    &__title {
      font-size: 14px;
      font-weight: 500;
      line-height: 17px;
    }
  }

  .rules {
    &__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__item {
      font-size: 14px;
      color: #b09ebc;
    }
  }
}
</style>
