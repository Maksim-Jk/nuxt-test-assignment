<!-- FormInput.vue -->
<template>
  <component
    :is="type"
    v-model="modelValue"
    :placeholder="placeholder"
    :type="inputType"
    :class="['input', { textarea: type === 'textarea' }]"
  ></component>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref, watch } from "vue";

const props = defineProps<{
  modelValue: string;
  placeholder: string;
  type: "input" | "textarea";
  inputType?: string;
}>();

const emits = defineEmits(["update:modelValue"]);

const modelValue = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    modelValue.value = newValue;
  },
);

watch(modelValue, (newValue) => {
  emits("update:modelValue", newValue);
});
</script>

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
