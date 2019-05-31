<template>
    <div class="col-6">
        <h3>Times Classificados para Libertadores</h3>
        <ul>
            <li v-for="time in timeLibertadores"  v-bind:key="time">
                <clube :time="time"></clube>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['times'],/** Essa props está senda usada no computed */
    computed: {
        timeLibertadores() {
            return this.times.slice(0, 6);
        }
    }
}
</script>

