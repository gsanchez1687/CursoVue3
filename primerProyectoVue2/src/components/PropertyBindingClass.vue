<template>
   <h1>Property Binding Class</h1>
   <br><br>
   <hr>
   
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