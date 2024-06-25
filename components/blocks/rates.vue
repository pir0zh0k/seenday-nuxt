<script lang="ts" setup>
import AdvancedButton from "~/components/UI/advanced-button.vue";

defineComponent({
  name: "Rates",
});
</script>

<template>
  <section class="rates">
    <div class="container">
      <div class="rates__inner">
        <h2 class="rates__title">ТАРИФЫ ХРАНИЛИЩА ДИСКА</h2>
        <p class="rates__subtitle">
          В Хранилище диска ваши фотографии / исходники в безопасности
          используйте их в любое время на любом устройстве.
        </p>
        <TabsRoot default-value="year">
          <TabsList class="rates__controller">
            <TabsTrigger class="rates__trigger" value="month">
              На месяц
            </TabsTrigger>
            <TabsTrigger class="rates__trigger" value="year">
              На год
              <span>Выгодно</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="year" class="rates__tab-content tab-content">
            <div class="tab-content__card">
              <h3 class="tab-content__title">1 ТБ</h3>
              <ul class="tab-content__list">
                <li>Загружайте любые фотографии: .JPG, .PNG, .WEBP и др.</li>
                <li>Храните исходники фотографий: .DNG, .PSD и др.</li>
                <li>Доступ к файлам 24/7</li>
              </ul>
              <advanced-button full-width variant="outline">
                <h2 class="button__title">299 Р/мес</h2>
                <span class="button__subtitle">При оплате за год</span>
              </advanced-button>
              <p class="tab-content__card-signature">
                Экономия в год: 1200 руб.
              </p>
            </div>
            <div class="tab-content__card">
              <h3 class="tab-content__title">3 ТБ</h3>
              <ul class="tab-content__list">
                <li>Загружайте любые фотографии: .JPG, .PNG, .WEBP и др.</li>
                <li>Храните исходники фотографий: .DNG, .PSD и др.</li>
                <li>Доступ к файлам 24/7</li>
              </ul>
              <advanced-button full-width variant="outline">
                <h2 class="button__title">889 Р/мес</h2>
                <span class="button__subtitle"> При оплате за год </span>
              </advanced-button>
              <p class="tab-content__card-signature">
                Экономия в год: 3696 руб.
              </p>
            </div>

            <div class="tab-content__card">
              <h3 class="tab-content__title">8 ТБ</h3>
              <ul class="tab-content__list">
                <li>Загружайте любые фотографии: .JPG, .PNG, .WEBP и др.</li>
                <li>Храните исходники фотографий: .DNG, .PSD и др.</li>
                <li>Доступ к файлам 24/7</li>
              </ul>
              <advanced-button full-width variant="outline">
                <h2 class="button__title">2292 Р/мес</h2>
                <span class="button__subtitle"
                  >При оплате за год</span
                ></advanced-button
              >
              <p class="tab-content__card-signature">
                Экономия в год: 10800 руб.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="month" class="rates__tab-content tab-content">
            <div class="tab-content__card">
              <h3 class="tab-content__title">1 ТБ</h3>
              <ul class="tab-content__list">
                <li>Загружайте любые фотографии: .JPG, .PNG, .WEBP и др.</li>
                <li>Храните исходники фотографий: .DNG, .PSD и др.</li>
                <li>Доступ к файлам 24/7</li>
              </ul>
              <advanced-button full-width variant="outline">
                <h2 class="button__title">399 Р/мес</h2>
              </advanced-button>
            </div>
            <div class="tab-content__card">
              <h3 class="tab-content__title">3 ТБ</h3>
              <ul class="tab-content__list">
                <li>Загружайте любые фотографии: .JPG, .PNG, .WEBP и др.</li>
                <li>Храните исходники фотографий: .DNG, .PSD и др.</li>
                <li>Доступ к файлам 24/7</li>
              </ul>
              <advanced-button full-width variant="outline">
                <h2 class="button__title">1197 Р/мес</h2>
              </advanced-button>
            </div>
            <div class="tab-content__card">
              <h3 class="tab-content__title">8 ТБ</h3>
              <ul class="tab-content__list">
                <li>Загружайте любые фотографии: .JPG, .PNG, .WEBP и др.</li>
                <li>Храните исходники фотографий: .DNG, .PSD и др.</li>
                <li>Доступ к файлам 24/7</li>
              </ul>
              <advanced-button full-width variant="outline">
                <h2 class="button__title">3192 Р/мес</h2>
              </advanced-button>
            </div>
          </TabsContent>
        </TabsRoot>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.rates {
  padding: 80px 0;
  background-image: url("/images/blocks/rates/bg.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &__title {
    @include Title();
    color: #fff;
    text-align: center;
    margin-bottom: 30px;

    @media ($media-tablet) {
      @include Title-mob();
    }
  }

  &__subtitle {
    margin: 0 auto 60px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    line-height: 1.2;
    max-width: 600px;
  }

  &__controller {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
  }

  &__trigger {
    border: 2px solid #ffa500;
    padding: 14px 0;
    color: white;
    width: 184px;
    font-size: 20px;
    cursor: pointer;

    &:hover {
      background: #ffa500;

      span {
        color: #fff;
      }
    }

    &[data-state="active"] {
      background: #ffa500;

      span {
        color: #fff;
      }
    }

    &:nth-child(1) {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:nth-child(2) {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    span {
      color: #ffa500;
      font-size: 13px;
      margin-left: 3px;
    }
  }

  .tab-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 14px;
    color: #fff;

    @media ($media-tablet) {
      grid-template-columns: 1fr;
      row-gap: 20px;
    }

    &__card {
      background-image: radial-gradient(
        192.35% 126.8% at 34.18% 10.47%,
        rgba(114, 48, 135, 0.55) 0%,
        rgba(193, 95, 164, 0.55) 100%
      );
      padding: 37px 41px 40px;
      border-radius: 3px;
      width: 100%;
      height: 100%;

      &:nth-child(2) {
        position: relative;
        width: 100%;
        height: 100%;

        background: radial-gradient(
          156.07% 105.58% at 78.79% 105.58%,
          rgba(118, 95, 182, 0.67) 0%,
          rgba(165, 132, 225, 0.67) 99.04%
        );

        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 99%;
          height: 98.5%;
          border: 3px solid #ffa500;
          border-radius: 3px;
          pointer-events: none;

          @media ($media-tablet) {
            width: 99.5%;
          }
        }
      }
    }

    &__card-signature {
      margin-top: 15px;
      text-align: center;
      font-size: 16px;
      font-weight: 500;
    }

    &__title {
      font-size: 40px;
      margin-bottom: 16px;
      text-align: center;
    }

    &__list {
      margin-bottom: 40px;
      display: flex;
      flex-direction: column;

      li {
        display: inline-block;
        position: relative;
        padding-left: 30px;
        margin-bottom: 18px;

        &::before {
          content: "";
          position: absolute;
          display: block;
          background-image: url("/images/blocks/rates/time.svg");
          background-size: contain;
          background-repeat: no-repeat;
          width: 18px;
          height: 18px;
          left: 0;
          top: 2px;
        }
      }
    }

    .button {
      &__title {
        font-size: 18px;
        font-weight: 700;
        line-height: 1.2;
      }

      &__subtitle {
        font-size: 12px;
        font-weight: 600;
        line-height: 1.2;
      }
    }
  }
}
</style>
