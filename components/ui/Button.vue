<script lang="ts" setup>
interface Props {
  yellow?: boolean;
  icon?: boolean;
  circle?: boolean;
}

defineProps<Props>();

defineEmits<{
  (e: "click"): void;
}>();
</script>

<template>
  <button
    :class="{
      'custom-button--yellow': yellow,
      'custom-button--icon': icon,
      'custom-button--circle': circle,
    }"
    class="custom-button"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.custom-button {
  font-size: 16px;
  font-weight: 700;
  line-height: 140%;
  padding: 13px 24px;
  cursor: pointer;
  transition: background-color 0.3s;
  white-space: nowrap;
  border: none;
  border-radius: 4px;

  @include respond-to-max("sm") {
    padding: 10px 24px;
  }

  &--yellow {
    background-color: $primary;

    &:hover {
      background-color: $primary-hover;
    }
  }

  &--icon {
    background: transparent;
    padding: 0;
  }

  &--circle {
    border-radius: 50%;
  }
}
</style>
