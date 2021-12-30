/*
Crie um código que leia 10 valores inteiros e:
• Encontre e mostre o maior valor
• Encontre e mostre o menor valor
• Calcule e mostre a média dos números lidos
*/

const prompt = require("prompt-sync")({ sigint: true });

let arr = [];
let soma = 0;

for (let vez = 1; vez <= 10; vez++) {
    let valor = parseInt(prompt("Digite um número: "));
    arr.push(valor);
    soma += valor
}

let maior = Math.max(...arr);
let menor = Math.min(...arr);
let media = soma / arr.length;
console.log("O maior número digitado foi " + maior);
console.log("O menor número digitado foi " + menor);
console.log("A média dos números digitados é " + media);
