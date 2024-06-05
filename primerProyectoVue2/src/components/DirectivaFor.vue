<template>

    <div class="container">
        <ul class="list-group">
            <li v-for="data in lista" :key="data.id" class="list-group-item list-group-item-action">
                {{ data.id +' . '+ data.nombre +' - '+ data.tipo }} <img width="100px" :src="data.imagen" alt="">
            </li>
        </ul>

        <ul class="list-group">
            <li v-for="(clave,valor) in lista" class="list-group-item list-group-item-action">
                {{ clave }} : {{ valor }}
            </li>
        </ul>

        <ul class="list-group">
            <li v-for="numero in 100" class="list-group-item list-group-item-action">
               {{ numero }}
            </li>
        </ul>
    </div>

</template>

<script setup lang="ts">

type Pokemones = {
    id: number;
    nombre: string;
    tipo: string;
    imagen: string;
}

let lista: Pokemones[] =[
{
    id: 1,
    nombre: 'Pikachu',
    tipo: 'Electrico',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
}, {
    id: 2,
    nombre: 'Charmander',
    tipo: 'Fuego',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
}, {
    id: 3,
    nombre: 'Squirtle',
    tipo: 'Agua',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png'
}, {
    id: 4,
    nombre: 'Bulbasaur',
    tipo: 'Planta',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
}, {
    id: 5,
    nombre: 'Jigglypuff',
    tipo: 'Normal',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png'
}, {
    id: 6,
    nombre: 'Meowth',
    tipo: 'Normal',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png'
}, {
    id: 7,
    nombre: 'Psyduck',
    tipo: 'Agua',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png'
}, {
    id: 8,
    nombre: 'Snorlax',
    tipo: 'Normal',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png'
}, {
    id: 9,
    nombre: 'Mewtwo',
    tipo: 'Psiquico',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png'
}, {
    id: 10,
    nombre: 'Gengar',
    tipo: 'Fantasma',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png'
}];

</script>