<script lang="ts" setup>
interface Props {
  digit?: string;
  signature?: string;
}

defineComponent({
  name: "factoid",
});

defineProps<Props>();
</script>

<template>
  <div class="factoid">
    <h3 class="factoid__digit" v-text="digit"></h3>
    <p class="factoid__signature" v-html="signature"></p>
  </div>
</template>

<style lang="scss">
.factoid {
  @media ($media-mobile) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__digit {
    font-size: 27px;
    font-weight: 700;
    line-height: 32.91px;
    text-align: left;
    color: $blue-violet;

    @media ($media-mobile) {
      font-size: 5.19vw;
      font-weight: 700;
      line-height: 6.327vw;
      text-align: left;
    }
  }

  &__signature {
    font-size: 13px;
    font-weight: 500;
    line-height: 15px;
    text-align: left;
    color: $tarp-gray;

    @media ($media-mobile) {
      font-size: 3.806vw;
      font-weight: 500;
      line-height: 3.633vw;
      text-align: center;
    }
  }
}
</style>
