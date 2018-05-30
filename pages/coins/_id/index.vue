<template>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap v-for="(item, val) in singleCoin" v-bind:key="val">
        <!-- <h1>{{ $route.params.id }}</h1> -->

        <div class="single-header">
          <div class="single-logo">
            <img 
                class="image-single"
                v-if="item.symbol"
                :src="`/color-icons/${item.symbol.toLowerCase()}.svg`"/> 
            <h1 class="display-1 mr-1">{{ item.symbol }}</h1><h1>|</h1>
            <h1 class="headline ml-1 symbol-h1 grey--text"> {{item.name}}</h1>
          </div>
          <div class="single-price pa-2">
            <h2 v-bind:class="getClass(item.quotes.USD.percent_change_24h)">${{item.quotes.USD.price}} USD</h2>
            <h2 v-bind:class="getClass(item.quotes.BCH.percent_change_24h)">{{item.quotes.BCH.price}} BTC</h2>
          </div>
        </div>
    
        <charts-view :symbol="item.symbol"></charts-view>
          <v-flex xs12>
            <v-data-table
            :headers="headers"
            :items="singleCoin"
            hide-actions
            class="elevation-1"
          >
            <template slot="items" slot-scope="props">
              <td class="text-xs-left">
                $ {{ props.item.quotes.USD.market_cap.toLocaleString() }} USD <br>
                {{ props.item.quotes.BCH.market_cap.toLocaleString() }} BTC <br>
              </td>
              <td class="text-xs-left">{{ props.item.circulating_supply.toLocaleString() }} {{ props.item.symbol }}</td>
              <td class="text-xs-left">{{ props.item.total_supply.toLocaleString() }} {{ props.item.symbol }}</td>
              <td class="text-xs-left">{{ props.item.max_supply ? props.item.max_supply.toLocaleString() : '' }} {{props.item.max_supply ? props.item.symbol : ''}}</td>
              <td class="text-xs-left">
                $ {{ props.item.quotes.USD.volume_24h.toLocaleString() }} USD <br>
                {{ props.item.quotes.BCH.volume_24h.toLocaleString() }} BTC <br>
              </td>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      singleCoin: [],
      headers: [
        { text: 'Market Cap', value: 'market_cap' },
        { text: 'Circulating Supply', value: 'circulating_supply' },
        { text: 'Total Supply', value: 'total_supply' },
        { text: 'Max Supply', value: 'max_supply' },
        { text: 'Volume (24h)', value: 'volume_24h' }
      ]
    }
  },
  mounted () {
    let vm = this
    axios.get('https://api.coinmarketcap.com/v2/ticker/' + this.$route.params.id + '/?convert=BCH')
      .then(function (response) {
        const {data: {data}} = response
        vm.singleCoin.push(data)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    getClass (val) {
      return val > 0 ? 'positive' : 'negative'
    },
    getClassIcon (val) {
      return val
    }
  }
}
</script>