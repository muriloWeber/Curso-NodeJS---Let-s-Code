/**
Faça um programa que dadas duas listas de mesmo tamanho, imprima o produto escalar entre elas.

OBS: produto escalar é a soma do resultado da multiplicação entre o número na posição i da lista1 pelo número na posição i da lista2, 
com i variando de 0 ao tamanho da lista.
*/

const lista1 = [1, 4, 5];
const lista2 = [2, 2, 3];

function escalar (array1, array2) {
    const produto = [];
    const reducer = (a, b) => a + b;
    if (array1.length === array2.length) {
        for (let i = 0; i < array1.length; i++) {
            produto.push(array1[i] * array2[i]);
        } return produto.reduce(reducer);
    } else {
        return "Os arrays não possuem o mesmo tamanho!"   
    }
}

console.log(escalar(lista1, lista2));