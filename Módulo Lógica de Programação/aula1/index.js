console.log("Olá mundo!");

// TIPOS PRIMITIVOS
let undefined1;
var numero1 = 1;
let texto1 = 'texto';
let booleano1 = true;

const pi = 3.14;

/*
TIPOS
COMPLEXOS
*/
function funcao() {
    console.log("funcao");
}
let array = [1, 2, 3];
let objeto = {a: 1, b: 2};

/*Depois de instalar o npm prompt-sync pelo terminal
use a linha abaixo para fazer a requisição*/

const prompt = require("prompt-sync")({ sigint: true });
const valor1 = parseFloat(prompt("digite um número: "));
const valor2 = parseFloat(prompt("digite um número: "));

const media1 = (valor1 + valor2) / 2.0;

console.log(media1)

//Bracket Pair Colorizer 2