<template>
    <div class="container">
        <h1>Detalle de la tarea</h1>
        <div v-if="cargando == true" class="alert alert-warning" role="alert">
            Cargando
        </div>
        <div class="row">
            <div v-for="data in admin" :key="data.id" class="col-md-3">
                <!--card-->
                <div class="card">
                    <img src="https://picsum.photos/id/200/200" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ data?.id }} - {{ data?.title }}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><span class="badge rounded-pill text-bg-primary">{{ data?.completed ? 'Completado' : 'No completado'  }}</span></li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
                <!--fin del card-->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { admin } from '@/types/type';
//Import onMounted
import { onMounted, ref } from 'vue';

const admin = ref<admin | null>(null)
const cargando = ref(false);

onMounted(async () => {
    cargando.value = true;
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        admin.value = await res.json();
    } catch (error) {
        error.value = true;
    }finally{
        cargando.value = false;
    }
});

</script>
