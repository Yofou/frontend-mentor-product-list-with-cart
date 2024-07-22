import { onMounted, onUnmounted } from "vue"
import eventBus, { type EventNames } from "../utils/eventBus"

export const useEvent = (name: EventNames, cb: (...args: any[]) => void) => {
  onMounted(() => {
    eventBus.$on(name, cb)
  })

  onUnmounted(() => {
    eventBus.$off(name, cb)
  })
}
