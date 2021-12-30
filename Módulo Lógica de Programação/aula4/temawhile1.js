/*
Faça um algoritmo que peça para um usuário digitar um número e que só finaliza quando o usuário digitar 0.
*/

const prompt = require("prompt-sync")({ sigint: true });

let end = false;

do {
    let valor = parseInt(prompt("Digite um número que deseja ou zero para terminar: "));
    if (valor === 0){
        end = true
    }
} while (!end);