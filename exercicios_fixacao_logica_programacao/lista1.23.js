/*
Num dia de sol, você deseja medir a altura de um prédio, porém, a trena não é suficientemente longa. 
Assumindo que seja possível medir sua sombra e a do prédio no chão, e que você lembre da sua altura, 
faça um algoritmo para ler os dados necessários e calcular a altura do prédio.
*/

// Assumi que a sombra do prédio é de 10m

const sombraPredio = 15;
const minhaSombra = 2.5;
const minhaAltura = 1.72;

const alturaPredio = (sombraPredio * minhaAltura) / minhaSombra;

console.log(alturaPredio);

