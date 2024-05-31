<template>
   <h1>Property Binding Class</h1>
   <br><br>
   <hr>
   <button class="btn" :class="{'btn-primary':isPrimary, 'btn-sm':isSmall}">Boton principal</button>

</template>

<script setup lang="ts">
import { ref } from 'vue';
let isPrimary = ref(true);
let isSmall = ref(true);


setTimeout(() => {
    isPrimary.value = false;
    isSmall.value = false;
}, 2000);


</script>