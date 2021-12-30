/*
Faça um programa, usando loops, que peça para um usuário digitar um número e que só finaliza quando o usuário digitar 0. 
Ao final imprima a soma de todos os números digitados
*/

const prompt = require("prompt-sync")({ sigint: true });

let arr = [];
let end = false;
let resultado = 0;
do {
    let valor = parseInt(prompt("Digite um número que deseja somar ou zero para terminar: "));
    if (valor === 0){
        end = true
    } else {
        arr.push(valor);
    }
} while (!end);

for (value of arr) {
    resultado += value
}

console.log("O resultado da soma é " + resultado);
