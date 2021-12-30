/*
Construa um programa que receba um numero e verifique se ele é
par ou impar.
*/

const prompt = require("prompt-sync")({ sigint: true });

const num = parseInt(prompt("Digite um número: "));

if(num % 2 === 0) {
    console.log("Par");
} else{
    console.log("Impar");
}