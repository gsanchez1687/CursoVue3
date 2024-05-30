var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//1.Tipo de datos primitivos en TypeScript
var variableNumerico;
var variableCadena;
var variableBooleana;
variableNumerico = 10;
variableCadena = "Hola mundo";
variableBooleana = true;
console.log(variableNumerico, variableCadena, variableBooleana);
//2.Funciones en TypeScript
function saludar(nombre) {
    return "Hola " + nombre;
}
//3.promesas en typescript
function leerDatos() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, "Datos leidos"];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
//4.Tipo de objeto en función en TypeScript
function calcularAreaRectangulo(base, altura) {
    return base * altura;
}
console.log(calcularAreaRectangulo(20, 20));
//5.propiedades opcionales en TypeScript
function mostrarnombre(persona) {
    console.log(persona.nombre, persona.edad);
}
mostrarnombre({ nombre: "Juan" });
//6.tipos basados en uniones en TypeScript
function mostrarId(id) {
    console.log(id);
}
mostrarId(10);
mostrarId("Hola!");
function mostrarPersona(persona) {
    console.log(persona.nombre, persona.apellido, persona.edad, persona.correo, persona.direcion, persona.username, persona.password);
}
mostrarPersona({ nombre: "Juan", apellido: "Perez", edad: 20, correo: "gsanchez1687@gmail.com", direcion: "Calle 123", username: "juanperez", password: "123456" });
function mostrarPersona2(persona) {
    console.log(persona.nombre, persona.apellido, persona.edad, persona.correo, persona.direcion, persona.username, persona.password);
}
mostrarPersona2({ nombre: "Juan", apellido: "Perez", edad: 20, correo: "juan@gmail.com", direcion: "Bogotá", username: "juan01", password: "12345" });
function mostrarPokemon() {
    return { nombre: '', tipo: '', nivel: 0, altura: 0, peso: 0, sexo: '', categoria: '', habilidades: '', debilidades: '' };
}
var charmander = mostrarPokemon();
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
var nombre = document.getElementById("elementoInputText");
console.log(nombre.value);
//11. Enumeraciones en TypeScript
var colores;
(function (colores) {
    colores[colores["Rojo"] = 0] = "Rojo";
    colores[colores["Verde"] = 1] = "Verde";
    colores[colores["Azul"] = 2] = "Azul";
})(colores || (colores = {}));
console.log(colores);
var colorFavorito = colores;
console.log(colorFavorito.Azul);
