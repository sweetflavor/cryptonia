import Vue from 'vue'

import AllCoins from '../components/AllCoins.vue'
import Charts from '../components/Charts.vue'
import {
  Vuetify,
  VApp,
  VCard,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VAvatar,
  VTextField,
  VDataTable
} from 'vuetify'

Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VAvatar,
    VTextField,
    VDataTable
  }
})

Vue.component('all-coins', AllCoins)
Vue.component('charts-view', Charts)
