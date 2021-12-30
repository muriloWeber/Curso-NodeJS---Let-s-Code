/*
Dado um vetor numérico, filtre os elementos do vetor para conter apenas números pares.
*/

const x = [1, 2, 99, 56, 3, 5, 10, 4];

const pairs = x.filter(x => x % 2 === 0);

console.log(pairs);