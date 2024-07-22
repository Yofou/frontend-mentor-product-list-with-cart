import { ref } from "vue";
import type Desserts from '../data.json'

export type CartItem = typeof Desserts[number] & { id: string, amount: number }

export const cart = ref(
  new Map<string, CartItem>()
)
