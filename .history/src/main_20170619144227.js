import Vue from 'vue'
import {Time} from './time'
import _ from 'lodash'
import AppComponent from './components/App.vue'
import TimeListsComponent from './components/TimeList.vue'
import './filters'


require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');

const routesMap = [
  {
    path: '/times',
    component: TimeListsComponent
  }
]

let meuVue =  new Vue({
    el: '#app',
    components: {
      'app':  AppComponent
    }
});