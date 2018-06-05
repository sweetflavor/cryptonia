import Vue from 'vue'

import AllCoins from '../components/AllCoins.vue'
import Charts from '../components/Charts.vue'
import Calculator from '../components/Calculator.vue'
import moment from 'moment'
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
  VRadioGroup,
  VExpansionPanel
} from 'vuetify'

Vue.use('vue-moment', {
  moment
})

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
    VRadioGroup,
    VExpansionPanel
  }
})

Vue.component('all-coins', AllCoins)
Vue.component('charts-view', Charts)
Vue.component('calculator', Calculator)
