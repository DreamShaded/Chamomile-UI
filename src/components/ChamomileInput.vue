<template>
  <label class="input__label">
    <input
      :type="type"
      :disabled="isDisabled"
      :name="name"
    >
  </label>
</template>

<script setup lang="ts">
import { IInput } from "@/types/inputs";

defineProps<IInput>()
</script>
