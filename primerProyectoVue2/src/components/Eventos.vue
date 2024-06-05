<template>
 <div>

    <button class="btn btn-primary" v-on:click="guardar" >Guardar con v-on:click </button>
    <br>
    <br>
    <button class="btn btn-primary" @click="guardar" >Guardar @click</button>
    <br>
    <br>
    <button class="btn btn-warning" @click="Pikachu.nombre='Chamander'" >Obtener nombre</button>
    <h5>Pokemon</h5>
    <div>{{ Pikachu.nombre }} - {{ Pikachu.estado  }} - {{ Pikachu.vida  }}</div>

 </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const guardar = () => {
    console.log('Guardando...');
}

//expresiones en eventos
const Pikachu = ref({
    nombre: 'Pikachu',
    vida: 100,
    estado: 'vivo'
});

</script>