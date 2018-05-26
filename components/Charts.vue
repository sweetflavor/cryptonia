<template>
    <v-flex xs12>
        <v-card>
            <div class="container-fluid">
            <div class="row">
                <div class="col-sm">
                <h1 id="price"></h1>
                </div>
            </div>
            </div>
            <canvas id="chart" width="600" height="150"></canvas>
            <section class="container-fluid"></section>
        </v-card>
    </v-flex>
</template>
<script>
/* eslint no-eval: 0 */
import Chart from 'chart.js'
import axios from 'axios'

export default {
  props: ['symbol'],
  mounted () {
    const ctx = document.getElementById('chart').getContext('2d')
    const url = 'https://min-api.cryptocompare.com/data/'
    const sym = this.symbol
    function dateTime (d) {
      var dt = eval(d * 1000)
      var myDate = new Date(dt)
      return myDate.toLocaleString()
    }

    axios.get(url + 'histoday?fsym=' + sym + '&tsym=USD&limit=60&aggregate=3&e=Bitfinex')
      .then(function (data) {
        var label = []
        var price = []
        var d = data.data['Data'].slice(19, data.data['Data'].length + 1)
        var i
        for (i in d) {
          price.push(d[i]['close'])
          label.push(dateTime(d[i]['time']))
        }

        var chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: label,
            datasets: [
              {
                label: sym + 'USD',
                pointRadius: 2,
                pointBorderWidth: 2,
                pointBackgroundColor: '#D94D5A',
                backgroundColor: '#e66465',
                borderColor: '#D94D5A',
                data: price
              }
            ]
          },
          options: {
            elements: {
              point: {
                radius: 0,
                hitRadius: 5,
                hoverRadius: 5
              }
            },
            legend: {
              display: false
            },
            scales: {
              xAxes: [
                {
                  display: false
                }
              ],
              yAxes: [
                {
                  display: false,
                  ticks: {
                    beginAtZero: false
                  }
                }
              ]
            },
            layout: {
              padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
              }
            }
          }
        })
        console.log(chart)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>
