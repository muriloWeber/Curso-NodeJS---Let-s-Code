/*
Peça ao usuário para digitar um número e imprima o fatorial de n.
*/

const prompt = require("prompt-sync")({ sigint: true });

const valor = parseInt(prompt("Digite o número que deseja obter o fatorial: "));

const arr = [];
let fatorial = 1;

for (let i = 0; i < valor; i++) {
    arr[i] = i + 1;
}

for (value of arr) {
    fatorial *= value;
}
console.log("O fatorial de " + valor + " é " + fatorial);