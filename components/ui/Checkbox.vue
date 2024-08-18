<script lang="ts" setup>
defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const handleChange = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).checked);
};
</script>

<template>
  <label class="custom-checkbox">
    <input
      :checked="modelValue"
      type="checkbox"
      tabindex="0"
      @change="handleChange"
    />
    <span class="checkmark">
      <SvgoCheckmark class="checkmark__icon" />
    </span>
    <span class="label-text">
      <slot />
    </span>
  </label>
</template>

<style lang="scss" scoped>
.custom-checkbox {
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 32px;
  cursor: pointer;
  user-select: none;

  input {
    position: absolute;
    width: 0;
    height: 0;
    cursor: pointer;
    opacity: 0;
  }

  .checkmark {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 18px;
    height: 18px;
    transition: all 0.3s ease;
    border: 1px solid $text-fourth;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    &__icon {
      display: none;
      width: 14px;
      height: 14px;
    }
  }

  &:hover input ~ .checkmark {
    background-color: $card-background;
  }

  input:checked ~ .checkmark {
    border: none;
    background-color: $primary;

    .checkmark__icon {
      display: block;
    }
  }

  .label-text {
    font-size: 12px;
    line-height: 140%;
  }
}
</style>
