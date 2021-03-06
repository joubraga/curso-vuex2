import {Time} from '../time'
import _ from 'lodash'
import store from '../store'


export default {
  template: `
    <div>
      <h3> Times que irão para Libertadores</h3>
      <table class="table table-striped">
          <thead>
          <tr>
              <th>
                 Nome
              </th>
          </tr>
          </thead>
          <tbody>
              <tr v-for="time in timesLibertadores">
                  <td>
                      <img :src="time.escudo" style="height: 30px; width: 30px;">
                      <strong>{{time.nome}}</strong>
                  </td>
              </tr>
          </tbody>
      </table>
      <br>
      <h3> Times que serão rebaixados</h3>
      <table class="table table-striped">
          <thead>
          <tr>
              <th>
                 Nome
              </th>
          </tr>
          </thead>
          <tbody>
              <tr v-for="time in timesRebaixados">
                  <td>
                      <img :src="time.escudo" style="height: 30px; width: 30px;">
                      <strong>{{time.nome}}</strong>
                  </td>
              </tr>
          </tbody>
      </table>
    </div>`,

  computed: {
    timesLibertadores(){
        return store.getters.timesLibertadores
        // return this.$store.state.view
    },
    timesRebaixados(){
        return store.getters.timesRebaixados
        // return this.$store.state.view
    },
  }
}
