/**
Sorteie uma lista de 10 números e imprima:

a. uma lista com os 4 primeiros números;

b. uma lista com os 5 últimos números;

c. uma lista contendo apenas os elementos das posições pares;

d. uma lista contendo apenas os elementos das posições ímpares;

e. a lista inversa da lista sorteada (isto é, uma lista que começa com o último elemento da lista sorteada e termina com o primeiro);

f. uma lista inversa dos 5 primeiros números;

g. uma lista inversa dos 5 últimos números.
*/

const lista = [];

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 0; i < 10; i++) {
    lista.push(randomIntFromInterval(1, 1000));
}

const listaA = [...lista];
const listaB = [...lista];
const listaC = [];
const listaD = [];
const listaE = [...lista];
const listaF = [...lista];
const listaG = [...lista];

for (value of lista) {
    if (value % 2 === 0) {
        listaC.push(value);
    }   
}

for (value of lista) {
    if (value % 2 != 0) {
        listaD.push(value);
    }
}

console.log(lista);
console.log(`A - ${listaA.splice(0, 4)}`);
console.log(`B - ${listaB.splice(5, 5)}`);
console.log(`C - ${listaC}`);
console.log(`D - ${listaD}`);
console.log(`E - ${listaE.reverse()}`);
console.log(`F - ${listaF.reverse(listaF.splice(5, 5))}`);
console.log(`G - ${listaG.reverse(listaG.splice(0, 5))}`);