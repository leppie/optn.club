<script setup lang="ts">
import InputControl from './InputControl.vue';

withDefaults(defineProps<{
  modelValue: string | number;
  label: string;
  errorMsg?: string;
  error?: boolean;
  required?: boolean;
  step?: number | string;
  min?: number | string;
  max?: number | string;
  disabled?: boolean;
}>(), {
  step: 1,
  min: 0,
  max: 9999,
  errorMsg: '',
});

const emit = defineEmits<{
  (e: 'update:modelValue', v: string | number): void,
}>();

function onUpdate(value: string | number) {
  emit('update:modelValue', value);
}
</script>

<template>
  <InputControl
    :modelValue="modelValue"
    :label="label"
    :step="step"
    :min="min"
    :max="max"
    :disabled="disabled"
    type="number"
    @update:modelValue="onUpdate"
  >
    <slot />
  </InputControl>
</template>
