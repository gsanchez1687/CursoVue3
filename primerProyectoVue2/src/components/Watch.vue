<template>
    <div class="container">
        <h1>Efectos segundarios con Watch</h1>
        <div class="row">
            <div class="mb-3">
                <label for="cantidad" class="form-label">Cantidad</label>
                <input type="number" class="form-control" id="cantidad" v-model="Producto.cantidad" />
            </div>
        </div>
        <div class="row">
            <div class="mb-3">
                <label for="cantidad" class="form-label">Precio</label>
                <input type="number" class="form-control" id="cantidad" v-model="Producto.precio" />
            </div>
        </div>
        <div class="row">
            <h3>Total: ${{ total }}</h3>
        </div>
        <div class="row">
            <ul>
                <li v-for="(item, indice) in historial" :key="indice" >{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, computed ,ref, watch } from 'vue';

const Producto = reactive({
    nombre: 'Curso de Vue 3',
    cantidad: 1,
    precio: 10
});


//para que sirve computed ?
//para realizar calculos y no tener que estar calculando en el template
//computed(queCalcular)
let total = computed(() => {
    console.log('Total');
    return Producto.cantidad * Producto.precio;
});


//declara un array vacio
const historial = ref<string[]>([]);

watch(total, (nuevoTotal, viejoTotal) => {
   historial.value.push(`El total cambio: ${viejoTotal} => ${nuevoTotal}`);
}, { immediate: true });


//para que sirve los watch ?
//para observar los cambios de una variable y ejecutar una accion
//cuando esa variable cambie
//watch(queVariableObservar, queHacerCuandoCambia, opciones)
</script>