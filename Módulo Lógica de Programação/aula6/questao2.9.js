/*
Faça um programa que pede para o usuário digitar 5 números e, ao final, imprime uma lista com os 5 números digitados pelo usuário 
(sem converter os números para int ou float).

Exemplo: Se o usuário digitar 1, 5, 2, 3, 6, o programa deve imprimir a lista ['1','5','2','3','6']
*/

const prompt = require("prompt-sync")({ sigint: true });

let count = 0;
const lista = [];

while (count < 5) {
    lista.push(prompt("Digite um número: "));
    count++
}

console.log(lista);