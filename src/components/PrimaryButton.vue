<template>
  <button class="px-300 py-200 bg-red rounded-full text-preset-3 text-white hover:bg-[#952c0b]" @click="emits('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
///// props/emits /////
const emits = defineEmits(['click'])

///// refs/provide-inject/variables /////

///// computed /////

///// methods /////

///// watchers /////

///// lifecycle /////
</script>
