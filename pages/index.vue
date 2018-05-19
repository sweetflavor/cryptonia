<template>
  <!-- <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      </div>
      <v-card>
        <v-card-title class="headline">Welcome to the Vuetify + Nuxt.js template</v-card-title>
        <v-card-text>
          <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
          <p>For more information on Vuetify, check out the <a href="https://vuetifyjs.com" target="_blank">documentation</a>.</p>
          <p>If you have questions, please join the official <a href="https://chat.vuetifyjs.com/" target="_blank" title="chat">discord</a>.</p>
          <p>Find a bug? Report it on the github <a href="https://github.com/vuetifyjs/vuetify/issues" target="_blank" title="contribute">issue board</a>.</p>
          <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3">
          <a href="https://nuxtjs.org/" target="_blank">Nuxt Documentation</a>
          <br>
          <a href="https://github.com/nuxt/nuxt.js" target="_blank">Nuxt GitHub</a>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat nuxt to="/inspire">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout> -->

   <!-- <v-container align-baseline>
    <v-layout>
      <v-flex xs12 sm6 class="px-4">
        <v-card color="indigo lighten-5">
          <v-card-text d-flex align-center>
            <img src="../static/bitcoin.png" alt="" class="iconocoin">
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 class="px-4">
        <v-card color="indigo lighten-5">
          <v-card-text>
              <img src="../static/ethereum2.png" alt="" class="iconocoin-ether">
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 class="px-4">
        <v-card color="indigo lighten-5">
          <v-card-text>
            <img src="../static/cardano.svg" alt="" class="iconocoin">
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container> -->

    <v-app id="inspire">
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs4>
          <v-card color="indigo lighten-5">
            <v-card-text d-flex align-center>
              <img src="../static/bitcoin.png" alt="" class="iconocoin">
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card color="indigo lighten-5">
            <v-card-text>
                <img src="../static/ethereum2.png" alt="" class="iconocoin-ether">
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs4>
          <v-card color="indigo lighten-5">
            <v-card-text>
              <img src="../static/cardano.svg" alt="" class="iconocoin">
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12>
            <all-coins></all-coins>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
  export default {
    data: () => ({
      size: 'sm',
      items: [
        { text: 'Extra small (2px)', value: 'xs' },
        { text: 'Small (4px)', value: 'sm' },
        { text: 'Medium (8px)', value: 'md' },
        { text: 'Large (16px)', value: 'lg' },
        { text: 'Extra large (24px)', value: 'xl' }
      ]
    })
  }
</script>