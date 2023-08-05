<template>
  <label class="input__label">
    <ValidationProvider v-slot="v">
      <input
        :type="type"
        :disabled="isDisabled"
        :name="name"
      >
      <span>{{ v.errors[0] }}</span>
    </ValidationProvider>
  </label>
</template>

<script setup lang="ts">

</script>
