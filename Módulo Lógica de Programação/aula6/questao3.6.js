/*
Faça um programa que imprima o maior número de um vetor.
*/

const vetor = [5, 6, 9, 2, 1];

let max = 0;

for (value of vetor) {
    if (value > max) max = value;
}

console.log(max);
