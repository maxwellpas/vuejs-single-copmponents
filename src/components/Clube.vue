<template>
    <div style="display: flex; flex-direction: row" v-if="time">
        <img class="img-time ml-2 mr-2" :src="time.escudo" :style="{order: invertido == 'true' ? '2' : '1'}" alt=""> 
        <span :style="{order: invertido == 'true' ? '1' : '2'}">{{ time.nome | ucwords}}</span>
    </div>
</template>


<script>
export default {
    props: ['time', 'invertido'],
    methods: {
        metodo() {
            return this.nome;
        }
    },
    /**
    filters: {
        ucwords(valor) {
            return valor.charAt(0).toUpperCase() + valor.slice(1);
        }
    }
     */
}
</script>

