<template>
  <v-flex xs12>
      <div id="cart-element-usd"></div>
      <div id="cart-element-btc"></div>
  </v-flex>
</template>

<script>
/* eslint no-eval: 0 */
import * as echarts from 'echarts'
import axios from 'axios'
import BTCoption from './BtcOption.js'

let label = []
let price = []
let priceBTC = []

const chartOption = new BTCoption(label, priceBTC, price)

export default {
  name: 'app',
  props: ['symbol', 'history'],
  data () {
    return {

    }
  },
  methods: {

    initCharts: function () {
      let usdChart = echarts.init(document.getElementById('cart-element-usd'))
      let btcChart = echarts.init(document.getElementById('cart-element-btc'))

      window.onresize = function () {
        usdChart.resize()
        btcChart.resize()
      }

      const url = 'https://min-api.cryptocompare.com/data/'
      const sym = this.symbol
      const historyRange = this.history

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



