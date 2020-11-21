import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import store from './store'
import router from './router'

// const electron = require('electron')
// const BrowserWindow = electron.BrowserWindow

// const mainWindow = new BrowserWindow({
//   width: 800, 
//   height: 600,
//   webPreferences: {
//     nodeIntegration: false,
//     preload: __dirname + '/preload.js'
//   }
// });
// console.log(mainWindow)

// declare global {
//   interface Window {
//     require: any;
//   }
// }

// const electron = window.require('electron');

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
