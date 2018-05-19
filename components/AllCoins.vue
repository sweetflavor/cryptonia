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
                  <td class="text-xs-left td-name"> <img 
                                              class="avatarCoin"
                                              v-if="props.item.symbol"
                                              :src="`color-icons/${props.item.symbol.toLowerCase()}.svg`"/> 
                                                <strong><p>{{ props.item.name }}</p></strong></td>
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
      coins: coinNamesList,
      desserts: [
        {
          value: false,
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          value: false,
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          value: false,
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          value: false,
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          value: false,
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          value: false,
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          value: false,
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          value: false,
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          value: false,
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          value: false,
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }
      ]
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
