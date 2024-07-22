<template>
  <main>
    <h2 class="text-preset-1 font-bold text-rose-900">Desserts</h2>

    <section class="grid grid-cols-1 sm:grid-cols-3 gap-x-300 gap-y-400 mt-400">
      <GallaryItem v-for="item of Desserts" :item />
    </section>
  </main>
</template>

<script setup lang="ts">
import GallaryItem from '../components/GallaryItem.vue';
import Desserts from '../data.json'

///// props/emits /////
const props = defineProps<{}>();

///// refs/provide-inject/variables /////

///// computed /////

///// methods /////

///// watchers /////

///// lifecycle /////
</script>
