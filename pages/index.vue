<template>
    <v-app id="news">
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