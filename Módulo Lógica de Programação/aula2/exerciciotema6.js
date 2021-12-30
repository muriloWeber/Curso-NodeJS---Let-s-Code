/*
Faça um algoritmo que receba três números inteiros e mostre 
o maior.deles. Considere que os números sempre serão diferentes
*/

const prompt = require("prompt-sync")({ sigint: true });

const valor1 = parseInt(prompt("Digite um número: "));
const valor2 = parseInt(prompt("Digite um número diferente do anterior: "));
const valor3 = parseInt(prompt("Digite mais um número diferente dos anteriores: "));

console.log(Math.max(valor1, valor2, valor3));