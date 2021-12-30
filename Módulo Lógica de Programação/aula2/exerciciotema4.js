/*
Enunciado
Escreva um código que recebe 2 números de entrada
(utilize prompt()) e realize todas as operações aritméticas 
básicas(+, -, *, /), no final exiba o resultado das 4 operações 
no console.
 */

const prompt = require("prompt-sync")({ sigint: true });

const valor1 = parseFloat(prompt("Digite um número: "));
const valor2 = parseFloat(prompt("Digite um número: "));

const adicao = valor1 + valor2;
console.log("O resultado da adição dos valores é: " + adicao);

const subtracao = valor1 - valor2;
console.log("O resultado da subtração dos valores é: " + subtracao);

const multiplicacao = valor1 * valor2;
console.log("O resultado da multiplicação dos valores é: " + multiplicacao);

const divisao = valor1 / valor2;
console.log("O resultado da divisão dos valores é: " + divisao);
