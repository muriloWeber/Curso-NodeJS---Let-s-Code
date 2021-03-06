/*
Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. 
Caso sexo seja “F” e estado civil seja “CASADA”, solicitar o tempo de casada (anos).
*/

const prompt = require("prompt-sync")({ sigint: true });

const nome = prompt(`Digite seu nome: `);
const sexo = prompt(`Sexo (M/F): `).toUpperCase();
const estadoCivil = prompt(`Estado civil: `).toUpperCase();
const tempoCasada = (sexo === 'F' & estadoCivil === 'CASADA') ? prompt('Qual o tempo de casada (anos): ') : "";

// Embora o exercício não peça, decidi criar uma função construtora de objeto e chamá-la
// com os dados das varíaveis exixstentes:

const criarPessoa = (nome, sexo, estadoCivil, tempoCasada) => ({
    nome,
    sexo,
    estadoCivil,
    tempoCasada
})

console.log(criarPessoa(nome, sexo, estadoCivil, tempoCasada));