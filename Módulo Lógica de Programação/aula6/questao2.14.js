/*
Faça um programa que sorteie 10 números entre 0 e 100 e imprima:

a. o maior número sorteado;

b. o menor número sorteado;

c. a média dos números sorteados;

d. a soma dos números sorteados.
*/

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const lista = [];

for (let i = 0; i < 10; i++) {
    lista.push(randomIntFromInterval(0, 100));
}

console.log(lista);
console.log(`O maior número sorteado é ${Math.max(...lista)}`);
console.log(`O menor número sorteado é ${Math.min(...lista)}`);
console.log(`A média dos números sorteados é ${((lista.reduce((somatoria, item) => somatoria + item)) / 10)}`);
console.log(`A média dos números sorteados é ${(lista.reduce((somatoria, item) => somatoria + item))}`);