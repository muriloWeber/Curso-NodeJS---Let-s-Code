/*
Faça um programa que lê uma indeterminada quantidade de números até que o 0 (zero) seja digitado.
Ao final, mostre os três menores de forma decrescente.
*/

const prompt = require("prompt-sync")({ sigint: true });

const arr = [];
let end = false;

do {
    let valor = parseInt(prompt("Digite um número que deseja ou zero para terminar: "));
    if (valor === 0){
        end = true
    } else {
        arr.push(valor);
    }
} while (!end);

arr.sort((a, b) => a - b);

console.log("Os três menores numeros em ordem decrescente são: " + arr[2] + ", " + arr[1] + " e " + arr[0] + ".");