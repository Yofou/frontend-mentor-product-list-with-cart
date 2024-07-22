// @ts-ignore
import emitter from 'tiny-emitter/instance'

export type EventNames = 'itemDelete'

export default {
  $on: (name: EventNames, ...args: any[]) => emitter.on(name, ...args),
  $once: (name: EventNames, ...args: any[]) => emitter.once(name, ...args),
  $off: (name: EventNames, ...args: any[]) => emitter.off(name, ...args),
  $emit: (name: EventNames, ...args: any[]) => emitter.emit(name, ...args)
}
