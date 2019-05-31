<template>
    <div>
        <button class="btn btn-primary" @click="criarNovoJogo" data-toggle="modal">Novo Jogo</button>
        <placar-modal :time-casa="timeCasa" :time-fora="timeFora" ref="modal"></placar-modal>
    </div>
</template>

<script>
    export default {
        props: [],
        data() {
            return {
                times: this.timesColecao,
                timeCasa: null,
                timeFora: null
            }
        },
        inject: ['timesColecao'],
        methods: {
            criarNovoJogo() {
                var indiceCasa = Math.floor(Math.random() * 20),
                    indiceFora = Math.floor(Math.random() * 20);

                this.timeCasa = this.times[indiceCasa];            
                this.timeFora = this.times[indiceFora];

                var modal = this.$refs.modal;
                modal.showModal();
                
                /**this.$emit('novo-jogo', {timeCasa, timeFora}); */
            }      
        }
    }
</script>

