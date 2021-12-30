/*
Considere dois arrays de números com tamanhos diferentes:

const x = [3,4,7,1,5];

const y = [4,3,1];

Crie um novo array com os elementos de x e y multiplicados elemento a elemento. O array resultante deverá ter o tamanho do menor dos arrays.
*/

const x = [3,4,7,1,5];

const y = [4,3,1];

const z = y.map(function (y, index) {return y * x[index]});

console.log(z);

