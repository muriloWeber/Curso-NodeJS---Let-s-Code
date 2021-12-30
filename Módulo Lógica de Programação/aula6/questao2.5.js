/**
Faça um programa que imprima o maior número de uma lista, sem usar a função max().
*/

const arr = [1,2,3,4,5,66,7,8,9,6];

let max = 0;

for (value of arr) {
    if (value > max) {
        max = value;
    }
}

console.log(max);