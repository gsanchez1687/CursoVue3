<template>
<div class="container">
    <h1>Directiva if</h1>
    <div v-if="registrado" class="alert alert-info">
        <h1>Bienvenido</h1>
    </div>
    <div v-else class="alert alert-success">
      <h1>Acceder al sistema</h1>
    </div>
</div>
</template>

<script setup lang="ts">

const registrado = false;

</script>