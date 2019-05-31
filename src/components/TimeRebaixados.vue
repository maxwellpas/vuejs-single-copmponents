<template>
    <div class="col-6">
        <h3>Times Rebaixados</h3>
        <ul>
            <li v-for="time in timeRebaixados"  v-bind:key="time">
                <clube :time="time"></clube>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['times'], /** Essa props está senda usada no computed */    
    computed: {
        timeRebaixados() {
            return this.times.slice(16, 20);
        }
    }
}
</script>

