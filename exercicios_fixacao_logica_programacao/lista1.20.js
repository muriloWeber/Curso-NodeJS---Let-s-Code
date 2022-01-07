/*
Uma confecção produz X blusas de lã e para isto gasta uma certa quantidade de novelos. 
Faça um algoritmo para calcular quantos novelos de lã ela gasta por blusa.
*/

// Defini que a cada 100 blusas produzidas são gastos 238 novelos

function novelosPorBlusa (numeroDeBlusas) {
    let novelosPorBlusa = 238 / 100;
    let totalNovelosPorBlusa = novelosPorBlusa * numeroDeBlusas;

    return totalNovelosPorBlusa;
}

console.log(novelosPorBlusa(78));

