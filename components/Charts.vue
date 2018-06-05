<template>
<v-layout row wrap v-if="!noValue">
  <v-flex xs12 justify-center>
    <v-radio-group v-model="historyRange" :mandatory="false">
      <v-radio label="Days" value="histoday"></v-radio>
      <v-radio label="Hours" value="histohour"></v-radio>
    </v-radio-group>
  </v-flex>
  <v-flex xs12>
      <div id="cart-element-usd"></div>
      <div id="cart-element-btc"></div>
  </v-flex>
</v-layout>
</template>

<script>
/* eslint no-eval: 0 */
import * as echarts from 'echarts'
import axios from 'axios'
import BTCoption from './BtcOption.js'

export default {
  props: ['symbol', 'history'],
  data () {
    return {
      historyRange: 'histoday',
      noValue: false
    }
  },
  methods: {

    initCharts: function () {
      let label = []
      let price = []
      let priceBTC = []

      const chartOption = new BTCoption(label, priceBTC, price)

      let usdChart = echarts.init(document.getElementById('cart-element-usd'))
      let btcChart = echarts.init(document.getElementById('cart-element-btc'))

      window.onresize = function () {
        usdChart.resize()
        btcChart.resize()
      }

      const url = 'https://min-api.cryptocompare.com/data/'
      const sym = this.symbol
      const historyRange = this.historyRange

      const dateTime = (d) => {
        let dt = eval(d * 1000)
        let myDate = new Date(dt)
        return myDate.toLocaleString()
      }

      axios.all([
        axios.get(url + historyRange + '?fsym=' + sym + '&tsym=USD&limit=60&aggregate=3&e=Bitfinex'),
        axios.get(url + historyRange + '?fsym=' + sym + '&tsym=BTC&limit=60&aggregate=3&e=Bitfinex')
      ])
        .then(axios.spread((dataUSD, dataBTC) => {
          console.log(dataUSD.data.Response)
          this.noValue = dataUSD.data.Response === 'Error'
          console.log(this.noValue)
          let d = dataUSD.data['Data'].slice(19, dataUSD.data['Data'].length + 1)
          let d2 = dataBTC.data['Data'].slice(19, dataBTC.data['Data'].length + 1)

          d.map(i => {
            price.push(i['close'])
            label.push(dateTime(i['time']))
          })

          d2.map(i => {
            priceBTC.push(i['close'])
          })

          usdChart.setOption(chartOption.usdoption)
          btcChart.setOption(chartOption.btcoption)
        }))
    }
  },
  mounted () {
    this.initCharts()
  },
  watch: {
    historyRange: function () {
      this.initCharts()
    }
  }
}
</script>
<style>
#cart-element-usd, #cart-element-btc {
  width: 100%;
  height: 600px;
  padding-top: 20px;
  padding-bottom: 20px;
}
canvas {
  width: 100%;
}
</style>



