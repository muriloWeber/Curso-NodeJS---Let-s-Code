/**
Agora usando a função max() faça um programa que imprima os três maiores números de uma lista.

Dica: Use o método próprio de listas .remove().
*/

const arr = [1,2,3,4,5,66,7,8,9,6];

function remove3Max (array) {
    array.sort((a, b) => b - a);
    return array.splice(array.indexOf(Math.max(...array)),3);
}

console.log(remove3Max(arr));

