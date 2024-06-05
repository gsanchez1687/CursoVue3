<template>
    <div class="container">
        <h1>Directiva else if</h1>
        <div v-if="usuario.rol === 'admin' " class="alert alert-success" role="alert">
            <p>Bienvenido {{ usuario.nombre  }}</p>
            <p>{{ usuario.rol }}</p>
        </div>
        <div v-else-if="usuario.rol === 'gerente'" class="alert alert-primary" role="alert">
            <p>Bienvenido {{ usuario.nombre }}</p>
            <p>{{ usuario.rol }}</p>
        </div>
        <div v-else-if="usuario.rol === 'jefe'" class="alert alert-dark" role="alert">
            <p>Bienvenido {{ usuario.nombre }}</p>
            <p>{{ usuario.rol }}</p>
        </div>
        <div v-else class="alert alert-warning" role="alert">
            <p>Bienvenido Invitado {{ usuario.nombre }}</p>
            <p>Invitado</p>
        </div>
        <h1>Directiva v-show</h1>
        <div v-show="usuario.rol === 'admin'" class="alert alert-success" role="alert" >
            <ul>
                <li>{{ usuario.id }}</li>
                <li>{{ usuario.rol }}</li>
                <li>{{ usuario.nombre }}</li>
                <li>{{ usuario.edad }}</li>
                <li>{{ usuario.correo }}</li>
            </ul>
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

</script>