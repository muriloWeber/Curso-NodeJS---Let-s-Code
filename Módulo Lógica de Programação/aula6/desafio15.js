/*
Desafio 1 - Faça um programa que peça para o usuário digitar o nome e a idade de um aluno e o número de provas que esse aluno fez. Depois, 
o programa deve pedir para o usuário digitar as notas de cada prova do aluno. Ao final o programa deve imprimir uma lista contendo:

a. Nome do aluno na posição 0;

b. Idade do aluno na posição 1;

c. Uma lista com todas as notas na posição 2;

d. A média do aluno na posição 3;

e. True ou False, caso a média seja maior que 5 ou não, na posição 4.

Dica: Use o que você fez nos exercícios anteriores para criar esse programa.
*/

const prompt = require("prompt-sync")({ sigint: true });

const nome = prompt("Digite seu nome: ");
const idade = prompt("Digite sua idade: ");
const qtdeProvas = parseInt(prompt("Digite a quantidade de provas realizadas: "));
const notas = [];

for (let i = 0; i < qtdeProvas; i++) {
    notas.push(parseFloat(prompt(`Digite a nota da prova número ${i+1}: `)));
}

const media = (notas.reduce((somatoria, item) => somatoria + item) / qtdeProvas);
const aprovado = (media > 5) ? true : false;

const dossie = [nome, idade, notas, media, aprovado];

console.log(dossie);