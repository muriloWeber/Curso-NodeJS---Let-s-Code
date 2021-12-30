/*
Dado um vetor numérico, filtre os elementos do vetor para conter apenas elementos maiores do que 5.
*/

const vector = [55, 89, 5, 4, 3, 2];

const byFive = x => x > 5;

const biggerThan5 = vector.filter(byFive);

console.log(biggerThan5);