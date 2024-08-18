<script lang="ts" setup>
import { defineEmits, defineProps } from "vue";

defineProps<{
  modelValue: string;
  placeholder: string;
  type: "input" | "textarea";
  inputType?: string;
}>();

defineEmits(["update:modelValue"]);
</script>

<template>
  <component
    :is="type"
    :class="['input', { textarea: type === 'textarea' }]"
    :placeholder="placeholder"
    :type="inputType"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  ></component>
</template>

<style lang="scss" scoped>
.input {
  @include font-gothampro-medium;
  font-size: 16px;
  line-height: 140%;
  padding: 8px 12px;
  border-radius: 4px;

  &::placeholder {
    color: $text-placeholder;
  }
}

.textarea {
  height: 84px;
  resize: vertical;
}
</style>
