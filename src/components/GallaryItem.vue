<template>
  <div class="flex flex-col gap-[38px]">
    <div class="relative">
      <img class="rounded-[8px]" :class="{ 'border-2 border-red': itemAmount > 0 }" :src="item.image.desktop" alt="">
      <AddToCart v-model:itemAmount="itemAmount" class="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
    <dl class="flex flex-col gap-50">
      <dt class="sr-only">Category</dt>
      <dd class="text-preset-4 text-rose-500">{{ item.category }}</dd>
      <dt class="sr-only">Name</dt>
      <dd class="text-preset-3 text-rose-900 font-semibold">{{ item.name }}</dd>
      <dt class="sr-only">Price</dt>
      <dd class="text-preset-3 text-red font-semibold">{{ formatter.format(item.price) }}</dd>
    </dl>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import type Desserts from '../data.json'
import AddToCart from './AddToCart.vue';
import { cart, type CartItem } from '../state';
import { formatter } from '../utils';
import { useEvent } from '../hooks/useEvent';

///// props/emits /////
const props = defineProps<{
  item: typeof Desserts[number]
}>();

///// refs/provide-inject/variables /////
const id = ref<string>()
const itemAmount = ref(0)

///// computed /////

///// methods /////

///// watchers /////
onMounted(() => {
  id.value = crypto.randomUUID()
})

watch(itemAmount, ($itemAmount) => {
  if (!id.value) return;

  if ($itemAmount > 0) {
    cart.value.set(id.value, {
      ...props.item,
      id: id.value,
      amount: itemAmount.value
    })
  } else if ($itemAmount === 0) {
    cart.value.delete(id.value)
  }
})

useEvent('itemDelete', (item: CartItem) => {
  if (item.id === id.value) {
    itemAmount.value = 0;
  }
})
///// lifecycle /////
</script>
