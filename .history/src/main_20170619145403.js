import Vue from 'vue'
import {Time} from './time'
import _ from 'lodash'
import AppComponent from './components/App.vue'
import TimeListsComponent from './components/TimeList.vue'
import './filters'
// import store from './store'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');

const routesMap = [
  {
    path: '/times',
    component: TimeListsComponent
  }
]

const router = new VueRouter({
    routes: routesMap
})

let meuVue =  new Vue({
    router,    
    el: '#app',
    components: {
      'app':  AppComponent
    }
    // store
});