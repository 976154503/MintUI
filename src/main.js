import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)


import 'bootstrap/dist/css/bootstrap.css'

import './css/style.css'

//修改为按需加载方式
// import MintUi from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUi)

//按需加载
import { Button } from 'mint-ui'

Vue.component(Button.name,Button)

import app from './App.vue'
import router from './router.js'


var vm = new Vue({
	el: '#app',
	render: c => c(app),
	router
})
