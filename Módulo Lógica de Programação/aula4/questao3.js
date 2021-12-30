/*
Faça um programa para somar os números compreendidos entre 1 e 1000.
*/

let arr = [];
let soma = 0;

for (let i = 0; i <= 999; i++) {
    arr[i] = i + 1;
}

for (value of arr) {
    soma += value;
}

console.log(soma);