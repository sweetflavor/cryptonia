<template>
    <div id="news">
          <v-container fluid grid-list-md>
            <v-layout row wrap>
                <v-expansion-panel>
                    <v-expansion-panel-content v-for="item in newsList" v-bind:key="item.id">
                    <div slot="header" class="headerNews">
                        <img :src="`${item.imageurl}`" alt="">
                            <div class="contentHeader">
                                <h2>{{ item.title }}</h2>
                                <br>
                                <p>{{ dateTime(item.published_on) }}</p>
                            </div>
                    </div>
                    <v-card>
                        <v-card-text>
                            <div class="bodyTab">
                                {{ item.body }}
                            </div>
                        </v-card-text>
                    </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-layout>
          </v-container>
    </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      newsList: []
    }
  },
  created () {
    axios.get('https://min-api.cryptocompare.com/data/v2/news/?lang=EN')
      .then(response => {
        this.newsList = response.data.Data
      })
  },
  methods: {

    dateTime: function (d) {
      let dt = d * 1000
      let myDate = new Date(dt)
      return myDate.toLocaleString()
    }
  },

  computed: {

  }
}
</script>


