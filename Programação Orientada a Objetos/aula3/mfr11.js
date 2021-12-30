/*
Dada uma matriz numérica quadrada, utilize o reduce para somar a sua diagonal principal.
*/

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

const diagPrincipal = matrix.reduce(function (start, item, i) {return start + item[i]}, 0);

console.log(diagPrincipal);