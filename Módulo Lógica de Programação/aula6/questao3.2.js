/*
Faça um programa que peça as 4 notas bimestrais e mostre a média aritmética delas, usando vetores.
*/

const prompt = require("prompt-sync")({ sigint: true });

const notas = [];
let soma = 0;

for (let i = 0; i < 4; i++) {
    let nota = (parseInt(prompt(`Digite a nota da prova número ${i+1}: `)));
    notas.push(nota);
    soma += nota;
}

const media = soma / notas.length;

(isNaN(media)) ? console.log("As notas devem ser somente números. Inicie novamente.") : console.log(`A média das notas é ${media}`);

