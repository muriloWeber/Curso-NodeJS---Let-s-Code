/*
Construa um programa que receba um numero e verifique se ele é
negativo ou positivo.
*/

const prompt = require("prompt-sync")({ sigint: true });

const valor1 = parseInt(prompt("digite um número: ")); 

if (valor1 >= 0){
    console.log("O número digitado é positivo");
} else {
    console.log("O número digitado é negativo")
}