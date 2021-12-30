/*
Dado um vetor de vetores, transforme-me o em vetor um único que contém todos os elementos:

[["1", "2", "3"],[true], [4, 5, 6]] -> ["1", "2", "3", true, 4, 5, 6]
*/

const vetor1 = [["1", "2", "3"],[true], [4, 5, 6]];

const vetUnico = vetor1.reduce((a, b) => a.concat(b), []);

console.log(vetUnico);