<template>
<div>
    <v-flex xs12>
        <v-card>
            <v-flex xs12>
            <v-card-title>
                All Coins
                <v-spacer></v-spacer>
                <v-text-field
                v-model="search"
                append-icon="search"
                label="Search"
                single-line
                hide-details
                ></v-text-field>
            </v-card-title>
            </v-flex>
        </v-card>
    </v-flex>
    <v-flex xs12>
            <v-data-table
                :headers="headers"
                :items="coins"
                :search="search"
                hide-actions
                item-key="name"
            >
                <template slot="items" slot-scope="props">
                <!-- <td class="text-xs-left"><i class="cc" v-bind:class="getClassIcon(props.item.symbol)"></i> {{ props.item.name }}</td> -->
                <tr @click="props.expanded = !props.expanded">
                  <td class="text-xs-left td-name"> <nuxt-link class="center-fx" :to="'/coins/' + props.item.id"> <img 
                                              class="avatarCoin"
                                              v-if="props.item.symbol"
                                              :src="`color-icons/${props.item.symbol.toLowerCase()}.svg`"/> 
                                                <strong><p>{{ props.item.name }}</p></strong></nuxt-link></td>
                  <td class="text-xs-right">{{ props.item.quotes.USD.price + ' $' }}</td>
                  <td class="text-xs-right">{{ props.item.quotes.USD.market_cap.toLocaleString() + ' $' }}</td>
                  <td class="text-xs-right">{{ props.item.total_supply.toLocaleString()  + ' $' }}</td>
                  <td class="text-xs-right" v-bind:class="getClass(props.item.quotes.USD.percent_change_24h)">{{ props.item.quotes.USD.percent_change_24h + ' %' }}</td>
                  <td class="text-xs-right" v-bind:class="getClass(props.item.quotes.USD.percent_change_7d)">{{ props.item.quotes.USD.percent_change_7d + ' %' }}</td>
                </tr>
                </template>

                <template slot="expand" slot-scope="props">
                  <v-card flat>
                    <v-card-text>{{ props.item.symbol }}</v-card-text>
                  </v-card>
                </template>
                
                <v-alert slot="no-results" :value="true" color="error" icon="warning">
                Your search for "{{ search }}" found no results.
                </v-alert>
            </v-data-table>
    </v-flex>
</div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'

let coinNamesList = []

axios.get('https://api.coinmarketcap.com/v2/ticker/')
  .then(function (response) {
    const {data: {data}} = response

    Object.values(data).map((a, b) => {
      coinNamesList.push(a)
    })
  })
  .catch(function (error) {
    console.log(error)
  })

Vue.prototype.$appCoinList = coinNamesList

export default {
  data () {
    return {
      isPositive: true,
      isPositiveDetector: true,
      search: '',
      headers: [
        {
          text: 'Name',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Price', value: 'price' },
        { text: 'Market Cap', value: 'market_cap' },
        { text: 'Total Supply', value: 'total_supply' },
        { text: 'Percent Change 24h', value: 'percent_change_24h' },
        { text: 'Percent Change 7d', value: 'percent_change_7d' }
      ],
      coins: coinNamesList
    }
  },
  methods: {
    getClass (val) {
      return val > 0 ? 'positive' : 'negative'
    },
    getClassIcon (val) {
      return val
    },
    getSrc (val) {
      return '../static/color-icons/abt.svg'
    }
  }
}
</script>
<style>
.negative {
  color: red;
}
.positive {
  color: green;
}
</style>
