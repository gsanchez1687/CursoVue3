//1.Tipo de datos primitivos en TypeScript
let variableNumerico: number;
let variableCadena: string;
let variableBooleana: boolean;

variableNumerico = 10;
variableCadena = "Hola mundo";
variableBooleana = true;

console.log(variableNumerico, variableCadena, variableBooleana);

//2.Funciones en TypeScript
function saludar(nombre: string): string{
    return "Hola " + nombre;
}

//3.promesas en typescript
async function leerDatos(){
    return await "Datos leidos";
}


//4.Tipo de objeto en función en TypeScript
function calcularAreaRectangulo(base: number, altura: number): number{
    return base * altura;
}
console.log(calcularAreaRectangulo(20, 20));



//5.propiedades opcionales en TypeScript
function mostrarnombre(persona:{nombre: string, edad?: number}){
console.log(persona.nombre, persona.edad);
}
mostrarnombre({nombre: "Juan"});


//6.tipos basados en uniones en TypeScript
function mostrarId(id: number | string){
    console.log(id);
}
mostrarId(10);
mostrarId("Hola!");


//7.alias de tipos en TypeScript
type persona = {
    nombre: string;
    apellido: string;
    edad: number;
    correo: string;
    direcion: string;
    username: string;
    password: string;
}
function mostrarPersona(persona: persona){
console.log(persona.nombre, persona.apellido, persona.edad, persona.correo, persona.direcion, persona.username, persona.password);
}
mostrarPersona({nombre: "Juan", apellido: "Perez", edad: 20, correo: "gsanchez1687@gmail.com", direcion: "Calle 123", username: "juanperez", password: "123456"});

//8.Interfaz en TypeScript
interface persona2{
    nombre: string;
    apellido: string;
    edad: number;
    correo: string;
    direcion: string;
    username: string;
    password: string;
}
function mostrarPersona2(persona: persona){
    console.log(persona.nombre, persona.apellido, persona.edad, persona.correo, persona.direcion, persona.username, persona.password);
}

mostrarPersona2({nombre: "Juan", apellido: "Perez", edad: 20, correo: "juan@gmail.com", direcion: "Bogotá", username: "juan01", password: "12345"});

//9.Diferencia entre type y interface en TypeScript
interface pokemones{
    tipo: string;
    nivel: number;
    altura: number;
    peso: number;
    sexo: string;
    categoria: string;
    habilidades: string;
    debilidades: string;
}
interface charmander extends pokemones{
    nombre: string;
}

function mostrarPokemon(){
    return {nombre: '', tipo: '', nivel: 0, altura: 0, peso: 0, sexo: '', categoria: '', habilidades: '', debilidades: ''};
}

const charmander: charmander = mostrarPokemon();
charmander.nombre = "Charmander";
charmander.tipo = "Fuego";
charmander.nivel = 5;
charmander.altura = 0.6;
charmander.peso = 8.5;
charmander.sexo = "Masculino";
charmander.categoria = "Lagartija";
charmander.habilidades = "Mar llamas";
charmander.debilidades = "Agua";
console.log(charmander);

//10. Aserciones de tipo en TypeScript
const nombre = document.getElementById("elementoInputText") as HTMLInputElement;
console.log(nombre.value);


//11. Enumeraciones en TypeScript
enum colores{
    Rojo,
    Verde,
    Azul
}
console.log(colores);
const colorFavorito = colores;
console.log(colorFavorito.Azul);