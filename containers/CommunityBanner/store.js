/*
 * CommunityBanner store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger, stripMobx } from '../../utils'
/* eslint-disable-next-line */
const debug = makeDebugger('S:CommunityBanner')

const CommunityBanner = t
  .model('CommunityBanner', {
    loading: t.optional(t.boolean, false),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get curRoute() {
      return self.root.curRoute
    },
    get viewing() {
      return stripMobx(self.root.viewing)
    },
    get accountInfo() {
      return self.root.accountInfo
    },
    get curCommunity() {
      return stripMobx(self.root.viewing.community)
    },
  }))
  .actions(self => ({
    markRoute(query) {
      self.root.markRoute(query)
    },
    setViewing(sobj) {
      self.root.setViewing(sobj)
    },
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default CommunityBanner
