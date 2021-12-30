/*
Faça um vetor filtrado somente com as pessoas que podem assistir o filme The Matrix (maiores de 18 anos).
*/

const people = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

const byAge = x => x.age > 18;

const olderThan18 = people.filter(byAge);

console.log(olderThan18);
