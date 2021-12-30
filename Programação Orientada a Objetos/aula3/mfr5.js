/*
Dado um array numérico x, crie um novo array com os elementos do array x que são maiores do que 5.
*/

const x = [9, 55, 1, -4, 10, 3, 0];

const biggerThan5 = x.filter(x => x > 5);

console.log(biggerThan5);