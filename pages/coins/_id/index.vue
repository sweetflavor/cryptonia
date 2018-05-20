<template>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <!-- <h1>{{ $route.params.id }}</h1> -->
        <div v-for="(item, val) in singleCoin" v-bind:key="val">
            <v-flex xs12 d-flex align-center>
                <img 
                    class="image-single"
                    v-if="item.symbol"
                    :src="`/color-icons/${item.symbol.toLowerCase()}.svg`"/> 
                <h1 class="display-1 mr-1">{{ item.symbol }}</h1><h1>|</h1>
                <h1 class="headline ml-1 symbol-h1 grey--text"> {{item.name}}</h1>
            </v-flex>
        </div>
      </v-layout>
    </v-container>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      singleCoin: []
    }
  },
  mounted () {
    let vm = this
    axios.get('https://api.coinmarketcap.com/v2/ticker/' + this.$route.params.id + '/')
      .then(function (response) {
        const {data: {data}} = response
        vm.singleCoin.push(data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>
