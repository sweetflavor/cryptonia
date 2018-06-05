<template>
    <div id="news">
          <v-container fluid grid-list-md>
            <v-layout row wrap>
              <v-flex v-for="item in newsList" v-bind:key="item.id" xs12>

                <div class="card-tab">
                    <div class="image-box">
                        <img :src="`${item.imageurl}`" alt="">
                    </div> 
                    <v-card-title primary-title>
                        <div>
                        <h3 class="headline mb-0">{{ item.title }}</h3>
                        <div v-text="text_truncate('We are doing JS string exercises.',19)"></div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat color="blue">Share</v-btn>
                        <v-btn flat color="blue">Explore</v-btn>
                    </v-card-actions>
                </div>

              </v-flex>
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
        console.log(response.data.Data)
        this.newsList = response.data.Data
      })
  },

  computed: {
    text_truncate: function (str, length, ending) {
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
  }
}
</script>

<style>
.news-card {
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
}
</style>


