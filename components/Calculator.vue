<template>
<div class="space-p">
       <v-flex xs12 sm6>
        <v-select
          :items="cName"
          v-model="e1"
          item-text="name"
          label="Select Coin"
        ></v-select>
      </v-flex>

      <v-flex xs8>
        <v-text-field
          id="testing"
          v-model="q1"
          name="input-1"
          label="Quantity"
        ></v-text-field>
      </v-flex>
      <label>Price in USD: <strong>$ {{ resultUSD }}</strong></label><br>
      <label>Price in BTC: <strong>{{ resultBTC }}</strong></label>
</div>
</template>
<script>
import axios from 'axios'

let coinNames = []

axios.get('https://api.coinmarketcap.com/v2/ticker/?convert=BTC')
  .then(function (response) {
    const {data: {data}} = response

    Object.values(data).map((a, b) => {
      coinNames.push(a)
    })
  })
  .catch(function (error) {
    console.log(error)
  })
export default {
  data () {
    return {
      cName: coinNames,
      coinList: null,
      resultUSD: 0,
      resultBTC: 0,
      coinPriceUSD: null,
      coinPriceBTC: null,
      q1: null,
      e1: null
    }
  },
  methods: {
    calculateMethod (val) {
      this.resultUSD = this.coinPriceUSD * val
      this.resultBTC = this.coinPriceBTC * val
    }
  },
  watch: {
    e1: function (val) {
      this.coinPriceUSD = val.quotes.USD.price
      this.coinPriceBTC = val.quotes.BTC.price
      this.q1 = null
    },
    q1: function (val) {
      this.calculateMethod(val)
    }
  }
}
</script>
<style>
.space-p {
    padding: 20px;
}
</style>


