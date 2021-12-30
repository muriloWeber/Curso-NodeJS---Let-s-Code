/**
Faça um programa que sorteia 10 números entre 0 e 100 e conte quantos números sorteados são maiores que 50.
*/

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let count = 0;
const lista = [];

for (let i = 0; i < 10; i++) {
    lista.push(randomIntFromInterval(0, 100));
}

for (value of lista) {
    if (value > 50) {
        count++
    }
}

console.log(count);