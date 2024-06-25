<script lang="ts" setup>
interface Props {
  href?: string;
  variant?: "primary" | "gray" | "outline" | "sun";
  size?: "normal" | "big";
  fullWidth?: boolean;
  icon?: boolean;
}

defineComponent({
  name: "Advanced button",
});

withDefaults(defineProps<Props>(), {});
</script>

<template>
  <a
    :href="href"
    class="button"
    :class="{
      button__primary: variant === 'primary',
      button__gray: variant === 'gray',
      button__outline: variant === 'outline',
      button__sun: variant === 'sun',
      'button__full-width': fullWidth,
      button__big: size === 'big',
      button__icon: icon === true,
    }"
  >
    <slot />
  </a>
</template>

<style lang="scss">
.button {
  @include AdvancedButton();

  &__primary {
    @include PrimaryButton();
  }

  &__gray {
    @include GrayButton();
  }

  &__big {
    @include BigButton();
  }

  &__sun {
    @include SunButton();
  }

  &__full-width {
    max-width: 100%;
    width: 100%;
  }

  &__icon {
    @include IconButton();
  }

  &__outline {
    @include OutlineButton();
  }
}
</style>
