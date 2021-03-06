import Vue from 'vue'

import AllCoins from '../components/AllCoins.vue'
import Charts from '../components/Charts.vue'
import Calculator from '../components/Calculator.vue'
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
  VDataTable,
  VSelect,
  VRadioGroup
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
    VDataTable,
    VSelect,
    VRadioGroup
  }
})

Vue.component('all-coins', AllCoins)
Vue.component('charts-view', Charts)
Vue.component('calculator', Calculator)
