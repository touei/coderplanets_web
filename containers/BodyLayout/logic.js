import { makeDebugger } from 'utils'

/* eslint-disable-next-line */
const debug = makeDebugger('L:BodyLayout')

let store = null

export const openDoraemon = () => store.openDoraemon()

export const init = _store => {
  if (store) return false
  store = _store
}
