<template>
  <Datepicker
    v-model="picked"
    :locale="ru"
    :weekStartsOn="1"
    :disabledDates="disabledDates"
    :startingView="startingView"
  />
</template>

<script setup lang="ts">
import { IDatepicker } from "@/types/inputs";
import Datepicker from 'vue3-datepicker'
import { ref } from 'vue'
import { ru } from 'date-fns/locale'

const picked = ref(new Date())
const props = defineProps<IDatepicker>()
</script>
