/*
Faça um programa que olhe todos os itens de um vetor e diga quantos deles são pares.
*/

const vetor = [78, 45, 3, 9, 10, 13];

let count = 0;

for (value of vetor) {
    if (value % 2 === 0) count++
}

console.log(`A quantidade de pares no vetor é ${count}.`);
