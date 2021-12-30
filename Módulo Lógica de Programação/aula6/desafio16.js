/*
Desafio 2 - Faça um programa como o do item anterior, porém que imprima a média sem considerar a maior e menor nota do aluno 
(nesse caso o número de provas precisa ser obrigatoriamente maior que dois).

Dica: crie uma cópia com a lista de todas as notas antes de fazer a média.
*/

const prompt = require("prompt-sync")({ sigint: true });

const nome = prompt("Digite seu nome: ");
const idade = prompt("Digite sua idade: ");
let qtdeProvas = parseInt(prompt("Digite a quantidade de provas realizadas (mais que duas): "));

while (qtdeProvas < 3) {
    console.log("Quantidade de provas inválida");
    qtdeProvas = parseInt(prompt("Digite a quantidade de provas realizadas (mais que duas): "));
}

let notas = [];

for (let i = 0; i < qtdeProvas; i++) {
    notas.push(parseFloat(prompt(`Digite a nota da prova número ${i+1}: `)));
}

const copiaNotas = [...notas];
const notaMax = notas.splice(notas.indexOf(Math.max(...notas)), 1);
const notaMin = notas.splice(notas.indexOf(Math.min(...notas)), 1);
const media = (notas.reduce((somatoria, item) => somatoria + item) / (qtdeProvas - 2));
const aprovado = (media > 5) ? true : false;

const dossie = [nome, idade, copiaNotas, media, aprovado];

console.log(dossie);