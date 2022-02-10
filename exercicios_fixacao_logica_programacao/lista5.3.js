/*
Escreva um programa para ler 2 valores, repetidamente, e se o segundo valor informado for ZERO, 
deve ser lido um novo valor, ou seja, para o segundo valor não pode ser aceito o valor zero. 
O programa deverá imprimir o resultado da divisão do primeiro valor pelo segundo valor lido. 
Após terem sido lidos os dois valores e calculada a divisão, o usuário deverá ser questionado 
se quer continuar o programa.
*/

const prompt = require("prompt-sync")({ sigint: true });

let end = false;

do {
    let primeiroValor = parseFloat(prompt(`Digite um valor: `));
    let segundoValor = parseFloat(prompt(`Digite mais um valor: `));
    if(segundoValor === 0) segundoValor = parseInt(prompt(`O valor não pode ser zero. Digite novamente: `));
    
    let resultadoDivisao = (primeiroValor / segundoValor).toFixed(2);

    console.log(`O resultado da divisão entre os valores digitados é: ${resultadoDivisao}`);

    let userChoice = prompt(`Deseja sair? S/N `).toLowerCase();
    if(userChoice === 's') end = true;

} while (!end)