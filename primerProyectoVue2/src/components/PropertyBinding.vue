<template>
    <div>
        <h1>Property Binding</h1>
        <input v-bind="InputText" />
        <img :src="imageUrl" title="imagen" alt="imagen">
        <hr>
        <button :disabled="disabled">{{ disabled ? 'Deshabilitado' : 'Habilitado'  }}</button>
        <hr>
        <h2>Carerra  <span :textContent="carrera.nombre" ></span> </h2>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';

let imageUrl = ref('https://picsum.photos/200/300');
let disabled = ref(true);

setTimeout(() => {
    console.log('Disabled: ', disabled.value);
    disabled.value = false;
    console.log('Disabled: ', disabled.value);
}, 2000);

let carrera = {
    nombre: 'Ingeniería en Sistemas',
    duracion: 5,
    materias: ['Matemáticas', 'Física', 'Química']
};

//Property Blinding con Objeto
let InputText = ref({
    type: 'number',
    disabled: false,
    placeholder: 'Escribe un numero',
});


</script>


<style scoped>

</style>