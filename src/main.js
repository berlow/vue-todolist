var Vue = require('vue')
var Main = require('../components/Main.vue')

var App = new Vue({
  el: '#app',
  data: {
    view: 'Main'
  },
  components: {
    Main:Main
  }
})
