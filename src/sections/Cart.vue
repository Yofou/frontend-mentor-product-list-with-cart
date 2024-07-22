<template>
  <aside class="flex flex-col gap-300 bg-white rounded-[12px] self-start p-300">
    <h2 class="text-preset-2 text-red font-bold">Your Cart ({{ cart.size }})</h2>
    <div v-if="cart.size === 0" class="flex flex-col items-center gap-200">
      <img class="w-[128px]" src="/illustration-empty-cart.svg" alt="">
      <p class="text-preset-4 text-rose-400 font-semibold">Your added items will appear here</p>
    </div>
    <template v-else>
      <div class="flex flex-col gap-200">
        <div class="flex justify-between pb-200 border-b border-rose-100" v-for="item of cart.values()">
          <div class="flex-col gap-100">
            <p class="text-preset-4 font-semibold text-rose-900">{{ item.name }}</p>
            <dl class="flex gap-100 text-preset-4">
              <dt class="sr-only">Amount</dt>
              <dd class="text-red font-semibold">{{ item.amount }}x</dd>
              <dt class="sr-only">Price per item</dt>
              <dd class="text-rose-500">@ {{ formatter.format(item.price) }}</dd>
              <dt class="sr-only">Price Total</dt>
              <dd class="font-semibold text-rose-500">{{ formatter.format(item.price * item.amount) }}</dd>
            </dl>
          </div>
          <button @click="onDeleteItem(item)">
            <CartDelete />
          </button>
        </div>
      </div>

      <div class="flex justify-between items-center">
        <p class="text-preset-4 text-rose-900">Order total</p>
        <p class="text-preset-2 font-bold text-rose-900">{{ formatter.format(orderTotal) }}</p>
      </div>
    
      <p class="w-full p-200 rounded-[8px] bg-rose-50 text-preset-4 text-rose-900 flex items-center justify-center gap-100">
        <img src="/icon-carbon-neutral.svg" alt="">
        <span>
          This is a <span class="font-semibold">carbon-neutreal</span> delivery
        </span>
      </p>

      <PrimaryButton @click="showModal = true">Confirm Order</PrimaryButton>
    </template>
  </aside>

  <Modal v-if="showModal">
    <div>
      <img src="/icon-order-confirmed.svg" alt="" />
      <h2 class="text-preset-1 text-rose-900 font-bold mt-300">Order Confirmed</h2>
      <p class="text-rose-500 text-preset-3 mt-100">We hope you enjoy your food!</p>
    </div>

    <div class="w-full p-300 bg-rose-50 rounded-[8px] flex flex-col gap-300">
      <div class="flex flex-col gap-200">
        <div v-for="(item, i) of cart.values()" class="flex justify-between items-center " :class="{ 'border-b pb-200 border-rose-100': cart.size - 1 !== i }">
          <div class="flex gap-200 items-center">
            <img class="w-[48px] h-[48px]" :src="item.image.thumbnail" alt="">
            <div class="flex flex-col">
              <h3 class="text-rose-900 text-preset-4 font-semibold">{{ item.name }}</h3>
              <div class="flex gap-100">
                <p class="text-red text-preset-4 font-semibold">{{ item.amount }}x</p>
                <p class="text-rose-500 text-preset-4">@ {{ formatter.format(item.price) }}</p>
              </div>
            </div>
          </div>
          <p class="text-preset-3 font-semibold text-rose-900">{{ formatter.format(item.price * item.amount) }}</p>
        </div>
      </div>
      
      <div class="pt-300 border-t border-rose-100 flex justify-between">
        <p class="text-preset-4 text-rose-900">Order total</p>
        <p class="text-preset-2 font-bold text-rose-900">{{ formatter.format(orderTotal) }}</p>
      </div>
    </div>

    <PrimaryButton @click="clearCart">Start New Order</PrimaryButton>
  </Modal>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import CartDelete from '../icons/CartDelete.vue';
import { cart, type CartItem } from '../state'
import { formatter } from '../utils';
import eventBus from '../utils/eventBus';
import PrimaryButton from '../components/PrimaryButton.vue';
import Modal from '../components/Modal.vue';

///// props/emits /////
const props = defineProps<{}>();

///// refs/provide-inject/variables /////
const showModal = ref(false)

///// computed /////
const orderTotal = computed(() => {
  return [
    ...cart.value.values()
  ].reduce(
    (result, item) => result + (item.price * item.amount),
    0
  )
})

///// methods /////
const onDeleteItem = (item: CartItem) => {
  eventBus.$emit('itemDelete', item)
}

const clearCart = () => {
  cart.value.forEach((item) => {
    eventBus.$emit('itemDelete', item)
  })
  showModal.value = false;
}

///// watchers /////

///// lifecycle /////
</script>
