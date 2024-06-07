<template>
  <main>
    <!--<CursoDetalle :curso="curso" ></CursoDetalle>-->
    <Admin></Admin>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Admin from './components/Admin.vue';

const curso = ref({
  nombre: 'Curso de Vue 3',
  precio: 100,
  categoria: 'Programación',
  enInventario: true
});


</script>