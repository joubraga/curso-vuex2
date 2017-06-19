import {Time} from '../time'
import _ from 'lodash'
import store from '../store'

export default {
  template: `
    <div>
      <input type="text" class="form-control" v-model="filter">
      <table class="table table-striped">
          <thead>
          <tr>
              <th v-for="coluna in colunas">
                  <a href="#" @click.prevent="sortBy(coluna)">{{coluna | ucwords}}</a>
              </th>
          </tr>
          </thead>
          <tbody>
              <tr v-for="time in timesFiltered">
                  <td>
                      <img :src="time.escudo" style="height: 30px; width: 30px;">
                      <strong>{{time.nome}}</strong>
                  </td>
                  <td>{{time.pontos}}</td>
                  <td>{{time.gm}}</td>
                  <td>{{time.gs}}</td>
                  <td>{{time | saldo}}</td>
              </tr>
          </tbody>
      </table>
    </div>`,
    created(){
        store.dispatch('load-times')
  },
  data(){
    return {
      order: {
          keys: ['pontos', 'gm', 'gs'],
          sort: ['desc', 'desc', 'asc']
      },
      filter: '',
      colunas: ['nome', 'pontos', 'gm', 'gs', 'saldo'],
    };
  },
  methods: {
      sortBy(coluna){
          this.order.keys = coluna
          this.order.sort = this.order.sort == 'desc' ? 'asc': 'desc'
      }
  },
  computed: {
    times(){
        return store.state.times
        // return this.$store.state.view
    },
    timesFiltered(){
        let colecao = _.orderBy(this.times, this.order.keys, this.order.sort)

        return _.filter(colecao, item => {
            return item.nome.indexOf(this.filter) >=0
        });
    }
  }
}
