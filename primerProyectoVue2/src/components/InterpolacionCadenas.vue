<template>
    <div>
        <h1>Componente de interpolacion de cadenas</h1>
        <input type="text" @input="cuenta = ($event.target as HTMLInputElement).value">
        <hr>
        <p>{{ cuenta }}</p>
        <hr>
        {{ persona.nombre }} - {{ persona.edad }} - {{ persona.direccion }}
    </div>

</template>



<script setup lang="ts">
import { ref } from 'vue';

//Modificacion de variable con ref
//Esto quire decir que cuenta es una variable reactiva y que puede ser de tipo string o number
let cuenta = ref<string | number>(1);

setTimeout(() => {
    console.log('Entro al cambio de la variable cuenta');
    cuenta.value = 100;
}, 2000);

//Objetos complejos con Ref
const persona = ref({
    nombre: 'Juan',
    edad: 30,
    direccion: 'Calle falsa 123'
}); 

</script>



<style scoped>

</style>