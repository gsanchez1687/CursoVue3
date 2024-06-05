<template>
    <div class="container">
        <h1>Computed Reactive</h1>
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
    </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';

const Producto = reactive({
    nombre: 'Curso de Vue 3',
    cantidad: 1,
    precio: 10
});

let total = computed(() => {
    console.log('Total');
    return Producto.cantidad * Producto.precio;
});
</script>