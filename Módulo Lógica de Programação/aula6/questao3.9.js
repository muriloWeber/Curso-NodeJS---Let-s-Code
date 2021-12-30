/*
Faça um programa que, dadas dois vetores de mesmo tamanho, crie um novo vetor com cada elemento igual a soma dos elementos do vetor 1 com os do vetor 2, na mesma posição.

Exemplo:

Dadas vetor1 = [1, 4, 5] e vetor2 = [2, 2, 3], então vetor3 = [1+2, 4+2, 5+3] = [3, 6, 8]
*/

const vetor1 = [1, 4, 5];
const vetor2 = [2, 2, 3];

let resultado = [];    

if (vetor1.length === vetor2.length) {
    for (let i = 0; i < vetor1.length; i++) {
        resultado.push(vetor1[i] + vetor2[i]);
    } 
} else {
        console.log("Os arrays não possuem o mesmo tamanho!");
}


console.log(`O resultado da soma dos vetores é ${resultado}.`);