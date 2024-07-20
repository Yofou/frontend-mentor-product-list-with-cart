<template>
  <button v-if="itemAmount === 0" class="p-150 bg-white border border-rose-400 flex gap-100 items-center hover:border-red group">
    <ShoppingCartPlus />
    <span class="text-preset-4 font-semibold text-rose-900 group-hover:text-red">Add to Cart</span>
  </button>
  <div v-else class="p-150 bg-red rounded-full text-preset-3 flex justify-between hover:bg-[#952c0b]">
    <button @click="itemAmount -= 1">
      <AddCartMinus />
    </button>
    <span class="text-preset-4 font-semibold text-white">{{ itemAmount }}</span>
    <button @click="itemAmount += 1">
      <AddCartPlus />
    </button>
  </div>
</template>

<script setup lang="ts">
import AddCartMinus from '../icons/AddCartMinus.vue';
import AddCartPlus from '../icons/AddCartPlus.vue';
import ShoppingCartPlus from '../icons/ShoppingCartPlus.vue';

///// props/emits /////

///// refs/provide-inject/variables /////
const itemAmount = defineModel('itemAmount', {
  default: 0,
  type: Number
})

///// computed /////

///// methods /////

///// watchers /////

///// lifecycle /////
</script>
