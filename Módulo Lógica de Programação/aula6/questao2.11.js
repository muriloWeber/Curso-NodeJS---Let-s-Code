/*
Faça um programa que peça as 4 notas bimestrais e mostre a média aritmética delas, usando listas.
*/

const prompt = require("prompt-sync")({ sigint: true });

const notas = []
let soma = 0;

for (let i = 0; i < 4; i++) {
    notas.push(parseFloat(prompt("Digite a nota bimestral: ")));
} for (value of notas) {
    soma += value;
}

const media = soma / notas.length;

console.log(`A média final foi ${media}`);