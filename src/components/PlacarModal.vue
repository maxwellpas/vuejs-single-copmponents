<template>
    <modal ref="modal">

        <h5 slot="header-titulo">Novo Jogo</h5>     

        <form class="form-inline">
            <input type="text" class="form-control col-1 mr-2" v-model="golsCasa">                 
            <clube :time="timeCasa" invertido="true"></clube>
            <span class="mr-2 ml-2">X</span>
            <clube :time="timeFora"></clube>
            <input type="text" class="form-control col-1 ml-2" v-model="golsFora">                    
        </form>
        
        <button slot="footer" type="button" class="btn btn-danger ml-4" @click="fimJogo">Fim do Jogo</button>
        
    </modal>
    
</template>

<script>
    
export default {
    props: ['timeCasa','timeFora'],
    data() {
        return {
            golsCasa: 0,
            golsFora: 0
        }
    },
   
    methods: {
        fimJogo() {
            var golsMarcados = parseInt(this.golsCasa);
            var golsSofridos = parseInt(this.golsFora);          

            this.timeCasa.fimJogo(this.timeFora, golsMarcados, golsSofridos);
            this.closeModal();
        },
        showModal() {
            this.getModal().show();
        },
        closeModal() {
            this.getModal().close();
        },
        getModal() {
            return this.$refs.modal;
        }
    }
}
</script>

