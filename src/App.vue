<template>
	<div class="container">
        <titulo></titulo>
        
        <div class="row mt-3 mb-3">
            <div class="col-12">
                <novo-jogo :times="times" @novo-jogo="showPlacar($event)"></novo-jogo>
            </div>
        </div>

        <div class="row mt-3 mb-3" v-if="visao != 'tabela'">
            <div class="col-12">
                <placar :time-casa="timeCasa" :time-fora="timeFora" @fim-jogo="showTabela($event)"></placar>
            </div>
        </div>

        <div class="row" v-else>
            <tabela-clubes :times="times"></tabela-clubes>
        </div>
    </div>
</template>

<script>


export default {
 	data() {
        return {
           
            times: this.timesColecao,
            timeCasa: null,
            timeFora: null,
            visao: 'tabela'
        };
    },
    inject: ['timesColecao'],
    methods: {
        criarNovoJogo() {
            var indiceCasa = Math.floor(Math.random() * 20),
                indiceFora = Math.floor(Math.random() * 20);

            this.timeCasa = this.times[indiceCasa];            
            this.timeFora = this.times[indiceFora];
            

            console.log(this.novoJogo);
            this.visao = 'placar';
        },
        showTabela(event){
            console.log(event);
            this.visao = 'tabela';
        },
        showPlacar({timeCasa, timeFora}) {
            this.timeCasa = timeCasa;
            this.timeFora = timeFora;
            this.visao = 'placar';
        }
    },
    filters: {
        /**
        saldo(time) {
            var ret = time.gm - time.gs;
            return ret < 0 ? 0 : ret;
        }
         */
        /**
         * Podes ser colocado aqui ou commo um Filter global
        ,
        ucwords(valor) {
            return valor.charAt(0).toUpperCase() + valor.slice(1);
        }
         */
    }
}
</script>
