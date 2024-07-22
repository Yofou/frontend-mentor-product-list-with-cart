<template>
  <Teleport to="body">
  <div class="w-full h-screen overflow-y-auto fixed top-0 left-0 bg-black/50 sm:px-500 grid place-items-center items-end sm:items-center z-10">
    <div class="w-full lg:max-w-[592px] p-500 bg-white rounded-[12px] rounded-b-none sm:rounded-b-[12px] flex flex-col gap-400">
      <slot />
    </div>
  </div>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

///// props/emits /////
const props = defineProps();

///// refs/provide-inject/variables /////

///// computed /////

///// methods /////

///// watchers /////
onMounted(() => {
  document.body.style.overflowY = 'hidden'
})

onUnmounted(() => {
  document.body.style.overflowY = ''
})

///// lifecycle /////
</script>
