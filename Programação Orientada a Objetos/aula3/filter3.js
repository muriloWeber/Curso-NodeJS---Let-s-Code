/*
Dado um vetor numérico, filtre os elementos do vetor para conter apenas números pares.
*/

const vector = [1, -2, 3, 66, 77, 88];

const byPairs = x => x % 2 === 0;

const pairs = vector.filter(byPairs);

console.log(pairs);