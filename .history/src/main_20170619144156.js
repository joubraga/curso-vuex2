import Vue from 'vue'
import {Time} from './time'
import _ from 'lodash'
import AppComponent from './components/App.vue'
import TimeLists from './components/TimeList.vue'
import './filters'


require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');

const routesMap = [
  {
    path: '/times'
    component: TimeLists
  }
]

let meuVue =  new Vue({
    el: '#app',
    components: {
      'app':  AppComponent
    }
});