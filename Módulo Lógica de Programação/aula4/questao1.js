/*
Faça um programa para perguntar 10 números e informar a soma total destes números.  
*/

const prompt = require("prompt-sync")({ sigint: true });

let soma = 0;

for (let vez = 1; vez <= 10; vez++) {
    let valor = parseInt(prompt("Digite um número: "));
    soma += valor;
}

console.log("A soma total dos números é " + soma);