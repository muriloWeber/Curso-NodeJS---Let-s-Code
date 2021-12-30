/*
Informe, de forma decrescente todos os pares entre N (número fornecido pelo usuário) e -N.
*/

const prompt = require("prompt-sync")({ sigint: true });

const valor = parseInt(prompt("Digite um número inteiro: "));

let vez = - valor

const arr = [];

for (; vez <= valor; vez++) {
    if (vez % 2 === 0){
        arr.push(vez);
    }
}

arr.sort((a, b) => a > b ? -1 : 1);

for (value of arr) {
    console.log(value);
}