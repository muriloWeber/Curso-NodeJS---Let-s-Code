/*
Faça um programa que dados dois vetores de mesmo tamanho, imprima o produto escalar entre eles.

OBS: produto escalar é a soma do resultado da multiplicação entre o número na posição i do vetor1 pelo número na posição i do vetor2.
*/

const lista1 = [1, 4, 5];
const lista2 = [2, 2, 3];

const produto = [];
const reducer = (a, b) => a + b;

if (lista1.length === lista2.length) {
    for (let i = 0; i < lista1.length; i++) {
        produto.push(lista1[i] * lista2[i]);
    }
} else {
    console.log("Os arrays não possuem o mesmo tamanho!");
}

const escalar = produto.reduce(reducer);

console.log(escalar);