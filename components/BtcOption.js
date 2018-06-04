
export default class BTCoption {
  constructor (label, priceBTC, price) {
    this.label = label
    this.priceBTC = priceBTC
    this.price = price
  }

  get btcoption () {
    return this.btcOption()
  }
  get usdoption () {
    return this.usdOption()
  }

  btcOption () {
    return {
      title: {
        text: 'BTC Charts'
      },
      legend: {
        data: ['bar', 'bar2'],
        align: 'left'
      },
      dataZoom: [{
        show: true,
        realtime: true,
        start: 0,
        end: 100
      },
      {
        type: 'inside',
        realtime: true,
        start: 0,
        end: 100
      }
      ],
      tooltip: {},
      xAxis: {
        data: this.label,
        silent: false,
        splitLine: {
          show: false
        }
      },
      yAxis: {},
      series: [{
        name: 'bar',
        type: 'line',
        data: this.priceBTC,
        animationDelay: function (idx) {
          return idx * 10
        }
      }],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5
      }
    }
  }

  usdOption () {
    return {
      title: {
        text: 'USD Charts'
      },
      legend: {
        data: ['bar', 'bar2'],
        align: 'left'
      },
      dataZoom: [{
        show: true,
        realtime: true,
        start: 0,
        end: 100
      },
      {
        type: 'inside',
        realtime: true,
        start: 0,
        end: 100
      }
      ],
      tooltip: {},
      xAxis: {
        data: this.label,
        silent: false,
        splitLine: {
          show: false
        }
      },
      yAxis: {},
      series: [{
        name: 'bar',
        type: 'line',
        color: '#5c9c43',
        data: this.price,
        animationDelay: function (idx) {
          return idx * 10
        }
      }],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5
      }
    }
  }
}
