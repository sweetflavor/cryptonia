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
    },

    texttruncate: function (str, length, ending) {
      if (length == null) {
        length = 100
      }
      if (ending == null) {
        ending = '...'
      }
      if (str.length > length) {
        return str.substring(0, length - ending.length) + ending
      } else {
        return str
      }
    }
  },

  computed: {

  }
}
</script>

<style>

.headerNews {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.contentHeader {
    width: 100%;
    height: 100%;
    padding: 20%;
}
.bodyTab {
    padding: 100px;
    line-height: 1.8em;
}
@media (max-width: 900px) {
    .bodyTab {
        padding: 20px;
    }
    .headerNews {
        flex-direction: column;
    }
    .contentHeader  {
        padding: 20px;
    }
    
}
</style>


