<template>
    <div class="container">
        <h1>Reactive</h1>
        <ul class="list-group">
            <li class="list-group-item" aria-disabled="true">{{ empresa.nombre }}</li>
            <li class="list-group-item" aria-disabled="true">{{ empresa.nit }}</li>
            <li class="list-group-item" aria-disabled="true">{{ empresa.direccion.calle }} - {{ empresa.direccion.ciudad }} - {{ empresa.direccion.pais }}</li>
        </ul>
        <h1>Reactivida en una Destructuracion</h1>
        <ul class="list-group">
            <li class="list-group-item" aria-disabled="true">{{ empresa.nombre }}</li>
            <li class="list-group-item" aria-disabled="true">{{ empresa.nit }}</li>
            <li class="list-group-item" aria-disabled="true">{{ empresa.direccion.calle }} - {{ empresa.direccion.ciudad }} - {{ empresa.direccion.pais }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue';
type Direccion = {
    calle: string;
    ciudad: string;
    pais: string;
}
type Empresas = {
    id:number
    nombre: string;
    nit: string;
    phone: string;
    email: string;
    empleados: number;
    direccion:Direccion;
}
let empresa: Empresas = reactive({
    id: 1,
    nombre: 'Empresa 1',
    nit: '123456',
    phone: '123456',
    email: 'gsanchez1687@gmail.com',
    empleados: 10,
    direccion: {
        calle: 'Calle 123',
        ciudad: 'Bobogtá',
        pais: 'Colombia'
    }
});

let { nombre, nit, phone, email, empleados } = toRefs(empresa);

setTimeout(() => {
    empresa.nombre = 'Empresa 2';
    empresa.nit = '654321';
    empresa.direccion.calle = 'Calle 321';
}, 3000);

setTimeout(() => {
    empresa.value.nombre = 'Empresa 3';
    empresa.value.nit = '987654';
    empresa.value.direccion.calle = 'Calle 789';
}, 5000);
</script>