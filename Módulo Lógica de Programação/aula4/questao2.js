/*
Faça um programa que escreva todos os números múltiplos de 7 entre 1 e N, 
sendo N um valor introduzido pelo usuário. Por exemplos: 7, 14, 21, 28, 35.
*/

const prompt = require("prompt-sync")({ sigint: true });

const valor = parseInt(prompt("Digite um número inteiro: "));

let vez = 1

for (; vez <= valor; vez++) {
    if (vez % 7 === 0){
        console.log(vez);
    }
}
