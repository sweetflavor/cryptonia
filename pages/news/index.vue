<template>
    <div id="news">
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <!-- <v-flex v-for="item in newsList" v-bind:key="item.id" xs12>

                <div class="card-tab">
                    <div class="image-box">
                        <img :src="`${item.imageurl}`" alt="">
                    </div> 
                    <v-card-title primary-title>
                        <div>
                        <h3 class="headline mb-0">{{ item.title }}</h3>
                        <div>{{ texttruncate(item.body, 250) }}</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat color="blue">Share</v-btn>
                        <v-btn flat color="blue">read more</v-btn>
                    </v-card-actions>
                </div>

              </v-flex> -->
                <v-expansion-panel>
                    <v-expansion-panel-content v-for="item in newsList" v-bind:key="item.id">
                    <div slot="header" class="headerNews">
                        <img :src="`${item.imageurl}`" alt="">
                        <div class="contentHeader">
                            <h2>{{ item.title }}</h2>
                            <br>
                            <p>{{ dateFormator(item.published_on) }}</p>
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
/* eslint no-eval: 0 */
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

    dateFormator: function (timestamp) {
      let dt = eval(timestamp * 1000)
      let myDate = new Date(dt)
      console.log(myDate)
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
/* .news-card {
    flex-direction: column;
}
#news .card {
    margin: 10px;
}
#news .card__media {
    width: 100%;
}
#news .card-tab {
    height: 300px;
    display: flex;
    align-items: center;
    padding: 20px;
    position: relative;
}
.image-box {
    width: 460px;
    height: 200px;
    background-color: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 2px;
}
#news .card__actions {
    position: absolute;
    right: 0;
    bottom: 10px;
}
@media (max-width: 900px) {
    #news .card-tab {
        height: auto;
        flex-direction: column;
        padding-bottom: 40px;
    }
    .image-box {
        width: 100%;
        height: 300px;
    }
}
.image-box img {
    width: 100%;
}
.card__title {
    width: 100%;
} */

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
    padding: 40px;
    line-height: 1.8em;
}
@media (max-width: 900px) {
    .headerNews {
        flex-direction: column;
    }
    .contentHeader  {
        padding: 20px;
    }
    
}
</style>


