<template>
    <div class="col-12">
        <input type="text" class="form-control mb-3 mt-3" v-model="busca">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th v-for="(coluna, indice) in ordem.colunas"  v-bind:key="indice">
                        <a href="#" @click.prevent="ordenar(indice)">{{ coluna | ucwords}}</a>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(time, indice) in timeFiltrados" v-bind:key="indice" :class="{'table-success': indice < 6}" :style="{'font-size': indice < 6 ? '18px' : '14px'}">
                    <th scope="row">{{ indice }}</th>
                    <td>
                        <clube :time="time"></clube>
                    </td>
                    <td>{{ time.pontos }}</td>
                    <td>{{ time.gm }}</td>
                    <td>{{ time.gs }}</td>
                    <td>{{ time.saldo }}</td>
                </tr>
            </tbody>
        </table>
        <div class="row">
            <time-classifidados :times="timeOrdenados"></time-classifidados>
            <time-rebaixados :times="timeOrdenados"></time-rebaixados>
        </div>
    </div> 
</template>

<script>
import _ from 'loadash';

export default {
    props: ['times'],
    data() {
        return {
            busca: '',
            ordem: {
                colunas: ['pontos', 'gm', 'gs', 'saldo'],
                orientacao: ['desc', 'desc', 'asc', 'desc']
            }
        };
    },
    computed: {
        timeFiltrados() {
            
            var self = this;

            return _.filter(this.timeOrdenados, function(time) {
                var busca = self.busca.toLowerCase();
                return time.nome.toLowerCase().indexOf(busca) >= 0;
            });
        },
        timeOrdenados() {
            return _.orderBy(this.times, this.ordem.colunas, this.ordem.orientacao);
        }
    },
    methods: {
        ordenar(indice) {
            this.$set(this.ordem.orientacao, indice, this.ordem.orientacao[indice] == 'desc' ? 'asc' : 'desc')
        }
    }
}
</script>
