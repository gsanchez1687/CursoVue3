<template>

<div class="container">
        <!--card-->
        <div class="card mt-5">
            <div class="card-header">
                <h1>{{ curso.nombre }}</h1>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{{ curso.precio }}</li>
                <li class="list-group-item">{{ curso.categoria }}</li>
                <li class="list-group-item"> <span class="badge text-bg-success">{{ curso.enInventario? 'En inventario':'Sin inventario' }}</span></li>
            </ul>
        </div>
        <!--fin del card-->
</div>

</template>

<script setup lang="ts">
import type { PropType } from 'vue';

type Curso = {
    nombre: string;
    precio: number;
    categoria: string;
    enInventario: boolean;
}

const props = defineProps({
    curso : Object as PropType<Curso>
});



</script>