<template>
    <div class="container">
        <h1>Computed</h1>
        <div class="row">
            <div class="mb-3">
                <label for="cantidad" class="form-label">Cantidad</label>
                <input type="number" class="form-control" id="cantidad" v-model="cantidad" />
            </div>
        </div>
        <div class="row">
            <div class="mb-3">
                <label for="cantidad" class="form-label">Precio</label>
                <input type="number" class="form-control" id="cantidad" v-model="precio" />
            </div>
        </div>
        <div class="row">
            <h3>Total: ${{ total }}</h3>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

let nombre = ref('Curso de Vue 3');
let cantidad = ref(1);
let precio = ref(10);

let total = computed(() => {
    return cantidad.value * precio.value;
});
</script>