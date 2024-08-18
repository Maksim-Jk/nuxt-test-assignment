<template>
  <button
      :class="{ 'custom-button--yellow': yellow }"
      class="custom-button"
      @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
interface Props {
  yellow?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  yellow: false
})

defineEmits<{
  (e: 'click'): void
}>()
</script>

<style lang="scss" scoped>
.custom-button {
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  border: none;
  border-radius: 4px;


  &--yellow {
    background-color: $primary;

    &:hover {
      background-color: $primary-hover;
    }
  }

}
</style>