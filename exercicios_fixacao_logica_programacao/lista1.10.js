/*
Construa um algoritmo para calcular a distância entre dois pontos do plano cartesiano. Cada ponto é um par ordenado (x,y).
*/

const aX = 2;
const bX = 5;

const aY = 1;
const bY = 4;

const dist2pontos = Math.sqrt((Math.pow((bX - aX), 2) + (Math.pow((bY - aY),2))));

console.log(dist2pontos.toFixed(2));