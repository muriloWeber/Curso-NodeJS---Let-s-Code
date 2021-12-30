/*
Peça ao usuário para digitar um número n e some todos os números de 1 a n.
*/

const prompt = require("prompt-sync")({ sigint: true });

const arr = [];
const valor = parseInt(prompt("Digite um número para obter a soma de 1 até ele: "));
let resultado = 0;

for (i = 0; i < valor; i++) {
    arr[i] = i + 1;
}

for (value of arr) {
    resultado += value;
}

console.log(resultado);