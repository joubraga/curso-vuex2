<template>
    <div class="container">
        <div class="row">
            <h3> Campeonato Brasileiro - Série A - 2016 </h3>
            <a class="btn btn-primary" @click="showTabela"> Ver tabela </a>
            <a class="btn btn-primary" @click="showZona"> Zona </a>
            <a class="btn btn-primary" @click="showNovoJogo"> Novo Jogo </a>
            <br><br>
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