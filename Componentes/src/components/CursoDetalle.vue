<template>

<div class="container">
        <!--card-->
        <div class="card mt-5">
            <div class="card-header">
                <h1>{{ props.nombre }}</h1>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{{ props.precio }}</li>
                <li class="list-group-item">{{ props.categoria }}</li>
                <li class="list-group-item"> <span class="badge text-bg-success">{{ props.enInventario? 'En inventario':'Sin inventario' }}</span></li>
            </ul>
        </div>
        <!--fin del card-->
</div>

</template>

<script setup lang="ts">

const props = defineProps(['nombre', 'precio', 'categoria', 'enInventario']);


</script>