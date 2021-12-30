/*
Faça a multiplicação entre dois números usando somente soma.
*/

const prompt = require("prompt-sync")({ sigint: true });

const valor1 = parseInt(prompt("Digite o multiplicando: "));
const valor2 = parseInt(prompt("Digite o multiplicador: "));
let produto = 0;

for (vez = 1; vez <= valor2; vez++) {
    produto += valor1;
}

console.log("O produto da multiplicação é " + produto);
