import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUi)

import app from './App.vue'
import router from './router.js'


var vm = new Vue({
	el: '#app',
	render: c => c(app),
	router
})
