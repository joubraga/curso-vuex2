<template>
    <div class="container">
        <div class="row">
            <h3> Campeonato Brasileiro - Série A - 2016 </h3>
            <a class="btn btn-primary" @click="showTabela"> Ver tabela </a>
            <a class="btn btn-primary" @click="showZona"> Zona </a>
            <a class="btn btn-primary" @click="showNovoJogo"> Novo Jogo </a>
            <br><br>
            <div v-if="view == 'tabela'">
                <time-list></time-list>
            </div>
            <div v-if="view == 'novojogo'">
            <time-jogo></time-jogo>
            </div>
            <div v-if="view == 'zona'">
            <time-zona></time-zona>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import TimeListComponent from './TimeList.vue'
    import TimeJogoComponent from './TimeJogo.vue'
    import TimeZonaComponent from './TimeZona.vue'
    import store from '../store'

    export default {
        components: {
            'time-list': TimeListComponent,
            'time-jogo': TimeJogoComponent,
            'time-zona': TimeZonaComponent
        },
        computed: {
            view(){
            return store.state.view
            //  return this.$store.state.view
            }
        },
        methods: {
            showTabela(){
                store.commit('show-time-list')
            },
            showNovoJogo(){
                store.commit('show-time-novojogo')
            },
            showZona(){
                store.commit('show-time-zona')
            },
            showView(view){
                this.view = view;
            },
        }
    }
</script>

<style>
    
</style>