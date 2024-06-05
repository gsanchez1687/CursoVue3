<template>
  <main>
    <CursoDetalle :nombre="curso.nombre" :precio="curso.precio" :categoria="curso.categoria" :en-inventario="curso.enInventario" ></CursoDetalle>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CursoDetalle from './components/CursoDetalle.vue';

const curso = ref({
  nombre: 'Curso de Vue 3',
  precio: 100,
  categoria: 'Programación',
  enInventario: true
});


</script>