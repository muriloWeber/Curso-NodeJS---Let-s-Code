/*
Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e mostrar :
a. A menor altura do grupo;
b. A maior altura do grupo;
*/

const prompt = require("prompt-sync")({ sigint: true });

const alturas = [];

for(i = 0; i < 15; i++) {
    alturas.push(parseFloat(prompt(`Digite sua altura (metros): `)));
}

const menorAltura = Math.max(...alturas);

const maiorAltura = Math.min(...alturas);

console.log(menorAltura);
console.log(maiorAltura);