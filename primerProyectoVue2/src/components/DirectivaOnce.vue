<template>
    <div class="container">
        <h1>Directiva else if</h1>
        <div class="alert alert-success" role="alert">
            <p>Bienvenido {{ usuario.nombre  }}</p>
            <p>{{ usuario.rol }}</p>
        </div>
        <div v-once class="alert alert-primary" role="alert">
            <p>Bienvenido {{ usuario.nombre }}</p>
            <p>{{ usuario.rol }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
type Usuario = {
    id: number;
    rol: string;
    nombre: string;
    edad: number;
    correo: string;
}
let usuario = ref<Usuario>({
id: 1,
rol: 'admin',
nombre: 'Guillermo Enrique Sanchez Vivas',
edad: 25,
correo: 'gsanchez1687@gmail.com'
});

setTimeout(() => {
    usuario.value.nombre = 'Enrique';
}, 2000);

</script>