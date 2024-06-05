<template>
   <h1>Property Binding Class</h1>
   <br><br>
   <hr>
   <button class="btn"  :class="classBotton" >Boton principal</button>
   <br>
   <div :style="textAlert">Alerta</div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
let isPrimary = ref(true);
let isSmall = ref(true);

const classBotton =ref({
    'btn-primary': true,
    'btn-secondary':false,
    'btn-block': true
});

//Property Binding con la directiva style
const textAlert = ref({
    backgroundColor: 'red',
    color: 'white',
    fontWeight: 'bold',
    height: '50px',
    padding: '10px',
});

setTimeout(() => {
    isPrimary.value = false;
    isSmall.value = false;
    classBotton.value['btn-primary'] = !classBotton.value['btn-primary'];
}, 2000);


</script>